"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import type { Language } from "@/lib/translations";
import { translations } from "@/lib/translations";

interface Props {
  lang: Language;
}

export default function Navigation({ lang }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const t = translations[lang];

  const toggleLanguage = () => {
    const newLang = lang === "en" ? "ar" : "en";
    document.cookie = `pilatopia-lang=${newLang};path=/;max-age=31536000`;
    window.location.reload();
  };

  const openMembership = () => {
    window.dispatchEvent(new CustomEvent("open-membership"));
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img src="/pilatopia-logo.png" alt="Pilatopia" className="h-5 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            <a href="#studio" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-sm">
              {t.nav.studio}
            </a>
            <a href="#gift" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-sm">
              {t.nav.gift}
            </a>
            <a href="#pricing" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-sm">
              {t.nav.prices}
            </a>
            <a href="#classes" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-sm">
              {t.nav.classes}
            </a>
            <a href="#mobile-app" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-sm">
              {t.nav.app}
            </a>
          </div>

          {/* CTA and Language Toggle */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-4 py-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              <Globe size={16} />
              {t.language.switch}
            </button>
            <button
              onClick={openMembership}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--primary)] text-white text-sm font-semibold rounded-full hover:bg-[var(--primary-dark)] transition-all"
            >
              {t.nav.joinUs}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="p-2 text-sm font-medium"
            >
              {t.language.switch}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t"
          >
            <div className="px-6 py-6 space-y-4">
              <a href="#studio" onClick={() => setIsOpen(false)} className="block py-2 text-[var(--text-primary)]">{t.nav.studio}</a>
              <a href="#gift" onClick={() => setIsOpen(false)} className="block py-2 text-[var(--text-primary)]">{t.nav.gift}</a>
              <a href="#pricing" onClick={() => setIsOpen(false)} className="block py-2 text-[var(--text-primary)]">{t.nav.prices}</a>
              <a href="#classes" onClick={() => setIsOpen(false)} className="block py-2 text-[var(--text-primary)]">{t.nav.classes}</a>
              <a href="#mobile-app" onClick={() => setIsOpen(false)} className="block py-2 text-[var(--text-primary)]">{t.nav.app}</a>
              <button
                onClick={() => {
                  setIsOpen(false);
                  openMembership();
                }}
                className="w-full mt-4 px-6 py-3 bg-[var(--primary)] text-white font-semibold rounded-full"
              >
                {t.nav.joinUs}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
