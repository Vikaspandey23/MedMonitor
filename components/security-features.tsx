import { Card } from "@/components/ui/card"
import { Lock, Shield, Fingerprint as FingerPrint, KeyRound } from "lucide-react"

export default function SecurityFeatures() {
  return (
    <section className="py-12 md:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Security You Can Trust</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your health data is protected with enterprise-grade security and encryption standards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 border border-border">
            <Lock className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-semibold mb-2">End-to-End Encryption</h3>
            <p className="text-sm text-muted-foreground">All data encrypted with military-grade 256-bit encryption</p>
          </Card>

          <Card className="p-6 border border-border">
            <Shield className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-semibold mb-2">HIPAA Compliant</h3>
            <p className="text-sm text-muted-foreground">Fully compliant with healthcare privacy regulations</p>
          </Card>

          <Card className="p-6 border border-border">
            <FingerPrint className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-semibold mb-2">Biometric Auth</h3>
            <p className="text-sm text-muted-foreground">Fingerprint and face recognition for secure access</p>
          </Card>

          <Card className="p-6 border border-border">
            <KeyRound className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-semibold mb-2">Secure Cloud</h3>
            <p className="text-sm text-muted-foreground">ISO 27001 certified data centers with redundancy</p>
          </Card>
        </div>
      </div>
    </section>
  )
}
