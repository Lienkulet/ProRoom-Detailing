'use client';
import { motion } from "framer-motion";
import { PriceListItem } from "@/data/pricelist";

const ims = "font-[family-name:var(--font-roboto-condensed)] italic font-bold uppercase";

interface Props {
  item: PriceListItem;
  index: number;
  animDelay?: number;
  exitDelay?: number;
}

export default function PricelistItemCard({ item, animDelay, exitDelay }: Props) {
  // Use framer whileInView only for initially visible items (no CSS animation active)
  const isInitial = animDelay === undefined && exitDelay === undefined;

  return (
    <motion.div
      className={`group flex items-center gap-6 py-7 px-2${
        exitDelay !== undefined
          ? " pricelist-item-exit"
          : animDelay !== undefined
          ? " pricelist-item-enter"
          : ""
      }`}
      style={{
        borderTop: "1px solid rgba(255,255,255,0.1)",
        transition: "border-color 0.25s ease",
        ...(exitDelay !== undefined
          ? { animationDelay: `${exitDelay}ms` }
          : animDelay !== undefined
          ? { animationDelay: `${animDelay}ms` }
          : {}),
      }}
      {...(isInitial && {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
      })}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.2)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.1)";
      }}
    >
      {/* Left: category badge + name + description */}
      <div className="flex flex-col gap-2 flex-1 min-w-0">
        <div className="flex items-center gap-3">
          {item.category && (
            <span
              style={{
                background: "rgba(176,176,176,0.12)",
                border: "1px solid rgba(176,176,176,0.25)",
                color: "#b0b0b0",
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                padding: "3px 9px",
                borderRadius: 4,
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
            >
              {item.category}
            </span>
          )}
          <h3
            className={ims}
            style={{
              color: "#ffffff",
              fontSize: "clamp(18px, 2vw, 28px)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              margin: 0,
              transition: "letter-spacing 0.3s ease",
            }}
          >
            {item.name}
          </h3>
        </div>

        {item.description && (
          <p
            style={{
              color: "rgba(255,255,255,0.35)",
              fontSize: 12,
              lineHeight: 1.5,
              margin: 0,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              maxWidth: "55ch",
            }}
          >
            {item.description}
          </p>
        )}
      </div>

      {/* Right: estimate + price + button */}
      <div className="flex items-center gap-6 shrink-0">
        <div className="flex flex-col items-end gap-1">
          <span
            style={{
              color: "rgba(255,255,255,0.3)",
              fontSize: 9,
              fontWeight: 700,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
            }}
          >
            Estimate
          </span>
          <span
            className={ims}
            style={{
              color: "#ffffff",
              fontSize: "clamp(18px, 2vw, 28px)",
              letterSpacing: "0.01em",
              lineHeight: 1,
            }}
          >
            {item.price}
          </span>
        </div>

        {/* + button */}
        <button
          className="pricelist-plus-btn flex items-center justify-center shrink-0"
          style={{
            width: 44,
            height: 44,
            border: "1px solid rgba(255,255,255,0.18)",
            borderRadius: 8,
            background: "transparent",
            color: "rgba(255,255,255,0.6)",
            cursor: "pointer",
            transition: "background 0.2s ease, border-color 0.2s ease, color 0.2s ease",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.08)";
            (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.35)";
            (e.currentTarget as HTMLButtonElement).style.color = "#ffffff";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = "transparent";
            (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.18)";
            (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.6)";
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </motion.div>
  );
}
