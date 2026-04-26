import { Button } from "@/components/ui/button"
import { Mail, MessageSquare, Phone } from "lucide-react"

export default function HelpDesk() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Reach our <span className="text-primary">Help Desk</span> for support
          </h2>
          <p className="text-lg text-muted-foreground">We are here to help you with any questions or concerns</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 border border-border text-center">
            <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <p className="text-sm text-muted-foreground">Email us</p>
            <p className="font-semibold text-foreground">support@healnet.com</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-border text-center">
            <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <p className="text-sm text-muted-foreground">Call us</p>
            <p className="font-semibold text-foreground">1-800-HEALNET</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-border text-center">
            <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="w-6 h-6 text-primary" />
            </div>
            <p className="text-sm text-muted-foreground">Live chat</p>
            <p className="font-semibold text-foreground">Available 24/7</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 border border-border">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <input
              type="text"
              placeholder="Subject"
              className="flex-1 px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <Button className="bg-primary hover:bg-primary/90 text-white">Contact us</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
