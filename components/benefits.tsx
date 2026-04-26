import { Card } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

const benefits = [
  "Reduces hospital visits by 40%",
  "24/7 access to medical professionals",
  "Continuous health monitoring",
  "Early detection of health issues",
  "Personalized health recommendations",
  "Complete medical record management",
  "Insurance integration support",
  "Family health tracking",
]

export default function Benefits() {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Med Monitor</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transform your healthcare experience with our comprehensive platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-6 border border-border flex gap-4">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <p className="font-medium">{benefit}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
