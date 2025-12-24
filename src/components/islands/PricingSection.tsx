"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, ArrowLeft } from "lucide-react";
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

// SAR Currency Symbol Component
const SARSymbol = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 1124.14 1256.39" className={className} fill="currentColor">
    <path d="M699.62,1113.02h0c-20.06,44.48-33.32,92.75-38.4,143.37l424.51-90.24c20.06-44.47,33.31-92.75,38.4-143.37l-424.51,90.24Z" />
    <path d="M1085.73,895.8c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.33v-135.2l292.27-62.11c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.27V66.13c-50.67,28.45-95.67,66.32-132.25,110.99v403.35l-132.25,28.11V0c-50.67,28.44-95.67,66.32-132.25,110.99v525.69l-295.91,62.88c-20.06,44.47-33.33,92.75-38.42,143.37l334.33-71.05v170.26l-358.3,76.14c-20.06,44.47-33.32,92.75-38.4,143.37l375.04-79.7c30.53-6.35,56.77-24.4,73.83-49.24l68.78-101.97v-.02c7.14-10.55,11.3-23.27,11.3-36.97v-149.98l132.25-28.11v270.4l424.53-90.28Z" />
  </svg>
);

interface Props {
  lang: Language;
}

export default function PricingSection({ lang }: Props) {
  const t = translations[lang];
  const isRTL = lang === "ar";
  const [showPackages, setShowPackages] = useState(false);
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const openMembership = () => {
    window.dispatchEvent(new CustomEvent("open-membership"));
  };

  return (
    <section id="pricing" className="section-padding bg-[var(--bg-cream)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center"
        >
          <motion.p
            variants={fadeInUp}
            className="text-[var(--primary-dark)] font-medium mb-3 tracking-wide text-sm uppercase"
          >
            {t.pricing.label}
          </motion.p>

          <motion.div variants={fadeInUp} className="mb-4 flex items-baseline justify-center gap-3 flex-wrap">
            <span className="text-4xl sm:text-5xl font-medium text-[var(--text-primary)]" style={{ fontFamily: isRTL ? "var(--font-body)" : "var(--font-rufina), Georgia, serif" }}>
              {t.pricing.title}
            </span>
            <span className="text-4xl sm:text-5xl font-bold text-[var(--primary)] flex items-baseline gap-2" style={{ fontFamily: isRTL ? "var(--font-body)" : "var(--font-rufina), Georgia, serif" }}>
              {t.pricing.titleHighlight}
              <SARSymbol className="h-8 sm:h-10 w-auto" />
            </span>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="text-[var(--text-secondary)] max-w-2xl mx-auto mb-6"
          >
            {t.pricing.subtitle}
          </motion.p>

          <motion.div variants={fadeInUp}>
            <button
              onClick={() => setShowPackages(!showPackages)}
              className="inline-flex items-center gap-2 text-[var(--primary-dark)] font-medium hover:gap-3 transition-all mb-8"
            >
              {t.pricing.viewPackages}
              <motion.div animate={{ rotate: showPackages ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <ChevronDown size={18} />
              </motion.div>
            </button>
          </motion.div>

          <AnimatePresence>
            {showPackages && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 pt-4">
                  {t.pricing.packages.map((pkg, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`relative bg-white rounded-2xl p-6 border-2 transition-all ${pkg.recommended
                        ? 'border-[var(--primary)] shadow-lg shadow-[var(--primary)]/10 pt-8'
                        : 'border-[var(--border-light)] hover:border-[var(--primary)]/30'
                        }`}
                    >
                      {pkg.recommended && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                          <span className="px-4 py-1.5 bg-[var(--primary)] text-white text-xs font-semibold rounded-full">
                            {t.pricing.recommended}
                          </span>
                        </div>
                      )}

                      <div className="mb-4">
                        <h3 className="font-semibold text-[var(--text-primary)] mb-1">{pkg.name}</h3>
                        <p className="text-sm text-[var(--text-secondary)]">
                          {pkg.classes} {t.pricing.classes}
                        </p>
                      </div>

                      <div className="mb-4">
                        <div className="flex items-baseline justify-center gap-2">
                          {pkg.originalPrice && (
                            <span className="text-sm text-[var(--text-secondary)] line-through">
                              {pkg.originalPrice}
                            </span>
                          )}
                          <span className="text-2xl font-bold text-[var(--text-primary)]">
                            {pkg.price}
                          </span>
                          <span className="text-[var(--text-secondary)]">
                            <SARSymbol className="h-4 w-auto" />
                          </span>
                        </div>
                        <p className="text-xs text-[var(--primary-dark)] font-medium mt-1 flex items-center justify-center gap-1">
                          {pkg.pricePerClass} <SARSymbol className="h-2.5 w-auto" />{t.pricing.perClass}
                        </p>
                      </div>

                      {pkg.note && (
                        <p className="text-xs text-[var(--primary-dark)] bg-[var(--primary)]/10 rounded-lg px-3 py-2">
                          {pkg.note}
                        </p>
                      )}

                      {!pkg.noDiscount && (
                        <div className="absolute top-4 right-4">
                          <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-medium rounded">
                            {t.pricing.off}
                          </span>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <button
                    onClick={openMembership}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--primary)] text-white font-semibold rounded-full hover:bg-[var(--primary-dark)] transition-all group"
                  >
                    {t.cta.button}
                    <ArrowIcon size={18} className={`${isRTL ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'} transition-transform`} />
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
