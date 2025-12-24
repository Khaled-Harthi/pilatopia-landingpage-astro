"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import type { Language } from "@/lib/translations";
import { translations } from "@/lib/translations";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

interface Props {
  lang: Language;
}

export default function HeroSection({ lang }: Props) {
  const t = translations[lang];
  const isRTL = lang === "ar";
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;
  const [classIndex, setClassIndex] = useState(0);

  const classTypes = isRTL
    ? ["ريفورمر للمبتدئات", "ريفورمر متوسط", "جامب ريفورمر", "كاديلاك ميكس", "تشيرز وبارلز"]
    : ["Beginners Reformer", "Intermediate Reformer", "Jump Reformer", "Cadillac Mix", "Chairs & Barrels"];

  useEffect(() => {
    const interval = setInterval(() => {
      setClassIndex((prev) => (prev + 1) % classTypes.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [classTypes.length]);

  const openMembership = () => {
    window.dispatchEvent(new CustomEvent("open-membership"));
  };

  return (
    <section className="relative min-h-screen flex items-center bg-[var(--bg-cream)]/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32 w-full">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${isRTL ? 'direction-rtl' : ''}`}>
          {/* Text Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className={isRTL ? 'lg:order-2' : ''}
          >
            <motion.div
              variants={fadeInUp}
              className="mb-4"
            >
              <p className="text-[var(--primary-dark)] font-medium tracking-wide text-sm uppercase">
                {t.hero.welcome}
              </p>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-medium text-[var(--text-primary)] leading-[1.1] mb-6"
              style={{ fontFamily: isRTL ? "var(--font-body)" : "var(--font-rufina), Georgia, serif" }}
            >
              {t.hero.title1}
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-[var(--text-secondary)] mb-6 max-w-lg leading-relaxed"
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#E39C82]/10 text-[#E39C82] text-xs font-medium rounded-full">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 7.5a4.5 4.5 0 1 1 4.5 4.5M12 7.5A4.5 4.5 0 1 0 7.5 12M12 7.5V9m-4.5 3a4.5 4.5 0 1 0 4.5 4.5M7.5 12H9m7.5 0a4.5 4.5 0 1 1-4.5 4.5m4.5-4.5H15m-3 4.5V15" />
                  <circle cx="12" cy="12" r="3" />
                  <path d="m8 16 1.5-1.5" />
                  <path d="M14.5 9.5 16 8" />
                  <path d="m8 8 1.5 1.5" />
                  <path d="M14.5 14.5 16 16" />
                </svg>
                {isRTL ? 'استوديو نسائي' : 'Women-Only Studio'}
              </span>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={openMembership}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--primary)] text-white font-semibold rounded-full hover:bg-[var(--primary-dark)] transition-all group"
              >
                {t.cta.button}
                <ArrowIcon size={18} className={`${isRTL ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'} transition-transform`} />
              </button>
              <a
                href="#studio"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[var(--border)] text-[var(--text-primary)] font-semibold rounded-full hover:bg-white transition-all"
              >
                {t.hero.explore}
              </a>
            </motion.div>
          </motion.div>

          {/* Bento Grid Images */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -40 : 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={`relative ${isRTL ? 'lg:order-1' : ''}`}
          >
            <div className="grid grid-cols-3 gap-4 h-[500px] lg:h-[600px]">
              {/* Main large image - spans 2 columns */}
              <div className="col-span-2 row-span-2 relative rounded-3xl overflow-hidden shadow-2xl shadow-black/10">
                <img
                  src="/reformer-vertical.jpg"
                  alt="Reformers Room"
                  className="w-full h-full object-cover"
                />
                {/* Floating badge */}
                <div className={`absolute bottom-8 ${isRTL ? 'right-4' : 'left-4'}`}>
                  <p className="text-sm text-white mb-1">{isRTL ? 'الكلاس القادم' : 'Next Class'}</p>
                  <div className="relative h-6">
                    <AnimatePresence mode="wait">
                      <motion.p
                        key={classIndex}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="font-semibold text-2xl text-white text-shadow-sm"
                      >
                        {classTypes[classIndex]}
                      </motion.p>
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              {/* Top small image */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl shadow-black/5">
                <img
                  src="/chairs-vertical.jpg"
                  alt="Chairs & Barrels Room"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottom small image */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl shadow-black/5">
                <img
                  src="/mid-area.jpg"
                  alt="Lounge Area"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-[var(--text-secondary)]/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-[var(--text-secondary)]/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
