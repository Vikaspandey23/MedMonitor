"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Heart, Droplet, Wind, Thermometer } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function VitalsTracking() {
  const containerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(".vitals-title", {
        scrollTrigger: {
          trigger: ".vitals-title",
          start: "top 80%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
      })

      // Card entrance with stagger
      gsap.from(".vital-tracking-card", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
        opacity: 0,
        y: 40,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
      })

      // Animate progress bars filling
      gsap.to(".vital-bar", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
        width: "100%",
        duration: 1.2,
        stagger: 0.15,
        ease: "power2.out",
      })

      // Pulsing animation for vital values
      gsap.to(".vital-value", {
        scale: 1.05,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.15,
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="monitoring" className="py-12 md:py-20 bg-muted/30">
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="vitals-title text-3xl md:text-4xl font-bold mb-4">Advanced Vital Signs Tracking</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Monitor essential health metrics with precision and receive intelligent alerts for any concerning patterns.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card
            ref={(el) => (cardsRef.current[0] = el)}
            className="vital-tracking-card p-6 border border-border shadow-glow hover-lift gradient-border"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Heart Rate</h3>
              <Heart className="w-5 h-5 text-red-500" />
            </div>
            <p className="vital-value text-3xl font-bold mb-2">72</p>
            <p className="text-sm text-muted-foreground">bpm - Normal range</p>
            <div className="mt-4 h-12 bg-gradient-to-r from-red-600/30 to-red-600/10 rounded overflow-hidden">
              <div className="vital-bar h-full bg-gradient-to-r from-red-600 to-red-400 w-0 rounded"></div>
            </div>
          </Card>

          <Card
            ref={(el) => (cardsRef.current[1] = el)}
            className="vital-tracking-card p-6 border border-border shadow-glow hover-lift gradient-border"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Blood Pressure</h3>
              <Droplet className="w-5 h-5 text-blue-500" />
            </div>
            <p className="vital-value text-3xl font-bold mb-2">120/80</p>
            <p className="text-sm text-muted-foreground">mmHg - Healthy</p>
            <div className="mt-4 h-12 bg-gradient-to-r from-blue-600/30 to-blue-600/10 rounded overflow-hidden">
              <div className="vital-bar h-full bg-gradient-to-r from-blue-600 to-blue-400 w-0 rounded"></div>
            </div>
          </Card>

          <Card
            ref={(el) => (cardsRef.current[2] = el)}
            className="vital-tracking-card p-6 border border-border shadow-glow hover-lift gradient-border"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Oxygen Level</h3>
              <Wind className="w-5 h-5 text-green-500" />
            </div>
            <p className="vital-value text-3xl font-bold mb-2">98%</p>
            <p className="text-sm text-muted-foreground">SpO2 - Optimal</p>
            <div className="mt-4 h-12 bg-gradient-to-r from-green-600/30 to-green-600/10 rounded overflow-hidden">
              <div className="vital-bar h-full bg-gradient-to-r from-green-600 to-green-400 w-0 rounded"></div>
            </div>
          </Card>

          <Card
            ref={(el) => (cardsRef.current[3] = el)}
            className="vital-tracking-card p-6 border border-border shadow-glow hover-lift gradient-border"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Temperature</h3>
              <Thermometer className="w-5 h-5 text-orange-500" />
            </div>
            <p className="vital-value text-3xl font-bold mb-2">98.6°F</p>
            <p className="text-sm text-muted-foreground">Normal</p>
            <div className="mt-4 h-12 bg-gradient-to-r from-orange-600/30 to-orange-600/10 rounded overflow-hidden">
              <div className="vital-bar h-full bg-gradient-to-r from-orange-600 to-orange-400 w-0 rounded"></div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
