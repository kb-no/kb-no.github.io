"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Cases() {
  const { t } = useLanguage();

  return (
    <section id="cases" className="py-24 px-6 bg-[#F8F9FA]">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-[#1A1A2E] mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t.cases.heading}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {t.cases.items.map((item, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <span className="text-xs font-medium text-[#2E86AB] uppercase tracking-wider">
                {item.industry}
              </span>
              <h3 className="text-lg font-bold text-[#1A1A2E] mt-2 mb-3">{item.title}</h3>
              <p className="text-[#1A1A2E]/65 text-sm leading-relaxed mb-4">{item.desc}</p>
              <div className="bg-green-50 rounded-lg px-4 py-2 inline-block">
                <span className="text-green-700 text-sm font-medium">✓ {item.result}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
