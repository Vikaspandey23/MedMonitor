import { Button } from "@/components/ui/button"
import { CheckCircle2, Phone, Users } from "lucide-react"

export default function QuickBooking() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 md:p-12 border border-primary/20">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Easily book an appointment in <span className="text-primary">3 simple steps</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            Get started in minutes with our streamlined appointment booking process
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              {
                icon: Users,
                title: "Create Profile",
                description: "Sign up with your basic information in seconds",
              },
              {
                icon: Phone,
                title: "Choose Doctor",
                description: "Browse and select from our verified specialists",
              },
              {
                icon: CheckCircle2,
                title: "Book Appointment",
                description: "Pick your preferred time and get instant confirmation",
              },
            ].map((step, i) => {
              const Icon = step.icon
              return (
                <div key={i} className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-white">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="flex gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
