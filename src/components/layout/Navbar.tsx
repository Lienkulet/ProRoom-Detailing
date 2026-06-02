'use client';
import { useEffect, useState } from "react";
import Image from "next/image";
import HeroButton from "@/components/UI/HeroButton";

const ims = "font-[family-name:var(--font-roboto-condensed)] italic font-bold uppercase";

const links = [
  { label: "Services", href: "#services" },
  { label: "Gallery",  href: "#gallery"  },
  { label: "Testimonials",  href: "#testimonials"  },
  { label: "Contact",  href: "#contact"  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 inset-x-0 z-50"
      style={{
        background: scrolled
          ? "rgba(8,8,8,0.88)"
          : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "1px solid transparent",
        transition: "background 0.4s ease, backdrop-filter 0.4s ease, border-color 0.4s ease",
      }}
    >
      <div className="max-w-350 mx-auto px-5 md:px-10 flex items-center justify-between h-16 md:h-20">

        {/* Logo */}
        <a href="/" className="flex items-center gap-3" style={{ textDecoration: "none" }}>
          <Image
            src="/gallery/logo.jpg"
            alt="Pro Room Detailing logo"
            width={60}
            height={60}
            className="object-contain rounded-sm"
            style={{ height: 60, width: "auto" }}
            priority
          />
          <span
            className={`${ims} text-white hidden sm:block`}
            style={{ fontSize: "clamp(13px, 1.3vw, 16px)", letterSpacing: "-0.01em" }}
          >
            Pro Room<span style={{ color: "#b0b0b0" }}> Detailing</span>
          </span>
        </a>

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                color: "rgba(255,255,255,0.62)",
                fontSize: 14,
                fontWeight: 500,
                textDecoration: "none",
                letterSpacing: "0.01em",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#ffffff"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.62)"; }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <HeroButton href="#contact" filled>
            Book Now
          </HeroButton>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
        >
          <span
            style={{
              display: "block", height: 1.5, background: "#fff", borderRadius: 2,
              transition: "transform 0.3s ease, opacity 0.3s ease",
              transform: menuOpen ? "translateY(5px) rotate(45deg)" : "none",
            }}
          />
          <span
            style={{
              display: "block", height: 1.5, background: "#fff", borderRadius: 2,
              transition: "opacity 0.3s ease",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              display: "block", height: 1.5, background: "#fff", borderRadius: 2,
              transition: "transform 0.3s ease, opacity 0.3s ease",
              transform: menuOpen ? "translateY(-5px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        style={{
          maxHeight: menuOpen ? 400 : 0,
          overflow: "hidden",
          transition: "max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          background: "rgba(8,8,8,0.96)",
          backdropFilter: "blur(14px)",
          borderTop: menuOpen ? "1px solid rgba(255,255,255,0.07)" : "1px solid transparent",
        }}
      >
        <nav className="flex flex-col px-5 py-6 gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className={`${ims} text-white`}
              style={{
                fontSize: 22,
                textDecoration: "none",
                letterSpacing: "-0.02em",
                color: "rgba(255,255,255,0.8)",
              }}
            >
              {l.label}
            </a>
          ))}
          <div className="pt-2">
            <HeroButton href="#contact" filled>Get a quote</HeroButton>
          </div>
        </nav>
      </div>
    </header>
  );
}
