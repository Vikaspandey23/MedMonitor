"use client"

import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"

export default function CTASection() {

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary/90 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Heart className="w-12 h-12 mx-auto mb-6 text-accent-foreground" />

        <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Protecting Your Health Today</h2>

        <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
          Join families, patients, and clinics who trust Med Monitor. Get started free—no credit card needed.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            size="lg"
            className="bg-white hover:bg-white/90 text-primary gap-2 cursor-pointer"
          >
            Try Free
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/10 bg-transparent cursor-pointer"
          >
            Schedule Demo
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-6 text-sm text-white/70">
          <span>🔒 HIPAA Certified</span>
          <span>🛡️ End-to-End Encrypted</span>
          <span>✓ SOC 2 Compliant</span>
        </div>
      </div>
    </section>
  )
}
