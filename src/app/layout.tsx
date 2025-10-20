  <meta property="fb:app_id" content="1327476752302916" />
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Eudiq Hotel Loja | Hotel de Lujo Cerca de la Terminal Terrestre',
  description: 'Descubre Eudiq Hotel en Loja, Ecuador. Ofrecemos habitaciones de lujo, Wi-Fi premium, desayuno incluido y nuestro exclusivo Café Viviates. Reserva tu estadía cerca de la terminal terrestre.',
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
  <meta property="og:title" content="Eudiq Hotel Loja | Hotel de Lujo Cerca de la Terminal Terrestre" />
  <meta property="og:description" content="Descubre Eudiq Hotel en Loja, Ecuador. Habitaciones de lujo, Wi-Fi premium, desayuno incluido y Café Viviates. Reserva tu estadía cerca de la terminal terrestre." />
        <meta property="og:image" content="/Eudiq.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://eudiqhotel.com/" />
        <meta property="og:site_name" content="Eudiq Hotel" />
        <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Eudiq Hotel Loja | Hotel de Lujo Cerca de la Terminal Terrestre" />
  <meta name="twitter:description" content="Descubre Eudiq Hotel en Loja, Ecuador. Habitaciones de lujo, Wi-Fi premium, desayuno incluido y Café Viviates. Reserva tu estadía cerca de la terminal terrestre." />
        <meta name="twitter:image" content="/Eudiq.png" />
        {/* Datos estructurados Schema.org para Hotel */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Hotel",
            "name": "Eudiq Hotel Loja",
            "description": "Hotel de lujo en Loja, Ecuador, cerca de la terminal terrestre. Habitaciones premium, Wi-Fi, desayuno incluido y Café Viviates.",
            "image": "https://eudiqhotel.com/Eudiq.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Av. Pablo Palacio, diagonal a la terminal terrestre",
              "addressLocality": "Loja",
              "postalCode": "110105",
              "addressCountry": "EC"
            },
            "telephone": "+593 7 261-4151",
            "priceRange": "$25 - $60",
            "amenityFeature": [
              {"@type": "LocationFeatureSpecification", "name": "Wi-Fi premium", "value": true},
              {"@type": "LocationFeatureSpecification", "name": "Desayuno incluido", "value": true},
              {"@type": "LocationFeatureSpecification", "name": "Café Viviates", "value": true},
              {"@type": "LocationFeatureSpecification", "name": "Estacionamiento", "value": true}
            ],
            "department": {
              "@type": "CafeOrCoffeeShop",
              "name": "Café Viviates",
              "description": "Café de especialidad 100% lojano, nuestra marca propia. Disfruta de una experiencia única en cada taza.",
              "image": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
              "servesCuisine": "Café de especialidad",
              "telephone": "+593 7 261-4151"
            },
            "makesOffer": [
              {
                "@type": "Offer",
                "name": "Habitación Individual",
                "price": "25",
                "priceCurrency": "USD",
                "description": "Perfecta para viajeros solitarios. Incluye desayuno."
              },
              {
                "@type": "Offer",
                "name": "Habitación Matrimonial",
                "price": "41",
                "priceCurrency": "USD",
                "description": "Espacio elegante para parejas. Incluye desayuno."
              },
              {
                "@type": "Offer",
                "name": "Habitación Doble Cama",
                "price": "45",
                "priceCurrency": "USD",
                "description": "Habitación con dos camas. Incluye desayuno."
              },
              {
                "@type": "Offer",
                "name": "Habitación Triple",
                "price": "50",
                "priceCurrency": "USD",
                "description": "Habitación para tres personas. Incluye desayuno."
              },
              {
                "@type": "Offer",
                "name": "Habitación Cuádruple",
                "price": "60",
                "priceCurrency": "USD",
                "description": "Habitación para cuatro personas. Incluye desayuno."
              },
              {
                "@type": "Offer",
                "name": "Habitación Familiar",
                "price": "15",
                "priceCurrency": "USD",
                "description": "Precio por persona. Espaciosa y perfecta para familias. Incluye desayuno."
              }
            ],
            "url": "https://eudiqhotel.com/",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.2",
              "reviewCount": "200"
            }
          })}
        </script>
      </head>
      <body className={cn(inter.className, 'bg-neutral min-h-screen flex flex-col')}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}