import { Card } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

const benefits = [
  "Never miss a medication dose",
  "Emergency help at your fingertips",
  "Reduce hospital visits by 40%",
  "Caregivers can help from anywhere",
  "HIPAA-compliant & secure",
  "Simple interface for all ages",
  "Real-time family notifications",
  "Clinic-integrated prescriptions",
]

export default function Benefits() {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Benefits</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Healthcare that works for your life.
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
