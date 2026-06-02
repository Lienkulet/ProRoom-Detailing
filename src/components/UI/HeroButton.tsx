const ims = "font-[family-name:var(--font-roboto-condensed)] italic font-bold uppercase";

interface HeroButtonProps {
  href: string;
  filled?: boolean;
  children: React.ReactNode;
}

export default function HeroButton({ href, filled = false, children }: HeroButtonProps) {
  return (
    <a
      href={href}
      className={`${ims} hero-btn ${filled ? "hero-btn-filled" : "hero-btn-outline"} flex items-center gap-3 px-8 py-4`}
      style={{
        fontSize: "clamp(13px, 1.1vw, 15px)",
        textDecoration: "none",
      }}
    >
      {children}
    </a>
  );
}
