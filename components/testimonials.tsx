"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null)

  const testimonials = [
    {
      name: "Sarah Martinez",
      role: "Caregiver for Mother",
      content:
        "I can now monitor my mom&apos;s medications from work. The emergency alerts give me peace of mind, and the family sharing feature lets my siblings stay connected too.",
      avatar: "👩‍⚕️",
      rating: 5,
    },
    {
      name: "Robert Chen",
      role: "Elderly Patient",
      content:
        "Finally, an app that&apos;s easy to use. The medication reminders helped me never miss a dose, and my doctor can see everything I need from their side.",
      avatar: "👴",
      rating: 5,
    },
    {
      name: "Dr. Priya Sharma",
      role: "Clinic Administrator",
      content:
        "We&apos;ve integrated Med Monitor into our patient care. It&apos;s reduced no-shows by 40% and made patient communication incredibly efficient.",
      avatar: "👩‍⚕️",
      rating: 5,
    },
  ]

  const stats = [
    { label: "Active Users", value: "10,000+" },
    { label: "Emergency Responses", value: "500+" },
    { label: "User Satisfaction", value: "98%" },
    { label: "Doctors Available", value: "24/7" },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(".testimonials-title", {
        scrollTrigger: {
          trigger: ".testimonials-title",
          start: "top 80%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
      })

      // Testimonial cards stagger
      gsap.from(".testimonial-card", {
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

      // Stats counter animation
      gsap.from(".stat-value", {
        scrollTrigger: {
          trigger: ".stats-section",
          start: "top 80%",
        },
        opacity: 0,
        scale: 0.8,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out",
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-background">
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="testimonials-title text-3xl md:text-4xl font-bold mb-4">Trusted by Families, Patients & Clinics</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real people, real results—from caregivers to elderly patients to healthcare providers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, i) => (
            <Card
              key={i}
              className="testimonial-card p-6 border border-border shadow-glow hover-lift gradient-border transition-smooth"
            >
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">{testimonial.content}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-lg animate-float">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="stats-section bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 md:p-12 border border-primary/20 shadow-glow">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, i) => (
              <div key={i}>
                <p className="stat-value text-2xl md:text-3xl font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
