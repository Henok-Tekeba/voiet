'use client'

import { useState } from 'react'
import Button from '../ui/button'
import Input from '../ui/Input'
import Container from '../layout/Container'
import Section from '../layout/Section'

export default function Hero() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState(null)
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    if (!email) return

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    if (!isValidEmail) {
      setStatus('error')
      setMessage('Please enter a valid email address.')
      return
    }

    setLoading(true)
    setStatus(null)

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/waitlist`, {
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
    <Section className="py-16 sm:py-32">
      <Container>
        <div className="flex flex-col items-center text-center gap-6">

          {/* Eyebrow */}
          <span className="text-text-muted text-xs font-light tracking-wider uppercase border border-border-default px-3 py-2">
            Amharic TTS · Powered by AI
          </span>

          {/* Headline */}
          <h1 className="text-2xl lg:text-4xl font-light text-text-primary tracking-tight leading-tight max-w-2xl">
            Your Product,<br />Speaking Ethiopian
          </h1>

          {/* Subtext */}
          <p className="text-text-secondary text-base lg:text-lg font-light leading-relaxed max-w-xl">
            Give your virtual assistant a voice your customers actually trust.
            voiET delivers natural, human-like Amharic speech built for businesses
            shaping the future of Ethiopia.
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
