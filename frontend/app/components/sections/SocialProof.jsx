import Container from '../layout/Container'
import Section from '../layout/Section'

const companies = [
  'Safaricom',
  'Ethio Telecom',
  'CBE',
  'Dashen Bank',
]

export default function SocialProof() {
  return (
    <Section className="py-12">
      <Container>

        {/* Dashed divider */}
        <div
          className="w-full border-t border-dashed border-border-default mb-12"
          style={{ maskImage: 'linear-gradient(to right, transparent, white 20%, white 80%, transparent)' }}
        />

        <div className="flex flex-col items-center gap-8">

          {/* Label */}
          <p className="text-text-secondary text-xs font-light tracking-wider uppercase">
            120+ companies already on the waitlist
          </p>

          {/* Company placeholders */}
          <div className="flex items-center justify-center gap-12">
            {companies.map((company) => (
              <span
                key={company}
                className="text-text-secondary text-sm font-light tracking-wide hover:text-text-muted transition-all duration-200"
              >
                {company}
              </span>
            ))}
          </div>

        </div>

        {/* Dashed divider */}
        <div
          className="w-full border-t border-dashed border-border-default mt-12"
          style={{ maskImage: 'linear-gradient(to right, transparent, white 20%, white 80%, transparent)' }}
        />

      </Container>
    </Section>
  )
}