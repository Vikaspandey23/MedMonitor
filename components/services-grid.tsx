import { Card } from "@/components/ui/card"
import { Stethoscope, Calendar, FileText, ClipboardList, DollarSign, Shield } from "lucide-react"

export default function ServicesGrid() {
  const services = [
    {
      icon: Stethoscope,
      title: "Online Consultations",
      description: "Connect with specialist doctors through secure video consultations anytime, anywhere",
    },
    {
      icon: Calendar,
      title: "Booking Appointments",
      description: "Easy scheduling system to book appointments with verified healthcare professionals",
    },
    {
      icon: FileText,
      title: "Digital Prescriptions",
      description: "Receive and manage prescriptions electronically with convenient refill options",
    },
    {
      icon: ClipboardList,
      title: "Medical Records",
      description: "Access and organize your complete medical history in one secure location",
    },
    {
      icon: DollarSign,
      title: "Insurance Billing",
      description: "Seamless integration with major insurance providers for hassle-free billing",
    },
    {
      icon: Shield,
      title: "Health Insurance",
      description: "Exclusive healthcare plans designed for comprehensive coverage and protection",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Top <span className="text-primary">services</span> we offer
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive healthcare solutions designed to meet all your medical needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <Card key={i} className="p-6 hover:shadow-lg transition-shadow border border-border">
                <div className="bg-secondary p-3 rounded-lg w-fit mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
