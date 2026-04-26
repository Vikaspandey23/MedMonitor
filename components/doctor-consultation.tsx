import { Button } from "@/components/ui/button"
import { Video, MessageCircle, Phone } from "lucide-react"
import Link from "next/link"

export default function DoctorConsultation() {
  return (
    <section id="consultation" className="py-12 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Connect with Doctors Instantly</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Chat with licensed healthcare professionals in real-time, schedule video consultations, or get medical
              advice via voice call. All from the comfort of your home.
            </p>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Video className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Video Consultation</h3>
                  <p className="text-sm text-muted-foreground">Face-to-face consultations with verified doctors</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Instant Messaging</h3>
                  <p className="text-sm text-muted-foreground">Quick health questions and follow-ups via chat</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Voice Call</h3>
                  <p className="text-sm text-muted-foreground">Direct phone consultations with specialists</p>
                </div>
              </div>
            </div>

            <Link href="/signin">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground w-fit">
                Book Your First Consultation
              </Button>
            </Link>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/20">
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20"></div>
                    <div>
                      <p className="font-semibold text-sm">Dr. Sarah Johnson</p>
                      <p className="text-xs text-muted-foreground">Cardiologist</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Your BP readings look good this week. Continue with your current medication...
                  </p>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="text-xs bg-transparent">
                      Reply
                    </Button>
                    <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground text-xs">
                      Call
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
