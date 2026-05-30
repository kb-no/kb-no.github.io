"use client";

import { motion, type Variants } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
  }),
};

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-[#F8F9FA] to-[#e8f4f8] px-6">
      <div className="text-center max-w-2xl">
        <motion.p
          className="text-sm font-medium tracking-widest text-[#2E86AB] uppercase mb-4"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
        >
          Portfolio
        </motion.p>

        <motion.h1
          className="text-5xl md:text-6xl font-bold text-[#1A1A2E] mb-4"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
        >
          {t.hero.name}
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-[#2E86AB] font-medium mb-6"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={2}
        >
          {t.hero.title}
        </motion.p>

        <motion.p
          className="text-[#1A1A2E]/60 text-lg mb-10"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={3}
        >
          {t.hero.tagline}
        </motion.p>

        <motion.a
          href="#contact"
          className="inline-block bg-[#2E86AB] text-white px-8 py-3 rounded-full font-medium hover:bg-[#1a6b8a] transition-colors shadow-md"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={4}
        >
          {t.hero.cta}
        </motion.a>
      </div>
    </section>
  );
}
