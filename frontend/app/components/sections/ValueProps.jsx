import { Mic, Globe, Code } from 'lucide-react'
import Card from '../ui/Card'
import Container from '../layout/Container'
import Section from '../layout/Section'

const props = [
  {
    icon: Mic,
    title: 'Human-like Voice',
    body: 'Indistinguishable from a native Amharic speaker. Your customers will never know the difference.',
  },
  {
    icon: Globe,
    title: 'Amharic-first',
    body: 'Built from the ground up for Amharic — not an afterthought. Every tone, every nuance, captured.',
  },
  {
    icon: Code,
    title: 'Simple API',
    body: 'Integrate in minutes. Send text, receive audio. Clean documentation and a free tier to get started.',
  },
]

export default function ValueProps() {
  return (
    <Section>
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-16">
          {props.map((prop) => {
            const Icon = prop.icon
            return (
              <Card key={prop.title} variant="bracket">
                <div className="flex flex-col gap-8 sm:gap-20">
                  <div className="w-10 h-10 flex items-center justify-center border border-border-default">
                    <Icon size={18} className="text-text-secondary" />
                  </div>
                  <div className="flex flex-col gap-4">
                    <h3 className="text-text-primary text-base font-medium">
                      {prop.title}
                    </h3>
                    <p className="text-text-secondary text-sm font-light leading-relaxed">
                      {prop.body}
                    </p>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}