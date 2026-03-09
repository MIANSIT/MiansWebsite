'use client'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function NotFound() {
  return (
    <main style={{ background: 'var(--bg)', minHeight: '100vh' }} className="flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center px-6 grid-bg">
        <div className="text-center">
          <p className="font-poppins font-black leading-none select-none" style={{ fontSize: '10rem', color: 'var(--border)' }}>404</p>
          <h1 className="font-poppins font-bold text-3xl -mt-8 mb-3" style={{ color: 'var(--text-primary)' }}>Page Not Found</h1>
          <p className="font-hind mb-8" style={{ color: 'var(--text-secondary)' }}>The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
          <Link href="/" className="btn-primary px-6 py-3 text-sm inline-flex items-center gap-2 group">
            Back to Home
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  )
}
