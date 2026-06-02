import Image from "next/image";
import Container from "@/components/layout/Container";
import AnimateIn from "@/components/UI/AnimateIn";

const ims = "font-[family-name:var(--font-roboto-condensed)] italic font-bold uppercase";

export default function GallerySection() {
  return (
    <section style={{ backgroundColor: "#0a0a0a", overflow: "hidden" }} id="gallery">
      <Container>
        <AnimateIn variant="fade-up" className="text-center mb-10">
          <h2
            className={`${ims} text-white leading-none`}
            style={{ fontSize: "clamp(36px, 5vw, 60px)", letterSpacing: "-0.15rem" }}
          >
            Our Work
          </h2>
          <p style={{ color: "rgba(255,255,255,0.42)", marginTop: 12, fontSize: 15 }}>
            Every detail matters — see the results for yourself.
          </p>
        </AnimateIn>

        <div className="flex gap-3 h-130 md:h-155">
          {/* Main image — 70% */}
          <AnimateIn variant="slide-left" className="relative w-[70%] rounded-2xl overflow-hidden group">
            <Image
              src="/gallery/hoodie.png"
              alt="BMW detail — Pro Room Detailing"
              fill
              className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
              sizes="70vw"
              priority
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 45%)" }}
            />
          </AnimateIn>

          {/* Right column — 30% */}
          <div className="flex flex-col gap-3 w-[30%]">
            <AnimateIn variant="slide-right" delay={0.1} className="relative flex-1 rounded-2xl overflow-hidden group">
              <Image
                src="/gallery/bmw.png"
                alt="BMW interior — Pro Room Detailing"
                fill
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                sizes="30vw"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 50%)" }}
              />
            </AnimateIn>

            <AnimateIn variant="slide-right" delay={0.2} className="relative flex-1 rounded-2xl overflow-hidden group">
              <Image
                src="/gallery/mercedes.png"
                alt="Detailing work — Pro Room Detailing"
                fill
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                sizes="30vw"
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
