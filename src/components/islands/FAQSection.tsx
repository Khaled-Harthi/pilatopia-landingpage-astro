"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
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

export default function FAQSection({ lang }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const t = translations[lang];
  const isRTL = lang === "ar";

  return (
    <section className="section-padding bg-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.p
            variants={fadeInUp}
            className="text-[var(--primary-dark)] font-medium mb-3 tracking-wide text-sm uppercase"
          >
            {t.faq.label}
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl sm:text-5xl font-medium text-[var(--text-primary)] mb-4"
            style={{ fontFamily: isRTL ? "var(--font-body)" : "var(--font-rufina), Georgia, serif" }}
          >
            {t.faq.title} <span className={isRTL ? "" : "italic"}>{t.faq.titleHighlight}</span>
          </motion.h2>
        </motion.div>

        <div className="space-y-4">
          {t.faq.list.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="border border-[var(--border-light)] rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={`w-full flex items-center justify-between p-6 ${isRTL ? 'text-right' : 'text-left'} bg-white hover:bg-[var(--bg-section)] transition-colors`}
              >
                <span className={`font-medium text-[var(--text-primary)] ${isRTL ? 'pl-4' : 'pr-4'}`}>{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown size={20} className="text-[var(--text-secondary)]" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-6 pb-6 text-[var(--text-secondary)] leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
