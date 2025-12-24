"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gift, Check, Sparkles } from "lucide-react";
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

// WhatsApp Icon Component
const WhatsAppIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

// WhatsApp Contact Card Component
function WhatsAppContactCard({
  message,
  buttonText,
  lang,
}: {
  message: string;
  buttonText: string;
  lang: Language;
}) {
  const [isMobile, setIsMobile] = useState(false);
  const whatsappLink = `https://wa.me/966550614150?text=${encodeURIComponent(message)}`;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || /iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Mobile: Contact card without QR code
  if (isMobile) {
    return (
      <div className="inline-flex flex-col items-start gap-2">
        <p className="text-sm text-[var(--text-secondary)]">
          {lang === 'ar' ? 'تواصلي معنا عبر واتساب' : 'Chat with us on WhatsApp'}
        </p>
        <div className="inline-flex items-center gap-5 border-2 border-gray-200 rounded-2xl px-6 py-4 bg-white shadow-sm">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex-shrink-0"
          >
            <img
              src="/whatsapp-avatar.jpg"
              alt="Pilatopia"
              className="w-12 h-12 rounded-full object-cover ring-2 ring-green-500/20"
            />
            <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
              <WhatsAppIcon className="w-2.5 h-2.5 text-white" />
            </div>
          </a>
          <div className="text-start">
            <h3 className="font-semibold text-[var(--text-primary)] text-base">Pilatopia</h3>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-[var(--text-secondary)] hover:text-green-600 inline-flex items-center gap-1 transition-colors"
              dir="ltr"
            >
              0550614150
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <p className="text-sm text-green-600 font-medium">
              {lang === 'ar' ? 'بنرد عليك في دقايق!' : 'We reply in minutes!'}
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Desktop: Static contact card with QR code
  return (
    <div className="inline-flex flex-col items-start gap-2">
      <p className="text-sm text-[var(--text-secondary)]">
        {lang === 'ar' ? 'تواصلي معنا عبر واتساب' : 'Chat with us on WhatsApp'}
      </p>
      <div className="inline-flex items-center gap-6 border-2 border-gray-200 rounded-2xl px-5 py-4 hover:border-green-500/30 transition-colors bg-white shadow-sm">
        <div className="flex items-center gap-3 flex-shrink-0">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex-shrink-0 hover:scale-105 transition-transform"
          >
            <img
              src="/whatsapp-avatar.jpg"
              alt="Pilatopia"
              className="w-12 h-12 rounded-full object-cover ring-2 ring-green-500/20"
            />
            <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
              <WhatsAppIcon className="w-2.5 h-2.5 text-white" />
            </div>
          </a>
          <div>
            <h3 className="font-semibold text-[var(--text-primary)]">Pilatopia</h3>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--text-secondary)] hover:text-green-600 inline-flex items-center gap-1 transition-colors"
              dir="ltr"
            >
              0550614150
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <p className="text-xs text-green-600 font-medium mt-0.5">
              {lang === 'ar' ? 'بنرد عليك في دقايق!' : 'We reply in minutes!'}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-1 flex-shrink-0">
          <div className="bg-white p-1.5 rounded-lg border border-gray-200">
            <img
              src={`https://api.qrserver.com/v1/create-qr-code/?size=70x70&data=${encodeURIComponent(whatsappLink)}`}
              alt="WhatsApp QR"
              className="w-16 h-16"
            />
          </div>
          <p className="text-xs text-[var(--text-secondary)]">
            {lang === 'ar' ? 'امسحي الكود' : 'Scan to chat'}
          </p>
        </div>
      </div>
    </div>
  );
}

interface Props {
  lang: Language;
}

export default function GiftSection({ lang }: Props) {
  const t = translations[lang];
  const isRTL = lang === "ar";
  const [occasionIndex, setOccasionIndex] = useState(0);

  const whatsappMessage = lang === "ar"
    ? "مرحبا! عندي سؤال عن هدية بيلاتوبيا"
    : "Hi! I'd like to ask about Pilatopia gift";

  const occasions = isRTL
    ? ["عيد ميلاد", "ذكرى سنوية", "عيد الحب", "رأس السنة", "عيد الأم", "لها"]
    : ["Birthday", "Anniversary", "Valentine's Day", "New Year's", "Mother's Day", "Her"];

  useEffect(() => {
    const interval = setInterval(() => {
      setOccasionIndex((prev) => (prev + 1) % occasions.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [occasions.length]);

  return (
    <section id="gift" className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`gift-layout ${isRTL ? 'direction-rtl' : ''}`}>
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Photo */}
            <div className="aspect-[4/5] rounded-3xl overflow-hidden relative bg-[var(--bg-cream)] shadow-2xl shadow-black/10">
              <img
                src="/gift-tote.png"
                alt="Pilatopia Gift Tote"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating accent - top corner */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className={`absolute -top-4 ${isRTL ? '-left-4' : '-right-4'} bg-white rounded-2xl p-3 shadow-lg`}
            >
              <Sparkles size={20} className="text-[var(--primary)]" />
            </motion.div>

            {/* Floating accent - bottom corner (Pink flower) */}
            <motion.div
              animate={{ y: [0, 6, 0], rotate: [0, 5, 0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className={`absolute -bottom-4 ${isRTL ? '-right-4' : '-left-4'} bg-white rounded-2xl p-3 shadow-lg`}
            >
              <span className="text-xl">🌸</span>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 text-lg font-medium mb-6"
            >
              <Gift size={20} className="text-[#E39C82]" />
              <span className="text-[var(--text-primary)]">{isRTL ? 'الهدية المثالية لـ' : 'the perfect gift for'}</span>
              <span className="relative inline-block w-36 h-7 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={occasionIndex}
                    initial={{ y: 20, opacity: 0, filter: 'blur(4px)' }}
                    animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                    exit={{ y: -20, opacity: 0, filter: 'blur(4px)' }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 font-bold"
                    style={{ color: '#E39C82' }}
                  >
                    {occasions[occasionIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-4xl sm:text-5xl font-medium text-[var(--text-primary)] leading-tight mb-6"
              style={{ fontFamily: isRTL ? "var(--font-body)" : "var(--font-rufina), Georgia, serif" }}
            >
              {t.gift.title} <span className={isRTL ? "" : "italic"}>{t.gift.titleHighlight}</span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-[var(--text-secondary)] mb-8 text-lg leading-relaxed max-w-lg"
            >
              {t.gift.subtitle}
            </motion.p>

            <motion.div variants={fadeInUp} className="mb-8">
              <p className="font-medium text-[var(--text-primary)] mb-4">{t.gift.includes}</p>
              <div className="grid grid-cols-2 gap-3">
                {t.gift.items.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[var(--primary)]/20 flex items-center justify-center flex-shrink-0">
                      <Check size={14} className="text-[var(--primary-dark)]" />
                    </div>
                    <span className="text-sm text-[var(--text-secondary)]">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <WhatsAppContactCard
                message={whatsappMessage}
                buttonText={lang === 'ar' ? 'تواصلي معنا' : 'Chat with Us'}
                lang={lang}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
