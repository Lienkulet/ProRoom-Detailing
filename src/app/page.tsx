import ContactSection from "@/components/sections/ContactSection";
import Gallery from "@/components/sections/GallerySection";
import PriceListSection from "@/components/sections/PriceListSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";

export default function Home() {
  return (
    <>
      <PriceListSection />
      <Gallery />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
