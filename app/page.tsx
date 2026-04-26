import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ProblemSection from "@/components/problem-section"
import FeaturesOverview from "@/components/features-overview"
import HowItWorks from "@/components/how-it-works"
import UserRoles from "@/components/user-roles"
import Benefits from "@/components/benefits"
import Testimonials from "@/components/testimonials"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ProblemSection />
      <FeaturesOverview />
      <HowItWorks />
      <UserRoles />
      <Benefits />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  )
}
