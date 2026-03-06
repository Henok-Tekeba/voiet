'use client'

import { useState } from 'react'
import Container from '../components/layout/Container'
import Section from '../components/layout/Section'

export default function AdminPage() {
  const [entries, setEntries] = useState([])
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [key, setKey] = useState('')
  const [authed, setAuthed] = useState(false)

  const fetchEntries = async () => {
    setLoading(true)
    setError(null)

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/waitlist`, {
        headers: { 'x-admin-key': key },
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error)
        return
      }

      setEntries(data.entries)
      setCount(data.count)
      setAuthed(true)
    } catch (err) {
      setError('Could not connect to server.')
    } finally {
      setLoading(false)
    }
  }

  if (!authed) {
    return (
      <main className="bg-bg-base min-h-screen flex items-center justify-center">
        <div className="flex flex-col gap-4 w-full max-w-sm px-6">

          <h1 className="text-text-primary text-xl font-semibold tracking-tight">
            Admin Access
          </h1>
          <p className="text-text-muted text-sm font-light">
            Enter your admin key to view waitlist entries.
          </p>

          <input
            type="password"
            placeholder="Admin key"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && fetchEntries()}
            className="bg-bg-subtle border border-border-default text-text-primary text-sm font-light px-4 py-2 outline-none focus:border-text-secondary transition-all duration-200 rounded-none placeholder:text-text-muted"
          />

          {error && (
            <p className="text-red-500 text-xs font-light">{error}</p>
          )}

          <button
            onClick={fetchEntries}
            disabled={loading}
            className="bg-accent-default text-bg-base text-sm font-medium px-4 py-2 hover:bg-accent-hover transition-all duration-200"
          >
            {loading ? 'Checking...' : 'Enter'}
          </button>

        </div>
      </main>
    )
  }

  return (
    <main className="bg-bg-base min-h-screen">
      <Section>
        <Container>

          {/* Header */}
          <div className="flex items-center justify-between mb-12">
            <div className="flex flex-col gap-1">
              <h1 className="text-text-primary text-2xl font-semibold tracking-tight">
                Waitlist
              </h1>
              <p className="text-text-muted text-sm font-light">
                {count} {count === 1 ? 'entry' : 'entries'} total
              </p>
            </div>
            <button
              onClick={() => setAuthed(false)}
              className="text-text-muted text-xs font-light hover:text-text-secondary transition-all duration-200"
            >
              Sign out
            </button>
          </div>

          {/* Table */}
          <div className="border border-border-default">

            {/* Table Header */}
            <div className="grid grid-cols-3 border-b border-border-default px-6 py-3">
              <span className="text-text-muted text-xs font-light tracking-wider uppercase">Email</span>
              <span className="text-text-muted text-xs font-light tracking-wider uppercase">Company</span>
              <span className="text-text-muted text-xs font-light tracking-wider uppercase">Date</span>
            </div>

            {/* Table Rows */}
            {entries.length === 0 ? (
              <div className="px-6 py-12 text-center">
                <p className="text-text-muted text-sm font-light">No entries yet.</p>
              </div>
            ) : (
              entries.map((entry, i) => (
                <div
                  key={entry.id}
                  className={`grid grid-cols-3 px-6 py-4 hover:bg-bg-subtle transition-all duration-200 ${i !== entries.length - 1 ? 'border-b border-border-subtle' : ''}`}
                >
                  <span className="text-text-primary text-sm font-light">{entry.email}</span>
                  <span className="text-text-secondary text-sm font-light">{entry.company || '—'}</span>
                  <span className="text-text-muted text-xs font-light">
                    {new Date(entry.created_at).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </span>
                </div>
              ))
            )}

          </div>

        </Container>
      </Section>
    </main>
  )
}