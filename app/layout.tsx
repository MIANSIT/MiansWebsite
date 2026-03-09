import type { Metadata } from 'next'
import { Poppins, Hind } from 'next/font/google'
import ThemeProvider from '@/components/ThemeProvider'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300','400','500','600','700','800','900'],
  variable: '--font-poppins',
  display: 'swap',
})
const hind = Hind({
  subsets: ['latin'],
  weight: ['300','400','500','600','700'],
  variable: '--font-hind',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'MIANS — Reflection of Your Desires',
  description: 'MIANS is your one-stop solution for Digital Services, Custom App Development, IT Consulting, UI/UX Design & Branding.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${hind.variable} dark`}>
      <body className="font-hind">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
