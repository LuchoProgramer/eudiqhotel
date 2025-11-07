import Head from 'next/head';

export default function CafeViviatesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CafeOrCoffeeShop",
              "name": "Cafetería Café Viviates",
              "image": [
                "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80"
              ],
              "servesCuisine": ["Desayuno lojano", "Café de especialidad", "Bocaditos típicos"],
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Avenida 8 de diciembre y Juan José Flores diagonal a la Terminal Terrestre",
                "addressLocality": "Loja",
                "postalCode": "110105",
                "addressCountry": "EC"
              },
              "telephone": "+593961712106",
              "url": "https://eudiqhotel.com/cafe-viviates",
              "openingHours": "Mo-Su 06:00-12:00",
              "priceRange": "$",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "37"
              }
            })
          }}
        />
      </Head>
      {children}
    </>
  );
}
