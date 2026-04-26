"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <svg
              className="w-8 h-8 text-secondary"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 3v18M3 12h18" />
              <circle cx="12" cy="12" r="2" fill="currentColor" />
            </svg>
            <span className="font-bold text-lg text-foreground">Med Monitor</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-sm text-foreground hover:text-primary transition">
              Home
            </a>
            <a href="#features" className="text-sm text-foreground hover:text-primary transition">
              Features
            </a>
            <a href="#monitoring" className="text-sm text-foreground hover:text-primary transition">
              Monitoring
            </a>
            <a href="#consultation" className="text-sm text-foreground hover:text-primary transition">
              Consultation
            </a>
            <a href="#testimonials" className="text-sm text-foreground hover:text-primary transition">
              Testimonials
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link href="/signin">
              <Button variant="ghost" size="sm">
                Sign In
              </Button>
            </Link>
            <Link href="/login">
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Create Account
              </Button>
            </Link>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <a href="#home" className="block px-4 py-2 text-sm text-foreground hover:bg-muted rounded">
              Home
            </a>
            <a href="#features" className="block px-4 py-2 text-sm text-foreground hover:bg-muted rounded">
              Features
            </a>
            <a href="#monitoring" className="block px-4 py-2 text-sm text-foreground hover:bg-muted rounded">
              Monitoring
            </a>
            <a href="#consultation" className="block px-4 py-2 text-sm text-foreground hover:bg-muted rounded">
              Consultation
            </a>
            <a href="#testimonials" className="block px-4 py-2 text-sm text-foreground hover:bg-muted rounded">
              Testimonials
            </a>
            <div className="px-4 py-2 space-y-2">
              <Link href="/signin" className="block">
                <Button variant="ghost" size="sm" className="w-full">
                  Sign In
                </Button>
              </Link>
              <Link href="/login" className="block">
                <Button size="sm" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Create Account
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
