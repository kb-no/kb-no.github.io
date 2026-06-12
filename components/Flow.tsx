"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Flow() {
  const { t } = useLanguage();

  return (
    <section id="flow" className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-[#1A2E1A] mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t.flow.heading}
        </motion.h2>

        <div className="space-y-0">
          {t.flow.steps.map((step, i) => (
            <motion.div
              key={i}
              className="flex gap-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-[#27AE60] text-white flex items-center justify-center text-sm font-bold shrink-0">
                  {step.step}
                </div>
                {i < t.flow.steps.length - 1 && (
                  <div className="w-px flex-1 bg-[#27AE60]/25 my-1" />
                )}
              </div>
              <div className="pb-10">
                <h3 className="font-bold text-[#1A2E1A] mb-1">{step.title}</h3>
                <p className="text-[#1A2E1A]/65 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
