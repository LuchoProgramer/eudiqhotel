
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ConversionOptimizer, { TopContactBar } from '@/components/ConversionOptimizer';
import FloatingCTAs from '@/components/FloatingCTAs';
import ConversionNotifications from '@/components/ConversionNotifications';
import { ABTestDashboard } from '@/components/ABTesting';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Eudiq Hotel Loja | Hotel Cerca del Terminal Terrestre | Desayuno Incluido',
  description: 'Hotel en Loja cerca del Terminal Terrestre. Habitaciones confortables, desayuno incluido, WiFi gratis, estacionamiento. Ideal para graduaciones UTPL y turismo en Loja.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
  {/* Google Analytics 4 */}
        {/* Microsoft Clarity (mapas de calor) */}
        <Script id="ms-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "tturln616r");
          `}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BETH1DLM8W"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BETH1DLM8W');
          `}
        </Script>
  <meta property="fb:app_id" content="1327476752302916" />
  <meta name="keywords" content="hotel loja, hotel terminal terrestre loja, hospedaje loja ecuador, graduacion utpl, hotel economico loja, desayuno incluido, wifi gratis, estacionamiento gratuito, cafe viviates, turismo loja, hotel cerca terminal" />
  <meta name="author" content="Eudiq Hotel Loja" />
  <meta name="publisher" content="Eudiq Hotel Loja" />
  <meta name="robots" content="index, follow" />
        {/* Canonical URL para evitar duplicados */}
        <link rel="canonical" href="https://www.hoteleudiq.com/" />
        {/* Favicons principales y compatibilidad máxima */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon-16x16.svg" type="image/svg+xml" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon-48x48.svg" type="image/svg+xml" sizes="48x48" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="icon" href="/android-chrome-192x192.svg" type="image/svg+xml" sizes="192x192" />
        <link rel="icon" href="/android-chrome-512x512.svg" type="image/svg+xml" sizes="512x512" />
        {/* Open Graph & Twitter Card para compartir en redes */}
  <meta property="og:title" content="Eudiq Hotel Loja | Hotel Cerca del Terminal Terrestre" />
  <meta property="og:description" content="Hotel en Loja cerca del Terminal Terrestre. Habitaciones confortables, desayuno incluido, WiFi gratis, estacionamiento. Ideal para graduaciones UTPL y turismo." />
  <meta property="og:image" content="https://www.hoteleudiq.com/Eudiq.png" />
  <meta property="og:image:alt" content="Fachada y habitaciones de Eudiq Hotel Loja, hotel cerca del terminal terrestre" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.hoteleudiq.com/" />
  <meta property="og:site_name" content="Eudiq Hotel" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Eudiq Hotel Loja | Hotel Cerca del Terminal Terrestre" />
  <meta name="twitter:description" content="Hotel en Loja cerca del Terminal Terrestre. Habitaciones confortables, desayuno incluido, WiFi gratis, estacionamiento. Ideal para graduaciones UTPL." />
  <meta name="twitter:image" content="https://www.hoteleudiq.com/Eudiq.png" />
  <meta name="twitter:image:alt" content="Fachada y habitaciones de Eudiq Hotel Loja, hotel cerca del terminal terrestre" />
        {/* Datos estructurados Schema.org para Hotel */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Hotel",
            "name": "Eudiq Hotel Loja",
            "description": "Hotel en Loja cerca del Terminal Terrestre. Habitaciones confortables, desayuno incluido, WiFi gratis, estacionamiento, Café Viviates. Ideal para graduaciones UTPL y turismo.",
            "image": [
              "https://www.hoteleudiq.com/Eudiq.png",
              "https://res.cloudinary.com/dltfsttr7/image/upload/f_auto,q_auto,w_1200/v1761845419/EudiqHero_i4cxtc.webp"
            ],
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Avenida 8 de diciembre y Juan José Flores diagonal a la Terminal Terrestre",
              "addressLocality": "Loja",
              "addressRegion": "Loja",
              "postalCode": "110105",
              "addressCountry": "EC"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": -4.0039,
              "longitude": -79.2089
            },
            "telephone": "+593726141151",
            "email": "info@hoteleudiq.com",
            "url": "https://www.hoteleudiq.com/",
            "priceRange": "$$",
            "starRating": {
              "@type": "Rating",
              "ratingValue": "4"
            },
            "checkinTime": "12:00",
            "checkoutTime": "12:00",
            "amenityFeature": [
              {
                "@type": "LocationFeatureSpecification",
                "name": "Free WiFi",
                "value": true
              },
              {
                "@type": "LocationFeatureSpecification",
                "name": "Breakfast Included",
                "value": true
              },
              {
                "@type": "LocationFeatureSpecification",
                "name": "Free Parking",
                "value": true
              },
              {
                "@type": "LocationFeatureSpecification",
                "name": "Coffee Shop",
                "value": true
              },
              {
                "@type": "LocationFeatureSpecification",
                "name": "24-hour Reception",
                "value": true
              },
              {
                "@type": "LocationFeatureSpecification",
                "name": "Room Service",
                "value": true
              },
              {
                "@type": "LocationFeatureSpecification",
                "name": "Luggage Storage",
                "value": true
              },
              {
                "@type": "LocationFeatureSpecification",
                "name": "Taxi Service",
                "value": true
              }
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.2",
              "reviewCount": "218",
              "bestRating": "5",
              "worstRating": "1"
            },
            "sameAs": [
              "https://wa.me/593726141151"
            ]
          })}
        </script>
      </head>
      <body className={cn(inter.className, 'bg-neutral min-h-screen flex flex-col')}>
        <ConversionOptimizer>
          <TopContactBar />
          <div className="pt-10">
            <Navbar />
            <main className="flex-grow pt-16 sm:pt-18 md:pt-20">{children}</main>
            <Footer />
          </div>
          <FloatingCTAs />
          <ConversionNotifications />
          <ABTestDashboard />
        </ConversionOptimizer>
      </body>
    </html>
  )
}