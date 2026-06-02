import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import Gallery from "@/components/sections/GallerySection";
import HeroSection from "@/components/sections/HeroSection";
import PriceListSection from "@/components/sections/PriceListSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PriceListSection />
      <AboutSection />
      <Gallery />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
