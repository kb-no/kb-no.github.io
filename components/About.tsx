"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-[#1A2E1A] mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t.about.heading}
        </motion.h2>

        <motion.div
          className="flex gap-3 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="px-3 py-1 rounded-full text-sm font-medium bg-[#27AE60] text-white">
            {t.about.badge_local}
          </span>
          <span className="px-3 py-1 rounded-full text-sm font-medium bg-[#1E8449] text-white">
            {t.about.badge_field}
          </span>
        </motion.div>

        <motion.div
          className="space-y-4 text-[#1A2E1A]/75 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {t.about.body.split("\n\n").map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
