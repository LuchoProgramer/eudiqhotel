
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

export const metadata = {
  title: 'Cafetería Café Viviates | Desayuno cerca de la Terminal Terrestre Loja',
  description: 'Cafetería Café Viviates en Eudiq Hotel Loja: desayuno desde las 6:00 AM, café lojano, bocaditos típicos y WiFi premium diagonal a la terminal terrestre.',
};

export default function CafeViviatesLanding() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-4">
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4 text-primary">Cafetería Café Viviates</h1>
        <p className="mb-6 text-lg text-gray-700">
          Desayuno cerca de la Terminal Terrestre Loja. Café lojano, bocaditos típicos y WiFi premium en un ambiente moderno y acogedor dentro de Eudiq Hotel.
        </p>
        <div className="flex justify-center gap-4 mb-6">
          {galeria.map((img) => (
            <img key={img.url} src={img.url} alt={img.alt} width={220} height={140} className="rounded-lg shadow-md object-cover" />
          ))}
        </div>
        <a
          href="https://wa.me/593961712106?text=Hola,%20quiero%20consultar%20el%20menú%20de%20Cafetería%20Café%20Viviates"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition mb-4"
        >
          Reservar desayuno por WhatsApp
        </a>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2 text-primary">¿Por qué elegirnos?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex items-center gap-3">
            <span className="text-3xl">📍</span>
            <span>Ubicación privilegiada: diagonal a la Terminal Terrestre Loja</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-3xl">☕</span>
            <span>Café lojano de especialidad</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-3xl">⏰</span>
            <span>Desayunos desde las 6:00 AM</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-3xl">💻</span>
            <span>WiFi premium y ambiente moderno</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-3xl">🍽️</span>
            <span>Bocaditos típicos y menú variado</span>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2 text-primary">Menú Destacado</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
            <span className="text-3xl mb-2">🌽</span>
            <span className="font-bold">Tamal lojano</span>
          </div>
          <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
            <span className="text-3xl mb-2">🥟</span>
            <span className="font-bold">Empanadas de viento</span>
          </div>
          <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
            <span className="text-3xl mb-2">☕</span>
            <span className="font-bold">Café filtrado y espresso</span>
          </div>
          <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
            <span className="text-3xl mb-2">🍹</span>
            <span className="font-bold">Jugos naturales</span>
          </div>
          <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
            <span className="text-3xl mb-2">🥪</span>
            <span className="font-bold">Sánduches y opciones saludables</span>
          </div>
        </div>
        <img
          src="/menu-cafe-viviates.jpg"
          alt="Menú de Cafetería Café Viviates en Eudiq Hotel Loja"
          width={800}
          height={400}
          className="rounded-lg mx-auto"
        />
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2 text-primary">Testimonios</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-50 rounded-lg p-4 shadow">
            <p className="italic mb-2">“El café lojano es espectacular y el ambiente perfecto para esperar mi bus.”</p>
            <span className="font-bold text-primary">— Andrea, Quito</span>
          </div>
          <div className="bg-gray-50 rounded-lg p-4 shadow">
            <p className="italic mb-2">“Desayuné antes de viajar y el WiFi me permitió trabajar sin problemas.”</p>
            <span className="font-bold text-primary">— Carlos, Loja</span>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2 text-primary">Ubicación</h2>
        <p className="mb-4 text-gray-700">
          Av. Pablo Palacio, diagonal a la Terminal Terrestre, Loja 110105
        </p>
        <iframe
          src="https://www.google.com/maps?q=Eudiq+Hotel+Loja&output=embed"
          width="100%"
          height="300"
          className="rounded-lg mb-6"
          loading="lazy"
          title="Mapa Cafetería Café Viviates"
        />
      </section>

      <section className="text-center mb-8">
        <a
          href="https://wa.me/593961712106?text=Hola,%20quiero%20consultar%20el%20menú%20de%20Cafetería%20Café%20Viviates"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition"
        >
          Reservar desayuno por WhatsApp
        </a>
      </section>
    </main>
  );
}