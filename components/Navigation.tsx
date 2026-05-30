"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Navigation() {
  const { t, toggleLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#skills", label: t.nav.skills },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-bold text-[#1A1A2E] text-lg tracking-wide">NK</span>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-[#1A1A2E]/70 hover:text-[#2E86AB] transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={toggleLang}
              className="text-sm font-medium px-3 py-1 rounded-full border border-[#2E86AB] text-[#2E86AB] hover:bg-[#2E86AB] hover:text-white transition-colors"
            >
              {t.nav.langSwitch}
            </button>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-[#1A1A2E]"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 bg-current mb-1.5" />
          <span className="block w-6 h-0.5 bg-current mb-1.5" />
          <span className="block w-6 h-0.5 bg-current" />
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[#1A1A2E]/80 hover:text-[#2E86AB]"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={() => { toggleLang(); setMenuOpen(false); }}
            className="self-start text-sm font-medium px-3 py-1 rounded-full border border-[#2E86AB] text-[#2E86AB]"
          >
            {t.nav.langSwitch}
          </button>
        </div>
      )}
    </header>
  );
}
