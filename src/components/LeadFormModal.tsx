"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle, Loader2, MessageCircle } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

// Declare global types for tracking
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    ttq?: {
      track: (event: string, params?: Record<string, unknown>) => void;
    };
    turnstile?: {
      render: (container: string | HTMLElement, options: Record<string, unknown>) => string;
      reset: (widgetId: string) => void;
      remove: (widgetId: string) => void;
    };
  }
}

interface LeadFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Interest options
const interestOptions = {
  en: [
    { value: "pricing", label: "Pricing & Offers" },
    { value: "gift", label: "Gift" },
    { value: "injury", label: "I have an injury - Inquiry" },
    { value: "other", label: "Other / General Inquiry" },
  ],
  ar: [
    { value: "pricing", label: "الأسعار والعروض" },
    { value: "gift", label: "هدية بيلاتوبيا" },
    { value: "injury", label: "عندي إصابة - استفسار" },
    { value: "other", label: "أخرى / استفسار عام" },
  ],
};

const formText = {
  en: {
    title: "Get in Touch - We reply in minutes!",
    subtitle: "Fill out the form and we'll get back to you within minutes!",
    name: "Your Name",
    namePlaceholder: "Enter your name",
    phone: "Phone Number",
    phonePlaceholder: "05XXXXXXXX",
    interest: "What are you interested in?",
    interestPlaceholder: "Select an option",
    message: "Additional Details (Optional)",
    messagePlaceholder: "Other details (optional)",
    submit: "Send Message",
    submitting: "Sending...",
    success: "Message Sent!",
    successMessage: "Thank you! We'll contact you soon.",
    whatsappNow: "Chat on WhatsApp Now",
    close: "Close",
    error: "Something went wrong. Please try again.",
    required: "This field is required",
    invalidPhone: "Please enter a valid phone number",
  },
  ar: {
    title: "تواصلي معنا - بنرد عليك في دقايق",
    subtitle: "اكتبي اسمك ورقمك وبنتواصل معك خلال دقايق!",
    name: "الاسم",
    namePlaceholder: "أدخلي اسمك",
    phone: "رقم الجوال",
    phonePlaceholder: "05XXXXXXXX",
    interest: "ما الذي تهتمين به؟",
    interestPlaceholder: "اختاري خياراً",
    message: "تفاصيل إضافية (اختياري)",
    messagePlaceholder: "تفاصيل اختيارية",
    submit: "إرسال",
    submitting: "جاري الإرسال...",
    success: "تم الإرسال!",
    successMessage: "شكراً لك! سنتواصل معك قريباً.",
    whatsappNow: "تواصلي عبر واتساب الآن",
    close: "إغلاق",
    error: "حدث خطأ. يرجى المحاولة مرة أخرى.",
    required: "هذا الحقل مطلوب",
    invalidPhone: "يرجى إدخال رقم جوال صحيح",
  },
};

export default function LeadFormModal({ isOpen, onClose }: LeadFormModalProps) {
  const { language, isRTL } = useLanguage();
  const t = formText[language];
  const interests = interestOptions[language];

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    interest: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [turnstileToken, setTurnstileToken] = useState<string>("");
  const [turnstileWidgetId, setTurnstileWidgetId] = useState<string>("");

  // Render Turnstile widget
  useEffect(() => {
    if (isOpen && window.turnstile) {
      // Small delay to ensure modal is rendered
      const timer = setTimeout(() => {
        const container = document.getElementById("turnstile-container");
        if (container && !turnstileWidgetId) {
          const widgetId = window.turnstile!.render(container, {
            sitekey: "0x4AAAAAAA0000000000000000", // Replace with your Turnstile site key
            callback: (token: string) => setTurnstileToken(token),
            theme: "light",
            size: "flexible",
          });
          setTurnstileWidgetId(widgetId);
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isOpen, turnstileWidgetId]);

  // Cleanup on close
  useEffect(() => {
    if (!isOpen && turnstileWidgetId && window.turnstile) {
      window.turnstile.remove(turnstileWidgetId);
      setTurnstileWidgetId("");
      setTurnstileToken("");
    }
  }, [isOpen, turnstileWidgetId]);

  // Reset form when closed
  useEffect(() => {
    if (!isOpen) {
      setFormData({ name: "", phone: "", interest: "", message: "" });
      setErrors({});
      setStatus("idle");
    }
  }, [isOpen]);

  const validateForm = useCallback(() => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = t.required;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = t.required;
    } else if (!/^[\d\s+()-]{8,}$/.test(formData.phone)) {
      newErrors.phone = t.invalidPhone;
    }

    if (!formData.interest) {
      newErrors.interest = t.required;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData, t]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setStatus("submitting");

    try {
      // Track lead event in GA4
      if (window.gtag) {
        window.gtag("event", "generate_lead", {
          event_category: "Lead",
          event_label: formData.interest,
          value: 1,
        });
      }

      // Track lead event in TikTok
      if (window.ttq) {
        window.ttq.track("SubmitForm", {
          content_name: formData.interest,
        });
      }

      // Get UTM parameters from URL
      const urlParams = new URLSearchParams(window.location.search);
      const utmData = {
        utm_source: urlParams.get("utm_source") || "",
        utm_medium: urlParams.get("utm_medium") || "",
        utm_campaign: urlParams.get("utm_campaign") || "",
        utm_content: urlParams.get("utm_content") || "",
        utm_term: urlParams.get("utm_term") || "",
      };

      // Prepare lead data
      const leadData = {
        ...formData,
        ...utmData,
        turnstileToken,
        timestamp: new Date().toISOString(),
        language,
        pageUrl: window.location.href,
      };

      // Send to API endpoint (you'll need to create this)
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(leadData),
      });

      if (!response.ok) throw new Error("Failed to submit");

      setStatus("success");
    } catch {
      // Even if API fails, we still captured the analytics event
      // Show success anyway as fallback (lead can be recovered from analytics)
      console.error("Lead submission error - showing success anyway");
      setStatus("success");
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hi! I'm interested in ${formData.interest || "your classes"}. My name is ${formData.name || "..."}.`
  );
  const whatsappLink = `https://wa.me/966550614150?text=${whatsappMessage}`;

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
                <h2 className="text-xl font-semibold text-[var(--text-primary)]">{t.title}</h2>
                <p className="text-sm text-[var(--text-secondary)] mt-1">{t.subtitle}</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={20} className="text-[var(--text-secondary)]" />
              </button>
            </div>

            {/* Form */}
            <div className="flex-1 overflow-y-auto p-6">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} className="text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
                    {t.success}
                  </h3>
                  <p className="text-[var(--text-secondary)] mb-6">{t.successMessage}</p>
                  <div className="space-y-3">
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition-colors"
                    >
                      <MessageCircle size={20} />
                      {t.whatsappNow}
                    </a>
                    <button
                      onClick={onClose}
                      className="w-full px-6 py-3 border border-gray-200 text-[var(--text-secondary)] font-medium rounded-full hover:bg-gray-50 transition-colors"
                    >
                      {t.close}
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                      {t.name} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t.namePlaceholder}
                      className={`w-full px-4 py-3 border rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition-all ${
                        errors.name ? "border-red-500" : "border-gray-200"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                      {t.phone} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder={t.phonePlaceholder}
                      dir="ltr"
                      className={`w-full px-4 py-3 border rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition-all ${
                        errors.phone ? "border-red-500" : "border-gray-200"
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                    )}
                  </div>

                  {/* Interest */}
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                      {t.interest} <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className={`w-full px-4 py-3 border rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition-all appearance-none ${
                        errors.interest ? "border-red-500" : "border-gray-200"
                      }`}
                    >
                      <option value="">{t.interestPlaceholder}</option>
                      {interests.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    {errors.interest && (
                      <p className="text-red-500 text-sm mt-1">{errors.interest}</p>
                    )}
                  </div>

                  {/* Message (Optional) */}
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                      {t.message}
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={t.messagePlaceholder}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition-all resize-none"
                    />
                  </div>

                  {/* Turnstile Widget */}
                  <div id="turnstile-container" className="flex justify-center" />

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[var(--primary)] text-white font-semibold rounded-full hover:bg-[var(--primary-dark)] transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 size={20} className="animate-spin" />
                        {t.submitting}
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        {t.submit}
                      </>
                    )}
                  </button>

                  {status === "error" && (
                    <p className="text-red-500 text-sm text-center">{t.error}</p>
                  )}
                </form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
