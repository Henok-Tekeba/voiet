'use client'

import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle() {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [dark])

  return (
    <button
      onClick={() => setDark(!dark)}
      className="w-8 h-8 flex items-center justify-center border border-border-default text-text-secondary hover:text-text-primary hover:border-text-muted transition-all duration-200"
    >
      {dark ? <Sun size={14} /> : <Moon size={14} />}
    </button>
  )
}