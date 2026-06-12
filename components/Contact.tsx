"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { siteConfig } from "@/config/site";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 px-6 bg-[#F0FAF4]">
      <div className="max-w-xl mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold text-[#1A2E1A] mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t.contact.heading}
        </motion.h2>

        <motion.p
          className="text-[#1A2E1A]/60 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {t.contact.subheading}
        </motion.p>

        <motion.a
          href={`mailto:${siteConfig.email}`}
          className="inline-block bg-[#27AE60] text-white px-10 py-4 rounded-full font-medium hover:bg-[#1E8449] transition-colors shadow-md text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {t.contact.cta}
        </motion.a>

        <motion.p
          className="mt-6 text-sm text-[#1A2E1A]/40"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          {siteConfig.email}
        </motion.p>
      </div>
    </section>
  );
}
