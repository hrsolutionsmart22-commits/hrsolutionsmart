import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'HRSolutions Mart | Recruitment, Talent Acquisition & HR Solutions',
  description: 'Professional Recruitment and HR Services firm supporting start-ups, SMEs, MNCs and leading organizations in building high-performing teams. Pan-India and international recruitment expertise.',
  keywords: 'recruitment, talent acquisition, HR solutions, hiring, staffing, IT recruitment, sales recruitment, HR operations',
  authors: [{ name: 'HRSolutions Mart' }],
  openGraph: {
    title: 'HRSolutions Mart | Recruitment, Talent Acquisition & HR Solutions',
    description: 'Building high-performing teams through customized recruitment and HR solutions.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'HRSolutions Mart',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}