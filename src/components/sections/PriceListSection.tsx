'use client';
import { useState, useRef } from "react";
import { priceList } from "@/data/pricelist";
import PricelistItemCard from "@/components/cards/PricelistItemCard";
import Container from "@/components/layout/Container";
import AnimateIn from "@/components/UI/AnimateIn";

const ims = "font-[family-name:var(--font-roboto-condensed)] italic font-bold uppercase";
const INITIAL_COUNT = 5;

export default function PricelistSection() {
  const [expanded, setExpanded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const visible = expanded ? priceList : priceList.slice(0, INITIAL_COUNT);
  const remaining = priceList.length - INITIAL_COUNT;

  function collapse() {
    setExpanded(false);
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundColor: "#0a0a0a",
        backgroundImage: `
          linear-gradient(rgba(10,10,10,0.82) 0%, rgba(10,10,10,0.78) 50%, rgba(10,10,10,0.92) 100%),
          url('/gallery/mustang.avif')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
      id="services"
    >
      <Container>
        <AnimateIn variant="fade-up" className="text-center mb-10">
          <h2
            className={`${ims} text-white leading-none`}
            style={{ fontSize: "clamp(36px, 5vw, 60px)", letterSpacing: "-0.15rem" }}
          >
            Services & Pricing
          </h2>
          <p style={{ color: "rgba(255,255,255,0.42)", marginTop: 12, fontSize: 15 }}>
            Transparent pricing — no surprises, only results.
          </p>
        </AnimateIn>

        <div style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
          {visible.map((item, i) => (
            <PricelistItemCard
              key={item.name}
              item={item}
              index={i}
              animDelay={expanded && i >= INITIAL_COUNT ? (i - INITIAL_COUNT) * 70 : undefined}
            />
          ))}
        </div>

        {/* Fade-out gradient + View More button */}
        {!expanded && (
          <div
            className="relative flex flex-col items-center"
            style={{
              marginTop: -80,
              paddingTop: 80,
              background: "linear-gradient(to bottom, transparent 0%, rgba(10,10,10,0.97) 60%)",
            }}
          >
            <button
              onClick={() => setExpanded(true)}
              className={`${ims} flex items-center gap-3 px-8 py-4`}
              style={{
                background: "#141414",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 999,
                color: "#ffffff",
                fontSize: "clamp(13px, 1.2vw, 16px)",
                cursor: "pointer",
                transition: "background 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "#1e1e1e";
                (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.24)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 32px rgba(0,0,0,0.5)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "#141414";
                (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.12)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
              }}
            >
              <span>View {remaining} more services</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        )}

        {expanded && (
          <div className="flex justify-center mt-6">
            <button
              onClick={collapse}
              className={`${ims} flex items-center gap-3 px-8 py-4`}
              style={{
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 999,
                color: "rgba(255,255,255,0.45)",
                fontSize: "clamp(13px, 1.2vw, 16px)",
                cursor: "pointer",
                transition: "border-color 0.2s ease, color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.18)";
                (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.7)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.08)";
                (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.45)";
              }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 10l5-5 5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Show less</span>
            </button>
          </div>
        )}
      </Container>
    </section>
  );
}
