
import Hero from '@/components/Hero';
import ExperienciaUnica from '@/components/ExperienciaUnica';
import Habitaciones from '@/components/Habitaciones';
import Servicios from '@/components/Servicios';
import Galeria from '@/components/Galeria';
import Ubicacion from '@/components/Ubicacion';
import Testimonios from '@/components/Testimonios';
import Contacto from '@/components/Contacto';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F2F2F2]">
      <Hero />
      <ExperienciaUnica />
      <Habitaciones />
      <Servicios />
      <Galeria />
      <Ubicacion />
      <Testimonios />
      <Contacto />
    </main>
  );
}