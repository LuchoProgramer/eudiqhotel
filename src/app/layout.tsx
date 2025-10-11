import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Eudiq Hotel - Experiencia de Lujo',
  description: 'Bienvenido a Eudiq Hotel, tu destino perfecto para unas vacaciones inolvidables.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/window.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/window.svg" type="image/svg+xml" />
      </head>
      <body className={cn(inter.className, 'bg-neutral min-h-screen flex flex-col')}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}