import { ReactNode } from 'react';

export const metadata = {
  title: 'Cafetería Viviates Loja | Desayuno y Café de Especialidad',
  description: 'Cafetería Viviates en Loja: desayuno, café de especialidad, bocaditos típicos. Ubicado en Eudiq Hotel cerca del Terminal Terrestre.',
  alternates: {
    canonical: 'https://www.hoteleudiq.com/cafe-viviates',
  },
};

export default function CafeViviatesLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CafeOrCoffeeShop",
            "name": "Cafetería Viviates",
            "image": [
              "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80"
            ],
            "servesCuisine": ["Desayuno", "Café de especialidad", "Bocaditos típicos"],
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Avenida 8 de diciembre y Juan José Flores diagonal a la Terminal Terrestre",
              "addressLocality": "Loja",
              "postalCode": "110105",
              "addressCountry": "EC"
            },
            "telephone": "+593961712106",
            "url": "https://www.hoteleudiq.com/cafe-viviates",
            "openingHours": ["Mo-Sa 07:00-11:00", "Mo-Sa 16:00-21:00"],
            "priceRange": "$"
          })
        }}
      />
      {children}
    </>
  );
}
