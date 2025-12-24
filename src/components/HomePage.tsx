"use client";

import { useState, useEffect, createContext, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Star,
  ArrowRight,
  ArrowLeft,
  Menu,
  X,
  Instagram,
  MessageCircle,
  Clock,
  MapPin,
  Mail,
  Phone,
  Heart,
  Sparkles,
  Gift,
  Check,
  Calendar,
  Users,
  Award,
  Globe,
  Car,
} from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import LeadFormModal from "@/components/LeadFormModal";
import MembershipModal from "@/components/MembershipModal";

// Lead form context to open modal from anywhere
const LeadFormContext = createContext<{ openLeadForm: () => void }>({
  openLeadForm: () => {},
});
const useLeadForm = () => useContext(LeadFormContext);

// Membership modal context to open modal from anywhere
const MembershipContext = createContext<{ openMembership: () => void }>({
  openMembership: () => {},
});
const useMembership = () => useContext(MembershipContext);

// SAR Currency Symbol Component
const SARSymbol = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 1124.14 1256.39" className={className} fill="currentColor">
    <path d="M699.62,1113.02h0c-20.06,44.48-33.32,92.75-38.4,143.37l424.51-90.24c20.06-44.47,33.31-92.75,38.4-143.37l-424.51,90.24Z"/>
    <path d="M1085.73,895.8c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.33v-135.2l292.27-62.11c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.27V66.13c-50.67,28.45-95.67,66.32-132.25,110.99v403.35l-132.25,28.11V0c-50.67,28.44-95.67,66.32-132.25,110.99v525.69l-295.91,62.88c-20.06,44.47-33.33,92.75-38.42,143.37l334.33-71.05v170.26l-358.3,76.14c-20.06,44.47-33.32,92.75-38.4,143.37l375.04-79.7c30.53-6.35,56.77-24.4,73.83-49.24l68.78-101.97v-.02c7.14-10.55,11.3-23.27,11.3-36.97v-149.98l132.25-28.11v270.4l424.53-90.28Z"/>
  </svg>
);

// WhatsApp Contact Card Component - Static card on desktop, button on mobile
const WhatsAppContactCard = ({
  message,
  buttonText,
}: {
  message: string;
  buttonText: string;
}) => {
  const { language } = useLanguage();
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

  const WhatsAppIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );

  // Mobile: Contact card without QR code
  if (isMobile) {
    return (
      <div className="inline-flex flex-col items-start gap-2">
        <p className="text-sm text-[var(--text-secondary)]">
          {language === 'ar' ? 'تواصلي معنا عبر واتساب' : 'Chat with us on WhatsApp'}
        </p>
        <div className="inline-flex items-center gap-5 border-2 border-gray-200 rounded-2xl px-6 py-4 bg-white shadow-sm">
          {/* Clickable Avatar */}
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
          {/* Info */}
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
              {language === 'ar' ? 'بنرد عليك في دقايق!' : 'We reply in minutes!'}
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Desktop: Static contact card (always visible)
  return (
    <div className="inline-flex flex-col items-start gap-2">
        <p className="text-sm text-[var(--text-secondary)]">
          {language === 'ar' ? 'تواصلي معنا عبر واتساب' : 'Chat with us on WhatsApp'}
        </p>
    <div className="inline-flex items-center gap-6 border-2 border-gray-200 rounded-2xl px-5 py-4 hover:border-green-500/30 transition-colors bg-white shadow-sm">
      
      <div className="flex items-center gap-3 flex-shrink-0">
        {/* Clickable Avatar */}
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
        {/* Info */}
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
            {language === 'ar' ? 'بنرد عليك في دقايق!' : 'We reply in minutes!'}
          </p>
        </div>
      </div>

      {/* QR Code */}
      <div className="flex flex-col items-center gap-1 flex-shrink-0">
        <div className="bg-white p-1.5 rounded-lg border border-gray-200">
          <img
            src={`https://api.qrserver.com/v1/create-qr-code/?size=70x70&data=${encodeURIComponent(whatsappLink)}`}
            alt="WhatsApp QR"
            className="w-16 h-16"
          />
        </div>
        <p className="text-xs text-[var(--text-secondary)]">
          {language === 'ar' ? 'امسحي الكود' : 'Scan to chat'}
        </p>
      </div>
    </div>
    </div>
  );
};

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

// Navigation Component
function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, language, setLanguage } = useLanguage();
  const { openMembership } = useMembership();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
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
              <a href="#classes" onClick={() => setIsOpen(false)} className="block py-2 text-[var(--text-primary)]">{t.nav.classes}</a>
              <a href="#gift" onClick={() => setIsOpen(false)} className="block py-2 text-[var(--text-primary)]">{t.nav.gift}</a>
              <a href="#mobile-app" onClick={() => setIsOpen(false)} className="block py-2 text-[var(--text-primary)]">{t.nav.app}</a>
              <button
                onClick={() => { setIsOpen(false); openMembership(); }}
                className="block w-full text-center px-6 py-3 bg-[var(--primary)] text-white font-semibold rounded-full mt-4"
              >
                {t.nav.bookClass}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

// Hero Section - Split layout with Bento Grid
function HeroSection() {
  const { t, isRTL } = useLanguage();
  const { openMembership } = useMembership();
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
              className="flex flex-wrap items-center gap-3 mb-4"
            >
              <p className="text-[var(--primary-dark)] font-medium tracking-wide text-sm uppercase">
                {t.hero.welcome}
              </p>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[var(--primary)]/10 text-[var(--primary-dark)] text-xs font-medium rounded-full">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M12 12c-4 0-6 2-6 4v2h12v-2c0-2-2-4-6-4z" />
                </svg>
                {isRTL ? 'استوديو نسائي' : 'Women-Only Studio'}
              </span>
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
              className="text-lg text-[var(--text-secondary)] mb-10 max-w-lg leading-relaxed"
            >
              {t.hero.subtitle}
            </motion.p>

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
                  <div className="relative h-6 ">
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
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.classList.add('placeholder-class');
                  }}
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

// Pricing Section
function PricingSection() {
  const { t, isRTL } = useLanguage();
  const { openMembership } = useMembership();
  const [showPackages, setShowPackages] = useState(false);
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

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
                      className={`relative bg-white rounded-2xl p-6 border-2 transition-all ${
                        pkg.recommended
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

// Classes Section
function ClassesSection() {
  const { t, isRTL, language } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;
  const whatsappMessage = language === "ar"
    ? "مرحبا! أبي أسأل عن الكلاسات"
    : "Hi! I'd like to ask about classes";
  const whatsappLink = `https://wa.me/966550614150?text=${encodeURIComponent(whatsappMessage)}`;

  // Tag colors - text color with lighter bg version
  const tagColors: Record<string, { bg: string; text: string }> = {
    "First Timer": { bg: "bg-[#00C896]/15", text: "text-[#00C896]" },
    "للمبتدئات": { bg: "bg-[#00C896]/15", text: "text-[#00C896]" },
    "Required": { bg: "bg-[#E39C82]/15", text: "text-[#E39C82]" },
    "مطلوب": { bg: "bg-[#E39C82]/15", text: "text-[#E39C82]" },
    "Beginner": { bg: "bg-[#60B5F4]/15", text: "text-[#60B5F4]" },
    "مبتدئ": { bg: "bg-[#60B5F4]/15", text: "text-[#60B5F4]" },
    "Intermediate": { bg: "bg-[#FF9500]/15", text: "text-[#FF9500]" },
    "متوسط": { bg: "bg-[#FF9500]/15", text: "text-[#FF9500]" },
    "Advanced": { bg: "bg-[#FF3B30]/15", text: "text-[#FF3B30]" },
    "متقدم": { bg: "bg-[#FF3B30]/15", text: "text-[#FF3B30]" },
    "All Levels": { bg: "bg-[#9B59B6]/15", text: "text-[#9B59B6]" },
    "جميع المستويات": { bg: "bg-[#9B59B6]/15", text: "text-[#9B59B6]" },
  };

  // Tags per class (index-based) - EN and AR
  const classTags: { en: string[]; ar: string[] }[] = [
    { en: ["First Timer", "Required"], ar: ["للمبتدئات", "مطلوب"] },           // Foundation
    { en: ["Beginner"], ar: ["مبتدئ"] },                                        // Beginners Reformer
    { en: ["Intermediate"], ar: ["متوسط"] },                                    // Intermediate Reformer
    { en: ["Intermediate", "Advanced"], ar: ["متوسط", "متقدم"] },              // Jump Reformer
    { en: ["Intermediate"], ar: ["متوسط"] },                                    // Chairs & Barrels
    { en: ["All Levels"], ar: ["جميع المستويات"] },                            // Cadillac Mix
  ];

  return (
    <section id="classes" className="section-padding bg-[var(--bg-cream)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
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
            {t.classes.label}
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl sm:text-5xl font-medium text-[var(--text-primary)] mb-4"
            style={{ fontFamily: isRTL ? "var(--font-body)" : "var(--font-rufina), Georgia, serif" }}
          >
            {t.classes.title} <span className={isRTL ? "" : "italic"}>{t.classes.titleHighlight}</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-[var(--text-secondary)] max-w-2xl mx-auto"
          >
            {t.classes.subtitle}
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.classes.classList.map((cls, index) => {
            const tags = classTags[index]?.[language] || classTags[index]?.en || [];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden card-hover cursor-pointer group"
              >
                {/* Neutral header strip */}
                <div className="h-1.5 bg-gray-200" />

                <div className="p-8">
                  {/* Tags row */}
                  <div className={`flex flex-wrap gap-2 mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    {tags.map((tagName, tagIndex) => {
                      const tagStyle = tagColors[tagName] || tagColors["All Levels"];
                      return (
                        <span key={tagIndex} className={`px-3 py-1.5 ${tagStyle.bg} ${tagStyle.text} rounded-full text-xs font-semibold`}>
                          {tagName}
                        </span>
                      );
                    })}
                    <span className="px-3 py-1.5 bg-gray-100 text-gray-500 rounded-full text-xs font-medium inline-flex items-center gap-1">
                      <Clock size={12} /> 50 {t.classes.duration}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3 group-hover:text-[var(--primary-dark)] transition-colors">
                    {cls.name}
                  </h3>
                  <p className="text-[var(--text-secondary)] text-sm mb-5 leading-relaxed line-clamp-3">
                    {cls.description}
                  </p>

                  {/* Perfect for badge */}
                  <div className={`flex items-center gap-2 pt-4 border-t border-gray-100 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <Users size={14} className="text-gray-400" />
                    <p className="text-xs text-gray-500 font-medium">
                      {t.classes.perfectFor} {cls.perfect}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Studio Gallery Section
function StudioSection() {
  const { t, isRTL } = useLanguage();

  return (
    <section id="studio" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.p
            variants={fadeInUp}
            className="text-[var(--primary-dark)] font-medium mb-3 tracking-wide text-sm uppercase"
          >
            {t.studio.label}
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl sm:text-5xl font-medium text-[var(--text-primary)] max-w-2xl leading-tight mb-4"
            style={{ fontFamily: isRTL ? "var(--font-body)" : "var(--font-rufina), Georgia, serif" }}
          >
            {t.studio.title} <span className={isRTL ? "" : "italic"}>{t.studio.titleHighlight}</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-[var(--text-secondary)] max-w-xl"
          >
            {t.studio.subtitle}
          </motion.p>
        </motion.div>

        <div className="gallery-grid">
          {t.studio.images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative rounded-2xl overflow-hidden group cursor-pointer"
            >
              <img
                src={image.image}
                alt={image.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className={`absolute bottom-4 ${isRTL ? 'right-4 left-4' : 'left-4 right-4'} text-white`}>
                <h4 className="font-medium mb-0.5">{image.label}</h4>
                <p className="text-white/70 text-xs">{image.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// First Visit Section
function FirstVisitSection() {
  const { t, isRTL } = useLanguage();
  const stepIcons = [Calendar, Clock, Heart];

  return (
    <section className="section-padding bg-[var(--bg-section)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`grid lg:grid-cols-2 gap-16 items-center ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.p
              variants={fadeInUp}
              className="text-[var(--primary-dark)] font-medium mb-3 tracking-wide text-sm uppercase"
            >
              {t.firstVisit.label}
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl sm:text-5xl font-medium text-[var(--text-primary)] leading-tight mb-6"
              style={{ fontFamily: isRTL ? "var(--font-body)" : "var(--font-rufina), Georgia, serif" }}
            >
              {t.firstVisit.title} <span className={isRTL ? "" : "italic"}>{t.firstVisit.titleHighlight}</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-[var(--text-secondary)] mb-10 text-lg"
            >
              {t.firstVisit.subtitle}
            </motion.p>

            <div className="space-y-8">
              {t.firstVisit.steps.map((step, index) => {
                const Icon = stepIcons[index];
                return (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="flex gap-5"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--primary)]/20 flex items-center justify-center">
                      <Icon size={22} className="text-[var(--primary-dark)]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-[var(--text-primary)] mb-1">{step.title}</h4>
                      <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl placeholder-studio overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className={`absolute -bottom-8 ${isRTL ? '-right-8' : '-left-8'} bg-white rounded-2xl p-6 shadow-lg max-w-xs`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <Check size={20} className="text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-sm">{t.firstVisit.whatToBring}</p>
                </div>
              </div>
              <ul className="text-sm text-[var(--text-secondary)] space-y-1">
                {t.firstVisit.bringItems.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Wellness Gift Section
function WellnessGiftSection() {
  const { t, isRTL, language } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;
  const whatsappMessage = language === "ar"
    ? "مرحبا! عندي سؤال عن هدية بيلاتوبيا"
    : "Hi! I'd like to ask about Pilatopia gift";
  const whatsappLink = `https://wa.me/966550614150?text=${encodeURIComponent(whatsappMessage)}`;
  const [occasionIndex, setOccasionIndex] = useState(0);

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
                buttonText={language === 'ar' ? 'تواصلي معنا' : 'Chat with Us'}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Testimonials Section
function TestimonialsSection() {
  const { t, isRTL } = useLanguage();

  return (
    <section className="section-padding bg-[var(--bg-cream)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
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
            {t.testimonials.label}
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl sm:text-5xl font-medium text-[var(--text-primary)] mb-4"
            style={{ fontFamily: isRTL ? "var(--font-body)" : "var(--font-rufina), Georgia, serif" }}
          >
            {t.testimonials.title} <span className={isRTL ? "" : "italic"}>{t.testimonials.titleHighlight}</span>
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {t.testimonials.list.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 card-hover"
            >
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-[var(--text-primary)] mb-6 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="pt-6 border-t border-[var(--border-light)]">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--primary-light)]" />
                  <div>
                    <p className="font-medium text-[var(--text-primary)]">{testimonial.name}</p>
                    <p className="text-xs text-[var(--text-secondary)]">{testimonial.role}</p>
                  </div>
                </div>
                <p className={`mt-4 text-xs text-[var(--primary-dark)] font-medium ${isRTL ? '' : 'italic'}`}>
                  {testimonial.transformation}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Intro Offer Section
function IntroOfferSection() {
  const { t, isRTL } = useLanguage();

  return (
    <section id="book" className="py-20 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] relative overflow-hidden">
      {/* Decorative elements */}
      <div className={`absolute top-0 ${isRTL ? 'right-0' : 'left-0'} w-64 h-64 bg-white/10 rounded-full blur-3xl`} />
      <div className={`absolute bottom-0 ${isRTL ? 'left-0' : 'right-0'} w-96 h-96 bg-white/5 rounded-full blur-3xl`} />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6"
          >
            <Award size={16} />
            {t.offer.badge}
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-4xl sm:text-5xl font-medium text-white mb-4"
            style={{ fontFamily: isRTL ? "var(--font-body)" : "var(--font-rufina), Georgia, serif" }}
          >
            {t.offer.title}
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-white/80 mb-10 text-lg max-w-xl mx-auto"
          >
            {t.offer.subtitle}
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-[var(--text-primary)] rounded-full hover:bg-gray-100 transition-all font-semibold group"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
                <div className="text-xs opacity-60">{t.offer.downloadOn}</div>
                <div className="text-sm font-semibold">{t.offer.appStore}</div>
              </div>
            </a>

            <a
              href="#"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-[var(--text-primary)] rounded-full hover:bg-gray-100 transition-all font-semibold group"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
              <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
                <div className="text-xs opacity-60">{t.offer.getItOn}</div>
                <div className="text-sm font-semibold">{t.offer.googlePlay}</div>
              </div>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// App Section (Consolidated)
function AppSection() {
  const { t, isRTL, language } = useLanguage();
  const featureIcons = [Calendar, Award, Users];
  const [isMobile, setIsMobile] = useState(false);
  const appStoreLink = "https://apps.apple.com/us/app/pilatopia/id6747145107";

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || /iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section id="mobile-app" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`grid lg:grid-cols-2 gap-16 items-center`}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className={isRTL ? 'lg:order-2' : ''}
          >
            <motion.p
              variants={fadeInUp}
              className="text-[var(--primary-dark)] font-medium mb-3 tracking-wide text-sm uppercase"
            >
              {t.app.label}
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl sm:text-5xl font-medium text-[var(--text-primary)] leading-tight mb-6"
              style={{ fontFamily: isRTL ? "var(--font-body)" : "var(--font-rufina), Georgia, serif" }}
            >
              {t.app.title} <span className={isRTL ? "" : "italic"}>{t.app.titleHighlight}</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-[var(--text-secondary)] mb-8 text-lg"
            >
              {t.app.subtitle}
            </motion.p>

            <motion.div variants={fadeInUp} className="space-y-4 mb-8">
              {t.app.features.map((text, index) => {
                const Icon = featureIcons[index];
                return (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--primary)]/20 flex items-center justify-center">
                      <Icon size={18} className="text-[var(--primary-dark)]" />
                    </div>
                    <span className="text-[var(--text-secondary)]">{text}</span>
                  </div>
                );
              })}
            </motion.div>

            <motion.div variants={fadeInUp}>
              {isMobile ? (
                /* Mobile: Direct App Store button */
                <a
                  href={appStoreLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-all text-sm font-medium"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  {t.offer.appStore}
                </a>
              ) : (
                /* Desktop: Static QR card (always visible) */
                <div className="inline-flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-200">
                  <div className="bg-white p-2 rounded-lg border border-gray-100">
                    <img
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=${encodeURIComponent(appStoreLink)}`}
                      alt="App Store QR"
                      className="w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-sm text-[var(--text-secondary)]">
                      {language === 'ar' ? 'امسحي الكود لتحميل التطبيق' : 'Scan to download'}
                    </p>
                    <a
                      href={appStoreLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-all text-sm font-medium"
                    >
                      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                      </svg>
                      {t.offer.appStore}
                    </a>
                  </div>
                </div>
              )}
            </motion.div>

            {/* Payment Methods */}
            <motion.div variants={fadeInUp} className="mt-8 pt-6 border-t border-[var(--border-light)]">
              <p className="text-xs text-[var(--text-secondary)] mb-4">{isRTL ? 'طرق الدفع المدعومة' : 'Supported Payment Methods'}</p>
              <div className={`flex flex-wrap items-center gap-2 ${isRTL ? '' : ''}`}>
                {/* Mada */}
                <div className="h-8 px-2 bg-white rounded-lg border border-gray-200 flex items-center justify-center">
                  <img src="/mada-logo.png" alt="Mada" className="h-5 w-auto object-contain" />
                </div>

                {/* Visa */}
                <div className="h-8 px-2 bg-white rounded-lg border border-gray-200 flex items-center justify-center">
                  <img src="/visa-logo.png" alt="Visa" className="h-5 w-auto object-contain" />
                </div>

                {/* Mastercard */}
                <div className="h-8 px-3 bg-white rounded-lg border border-gray-200 flex items-center justify-center">
                  <svg viewBox="0 0 32 20" className="h-4 w-auto">
                    <circle cx="11" cy="10" r="8" fill="#eb001b"/>
                    <circle cx="21" cy="10" r="8" fill="#f79e1b"/>
                    <path d="M16 3.5a8 8 0 0 0 0 13 8 8 0 0 0 0-13z" fill="#ff5f00"/>
                  </svg>
                </div>

                {/* Apple Pay */}
                <div className="h-8 px-3 bg-black rounded-lg flex items-center justify-center">
                  <svg viewBox="0 0 50 20" className="h-4 w-auto" fill="white">
                    <path d="M9.2 5.3C8.7 5.9 7.9 6.4 7.1 6.3C7 5.5 7.4 4.6 7.9 4C8.4 3.4 9.3 2.9 10 2.9C10.1 3.7 9.7 4.6 9.2 5.3ZM10 6.8C8.9 6.7 8 7.4 7.4 7.4C6.9 7.4 6.1 6.8 5.2 6.8C4.1 6.8 3.1 7.5 2.5 8.5C1.4 10.5 2.2 13.5 3.3 15.2C3.9 16 4.5 16.9 5.4 16.9C6.2 16.9 6.5 16.4 7.6 16.4C8.6 16.4 8.9 16.9 9.8 16.9C10.7 16.9 11.3 16.1 11.8 15.3C12.4 14.4 12.7 13.5 12.7 13.5C12.7 13.5 10.9 12.8 10.9 10.7C10.9 8.9 12.3 8.1 12.4 8C11.5 6.7 10.1 6.6 10 6.8Z"/>
                    <path d="M17.2 3.5V17H19.3V12.2H22.4C25.2 12.2 27.2 10.3 27.2 7.8C27.2 5.3 25.3 3.5 22.5 3.5H17.2ZM19.3 5.3H21.9C23.9 5.3 25 6.3 25 7.9C25 9.5 23.9 10.5 21.9 10.5H19.3V5.3ZM31.5 17.1C33 17.1 34.4 16.4 35 15.3H35.1V17H37V10.7C37 8.5 35.4 7.2 32.8 7.2C30.4 7.2 28.7 8.5 28.6 10.4H30.6C30.8 9.5 31.6 8.9 32.7 8.9C34 8.9 34.8 9.5 34.8 10.6V11.3L31.9 11.5C29.3 11.6 27.9 12.7 27.9 14.4C27.9 16.1 29.4 17.1 31.5 17.1ZM32.1 15.5C31 15.5 30.3 15 30.3 14.2C30.3 13.4 31 12.9 32.3 12.8L34.8 12.6V13.4C34.8 14.6 33.7 15.5 32.1 15.5ZM39.2 20C41.3 20 42.3 19.2 43.2 16.6L47 7.3H44.8L42.3 14.8H42.2L39.7 7.3H37.4L41.1 16.4L40.9 17C40.6 17.9 40.1 18.3 39.2 18.3C39 18.3 38.7 18.3 38.6 18.3V20C38.8 20 39.1 20 39.2 20Z"/>
                  </svg>
                </div>

                {/* Tamara */}
                <div className="h-8 px-2 bg-white rounded-lg border border-gray-200 flex items-center justify-center">
                  <img src="/tamara-logo.png" alt="Tamara" className="h-5 w-auto object-contain" />
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`relative flex justify-center ${isRTL ? 'lg:order-1' : ''}`}
          >
            <div className="relative w-64 h-[520px] bg-[var(--text-primary)] rounded-[3rem] p-3 shadow-2xl">
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-10" />
              <div className="w-full h-full bg-white rounded-[2.4rem] overflow-hidden">
                <img
                  src="/app-screenshot.png"
                  alt="Pilatopia App"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Location Section
function LocationSection() {
  const { t, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section className="section-padding bg-[var(--bg-section)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Google Maps Embed */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={`aspect-square lg:aspect-auto lg:h-full min-h-[400px] rounded-3xl overflow-hidden relative ${isRTL ? 'lg:order-2' : ''}`}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.123!2d46.6176!3d24.8607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5df12437abdf06e8!2sPilatopia%20Studio!5e0!3m2!1sen!2ssa!4v1703123456789"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Pilatopia Studio Location - Al Narjis, Riyadh"
              className="absolute inset-0"
            />
          </motion.div>

          {/* Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className={`flex flex-col justify-center ${isRTL ? 'lg:order-1' : ''}`}
          >
            <motion.p
              variants={fadeInUp}
              className="text-[var(--primary-dark)] font-medium mb-3 tracking-wide text-sm uppercase"
            >
              {t.location.label}
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl sm:text-5xl font-medium text-[var(--text-primary)] leading-tight mb-8"
              style={{ fontFamily: isRTL ? "var(--font-body)" : "var(--font-rufina), Georgia, serif" }}
            >
              {t.location.title}
            </motion.h2>

            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--primary)]/20 flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-[var(--primary-dark)]" />
                </div>
                <div>
                  <p className="font-medium text-[var(--text-primary)] mb-1">{t.location.address}</p>
                  <p className="text-[var(--text-secondary)] whitespace-pre-line">
                    {t.location.addressValue}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--primary)]/20 flex items-center justify-center flex-shrink-0">
                  <Clock size={20} className="text-[var(--primary-dark)]" />
                </div>
                <div>
                  <p className="font-medium text-[var(--text-primary)] mb-1">{t.location.hours}</p>
                  <p className="text-[var(--text-secondary)] whitespace-pre-line">
                    {t.location.hoursValue}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--primary)]/20 flex items-center justify-center flex-shrink-0">
                  <Car size={20} className="text-[var(--primary-dark)]" />
                </div>
                <div>
                  <p className="font-medium text-[var(--text-primary)] mb-1">{t.location.parking}</p>
                  <p className="text-[var(--text-secondary)]">
                    {t.location.parkingValue}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--primary)]/20 flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-[var(--primary-dark)]" />
                </div>
                <div>
                  <p className="font-medium text-[var(--text-primary)] mb-1">{t.location.contact}</p>
                  <p className="text-[var(--text-secondary)]">0550614150</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-8">
              <a
                href="https://www.google.com/maps/place/Pilatopia+Studio/data=!4m2!3m1!1s0x0:0x5df12437abdf06e8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[var(--primary-dark)] font-medium hover:gap-3 transition-all"
              >
                {t.location.getDirections} <ArrowIcon size={18} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// FAQ Section
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { t, isRTL } = useLanguage();

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

// Final CTA Section
function FinalCTASection() {
  const { t, isRTL, language } = useLanguage();
  const whatsappMessage = language === "ar"
    ? "مرحبا! عندي سؤال عن بيلاتوبيا"
    : "Hi! I have a question about Pilatopia";

  return (
    <section className="py-24 bg-[var(--bg-white)]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl sm:text-5xl font-medium text-[var(--text-primary)] mb-6"
            style={{ fontFamily: isRTL ? "var(--font-body)" : "var(--font-rufina), Georgia, serif" }}
          >
            {t.cta.title} <span className={isRTL ? "" : "italic"}>{t.cta.titleHighlight}</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-[var(--text-secondary)] mb-10 text-lg max-w-xl mx-auto"
          >
            {t.cta.subtitle}
          </motion.p>
          <motion.div variants={fadeInUp}>
            <WhatsAppContactCard
              message={whatsappMessage}
              buttonText={language === 'ar' ? 'تواصلي معنا' : 'Chat with Us'}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  const { t, isRTL } = useLanguage();

  return (
    <footer className="bg-[var(--text-primary)] text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <img src="/pilatopia-logo.png" alt="Pilatopia" className="h-6 w-auto brightness-0 invert" />
            </div>
            <p className="text-white/60 text-sm mb-6 leading-relaxed">
              {t.footer.tagline}
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/pilatopia.studio" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://tiktok.com/@pilatopia.studio.sa" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                </svg>
              </a>
              <a href="https://wa.me/966550614150" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Studio */}
          <div>
            <h4 className="font-medium mb-4">{t.footer.studio}</h4>
            <ul className="space-y-3 text-white/60 text-sm">
            <li><a href="#studio" className="hover:text-white transition-colors">{t.footer.gallery}</a></li>
              <li><a href="#classes" className="hover:text-white transition-colors">{t.footer.classes}</a></li>
              
              <li><a href="#gift" className="hover:text-white transition-colors">{t.footer.giftCards}</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-medium mb-4">{t.footer.support}</h4>
            <ul className="space-y-3 text-white/60 text-sm">
              <li><a href="#faq" className="hover:text-white transition-colors">{t.footer.faq}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t.footer.privacy}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t.footer.terms}</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium mb-4">{t.footer.contact}</h4>
            <ul className="space-y-3 text-white/60 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={14} />
                <a href="mailto:jawaher@pilatopia.studio" className="hover:text-white transition-colors">jawaher@pilatopia.studio</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} />
                <a href="tel:+966550614150" className="hover:text-white transition-colors">0550614150</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={14} />
                <span>{isRTL ? 'حي النرجس، الرياض' : 'Al Narjis, Riyadh'}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="text-white/40 text-xs">{t.footer.weAccept}</span>
            {["Mada", "Visa", "Mastercard", "Apple Pay", "Tamara"].map((method) => (
              <span key={method} className="px-3 py-1 bg-white/10 rounded text-xs text-white/60">{method}</span>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 text-center text-white/40 text-sm">
          <p>&copy; 2025 Pilatopia. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}

// Main Page Component
function Home() {
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);
  const [isMembershipOpen, setIsMembershipOpen] = useState(false);

  const openLeadForm = () => setIsLeadFormOpen(true);
  const closeLeadForm = () => setIsLeadFormOpen(false);

  const openMembership = () => setIsMembershipOpen(true);
  const closeMembership = () => setIsMembershipOpen(false);

  return (
    <LeadFormContext.Provider value={{ openLeadForm }}>
      <MembershipContext.Provider value={{ openMembership }}>
        <main>
          <Navigation />
          <HeroSection />

          <StudioSection />
          <WellnessGiftSection />
          <PricingSection />
          <TestimonialsSection />
          <AppSection />

          <LocationSection />
          <FinalCTASection />
          <ClassesSection />
          <FAQSection />

          <Footer />
        </main>
        <LeadFormModal isOpen={isLeadFormOpen} onClose={closeLeadForm} />
        <MembershipModal isOpen={isMembershipOpen} onClose={closeMembership} />
      </MembershipContext.Provider>
    </LeadFormContext.Provider>
  );
}

// Wrapped with LanguageProvider for Astro
import { LanguageProvider } from "@/lib/language-context";

export default function HomePage() {
  return (
    <LanguageProvider>
      <Home />
    </LanguageProvider>
  );
}
