'use client';
import Image from "next/image";
import { useTranslation } from "react-i18next";
import "@/i18n/config";
import Container from "@/components/layout/Container";
import AnimateIn from "@/components/UI/AnimateIn";

const ims = "font-[family-name:var(--font-roboto-condensed)] italic font-bold uppercase";

export default function GallerySection() {
  const { t } = useTranslation();
  return (
    <section style={{ backgroundColor: "#0a0a0a", overflow: "hidden" }} id="gallery">
      <Container>
        <AnimateIn variant="fade-up" className="text-center mb-10">
          <h2
            className={`${ims} text-white leading-none`}
            style={{ fontSize: "clamp(36px, 5vw, 60px)", letterSpacing: "-0.15rem" }}
          >
            {t("gallery.title")}
          </h2>
          <p style={{ color: "rgba(255,255,255,0.42)", marginTop: 12, fontSize: 15 }}>
            {t("gallery.subtitle")}
          </p>
        </AnimateIn>

        <div className="flex flex-col md:flex-row gap-3">
          {/* Main image */}
          <AnimateIn
            variant="slide-left"
            className="relative w-full md:w-[70%] h-64 md:h-155 rounded-2xl overflow-hidden group"
          >
            <Image
              src="/gallery/honda.jpg"
              alt="Honda detail — Pro Room Detailing"
              fill
              className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
              sizes="(max-width: 768px) 100vw, 70vw"
              priority
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 45%)" }}
            />
          </AnimateIn>

          {/* Right column — row on mobile, column on md+ */}
          <div className="flex flex-row md:flex-col gap-3 w-full md:w-[30%]">
            <AnimateIn
              variant="slide-right"
              delay={0.1}
              className="relative flex-1 h-44 md:h-auto rounded-2xl overflow-hidden group"
            >
              <Image
                src="/gallery/bmw.png"
                alt="BMW interior — Pro Room Detailing"
                fill
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                sizes="(max-width: 768px) 50vw, 30vw"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 50%)" }}
              />
            </AnimateIn>

            <AnimateIn
              variant="slide-right"
              delay={0.2}
              className="relative flex-1 h-44 md:h-auto rounded-2xl overflow-hidden group"
            >
              <Image
                src="/gallery/mercedes.png"
                alt="Detailing work — Pro Room Detailing"
                fill
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                sizes="(max-width: 768px) 50vw, 30vw"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 50%)" }}
              />
            </AnimateIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
