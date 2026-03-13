import Button from '../ui/button'
import Container from '../layout/Container'
import ThemeToggle from '../ui/ThemeToggle'

export default function Navbar() {
  return (
    <nav className="w-full border-b border-border-subtle sticky top-0 z-50 bg-bg-base backdrop-blur-sm">
      <Container>
        <div className="flex items-center justify-between py-4">

          {/* Logo */}
          <div className="text-text-primary font-display font-semibold text-xl tracking-tight">
            voiET
          </div>

          {/* Nav Links — hidden on mobile */}
          <div className="hidden md:flex items-center gap-8">
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

          {/* Right — toggle + CTA */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button variant="primary" size="sm">
              Join Waitlist
            </Button>
          </div>

        </div>
      </Container>
    </nav>
  )
}