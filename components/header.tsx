"use client"

import { Button } from "@/components/ui/button"
import { Menu, X, LogOut, User as UserIcon } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { useAuth } from "@/app/providers"
import { useRouter } from "next/navigation"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { isAuthenticated, user, logout } = useAuth()
  const router = useRouter()

  const handleLogout = () => {
    logout()
    router.push("/")
    setIsOpen(false)
  }

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
            {isAuthenticated && user ? (
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <span className="text-sm font-medium text-foreground">{user.name}</span>
                </div>
                <Button 
                  onClick={handleLogout}
                  variant="ghost" 
                  size="sm"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <LogOut className="w-4 h-4" />
                </Button>
              </div>
            ) : (
              <>
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
              </>
            )}
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
            {isAuthenticated && user ? (
              <div className="px-4 py-2 space-y-2 border-t border-border mt-2 pt-2">
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <span className="text-sm font-medium text-foreground">{user.name}</span>
                </div>
                <Button 
                  onClick={handleLogout}
                  size="sm" 
                  className="w-full bg-red-500 hover:bg-red-600 text-white"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              </div>
            ) : (
              <div className="px-4 py-2 space-y-2 border-t border-border mt-2 pt-2">
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
            )}
          </nav>
        )}
      </div>
    </header>
  )
}
