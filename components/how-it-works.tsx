"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { User, Bell, Share2 } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    icon: User,
    step: "1",
    title: "Add Your Health Info",
    description: "Create your profile with basic health information, medications, and emergency contacts.",
  },
  {
    icon: Bell,
    step: "2",
    title: "Set Medication Reminders",
    description: "Never miss a dose. Automatic reminders keep you or your loved ones on track.",
  },
  {
    icon: Share2,
    step: "3",
    title: "Share Access with Family",
    description: "Give caregivers, family members, or your clinic access to what they need to help.",
  },
]

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animations
      gsap.from(".howitworks-title", {
        scrollTrigger: {
          trigger: ".howitworks-title",
          start: "top 80%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
      })

      gsap.from(".howitworks-subtitle", {
        scrollTrigger: {
          trigger: ".howitworks-subtitle",
          start: "top 80%",
        },
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.2,
        ease: "power3.out",
      })

      // Step cards stagger
      gsap.from(".step-card", {
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

      // Step numbers animation
      gsap.from(".step-number", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
        opacity: 0,
        scale: 0.5,
        duration: 0.6,
        stagger: 0.12,
        ease: "back.out",
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="how-it-works" className="py-12 md:py-20 bg-background">
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="howitworks-title text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="howitworks-subtitle text-lg text-muted-foreground max-w-2xl mx-auto">
            Get started in three simple steps.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((item, index) => {
            const Icon = item.icon
            return (
              <div key={index} className="step-card relative">
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/3 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                )}
                <Card className="h-full p-6 border border-border shadow-glow hover-lift gradient-border transition-smooth">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="step-number w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 font-bold text-lg">
                      {item.step}
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </Card>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
