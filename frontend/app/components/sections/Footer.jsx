import Container from '../layout/Container'

export default function Footer() {
  return (
    <footer className="border-t border-border-subtle">
      <Container>
        <div className="flex items-center justify-between py-8">

          {/* Logo */}
          <span className="text-text-primary font-display font-semibold text-base tracking-tight">
            voiET
          </span>

          {/* Links */}
          <div className="flex items-center gap-8">
            <a href="#" className="text-text-muted text-xs font-light tracking-wide hover:text-text-secondary transition-all duration-200">
              Privacy
            </a>
            <a href="#" className="text-text-muted text-xs font-light tracking-wide hover:text-text-secondary transition-all duration-200">
              Contact
            </a>
            <a href="#" className="text-text-muted text-xs font-light tracking-wide hover:text-text-secondary transition-all duration-200">
              Twitter
            </a>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-border-subtle py-6">
          <p className="text-text-muted text-xs font-light tracking-wide">
            © 2026 voiET. All rights reserved.
          </p>
        </div>

      </Container>
    </footer>
  )
}