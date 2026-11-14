"use client";

import { useRef, useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

// This public ID is embedded at build time; it is not an API key.
const formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID?.trim();
const endpoint = formId && /^[a-zA-Z0-9]+$/.test(formId)
  ? `https://formspree.io/f/${formId}`
  : undefined;
const fieldClass = "mt-2 w-full rounded-xl border border-[#55745F] bg-white px-4 py-3 text-[#1A2E1A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E8449]";

type Status = "idle" | "sending" | "success" | "error" | "limited" | "uncertain";

export default function Contact() {
  const { t } = useLanguage();
  const copy = t.contact;
  const [status, setStatus] = useState<Status>("idle");
  const inFlight = useRef(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!endpoint || inFlight.current) return;
    const form = event.currentTarget;
    for (const name of ["name", "message"]) {
      const field = form.elements.namedItem(name) as HTMLInputElement | HTMLTextAreaElement;
      field.setCustomValidity(field.value.trim() ? "" : copy.requiredError);
    }
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    inFlight.current = true;
    setStatus("sending");
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 20000);
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
        signal: controller.signal,
      });
      if (response.ok) {
        form.reset();
        setStatus("success");
      } else {
        setStatus(response.status === 429 ? "limited" : "error");
      }
    } catch {
      // A lost response does not prove that the service failed to receive it.
      setStatus("uncertain");
    } finally {
      window.clearTimeout(timeout);
      inFlight.current = false;
    }
  }

  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-24 px-6 bg-[#F0FAF4]">
      <div className="max-w-xl mx-auto text-center">
        <motion.h2 id="contact-heading" className="text-3xl font-bold text-[#1A2E1A] mb-4"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}>
          {copy.heading}
        </motion.h2>
        <p className="text-[#425C4B] mb-10">{copy.subheading}</p>

        {!endpoint && <p className="mb-6 text-[#425C4B]" role="status">{copy.unavailable}</p>}
        <form action={endpoint} method="POST" onSubmit={handleSubmit}
          aria-describedby="contact-privacy" aria-busy={status === "sending"} className="text-left">
          <fieldset disabled={!endpoint || status === "sending"} className="space-y-6 disabled:opacity-70">
            <legend className="sr-only">{copy.heading}</legend>
            <p className="text-sm text-[#425C4B]">{copy.requiredNote}</p>
            <div>
              <label htmlFor="contact-name" className="font-medium text-[#1A2E1A]">{copy.name}</label>
              <input id="contact-name" name="name" autoComplete="name" required maxLength={100}
                onInput={(event) => event.currentTarget.setCustomValidity("")} className={fieldClass} />
            </div>
            <div>
              <label htmlFor="contact-email" className="font-medium text-[#1A2E1A]">{copy.email}</label>
              <input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={254} className={fieldClass} />
            </div>
            <div>
              <label htmlFor="contact-message" className="font-medium text-[#1A2E1A]">{copy.message}</label>
              <textarea id="contact-message" name="message" required maxLength={5000} rows={6}
                aria-describedby="contact-message-help"
                onInput={(event) => event.currentTarget.setCustomValidity("")} className={`${fieldClass} resize-y`} />
              <p id="contact-message-help" className="mt-2 text-sm text-[#425C4B]">{copy.messageHelp}</p>
            </div>
            <div hidden aria-hidden="true">
              <label htmlFor="contact-gotcha">Leave this field empty</label>
              <input id="contact-gotcha" name="_gotcha" tabIndex={-1} autoComplete="off" />
            </div>
            <p id="contact-privacy" className="text-sm leading-relaxed text-[#425C4B]">
              {copy.privacy}{" "}
              <a href="https://formspree.io/legal/privacy-policy/" target="_blank" rel="noopener noreferrer"
                className="underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2">
                {copy.privacyLink}
              </a>
            </p>
            <button type="submit" className="w-full bg-[#1E8449] text-white px-8 py-4 rounded-full font-medium hover:bg-[#176638] transition-colors shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1E8449] disabled:cursor-not-allowed">
              {status === "sending" ? copy.sending : copy.cta}
            </button>
          </fieldset>
          <p role="status" aria-live="polite" aria-atomic="true" className="mt-5 text-[#1A2E1A]">
            {status === "sending" ? copy.sending : status === "success" ? copy.success : ""}
          </p>
          <p role="alert" aria-atomic="true" className="mt-2 text-red-800">
            {status === "error" ? copy.error : status === "limited" ? copy.limited : status === "uncertain" ? copy.uncertain : ""}
          </p>
        </form>
      </div>
    </section>
  );
}
