'use client'

import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-center p-8">
      <h1 className="text-5xl font-bold text-[#038C7F] mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Página no encontrada</h2>
      <p className="text-gray-600 mb-6">La página que buscas no existe o fue movida.</p>
      <Link href="/" className="inline-block px-6 py-3 bg-[#038C7F] text-white rounded-full font-semibold hover:bg-[#A9BF04] transition">
        Volver al inicio
      </Link>
    </main>
  );
}