'use client';
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import "@/i18n/config";
import HeroButton from "@/components/UI/HeroButton";
import HamburgerIcon from "@/components/icons/HamburgerIcon";

const ims = "font-[family-name:var(--font-roboto-condensed)] italic font-bold uppercase";

const LANGS = [
  { code: "en", label: "EN", full: "English" },
  { code: "ro", label: "RO", full: "Română" },
  { code: "ru", label: "RU", full: "Русский" },
];

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  const links = [
    { label: t("nav.services"),     href: "#services"     },
    { label: t("nav.about"),        href: "#about"        },
    { label: t("nav.gallery"),      href: "#gallery"      },
    { label: t("nav.testimonials"), href: "#testimonials" },
    { label: t("nav.contact"),      href: "#contact"      },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close lang dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const currentLang = LANGS.find((l) => l.code === i18n.language) ?? LANGS[0];

  return (
    <>
    <motion.header
      className="fixed top-0 inset-x-0 z-50"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      style={{
        background: scrolled ? "rgba(8,8,8,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "1px solid transparent",
        transition: "background 0.4s ease, backdrop-filter 0.4s ease, border-color 0.4s ease",
      }}
    >
      <div className="max-w-350 mx-auto px-5 md:px-10 flex items-center justify-between h-16 md:h-20">

        {/* Logo */}
        <motion.a
          href="/"
          className="flex items-center gap-3"
          style={{ textDecoration: "none" }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
        >
          <Image
            src="/gallery/logo.jpg"
            alt="Pro Room Detailing logo"
            width={60} height={60}
            className="object-contain rounded-sm"
            style={{ height: 60, width: "auto" }}
            priority
          />
          <span className={`${ims} text-white`} style={{ fontSize: "clamp(12px, 1.3vw, 16px)", letterSpacing: "-0.01em" }}>
            Pro Room<span style={{ color: "#b0b0b0" }}> Detailing</span>
          </span>
        </motion.a>

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l, i) => (
            <motion.a
              key={l.href}
              href={l.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.4 + i * 0.07 }}
              style={{ color: "rgba(255,255,255,0.62)", fontSize: 14, fontWeight: 500, textDecoration: "none", letterSpacing: "0.01em", transition: "color 0.2s ease" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#ffffff"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.62)"; }}
            >
              {l.label}
            </motion.a>
          ))}
        </nav>

        {/* Right side: lang picker + CTA */}
        <motion.div
          className="hidden md:flex items-center gap-3"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
        >
          {/* Language picker */}
          <div ref={langRef} style={{ position: "relative" }}>
            <button
              onClick={() => setLangOpen((v) => !v)}
              style={{
                display: "flex", alignItems: "center", gap: 6,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.14)",
                borderRadius: 8, padding: "6px 12px",
                color: "rgba(255,255,255,0.75)", fontSize: 12, fontWeight: 700,
                letterSpacing: "0.1em", cursor: "pointer",
                transition: "background 0.2s ease, border-color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.1)";
                (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.25)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.06)";
                (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.14)";
              }}
            >
              {currentLang.label}
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ opacity: 0.5, transition: "transform 0.2s", transform: langOpen ? "rotate(180deg)" : "none" }}>
                <path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    position: "absolute", top: "calc(100% + 8px)", right: 0,
                    background: "rgba(14,14,14,0.96)", backdropFilter: "blur(16px)",
                    border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10,
                    overflow: "hidden", minWidth: 130, zIndex: 100,
                    boxShadow: "0 16px 48px rgba(0,0,0,0.6)",
                  }}
                >
                  {LANGS.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => { i18n.changeLanguage(lang.code); setLangOpen(false); }}
                      style={{
                        display: "flex", alignItems: "center", justifyContent: "space-between",
                        width: "100%", padding: "10px 14px", background: "none",
                        border: "none", cursor: "pointer", textAlign: "left",
                        color: lang.code === i18n.language ? "#ffffff" : "rgba(255,255,255,0.55)",
                        fontSize: 13, fontWeight: lang.code === i18n.language ? 700 : 400,
                        transition: "background 0.15s ease, color 0.15s ease",
                      }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.07)"; (e.currentTarget as HTMLButtonElement).style.color = "#fff"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "none"; (e.currentTarget as HTMLButtonElement).style.color = lang.code === i18n.language ? "#ffffff" : "rgba(255,255,255,0.55)"; }}
                    >
                      <span>{lang.full}</span>
                      <span style={{ color: "rgba(255,255,255,0.35)", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em" }}>{lang.label}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <HeroButton href="#contact" filled>{t("nav.bookNow")}</HeroButton>
        </motion.div>

        {/* Mobile hamburger */}
        <motion.button
          className="md:hidden flex items-center justify-center w-10 h-10"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
        >
          <HamburgerIcon open={menuOpen} />
        </motion.button>
      </div>

    </motion.header>

    {/* Mobile menu — rendered outside header so framer transform doesn't confine fixed positioning */}
    <AnimatePresence>
      {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 40,
              background: "rgba(5,5,5,0.97)",
              backdropFilter: "blur(20px)",
              display: "flex",
              flexDirection: "column",
              overflowY: "auto",
            }}
          >
            {/* Spacer so links start below the fixed navbar header */}
            <div style={{ height: 64, flexShrink: 0 }} />

            {/* Links */}
            <nav className="flex flex-col px-6 pt-10 pb-6 gap-2 flex-1">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className={ims}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: 0.05 + i * 0.07 }}
                  style={{
                    fontSize: "clamp(32px, 9vw, 48px)",
                    textDecoration: "none",
                    color: "rgba(255,255,255,0.85)",
                    letterSpacing: "-0.03em",
                    lineHeight: 1.2,
                    paddingBottom: 16,
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>

            {/* Bottom: lang + CTA */}
            <motion.div
              className="flex flex-col gap-4 px-6 pb-10"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            >
              {/* Lang switcher */}
              <div className="flex gap-2">
                {LANGS.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => i18n.changeLanguage(lang.code)}
                    style={{
                      padding: "6px 16px", borderRadius: 8, fontSize: 12, fontWeight: 700,
                      letterSpacing: "0.1em", cursor: "pointer", border: "1px solid",
                      background: lang.code === i18n.language ? "#ffffff" : "transparent",
                      color: lang.code === i18n.language ? "#0a0a0a" : "rgba(255,255,255,0.45)",
                      borderColor: lang.code === i18n.language ? "#ffffff" : "rgba(255,255,255,0.18)",
                      transition: "all 0.2s ease",
                    }}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>

              <HeroButton href="#contact" filled>{t("nav.getQuote")}</HeroButton>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
