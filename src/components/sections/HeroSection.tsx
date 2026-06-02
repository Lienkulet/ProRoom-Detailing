'use client';
import HeroButton from "@/components/UI/HeroButton";

const ims = "font-[family-name:var(--font-roboto-condensed)] italic font-bold uppercase";

const fadeUp = (delay: string): React.CSSProperties => ({
  opacity: 0,
  animation: `hero-fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay} forwards`,
});

export default function HeroSection() {
  return (
    <section
      className="relative flex items-center min-h-screen w-full overflow-hidden"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      {/* Ken Burns background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/gallery/hero4.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          transformOrigin: "center center",
          willChange: "transform",
          animation: "hero-ken-burns 16s ease-in-out infinite alternate",
        }}
      />

      {/* Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(rgba(0,0,0,0.52) 0%, rgba(0,0,0,0.38) 50%, rgba(0,0,0,0.68) 100%)" }}
      />

      {/* Bottom fade */}
      <div
        className="absolute inset-x-0 bottom-0 h-40 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #0a0a0a)", zIndex: 2 }}
      />

      {/* Content */}
      <div className="relative max-w-350 mx-auto px-5 md:px-10 w-full pt-24 pb-32" style={{ zIndex: 3 }}>

        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-6" style={fadeUp("0.1s")}>
          <div style={{ width: 32, height: 2, background: "#b0b0b0" }} />
          <span style={{ color: "#b0b0b0", fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase" }}>
            Pro Room Detailing
          </span>
        </div>

        {/* Headline */}
        <h1
          className={`${ims} text-white`}
          style={{
            ...fadeUp("0.25s"),
            fontSize: "clamp(48px, 8vw, 120px)",
            lineHeight: 0.95,
            letterSpacing: "-0.04em",
            maxWidth: "14ch",
            margin: 0,
            textShadow: "0 4px 40px rgba(0,0,0,0.5)",
          }}
        >
          Your car,<br />
          <span style={{ color: "#b0b0b0" }}>perfected</span>
        </h1>

        {/* Subtitle */}
        <p
          style={{
            ...fadeUp("0.42s"),
            color: "rgba(255,255,255,0.55)",
            fontSize: "clamp(15px, 1.6vw, 19px)",
            lineHeight: 1.6,
            marginTop: 28,
            maxWidth: "46ch",
          }}
        >
          We offer professional detailing, ceramic coatings and paint correction.
          Every detail handled with precision.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-4 mt-10" style={fadeUp("0.58s")}>
          <HeroButton href="#contact" filled>
            Book a service
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </HeroButton>
          <HeroButton href="#services">View services</HeroButton>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ ...fadeUp("0.9s"), color: "rgba(255,255,255,0.3)", zIndex: 3 }}
      >
        <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>
          Scroll
        </span>
        <svg
          width="16" height="20" viewBox="0 0 16 20" fill="none"
          style={{ animation: "hero-bounce 1.8s ease-in-out 1.8s infinite" }}
        >
          <path d="M8 2v12M3 9l5 6 5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
}
