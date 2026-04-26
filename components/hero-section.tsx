"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Download, Activity } from "lucide-react"
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

  const handleDownload = (platform: string) => {
    if (platform === "ios") {
      window.open("https://apps.apple.com", "_blank")
    } else {
      window.open("https://play.google.com", "_blank")
    }
  }

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
              <span className="text-sm font-medium">24/7 Health Monitoring</span>
            </div>

            <div>
              <h1 className="hero-title text-4xl md:text-5xl font-bold text-balance leading-tight">
                Your Health, <span className="text-accent-foreground">Always</span> in Control
              </h1>
            </div>

            <p className="hero-description text-lg text-white/80 max-w-md leading-relaxed">
              Real-time vital monitoring, instant doctor consultations, emergency response system, and AI-powered health
              insights all in one app.
            </p>

            <div className="hero-buttons flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-white hover:bg-white/90 text-primary gap-2 cursor-pointer shadow-glow-lg hover-lift"
                onClick={() => handleDownload("android")}
              >
                <Download className="w-4 h-4" />
                Download Now
              </Button>
              <Link href="#features">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 bg-transparent hover-lift"
                >
                  Learn More
                </Button>
              </Link>
            </div>

            <div ref={statsRef} className="grid grid-cols-3 gap-4 pt-8">
              <div className="stat-item">
                <p className="text-2xl font-bold">10,000+</p>
                <p className="text-sm text-white/70">Active Users</p>
              </div>
              <div className="stat-item">
                <p className="text-2xl font-bold">500+</p>
                <p className="text-sm text-white/70">Verified Doctors</p>
              </div>
              <div className="stat-item">
                <p className="text-2xl font-bold">99%</p>
                <p className="text-sm text-white/70">Uptime</p>
              </div>
            </div>
          </div>

          <div ref={cardRef} className="relative">
            <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl overflow-hidden shadow-2xl border border-white/20 p-6 glass-effect animate-glow">
              <div className="grid grid-cols-2 gap-4">
                <div className="vital-card bg-white/10 rounded-xl p-4 backdrop-blur hover-lift">
                  <p className="text-xs text-white/70 mb-2">Heart Rate</p>
                  <p className="text-3xl font-bold">72</p>
                  <p className="text-xs text-white/50">bpm</p>
                </div>
                <div className="vital-card bg-white/10 rounded-xl p-4 backdrop-blur hover-lift">
                  <p className="text-xs text-white/70 mb-2">Blood Pressure</p>
                  <p className="text-2xl font-bold">120/80</p>
                  <p className="text-xs text-white/50">mmHg</p>
                </div>
                <div className="vital-card bg-white/10 rounded-xl p-4 backdrop-blur hover-lift">
                  <p className="text-xs text-white/70 mb-2">SpO2</p>
                  <p className="text-3xl font-bold">98%</p>
                  <p className="text-xs text-white/50">Oxygen</p>
                </div>
                <div className="vital-card bg-white/10 rounded-xl p-4 backdrop-blur hover-lift">
                  <p className="text-xs text-white/70 mb-2">Steps</p>
                  <p className="text-3xl font-bold">8.2k</p>
                  <p className="text-xs text-white/50">today</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
