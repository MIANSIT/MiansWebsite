'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

type Theme = 'dark' | 'light'
interface ThemeContextType { theme: Theme; toggle: () => void }

const ThemeContext = createContext<ThemeContextType>({ theme: 'dark', toggle: () => {} })
export function useTheme() { return useContext(ThemeContext) }

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem('mians-theme') as Theme | null
    const initial = stored ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    setTheme(initial)
    applyTheme(initial)
  }, [])

  function applyTheme(t: Theme) {
    const html = document.documentElement
    html.classList.toggle('light', t === 'light')
    html.classList.toggle('dark', t === 'dark')
    html.setAttribute('data-theme', t)
  }

  function toggle() {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    applyTheme(next)
    localStorage.setItem('mians-theme', next)
  }

  if (!mounted) {
    return (
      <ThemeContext.Provider value={{ theme: 'dark', toggle }}>
        <div style={{ visibility: 'hidden' }}>{children}</div>
      </ThemeContext.Provider>
    )
  }

  return <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>
}
