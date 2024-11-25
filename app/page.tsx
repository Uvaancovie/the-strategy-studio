import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import Footer from "../components/Footer";
import Timeline from "../components/Timeline";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <Timeline />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </>
  );
}
