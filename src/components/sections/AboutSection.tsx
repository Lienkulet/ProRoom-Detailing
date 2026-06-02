'use client';
import Image from "next/image";
import { useTranslation } from "react-i18next";
import "@/i18n/config";
import AnimateIn from "@/components/UI/AnimateIn";
import HeroButton from "@/components/UI/HeroButton";

const ims = "font-[family-name:var(--font-roboto-condensed)] italic font-bold uppercase";

const stats = [
  { valueKey: "about.stat1Value", labelKey: "about.stat1Label" },
  { valueKey: "about.stat2Value", labelKey: "about.stat2Label" },
  { valueKey: "about.stat3Value", labelKey: "about.stat3Label" },
];

export default function AboutSection() {
  const { t } = useTranslation();

  return (
    <section style={{ backgroundColor: "#0a0a0a" }} id="about">
      <div className="max-w-350 mx-auto px-5 md:px-10 py-20 md:py-28">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">

          {/* Image */}
          <AnimateIn variant="slide-left" className="w-full md:w-[48%] shrink-0">
            <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "4/5" }}>
              <Image
                src="/gallery/hoodie.png"
                alt="Pro Room Detailing workshop"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 48vw"
              />
              {/* Subtle dark vignette */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.55) 100%)",
                }}
              />
            </div>
          </AnimateIn>

          {/* Text content */}
          <div className="flex flex-col gap-8 w-full md:w-[52%]">

            {/* Eyebrow */}
            <AnimateIn variant="fade-up" delay={0.1}>
              <div className="flex items-center gap-3">
                <div style={{ width: 28, height: 2, background: "#b0b0b0", flexShrink: 0 }} />
                <span
                  style={{
                    color: "#b0b0b0",
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                  }}
                >
                  {t("about.eyebrow")}
                </span>
              </div>
            </AnimateIn>

            {/* Headline */}
            <AnimateIn variant="fade-up" delay={0.18}>
              <h2
                className={`${ims} text-white`}
                style={{
                  fontSize: "clamp(40px, 5.5vw, 76px)",
                  lineHeight: 0.95,
                  letterSpacing: "-0.04em",
                  margin: 0,
                  whiteSpace: "pre-line",
                }}
              >
                {t("about.title")}
              </h2>
            </AnimateIn>

            {/* Body */}
            <AnimateIn variant="fade-up" delay={0.26}>
              <p
                style={{
                  color: "rgba(255,255,255,0.52)",
                  fontSize: "clamp(15px, 1.4vw, 17px)",
                  lineHeight: 1.75,
                  whiteSpace: "pre-line",
                  margin: 0,
                }}
              >
                {t("about.body")}
              </p>
            </AnimateIn>

            {/* Stats */}
            <AnimateIn variant="fade-up" delay={0.34}>
              <div
                className="grid grid-cols-3 gap-4"
                style={{
                  borderTop: "1px solid rgba(255,255,255,0.08)",
                  paddingTop: 28,
                }}
              >
                {stats.map(({ valueKey, labelKey }) => (
                  <div key={valueKey} className="flex flex-col gap-1">
                    <span
                      className={ims}
                      style={{
                        color: "#ffffff",
                        fontSize: "clamp(26px, 3vw, 42px)",
                        lineHeight: 1,
                        letterSpacing: "-0.03em",
                      }}
                    >
                      {t(valueKey)}
                    </span>
                    <span
                      style={{
                        color: "rgba(255,255,255,0.38)",
                        fontSize: 12,
                        fontWeight: 600,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                      }}
                    >
                      {t(labelKey)}
                    </span>
                  </div>
                ))}
              </div>
            </AnimateIn>

            {/* CTA */}
            <AnimateIn variant="fade-up" delay={0.42}>
              <HeroButton href="#services">{t("about.cta")}</HeroButton>
            </AnimateIn>

          </div>
        </div>
      </div>
    </section>
  );
}
