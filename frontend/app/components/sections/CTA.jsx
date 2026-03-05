import Button from '../ui/button'
import Input from '../ui/Input'
import Container from '../layout/Container'
import Section from '../layout/Section'

export default function CTA() {
  return (
    <Section>
      <Container>

        {/* Dashed divider top */}
        <div
          className="w-full border-t border-dashed border-border-default mb-24"
          style={{ maskImage: 'linear-gradient(to right, transparent, white 20%, white 80%, transparent)' }}
        />

        <div className="flex flex-col items-center text-center gap-6">

          {/* Eyebrow */}
          <span className="text-text-muted text-xs font-light tracking-wider uppercase">
            Early Access
          </span>

          {/* Headline */}
          <h2 className="text-3xl font-regular text-text-primary tracking-tight max-w-xl">
            Be First When We Launch
          </h2>

          {/* Subtext */}
          <p className="text-text-secondary text-sm font-light max-w-md leading-relaxed">
            Join the waitlist today and get early access, priority onboarding, and a free tier when voiET launches.
          </p>

          {/* Input + Button */}
          <div className="flex items-start gap-2 mt-4 w-full max-w-md">
            <Input placeholder="company@email.com" className="flex-1" />
            <Button variant="primary" size="md">
              Join Waitlist
            </Button>
          </div>

          {/* Note */}
          <p className="text-text-muted text-xs font-light tracking-wide">
            No credit card required · Free tier on launch
          </p>

        </div>

      </Container>
    </Section>
  )
}