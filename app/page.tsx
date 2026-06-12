import {
  AboutSection,
  BlogSection,
  CTASection,
  FAQSection,
  Footer,
  LogoStrip,
  Navbar,
  PricingSection,
  ServicesSection,
  TestimonialsSection,
  WorksSection,
} from "@/components/home";
import HeroSection from "@/components/HeroSection";
import Testimonial1 from "@/components/ui/testimonial-1";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <LogoStrip />
        <AboutSection />
        <ServicesSection />
        <WorksSection />
        <PricingSection />
        <TestimonialsSection />
        <Testimonial1 />
        <FAQSection />
        <BlogSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
