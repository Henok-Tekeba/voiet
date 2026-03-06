'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Button from '../ui/button'
import Container from '../layout/Container'
import ThemeToggle from '../ui/ThemeToggle'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="w-full border-b border-border-subtle sticky top-0 z-50 bg-bg-base backdrop-blur-sm">
      <Container>

        <div className="flex items-center justify-between py-4">

          {/* Logo */}
          <div className="text-text-primary font-display font-semibold text-xl tracking-tight">
            voiET
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="#features" className="text-text-secondary text-sm font-light hover:text-text-primary transition-all duration-200">
              Features
            </a>
            <a href="#how-it-works" className="text-text-secondary text-sm font-light hover:text-text-primary transition-all duration-200">
              How it works
            </a>
            <a href="#pricing" className="text-text-secondary text-sm font-light hover:text-text-primary transition-all duration-200">
              Pricing
            </a>
          </div>

          {/* Desktop Right */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <Button variant="primary" size="sm">
              Join Waitlist
            </Button>
          </div>

          {/* Mobile Right */}
          <div className="flex lg:hidden items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setOpen(!open)}
              className="text-text-secondary hover:text-text-primary transition-all duration-200"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="lg:hidden flex flex-col gap-4 pb-6 border-t border-border-subtle pt-4">
            <a href="#features" className="text-text-secondary text-sm font-light hover:text-text-primary transition-all duration-200">
              Features
            </a>
            <a href="#how-it-works" className="text-text-secondary text-sm font-light hover:text-text-primary transition-all duration-200">
              How it works
            </a>
            <a href="#pricing" className="text-text-secondary text-sm font-light hover:text-text-primary transition-all duration-200">
              Pricing
            </a>
            <Button variant="primary" size="sm" className="w-full">
              Join Waitlist
            </Button>
          </div>
        )}

      </Container>
    </nav>
  )
}