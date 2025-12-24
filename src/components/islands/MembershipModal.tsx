"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Smartphone, ChevronDown, ExternalLink } from "lucide-react";
import type { Language } from "@/lib/translations";
import { translations } from "@/lib/translations";
import { QRCodeSVG } from "qrcode.react";

interface Props {
  lang: Language;
}

export default function MembershipModal({ lang }: Props) {
  const t = translations[lang];
  const isRTL = lang === "ar";

  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showAppQR, setShowAppQR] = useState(false);
  const [showWhatsAppQR, setShowWhatsAppQR] = useState(false);

  // Listen for custom event to open modal
  useEffect(() => {
    const handleOpenMembership = () => setIsOpen(true);
    window.addEventListener("open-membership", handleOpenMembership);
    return () => window.removeEventListener("open-membership", handleOpenMembership);
  }, []);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || /iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Reset collapsed states when modal closes
  useEffect(() => {
    if (!isOpen) {
      setShowAppQR(false);
      setShowWhatsAppQR(false);
    }
  }, [isOpen]);

  const onClose = () => setIsOpen(false);

  // App store link
  const appStoreLink = "https://apps.apple.com/us/app/pilatopia/id6747145107";

  // WhatsApp details
  const whatsappNumber = "966550614150";
  const whatsappDisplayNumber = "0550614150";
  const whatsappMessage = lang === "en"
    ? "Hi! I'd like to become a member. Can you help me get started?"
    : "مرحبا! عندي استفسار بخصوص الاشتراك في بيلاتوبيا";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-lg bg-white rounded-3xl shadow-2xl z-50 overflow-hidden flex flex-col max-h-[90vh]"
            dir={isRTL ? "rtl" : "ltr"}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <div>
                <h2 className="text-xl font-semibold text-[var(--text-primary)]">
                  {t.membershipModal.title}
                </h2>
                <p className="text-sm text-[var(--text-secondary)] mt-1">
                  {t.membershipModal.subtitle}
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={20} className="text-[var(--text-secondary)]" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="space-y-4">
                {/* App Download Option - Recommended */}
                <div className="relative border-2 border-[var(--primary)] rounded-2xl p-5 bg-[var(--primary)]/5">
                  <div className={`absolute -top-3 ${isRTL ? 'right-4' : 'left-4'}`}>
                    <span className="px-3 py-1 bg-[var(--primary)] text-white text-xs font-semibold rounded-full">
                      {t.membershipModal.appOption.badge}
                    </span>
                  </div>

                  <div className="flex items-start gap-4 mt-2">
                    <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Smartphone size={24} className="text-[var(--primary)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-[var(--text-primary)] mb-1">
                        {t.membershipModal.appOption.title}
                      </h3>
                      <p className="text-sm text-[var(--text-secondary)] mb-4">
                        {t.membershipModal.appOption.description}
                      </p>

                      {/* Mobile: Direct App Store Button */}
                      {isMobile ? (
                        <a
                          href={appStoreLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 px-4 py-2.5 bg-black text-white text-sm font-medium rounded-xl hover:bg-gray-800 transition-colors"
                        >
                          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                          </svg>
                          App Store
                        </a>
                      ) : (
                        /* Desktop: Collapsible QR Code */
                        <div>
                          <button
                            onClick={() => setShowAppQR(!showAppQR)}
                            className="flex items-center justify-between w-full px-4 py-2.5 bg-black text-white text-sm font-medium rounded-xl hover:bg-gray-800 transition-colors"
                          >
                            <div className="flex items-center gap-2">
                              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                              </svg>
                              App Store
                            </div>
                            <motion.div
                              animate={{ rotate: showAppQR ? 180 : 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <ChevronDown size={18} />
                            </motion.div>
                          </button>

                          <AnimatePresence>
                            {showAppQR && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden"
                              >
                                <div className="mt-4 p-4 bg-white rounded-xl border border-gray-100 flex items-center justify-between">
                                  <div className="flex flex-col gap-2">
                                    <p className="text-sm text-[var(--text-secondary)]">
                                      {t.membershipModal.appOption.scanQR}
                                    </p>
                                    <a
                                      href={appStoreLink}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center gap-1 text-sm text-[var(--primary)] hover:underline"
                                    >
                                      {t.membershipModal.openLink}
                                      <ExternalLink size={14} />
                                    </a>
                                  </div>
                                  <div className="bg-white p-2 rounded-lg border border-gray-100">
                                    <QRCodeSVG
                                      value={appStoreLink}
                                      size={80}
                                      level="M"
                                      includeMargin={false}
                                    />
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="flex items-center gap-4">
                  <div className="flex-1 h-px bg-gray-200" />
                  <span className="text-sm text-[var(--text-secondary)]">{t.membershipModal.or}</span>
                  <div className="flex-1 h-px bg-gray-200" />
                </div>

                {/* WhatsApp Option */}
                <p className="text-sm text-[var(--text-secondary)] mb-2">
                  {lang === 'ar' ? 'تواصلي معنا عبر واتساب' : 'Chat with us on WhatsApp'}
                </p>
                <div className="border-2 border-gray-200 rounded-2xl p-4 hover:border-green-500/30 transition-colors">
                  <div className="flex items-center gap-4">
                    {/* Avatar */}
                    <div className="relative flex-shrink-0">
                      <img
                        src="/whatsapp-avatar.jpg"
                        alt="Pilatopia"
                        className="w-14 h-14 rounded-full object-cover ring-2 ring-green-500/20"
                      />
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                        <svg viewBox="0 0 24 24" className="w-3 h-3 text-white" fill="currentColor">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-[var(--text-primary)]">
                        Pilatopia
                      </h3>
                      <p className="text-sm text-[var(--text-secondary)]" dir="ltr">
                        {whatsappDisplayNumber}
                      </p>
                      <p className="text-xs text-green-600 font-medium mt-1">
                        {t.membershipModal.whatsappOption.replyTime}
                      </p>
                    </div>

                    {/* Mobile: Direct WhatsApp Button */}
                    {isMobile ? (
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white font-medium rounded-full hover:bg-green-600 transition-colors flex-shrink-0"
                      >
                        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        <span>WhatsApp</span>
                      </a>
                    ) : (
                      /* Desktop: Expand QR Button */
                      <button
                        onClick={() => setShowWhatsAppQR(!showWhatsAppQR)}
                        className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white font-medium rounded-full hover:bg-green-600 transition-colors flex-shrink-0"
                      >
                        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        <span>WhatsApp</span>
                        <motion.div
                          animate={{ rotate: showWhatsAppQR ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown size={16} />
                        </motion.div>
                      </button>
                    )}
                  </div>

                  {/* Desktop: Collapsible QR Code */}
                  {!isMobile && (
                    <AnimatePresence>
                      {showWhatsAppQR && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-4 p-4 bg-green-50 rounded-xl flex items-center justify-between">
                            <div className="flex flex-col gap-2">
                              <p className="text-sm text-[var(--text-secondary)]">
                                {t.membershipModal.whatsappOption.scanQR}
                              </p>
                              <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-sm text-green-600 hover:underline"
                              >
                                {t.membershipModal.openLink}
                                <ExternalLink size={14} />
                              </a>
                            </div>
                            <div className="bg-white p-2 rounded-lg border border-green-100">
                              <QRCodeSVG
                                value={whatsappLink}
                                size={80}
                                level="M"
                                includeMargin={false}
                              />
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
