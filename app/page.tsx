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
        <FAQSection />
        <BlogSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
