import ContactSection from "@/components/sections/ContactSection";
import Gallery from "@/components/sections/GallerySection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";

export default function Home() {
  return (
    <div>
      <Gallery />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}
