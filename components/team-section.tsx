import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export default function TeamSection() {
  const team = [
    {
      name: "Dr. Sarah Anderson",
      specialty: "Cardiologist",
      description: "Expert in cardiovascular health with 15+ years of clinical experience",
      image: "/professional-female-cardiologist-doctor.jpg",
    },
    {
      name: "Dr. Marcus Lee",
      specialty: "Dermatologist",
      description: "Specializing in skin health and advanced dermatological treatments",
      image: "/professional-male-dermatologist-doctor.jpg",
    },
  ]

  return (
    <section id="doctors" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Masters of Medicine</h2>
          <p className="text-lg text-muted-foreground">Meet our team of specialists</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {team.map((member, i) => (
            <Card key={i} className="overflow-hidden hover:shadow-lg transition-shadow border-0">
              <div className="bg-gradient-to-br from-primary to-primary/60 h-64 relative overflow-hidden">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 bg-primary text-white">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary-foreground/90 text-sm mb-4">{member.specialty}</p>
                <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">{member.description}</p>
                <Button size="sm" variant="secondary" className="gap-2">
                  Book Appointment
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
