import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { AlertCircle, MapPin, Bell, Users } from "lucide-react"

export default function EmergencySystem() {
  return (
    <section className="py-12 md:py-20 bg-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 rounded-full mb-4">
            <AlertCircle className="w-4 h-4 text-red-600" />
            <span className="text-sm font-medium text-red-800">Emergency Support</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">24/7 Emergency Response System</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Immediate medical assistance when you need it most with automatic alert notifications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 border-2 border-red-200 bg-white">
            <AlertCircle className="w-8 h-8 text-red-600 mb-4" />
            <h3 className="font-semibold mb-2">SOS Button</h3>
            <p className="text-sm text-muted-foreground">One-tap emergency activation with instant alerts</p>
          </Card>

          <Card className="p-6 border-2 border-red-200 bg-white">
            <Bell className="w-8 h-8 text-red-600 mb-4" />
            <h3 className="font-semibold mb-2">Vital Alerts</h3>
            <p className="text-sm text-muted-foreground">Automatic notifications for abnormal vital signs</p>
          </Card>

          <Card className="p-6 border-2 border-red-200 bg-white">
            <MapPin className="w-8 h-8 text-red-600 mb-4" />
            <h3 className="font-semibold mb-2">Live Location</h3>
            <p className="text-sm text-muted-foreground">GPS tracking shared with emergency services</p>
          </Card>

          <Card className="p-6 border-2 border-red-200 bg-white">
            <Users className="w-8 h-8 text-red-600 mb-4" />
            <h3 className="font-semibold mb-2">Emergency Contacts</h3>
            <p className="text-sm text-muted-foreground">Automatic notifications to trusted contacts</p>
          </Card>
        </div>

        <div className="bg-red-600 text-white rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Fast Emergency Response</h3>
              <p className="mb-6 leading-relaxed">
                When you activate SOS, we immediately alert nearby emergency services, notify your contacts, and connect
                you with emergency medical professionals.
              </p>
              <Button size="lg" className="bg-white hover:bg-white/90 text-red-600">
                Set Up Emergency Contacts
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-3xl font-bold mb-2">&lt;2 min</p>
                <p className="text-sm text-white/80">Avg Response Time</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold mb-2">24/7</p>
                <p className="text-sm text-white/80">Always Available</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold mb-2">100%</p>
                <p className="text-sm text-white/80">Monitored</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
