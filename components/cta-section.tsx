"use client"

import { Button } from "@/components/ui/button"
import { Download, Heart } from "lucide-react"

export default function CTASection() {
  const handleDownloadIOS = () => {
    window.open("https://apps.apple.com", "_blank")
  }

  const handleDownloadAndroid = () => {
    window.open("https://play.google.com", "_blank")
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary/90 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Heart className="w-12 h-12 mx-auto mb-6 text-accent-foreground" />

        <h2 className="text-3xl md:text-4xl font-bold mb-6">Take Control of Your Health Today</h2>

        <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
          Join thousands of users who are managing their health better with Med Monitor. Download the app now and get
          free consultations with our expert doctors.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            size="lg"
            className="bg-white hover:bg-white/90 text-primary gap-2 cursor-pointer"
            onClick={handleDownloadIOS}
          >
            <Download className="w-5 h-5" />
            Download for iOS
          </Button>
          <Button
            size="lg"
            className="bg-white hover:bg-white/90 text-primary gap-2 cursor-pointer"
            onClick={handleDownloadAndroid}
          >
            <Download className="w-5 h-5" />
            Download for Android
          </Button>
        </div>

        <p className="text-sm text-white/70">No credit card required. Free first consultation with a doctor.</p>
      </div>
    </section>
  )
}
