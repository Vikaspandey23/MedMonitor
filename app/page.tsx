import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import FeaturesOverview from "@/components/features-overview"
import VitalsTracking from "@/components/vitals-tracking"
import DoctorConsultation from "@/components/doctor-consultation"
import EmergencySystem from "@/components/emergency-system"
import AIIntegration from "@/components/ai-integration"
import SecurityFeatures from "@/components/security-features"
import Benefits from "@/components/benefits"
import Testimonials from "@/components/testimonials"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesOverview />
      <VitalsTracking />
      <DoctorConsultation />
      <EmergencySystem />
      <AIIntegration />
      <SecurityFeatures />
      <Benefits />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  )
}
