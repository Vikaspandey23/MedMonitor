"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Activity, Pill, Users, AlertCircle, FileText } from "lucide-react"
import Link from "next/link"
import gsap from "gsap"

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline()

      // Hero title animation
      tl.from(".hero-title", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
      })

      // Description animation
      tl.from(
        ".hero-description",
        {
          opacity: 0,
          y: 20,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.4",
      )

      // Buttons animation
      tl.from(
        ".hero-buttons button, .hero-buttons a",
        {
          opacity: 0,
          scale: 0.9,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out",
        },
        "-=0.3",
      )

      // Stats animation with stagger
      tl.from(
        ".stat-item",
        {
          opacity: 0,
          y: 15,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
        },
        "-=0.3",
      )

      // Card animation with floating effect
      gsap.to(".vital-card", {
        y: -5,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.1,
      })

      // Card entrance from right
      tl.from(
        ".vital-card",
        {
          opacity: 0,
          x: 50,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
        },
        "-=0.5",
      )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative py-12 md:py-24 bg-gradient-to-b from-primary to-primary/90 overflow-hidden text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div ref={contentRef} className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/20 glass-effect animate-slide-in-left">
              <Activity className="w-4 h-4" />
              <span className="text-sm font-medium">Trusted by Families & Clinics</span>
            </div>

            <div>
              <h1 className="hero-title text-4xl md:text-5xl font-bold text-balance leading-tight">
                Peace of Mind for <span className="text-accent-foreground">Those You Love</span>
              </h1>
            </div>

            <p className="hero-description text-lg text-white/80 max-w-md leading-relaxed">
              Medication reminders, emergency access, and family connection—all in one trusted platform.
            </p>

            <div className="hero-buttons flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="#features">
                <Button
                  size="lg"
                  className="bg-white hover:bg-white/90 text-primary gap-2 cursor-pointer shadow-glow-lg hover-lift"
                >
                  Get Started Free
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 bg-transparent hover-lift"
              >
                Learn More
              </Button>
            </div>

            <div ref={statsRef} className="grid grid-cols-3 gap-4 pt-8">
              <div className="stat-item">
                <p className="text-2xl font-bold">2000+</p>
                <p className="text-sm text-white/70">Families</p>
              </div>
              <div className="stat-item">
                <p className="text-2xl font-bold">150+</p>
                <p className="text-sm text-white/70">Clinics</p>
              </div>
              <div className="stat-item">
                <p className="text-2xl font-bold">HIPAA</p>
                <p className="text-sm text-white/70">Certified</p>
              </div>
            </div>
          </div>

          <div ref={cardRef} className="relative">
            <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl overflow-hidden shadow-2xl border border-white/20 p-8 glass-effect animate-glow">
              <div className="grid grid-cols-2 gap-5">
                <div className="vital-card bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 rounded-xl p-5 backdrop-blur border border-emerald-400/30 hover-lift transition-all duration-300">
                  <div className="flex items-start justify-between mb-3">
                    <div className="bg-emerald-500/30 p-2.5 rounded-lg">
                      <Pill className="w-5 h-5 text-emerald-300" />
                    </div>
                  </div>
                  <p className="text-xs text-white/70 font-medium mb-1">Medications</p>
                  <p className="text-4xl font-bold text-white mb-1">3</p>
                  <p className="text-xs text-white/60">Today&apos;s doses</p>
                </div>
                <div className="vital-card bg-gradient-to-br from-purple-500/20 to-purple-600/10 rounded-xl p-5 backdrop-blur border border-purple-400/30 hover-lift transition-all duration-300">
                  <div className="flex items-start justify-between mb-3">
                    <div className="bg-purple-500/30 p-2.5 rounded-lg">
                      <Users className="w-5 h-5 text-purple-300" />
                    </div>
                  </div>
                  <p className="text-xs text-white/70 font-medium mb-1">Family Access</p>
                  <p className="text-4xl font-bold text-white mb-1">2</p>
                  <p className="text-xs text-white/60">Caregivers</p>
                </div>
                <div className="vital-card bg-gradient-to-br from-rose-500/20 to-rose-600/10 rounded-xl p-5 backdrop-blur border border-rose-400/30 hover-lift transition-all duration-300">
                  <div className="flex items-start justify-between mb-3">
                    <div className="bg-rose-500/30 p-2.5 rounded-lg">
                      <AlertCircle className="w-5 h-5 text-rose-300" />
                    </div>
                  </div>
                  <p className="text-xs text-white/70 font-medium mb-1">Emergency SOS</p>
                  <p className="text-4xl font-bold text-rose-300 mb-1">✓</p>
                  <p className="text-xs text-white/60">Active & Ready</p>
                </div>
                <div className="vital-card bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 rounded-xl p-5 backdrop-blur border border-cyan-400/30 hover-lift transition-all duration-300">
                  <div className="flex items-start justify-between mb-3">
                    <div className="bg-cyan-500/30 p-2.5 rounded-lg">
                      <FileText className="w-5 h-5 text-cyan-300" />
                    </div>
                  </div>
                  <p className="text-xs text-white/70 font-medium mb-1">Health Records</p>
                  <p className="text-4xl font-bold text-white mb-1">15</p>
                  <p className="text-xs text-white/60">Saved & Secure</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
