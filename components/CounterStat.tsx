'use client'

import { useEffect, useRef, useState } from 'react'

interface Props { end: number; suffix?: string; label: string; duration?: number }

export default function CounterStat({ end, suffix = '', label, duration = 1800 }: Props) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const start = performance.now()
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setCount(Math.floor(eased * end))
          if (progress < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
        observer.disconnect()
      }
    }, { threshold: 0.5 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [end, duration])

  return (
    <div ref={ref} className="text-center">
      <div className="font-poppins font-bold text-3xl lg:text-4xl mb-1" style={{ color: 'var(--text-primary)' }}>
        {count}{suffix}
      </div>
      <div className="font-hind text-sm" style={{ color: 'var(--text-secondary)' }}>{label}</div>
    </div>
  )
}
