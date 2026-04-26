import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 3v18M3 12h18" />
                <circle cx="12" cy="12" r="2" fill="currentColor" />
              </svg>
              <span className="font-bold text-lg">Med Monitor</span>
            </div>
            <p className="text-sm text-white/70">
              Your comprehensive health monitoring platform with 24/7 doctor access and emergency response.
            </p>
            <div className="flex gap-4 mt-4">
              <Twitter className="w-5 h-5 hover:text-primary cursor-pointer transition" />
              <Facebook className="w-5 h-5 hover:text-primary cursor-pointer transition" />
              <Linkedin className="w-5 h-5 hover:text-primary cursor-pointer transition" />
              <Instagram className="w-5 h-5 hover:text-primary cursor-pointer transition" />
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="#features" className="hover:text-white transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#monitoring" className="hover:text-white transition">
                  Monitoring
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Security
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="#consultation" className="hover:text-white transition">
                  Consultations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Emergency Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Health Records
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Prescription
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="#" className="hover:text-white transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  HIPAA Compliance
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Contact Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <p className="text-sm text-white/60 text-center">
            © 2025 Med Monitor. All rights reserved. Your health is our priority.
          </p>
        </div>
      </div>
    </footer>
  )
}
