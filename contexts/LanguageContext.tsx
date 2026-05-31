"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import ja from "@/locales/ja.json";
import en from "@/locales/en.json";

type Lang = "ja" | "en";
type Messages = typeof ja;

interface LanguageContextType {
  lang: Lang;
  t: Messages;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("lang");
      if (saved === "ja" || saved === "en") return saved;
    }
    return "ja";
  });

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const t = lang === "ja" ? ja : en;
  const toggleLang = () => setLang((l) => (l === "ja" ? "en" : "ja"));
  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
