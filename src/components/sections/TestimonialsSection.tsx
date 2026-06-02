'use client';
import { useState, useRef, useCallback } from "react";
import { testimonials } from "@/data/testimonials";
import TestimonialCard from "@/components/cards/TestimonialCard";
import Container from "@/components/layout/Container";
import Navbtn from "@/components/UI/Navbtn";
import AnimateIn from "@/components/UI/AnimateIn";

const TOTAL = testimonials.length;
const CARD_W = 480;
const SCALE_GHOST = 0.72;
const SLOT_OFFSET_1 = 444;
const SLOT_OFFSET_2 = SLOT_OFFSET_1 * 2;
const STAGE_H = 380; 

let uid = 0;

type CardItem = {
  id: number;
  idx: number;
  slot: number; 
  ready: boolean;
};

function slotTransform(slot: number) {
  const abs = Math.abs(slot);
  const tx = slot === 0 ? 0 : (slot / abs) * (abs === 1 ? SLOT_OFFSET_1 : SLOT_OFFSET_2);
  const scale = abs === 0 ? 1 : abs === 1 ? SCALE_GHOST : 0.58;
  const opacity = abs === 0 ? 1 : abs === 1 ? 0.55 : 0;
  const zIndex = abs === 0 ? 10 : abs === 1 ? 5 : 1;
  return { tx, scale, opacity, zIndex };
}

function mkCard(idx: number, slot: number, ready = true): CardItem {
  return { id: uid++, idx, slot, ready };
}

const ims = "font-[family-name:var(--font-roboto-condensed)] italic font-bold uppercase";

export default function TestimonialsSection() {
  const [cards, setCards] = useState<CardItem[]>(() => [
    mkCard((TOTAL - 1) % TOTAL, -1),
    mkCard(0, 0),
    mkCard(1 % TOTAL, 1),
  ]);
  const [centerIdx, setCenterIdx] = useState(0);
  const busy = useRef(false);

  const navigate = useCallback(
    (dir: "next" | "prev") => {
      if (busy.current) return;
      busy.current = true;

      const delta = dir === "next" ? -1 : 1;
      const entrySlot = dir === "next" ? 2 : -2;
      const exitSlot = dir === "next" ? -2 : 2;
      const newCenter = (centerIdx + (dir === "next" ? 1 : -1) + TOTAL) % TOTAL;
      // The card 2 positions ahead/behind becomes the new ghost on entry side
      const entryIdx =
        dir === "next"
          ? (centerIdx + 2) % TOTAL
          : (centerIdx - 2 + TOTAL) % TOTAL;

      // 1 — Add incoming card at off-screen slot, no transition yet
      setCards((prev) => [...prev, mkCard(entryIdx, entrySlot, false)]);

      // 2 — Next paint: enable transitions, shift every card one slot
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setCards((prev) =>
            prev.map((c) => ({ ...c, ready: true, slot: c.slot + delta }))
          );
          setCenterIdx(newCenter);
        });
      });

      // 3 — After transition completes: remove the card that exited
      setTimeout(() => {
        setCards((prev) => prev.filter((c) => c.slot !== exitSlot));
        busy.current = false;
      }, 720);
    },
    [centerIdx]
  );

  return (
    <section style={{ backgroundColor: "#0a0a0a", padding: "80px 0", overflow: "hidden" }} id="testimonials">
      {/* Heading */}
      <Container>
      <AnimateIn variant="fade-up" className="text-center" style={{ marginBottom: 56 }}>
        <h2
          className={`${ims} text-white leading-none`}
          style={{ fontSize: "clamp(36px, 5vw, 60px)", letterSpacing: "-0.15rem" }}
        >
          What our clients say
        </h2>
        <p style={{ color: "rgba(255,255,255,0.42)", marginTop: 12, fontSize: 15 }}>
          Real reviews from real customers who trust us with their vehicles.
        </p>
      </AnimateIn>

      {/* Stage — full width so cards slide in/out at viewport edges */}
      <AnimateIn variant="fade-up" delay={0.15} style={{ position: "relative", height: STAGE_H }}>
        {cards.map((card) => {
          const { tx, scale, opacity, zIndex } = slotTransform(card.slot);
          const isCenter = card.slot === 0;
          return (
            <div
              key={card.id}
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                width: CARD_W,
                // translateX(-50%) centers the card on left:50%, then tx offsets by slot
                transform: `translateX(calc(-50% + ${tx}px)) translateY(-50%) scale(${scale})`,
                opacity,
                zIndex,
                transition: card.ready
                  ? "transform 0.72s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.55s cubic-bezier(0.16, 1, 0.3, 1)"
                  : "none",
                pointerEvents: isCenter ? "auto" : "none",
                willChange: "transform, opacity",
              }}
            >
              <TestimonialCard testimonial={testimonials[card.idx]} active={isCenter} />
            </div>
          );
        })}
      </AnimateIn>

      {/* Navigation */}
      <AnimateIn variant="fade-up" delay={0.3} style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
        marginTop: 40,
      }}>
        <Navbtn onClick={() => navigate("prev")} dir="prev" />
        <span
          style={{
            color: "rgba(255,255,255,0.45)",
            fontSize: 14,
            fontVariantNumeric: "tabular-nums",
            minWidth: 40,
            textAlign: "center",
          }}
        >
          {centerIdx + 1} / {TOTAL}
        </span>
        <Navbtn onClick={() => navigate("next")} dir="next" />
      </AnimateIn>
      </Container>
    </section>
  );
}


