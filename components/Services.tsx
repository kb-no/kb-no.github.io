"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const icons = ["🌐", "📋", "🤖", "💡"];

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-24 px-6 bg-[#F0FAF4]">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-[#1A2E1A] mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t.services.heading}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {t.services.items.map((item, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-sm border-l-4 border-[#27AE60]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="text-2xl mb-3">{icons[i]}</div>
              <h3 className="text-lg font-bold text-[#1A2E1A] mb-2">{item.title}</h3>
              <p className="text-[#1A2E1A]/65 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
