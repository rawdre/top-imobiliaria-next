import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PropertiesSection from "@/components/PropertiesSection";
import AIFeaturesSection from "@/components/AIFeaturesSection";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import LegacySectionsFromHtml from "@/components/LegacySectionsFromHtml";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SiteAssistant from "@/components/SiteAssistant";
import BackToTopButton from "@/components/BackToTopButton";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PropertiesSection />
        <AIFeaturesSection />
        <ServicesSection />
        <StatsSection />
        <LegacySectionsFromHtml />
      </main>
      <Footer />
      <BackToTopButton />
      <WhatsAppButton />
      <SiteAssistant />
    </>
  );
}
