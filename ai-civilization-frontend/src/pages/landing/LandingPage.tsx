import LandingLayout from "@/components/layout/LandingLayout";
import HeroSection from "@/components/landing/Herosection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import ArchitectureSection from "@/components/landing/ArchitectureSection";
import TechStackSection from "@/components/landing/TechStackSection";
import SimulationPreviewSection from "@/components/landing/SimulationPreviewSection";
import AgentPreviewSection from "@/components/landing/AgentPreviewSection";
import StatsSection from "@/components/landing/StatsSection";
import WorkflowSection from "@/components/landing/WorkflowSection";
import ApplicationsSection from "@/components/landing/ApplicationsSection";
import FAQSection from "@/components/landing/FAQSection";
import ContactSection from "@/components/landing/ContactSection";

export default function LandingPage() {
  return (
    <LandingLayout>
      <HeroSection />
      <FeaturesSection />
      <ArchitectureSection />
      <TechStackSection />
      <SimulationPreviewSection />
      <AgentPreviewSection />
      <StatsSection />
      <WorkflowSection />
      <ApplicationsSection />
      <FAQSection />
      <ContactSection />
    </LandingLayout>
  );
}