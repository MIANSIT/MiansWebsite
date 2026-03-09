'use client'

import { useEffect, useRef, ReactNode } from 'react'

interface Props { children: ReactNode; className?: string; delay?: number }

export default function AnimatedSection({ children, className = '', delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.classList.add('reveal-hidden')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              el.classList.remove('reveal-hidden')
              el.classList.add('reveal-visible')
            }, delay)
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return <div ref={ref} className={className}>{children}</div>
}
