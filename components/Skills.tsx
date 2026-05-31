"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const skills = {
  backend: [
    { name: "Ruby on Rails", level: 85 },
    { name: "TypeScript", level: 75 },
  ],
  frontend: [
    { name: "React", level: 80 },
    { name: "Vue.js 2 / 3", level: 80 },
    { name: "TypeScript", level: 75 },
  ],
  infra: [
    { name: "Docker", level: 70 },
    { name: "Git / GitHub", level: 80 },
  ],
};

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between text-sm mb-1">
        <span className="text-[#1A1A2E] font-medium">{name}</span>
        <span className="text-[#1A1A2E]/50">{level}%</span>
      </div>
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-[#2E86AB] rounded-full"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 0.8, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

function SkillGroup({
  title,
  items,
  baseDelay,
}: {
  title: string;
  items: { name: string; level: number }[];
  baseDelay: number;
}) {
  return (
    <motion.div
      className="bg-[#F8F9FA] rounded-2xl p-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-sm font-semibold text-[#2E86AB] uppercase tracking-wider mb-5">
        {title}
      </h3>
      {items.map((s, i) => (
        <SkillBar key={s.name} name={s.name} level={s.level} delay={baseDelay + i * 0.1} />
      ))}
    </motion.div>
  );
}

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-24 px-6 bg-[#F8F9FA]">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-[#1A1A2E] mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t.skills.heading}
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          <SkillGroup title={t.skills.backend} items={skills.backend} baseDelay={0} />
          <SkillGroup title={t.skills.frontend} items={skills.frontend} baseDelay={0.1} />
          <SkillGroup title={t.skills.infra} items={skills.infra} baseDelay={0.2} />
        </div>
      </div>
    </section>
  );
}
