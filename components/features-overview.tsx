"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, Phone, AlertCircle, Zap, Lock, Mic } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const features = [
  {
    icon: Activity,
    title: "Medication Management",
    description: "Automatic reminders for doses, prescription refills, and medication history all in one place.",
  },
  {
    icon: AlertCircle,
    title: "Emergency SOS",
    description: "One-tap emergency access to contacts, location sharing, and instant alerts to family.",
  },
  {
    icon: Phone,
    title: "Role-Based Access",
    description: "Caregivers, family members, and clinics access what they need with complete privacy controls.",
  },
  {
    icon: Lock,
    title: "Secure Records",
    description: "HIPAA-compliant storage with end-to-end encryption for all your health information.",
  },
]

export default function FeaturesOverview() {
  const containerRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animations
      gsap.from(".features-title", {
        scrollTrigger: {
          trigger: ".features-title",
          start: "top 80%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
      })

      gsap.from(".features-subtitle", {
        scrollTrigger: {
          trigger: ".features-subtitle",
          start: "top 80%",
        },
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.2,
        ease: "power3.out",
      })

      // Card stagger animations with hover effects
      gsap.from(".feature-card", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
        opacity: 0,
        y: 40,
        duration: 0.6,
        stagger: 0.12,
        ease: "power3.out",
      })

      // Icon rotation on hover
      document.querySelectorAll(".feature-icon").forEach((icon) => {
        icon.addEventListener("mouseenter", () => {
          gsap.to(icon, {
            rotation: 360,
            duration: 0.6,
            ease: "back.out",
          })
        })
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="features" className="py-12 md:py-20 bg-background">
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headingRef} className="text-center mb-12">
          <h2 className="features-title text-3xl md:text-4xl font-bold mb-4">Built for Caregivers, Families & Clinics</h2>
          <p className="features-subtitle text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to stay connected and manage health with confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={index}
                className="feature-card border border-border shadow-glow hover:shadow-glow-lg transition-smooth hover-lift gradient-border"
              >
                <CardHeader>
                  <div className="feature-icon w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 transition-smooth">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
