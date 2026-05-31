"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="py-8 px-6 bg-[#1A1A2E] text-white/50 text-sm text-center">
      {t.footer.copy}
    </footer>
  );
}
