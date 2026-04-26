import { Button } from "@/components/ui/button"

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <img src="/diverse-healthcare-team-doctors.jpg" alt="HealNet team" className="rounded-2xl shadow-lg w-full" />
          </div>
          <div className="space-y-6">
            <div>
              <p className="text-sm font-semibold text-primary mb-2">Our Story</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Get to know us</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              HealNet was founded with a mission to democratize healthcare access. We believe that quality medical care
              should be available to everyone, everywhere. Our platform connects patients with top healthcare
              professionals, making it easy to get the care you need when you need it.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With years of experience in healthcare technology, our team has built a secure, user-friendly platform
              trusted by thousands of patients and doctors across the country.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              Learn more about us
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
