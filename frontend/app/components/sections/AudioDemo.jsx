'use client'

import { useState } from 'react'
import { Play, Pause } from 'lucide-react'
import Container from '../layout/Container'
import Section from '../layout/Section'

export default function AudioDemo() {
  const [playing, setPlaying] = useState(false)

  return (
    <Section>
      <Container>

        {/* Header */}
        <div className="flex flex-col items-center gap-4 mb-12">
          <span className="text-text-muted text-xs font-light tracking-wider uppercase">
            Audio Demo
          </span>
          <h2 className="text-2xl font-light text-text-primary tracking-tight">
            Hear the Difference
          </h2>
          <p className="text-text-secondary text-sm font-light">
            A sample of voiET reading a real Amharic sentence
          </p>
        </div>

        {/* Player */}
        <div className="max-w-2xl mx-auto border border-border-default bg-bg-subtle p-6 flex items-center gap-6">

          {/* Play button */}
          <button
            onClick={() => setPlaying(!playing)}
            className="w-10 h-10 flex items-center justify-center border border-border-default text-text-secondary hover:text-text-primary hover:border-text-muted transition-all duration-200 shrink-0"
          >
            {playing ? <Pause size={16} /> : <Play size={16} />}
          </button>

          {/* Waveform */}
          <div className="flex-1 flex items-center gap-[2px] h-8">
            {Array.from({ length: 60 }).map((_, i) => (
              <div
                key={i}
                className="flex-1 bg-border-default rounded-none"
                style={{
                  height: `${20 + Math.sin(i * 0.4) * 14 + Math.random() * 10}%`,
                  opacity: playing ? 1 : 0.5,
                  transition: 'opacity 0.3s',
                }}
              />
            ))}
          </div>

          {/* Time */}
          <span className="text-text-muted text-xs font-mono shrink-0">
            0:12
          </span>

        </div>

        {/* Amharic sentence */}
        <p className="text-center text-text-muted text-sm font-light mt-4 tracking-wide">
          "ሰላም፣ እንኳን ደህና መጡ። እኛ እርስዎን ለማገልገል ዝግጁ ነን።"
        </p>

      </Container>
    </Section>
  )
}