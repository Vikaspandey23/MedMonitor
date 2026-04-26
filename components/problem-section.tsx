"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { AlertTriangle, MapOff, Clock } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const problems = [
  {
    icon: Clock,
    title: "Missed Medications",
    description: "Forgotten doses lead to complications, hospital visits, and preventable health crises.",
  },
  {
    icon: AlertTriangle,
    title: "Can't Reach Doctor When Needed",
    description: "Waiting days for appointments or being unable to reach care when it matters most.",
  },
  {
    icon: MapOff,
    title: "Family Can't Help from Distance",
    description: "Caregivers worry because they can't monitor loved ones or respond quickly to emergencies.",
  },
]

export default function ProblemSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animations
      gsap.from(".problem-title", {
        scrollTrigger: {
          trigger: ".problem-title",
          start: "top 80%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
      })

      gsap.from(".problem-subtitle", {
        scrollTrigger: {
          trigger: ".problem-subtitle",
          start: "top 80%",
        },
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.2,
        ease: "power3.out",
      })

      // Problem cards stagger
      gsap.from(".problem-card", {
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
    <section id="problems" className="py-12 md:py-20 bg-muted/50">
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="problem-title text-3xl md:text-4xl font-bold mb-4">Why Care Management is Hard</h2>
          <p className="problem-subtitle text-lg text-muted-foreground max-w-2xl mx-auto">
            Healthcare coordination shouldn&apos;t add stress. Here&apos;s what families struggle with.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((problem, index) => {
            const Icon = problem.icon
            return (
              <Card
                key={index}
                className="problem-card p-6 border border-border shadow-glow hover-lift gradient-border transition-smooth"
              >
                <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{problem.title}</h3>
                <p className="text-muted-foreground text-sm">{problem.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
