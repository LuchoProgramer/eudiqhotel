export const metadata = {
  title: 'Café Viviates | Eudiq Hotel Loja',
  description: 'Descubre Café Viviates, la cafetería de especialidad de Eudiq Hotel Loja. Café 100% lojano, ambiente acogedor y experiencias únicas en cada taza.',
};

const galeria = [
  {
    url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80',
    alt: 'Barista sirviendo café de especialidad en Café Viviates',
  },
  {
    url: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80',
    alt: 'Taza de café latte arte en Café Viviates',
  },
  {
    url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
    alt: 'Ambiente acogedor de la cafetería Café Viviates',
  },
];

export default function CafeViviatesPage() {
  return (
    <main className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-6 text-center">Café Viviates</h1>
      <p className="mb-8 text-center text-lg text-gray-600">Café de especialidad 100% lojano, nuestra marca propia. Disfruta de una experiencia única en cada taza, dentro del hotel o para llevar.</p>
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {galeria.map((img) => (
          <img key={img.url} src={img.url} alt={img.alt} className="rounded-lg shadow object-cover w-full h-48" />
        ))}
      </div>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">¿Por qué Café Viviates?</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Café de origen lojano, seleccionado y tostado artesanalmente.</li>
          <li>Ambiente moderno y tranquilo, ideal para reuniones o relajarte.</li>
          <li>Baristas expertos y atención personalizada.</li>
          <li>Opciones de café para llevar y venta de café en grano.</li>
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Menú destacado</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Espresso, Americano, Cappuccino, Latte</li>
          <li>Cold brew y bebidas frías</li>
          <li>Pastelería y snacks artesanales</li>
        </ul>
      </section>
      <div className="text-center mt-8">
        <a href="https://wa.me/593961712106" target="_blank" rel="noopener" className="bg-primary text-white px-6 py-3 rounded text-lg font-bold hover:bg-primary-dark transition">Reservar o pedir café</a>
      </div>
    </main>
  );
}