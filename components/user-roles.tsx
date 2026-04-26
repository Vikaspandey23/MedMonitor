"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Users, Heart, Stethoscope } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const roles = [
  {
    icon: Heart,
    title: "For Elderly Patients",
    features: [
      "Simple, large interface",
      "Voice-controlled commands",
      "Automatic medication reminders",
      "One-tap emergency access",
    ],
  },
  {
    icon: Users,
    title: "For Caregivers & Family",
    features: [
      "Monitor loved ones remotely",
      "Real-time medication alerts",
      "Emergency notifications",
      "Secure family sharing",
    ],
  },
  {
    icon: Stethoscope,
    title: "For Clinics & Hospitals",
    features: [
      "Integrated patient management",
      "Prescription tracking",
      "Automated compliance reporting",
      "HIPAA-compliant records",
    ],
  },
]

export default function UserRoles() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animations
      gsap.from(".roles-title", {
        scrollTrigger: {
          trigger: ".roles-title",
          start: "top 80%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
      })

      gsap.from(".roles-subtitle", {
        scrollTrigger: {
          trigger: ".roles-subtitle",
          start: "top 80%",
        },
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.2,
        ease: "power3.out",
      })

      // Role cards stagger
      gsap.from(".role-card", {
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
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="user-roles" className="py-12 md:py-20 bg-muted/50">
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="roles-title text-3xl md:text-4xl font-bold mb-4">Made for Everyone</h2>
          <p className="roles-subtitle text-lg text-muted-foreground max-w-2xl mx-auto">
            Med Monitor adapts to your unique needs, whether you&apos;re a patient, caregiver, or healthcare provider.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {roles.map((role, index) => {
            const Icon = role.icon
            return (
              <Card
                key={index}
                className="role-card p-6 border border-border shadow-glow hover-lift gradient-border transition-smooth"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{role.title}</h3>
                <ul className="space-y-3">
                  {role.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary font-bold mt-0.5">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
