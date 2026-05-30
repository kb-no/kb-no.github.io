"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const CONTACT_EMAIL = "sample@example.com";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-xl mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold text-[#1A1A2E] mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t.contact.heading}
        </motion.h2>

        <motion.p
          className="text-[#1A1A2E]/60 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {t.contact.subheading}
        </motion.p>

        <motion.a
          href={`mailto:${CONTACT_EMAIL}`}
          className="inline-block bg-[#2E86AB] text-white px-10 py-4 rounded-full font-medium hover:bg-[#1a6b8a] transition-colors shadow-md text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {t.contact.cta}
        </motion.a>

        <motion.p
          className="mt-6 text-sm text-[#1A1A2E]/40"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          {CONTACT_EMAIL}
        </motion.p>
      </div>
    </section>
  );
}
