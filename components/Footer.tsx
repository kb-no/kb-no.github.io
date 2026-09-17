"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  // 年は毎回その場で埋める。ハードコードすると年明けに古いままになる。
  // 静的書き出しのためビルド時とクライアントで年がずれうるので suppressHydrationWarning を付ける。
  const copy = t.footer.copy.replace("{year}", String(new Date().getFullYear()));
  return (
    <footer
      className="py-8 px-6 bg-[#1A2E1A] text-white/50 text-sm text-center"
      suppressHydrationWarning
    >
      {copy}
    </footer>
  );
}
