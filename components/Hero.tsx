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
  const { t, lang } = useLanguage();

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-[#F0FAF4] to-[#C8E6C9] px-6">
      <div className="text-center max-w-2xl">
        <motion.p
          className="text-sm font-semibold tracking-widest text-[#27AE60] uppercase mb-4"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
        >
          {t.hero.kicker}
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
          className="mb-4"
        >
          {lang === "ja" && (
            <p className="text-sm tracking-widest text-[#1A2E1A]/40 mb-1 font-sans">
              Kobayashi Naoki
            </p>
          )}
          <h1 className="text-5xl md:text-6xl font-bold text-[#1A2E1A] font-shippori">
            {t.hero.name}
          </h1>
        </motion.div>

        <motion.p
          className="text-xl md:text-2xl text-[#27AE60] font-medium mb-6"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={2}
        >
          {t.hero.title}
        </motion.p>

        <motion.p
          className="text-[#1A2E1A]/60 text-lg mb-10"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={3}
        >
          {t.hero.tagline}
        </motion.p>

        <motion.a
          href="#contact"
          className="inline-block bg-[#27AE60] text-white px-8 py-3 rounded-full font-medium hover:bg-[#1E8449] transition-colors shadow-md"
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
