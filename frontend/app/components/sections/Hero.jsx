import Button from '../ui/button'
import Input from '../ui/Input'
import Container from '../layout/Container'
import Section from '../layout/Section'

export default function Hero() {
  return (
    <Section className="py-32">
      <Container>
        <div className="flex flex-col items-center text-center gap-6">

          {/* Eyebrow */}
          <span className="text-text-muted text-xs font-light tracking-wider uppercase border border-border-default px-3 py-2">
            Amharic TTS · Powered by AI
          </span>

          {/* Headline */}
          <h1 className="text-4xl font-light text-text-primary tracking-tight leading-tight max-w-2xl">
            Your Product,<br />Speaking Ethiopian
          </h1>

          {/* Subtext */}
          <p className="text-text-secondary text-lg font-light leading-relaxed max-w-xl">
            Give your virtual assistant a voice your customers actually trust. 
            voiET delivers natural.
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