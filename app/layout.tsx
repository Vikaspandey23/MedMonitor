import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import ChatbotWidget from "@/components/chatbot-widget"
import { AuthProvider } from "@/app/providers"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Med Monitor - Real-Time Health Monitoring & Doctor Consultations",
  description:
    "24/7 health monitoring, emergency response system, AI voice control, and secure doctor consultations. Download Med Monitor now for comprehensive health management.",
  generator: "v0.app",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background" suppressHydrationWarning>
      <body className={`font-sans antialiased bg-background`}>
        <AuthProvider>
          <ChatbotWidget />
          {children}
          <Analytics />
        </AuthProvider>
      </body>
    </html>
  )
}
