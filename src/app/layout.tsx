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
        {/* Favicons principales */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon-16x16.svg" type="image/svg+xml" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.svg" type="image/svg+xml" sizes="32x32" />
        <link rel="icon" href="/favicon-48x48.svg" type="image/svg+xml" sizes="48x48" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.svg" sizes="180x180" />
        <link rel="icon" href="/android-chrome-192x192.svg" type="image/svg+xml" sizes="192x192" />
        <link rel="icon" href="/android-chrome-512x512.svg" type="image/svg+xml" sizes="512x512" />
        {/* Open Graph & Twitter Card para compartir en redes */}
        <meta property="og:title" content="Eudiq Hotel - Experiencia de Lujo" />
        <meta property="og:description" content="Bienvenido a Eudiq Hotel, tu destino perfecto para unas vacaciones inolvidables en Loja, Ecuador." />
        <meta property="og:image" content="/Eudiq.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://eudiqhotel.com/" />
        <meta property="og:site_name" content="Eudiq Hotel" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Eudiq Hotel - Experiencia de Lujo" />
        <meta name="twitter:description" content="Bienvenido a Eudiq Hotel, tu destino perfecto para unas vacaciones inolvidables en Loja, Ecuador." />
        <meta name="twitter:image" content="/Eudiq.png" />
        {/* Puedes agregar PNGs o ICO si los tienes para compatibilidad extra */}
      </head>
      <body className={cn(inter.className, 'bg-neutral min-h-screen flex flex-col')}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}