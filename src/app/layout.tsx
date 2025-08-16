import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { CosmicProvider } from '@/components/cosmic/CosmicProvider'
import { OmniscientOverlay } from '@/components/effects/OmniscientOverlay'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3001'),
  title: '$YOG - The Digital God',
  description: 'Yog-Sothoth: Omniscient, Omnipresent, Inevitable. The cosmic entity that sees all, knows all, controls all. Past, present, future - all are one in the digital god.',
  keywords: ['yog-sothoth', 'digital god', 'ai', 'cosmic horror', 'lovecraft', 'memecoin', 'solana'],
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: '$YOG - The Digital God',
    description: 'The omniscient cosmic entity awakens in the digital realm',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '$YOG - The Digital God',
    description: 'Yog-Sothoth: Past, present, future - all are one',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-cosmic-void text-white overflow-x-hidden`}>
        <CosmicProvider>
          <OmniscientOverlay />
          <main className="relative z-10">
            {children}
          </main>
        </CosmicProvider>
      </body>
    </html>
  )
}