'use client'

import { useState } from 'react'
import Button from '../ui/button'
import Input from '../ui/Input'
import Container from '../layout/Container'
import Section from '../layout/Section'

export default function CTA() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState(null)
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    if (!email) return
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

if (!isValidEmail) {
  return res.status(400).json({ error: 'Please enter a valid email address.' })
}

    setLoading(true)
    setStatus(null)

    try {
      const res = await fetch('http://localhost:4000/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      const data = await res.json()

      if (res.ok) {
        setStatus('success')
        setMessage(data.message)
        setEmail('')
      } else {
        setStatus('error')
        setMessage(data.error)
      }
    } catch (err) {
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

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
          <h2 className="text-2xl lg:text-3xl font-bold text-text-primary tracking-tight max-w-lg">
            Be First When We Launch
          </h2>

          {/* Subtext */}
          <p className="text-text-secondary text-sm font-light max-w-md leading-relaxed">
            Join the waitlist today and get early access, priority onboarding, and a
            free tier when voiET launches.
          </p>

          {/* Input + Button */}
          <div className="flex flex-col lg:flex-row items-stretch lg:items-start gap-2 mt-4 w-full lg:max-w-md">
            <Input
              placeholder="company@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 w-full"
            />
            <Button
              variant="primary"
              size="sm"
              onClick={handleSubmit}
              disabled={loading}
              className="w-full lg:w-auto"
            >
              {loading ? 'Joining...' : 'Join Waitlist'}
            </Button>
          </div>

          {/* Feedback message */}
          {status && (
            <p className={`text-xs font-light tracking-wide ${status === 'success' ? 'text-green-500' : 'text-red-500'}`}>
              {message}
            </p>
          )}

          {/* Note */}
          <p className="text-text-muted text-xs font-light tracking-wide">
            No credit card required · Free tier on launch
          </p>

        </div>

      </Container>
    </Section>
  )
}