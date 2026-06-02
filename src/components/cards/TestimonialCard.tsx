import { Testimonial } from "@/data/testimonials";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

interface Props {
  testimonial: Testimonial;
  active?: boolean;
}

export default function TestimonialCard({ testimonial, active = true }: Props) {
  return (
    <div
      style={{
        background: active ? "#111111" : "#0d0d0d",
        border: `1px solid ${active ? "rgba(255,255,255,0.13)" : "rgba(255,255,255,0.07)"}`,
        boxShadow: active
          ? "0 32px 80px rgba(0,0,0,0.85), 0 0 0 1px rgba(255,255,255,0.04)"
          : "none",
        borderRadius: 18,
        padding: 32,
        display: "flex",
        flexDirection: "column",
        transition: "box-shadow 0.5s ease, border-color 0.5s ease, background 0.5s ease",
      }}
    >
      {/* Quote mark */}
      <span
        style={{
          color: active ? "#b0b0b0" : "rgba(176,176,176,0.5)",
          fontSize: active ? 52 : 40,
          fontFamily: "Georgia, serif",
          lineHeight: 1,
          display: "block",
          marginBottom: 14,
          transition: "font-size 0.4s ease, color 0.4s ease",
        }}
      >
        &ldquo;
      </span>

      {/* Review */}
      <p
        style={{
          color: active ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0.55)",
          fontSize: 16,
          lineHeight: 1.7,
          fontWeight: active ? 500 : 400,
          margin: 0,
          flex: 1,
          display: "-webkit-box",
          WebkitLineClamp: 5,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          transition: "color 0.4s ease",
        }}
      >
        {testimonial.review}
      </p>

      {/* Author */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          marginTop: 24,
          paddingTop: 20,
          borderTop: `1px solid ${active ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.04)"}`,
        }}
      >
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: active ? "rgba(176,176,176,0.13)" : "rgba(176,176,176,0.06)",
            border: `1.5px solid ${active ? "rgba(176,176,176,0.35)" : "rgba(176,176,176,0.15)"}`,
            color: active ? "#fff" : "rgba(255,255,255,0.5)",
            fontWeight: 700,
            fontSize: 13,
            transition: "all 0.4s ease",
          }}
        >
          {getInitials(testimonial.name)}
        </div>
        <div>
          <p
            style={{
              color: active ? "#ffffff" : "rgba(255,255,255,0.55)",
              fontWeight: 600,
              margin: 0,
              fontSize: 14,
              transition: "color 0.4s ease",
            }}
          >
            {testimonial.name}
          </p>
          <p
            style={{
              color: active ? "rgba(255,255,255,0.38)" : "rgba(255,255,255,0.2)",
              margin: 0,
              fontSize: 12,
              marginTop: 2,
              transition: "color 0.4s ease",
            }}
          >
            Verified Customer
          </p>
        </div>
      </div>
    </div>
  );
}
