/**
 * Landing page optimizada para Google Ads - Graduación UTPL
 * Targeting: Familias de graduandos UTPL
 * Seasonal: Febrero, Junio, Octubre
 */

'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { CTAButton } from '@/components/ConversionOptimizer';
import { Users, Car, Coffee as Cafe, Camera, GraduationCap, DollarSign, Clock, MapPin, Utensils } from 'lucide-react';

export default function GraduacionUTPLPage() {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    // Countdown para crear urgencia (próxima graduación)
    const nextGraduation = new Date('2025-02-15'); // Fecha ejemplo
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = nextGraduation.getTime() - now;
      
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      
      if (days > 0) {
        setTimeLeft(`${days} días ${hours} horas`);
      } else {
        setTimeLeft('¡Muy pronto!');
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16">
        {/* Background decorativo */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-96 h-96 bg-blue-100 rounded-full opacity-20" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-green-100 rounded-full opacity-20" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contenido principal */}
            <div className="text-center lg:text-left">
              {/* Badge de urgencia */}
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-blue-600/10 rounded-full">
                <span className="text-blue-600 text-sm font-semibold">🎓 GRADUACIÓN UTPL 2025</span>
              </div>

              {/* Headline principal */}
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Tu <span className="text-blue-600">Graduación UTPL</span><br />
                merece el mejor hotel
              </h1>

              {/* Subheadline */}
              <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
                Habitaciones familiares cómodas, desayuno incluido y ubicación perfecta para tu día especial.
              </p>

              {/* Countdown */}
              {timeLeft && (
                <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white p-4 rounded-lg mb-8 text-center">
                  <p className="text-sm font-medium">Próxima Graduación UTPL en:</p>
                  <p className="text-2xl font-bold">{timeLeft}</p>
                  <p className="text-sm">¡Reserva antes que se agoten!</p>
                </div>
              )}

              {/* CTAs principales */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <CTAButton
                  variant="primary"
                  size="large"
                  href="https://api.whatsapp.com/send?phone=593961712106&text=Hola,%20quiero%20reservar%20para%20graduación%20UTPL%20en%20Eudiq%20Hotel"
                  section="graduacion_hero"
                  className="flex items-center gap-2"
                >
                  📱 Reservar para Graduación
                </CTAButton>
                
                <CTAButton
                  variant="secondary"
                  size="large"
                  href="tel:+593961712106"
                  section="graduacion_hero"
                  className="flex items-center gap-2"
                >
                  📞 Llamar Ahora
                </CTAButton>
              </div>

              {/* Social proof rápido */}
              <div className="flex items-center gap-4 justify-center lg:justify-start text-sm text-gray-600">
                <div className="flex text-yellow-400">⭐⭐⭐⭐⭐</div>
                <span>+150 familias graduandas nos recomiendan</span>
              </div>
            </div>

            {/* Imagen hero */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dltfsttr7/image/upload/f_auto,q_auto,w_600,c_fill,g_center,ar_1:1/v1760204433/IMG_4194-HDR_xjuzwj.jpg"
                  alt="Habitación familiar perfecta para graduación UTPL en Eudiq Hotel"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              
              {/* Badge flotante */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-xl p-4 border-l-4 border-green-500">
                <p className="text-sm font-semibold text-gray-900">A solo 5 min</p>
                <p className="text-xs text-gray-600">del Campus UTPL</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios específicos para graduación */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ¿Por qué elegir Eudiq Hotel para tu graduación?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Sabemos lo especial que es este día. Por eso ofrecemos servicios pensados especialmente para familias graduandas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                Icon: Users,
                title: 'Habitaciones Familiares',
                description: 'Espacios amplios para toda la familia. Camas extra sin costo adicional para abuelos y familiares.'
              },
              {
                Icon: Car,
                title: 'Fácil Acceso UTPL',
                description: 'A 5 minutos del campus. Transporte público directo y estacionamiento gratuito disponible.'
              },
              {
                Icon: Cafe,
                title: 'Desayuno Energizante',
                description: 'Desayuno incluido. Perfecto para empezar el día especial con energía.'
              },
              {
                Icon: Camera,
                title: 'Espacios para Fotos',
                description: 'Áreas comunes perfectas para fotos familiares. Jardín interno ideal para recuerdos.'
              },
              {
                Icon: GraduationCap,
                title: 'Experiencia en Graduaciones',
                description: 'Personal capacitado en eventos de graduación. Conocemos las necesidades de las familias.'
              },
              {
                Icon: DollarSign,
                title: 'Tarifas Especiales',
                description: 'Descuentos para grupos familiares. Mejor precio garantizado reservando directo.'
              }
            ].map((benefit, index) => {
              const IconComponent = benefit.Icon;
              return (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border hover:shadow-lg transition-shadow">
                  <IconComponent className="h-10 w-10 text-[#038C7F] mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonios de familias graduandas */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Lo que dicen las familias graduandas
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex text-yellow-400 mb-2">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-700 mb-4 italic">
                &ldquo;Perfecto para la graduación de mi hija. Las habitaciones son amplias, el desayuno delicioso y la ubicación ideal. El personal nos ayudó con todo.&rdquo;
              </p>
              <p className="font-semibold text-blue-600">- María Elizalde, Cuenca</p>
              <p className="text-sm text-gray-500">Graduación Medicina UTPL 2024</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex text-yellow-400 mb-2">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-700 mb-4 italic">
                &ldquo;Vinimos desde Machala para la graduación de nuestro hijo. El hotel superó nuestras expectativas. Lo recomendamos 100%.&rdquo;
              </p>
              <p className="font-semibold text-blue-600">- Carlos y Ana Morocho</p>
              <p className="text-sm text-gray-500">Graduación Ingeniería UTPL 2024</p>
            </div>
          </div>
        </div>
      </section>

      {/* Información práctica */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Información práctica para tu graduación
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Car className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Cómo llegar desde el Hotel a UTPL</h3>
                    <p className="text-gray-600 text-sm">5 minutos en auto, bus directo cada 20 min, taxi $3-4 USD</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Horarios recomendados</h3>
                    <p className="text-gray-600 text-sm">Check-in temprano disponible, desayuno desde 7:00 AM</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Capacidad familiar</h3>
                    <p className="text-gray-600 text-sm">Hasta 6 personas por habitación, cunas disponibles</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-green-600 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <GraduationCap className="h-8 w-8" /> Oferta Especial Graduación
              </h3>
              <div className="space-y-3 mb-6">
                <p className="flex items-center gap-2">
                  <span className="text-yellow-300">✓</span>
                  Descuento 15% para grupos de 3+ habitaciones
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-yellow-300">✓</span>
                  Check-in temprano GRATIS
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-yellow-300">✓</span>
                  Desayuno especial incluido
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-yellow-300">✓</span>
                  Estacionamiento sin límite de tiempo
                </p>
              </div>
              
              <CTAButton
                variant="secondary"
                size="large"
                href="https://api.whatsapp.com/send?phone=593961712106&text=Hola,%20quiero%20información%20sobre%20la%20oferta%20especial%20graduación%20UTPL"
                section="graduacion_offer"
                className="w-full justify-center bg-white text-blue-600 hover:bg-gray-100"
              >
                📱 Solicitar Oferta Especial
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Reserva ahora para tu graduación UTPL
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Las fechas de graduación se llenan rápido. Asegura tu lugar hoy mismo.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <CTAButton
              variant="primary"
              size="large"
              href="https://api.whatsapp.com/send?phone=593961712106&text=Hola,%20quiero%20reservar%20para%20graduación%20UTPL%20-%20familia%20completa"
              section="graduacion_final"
              className="flex items-center justify-center gap-2"
            >
              💬 Reservar por WhatsApp
            </CTAButton>
            
            <CTAButton
              variant="secondary"
              size="large"
              href="tel:+593961712106"
              section="graduacion_final"
              className="flex items-center justify-center gap-2 border-white text-white hover:bg-white hover:text-gray-900"
            >
              📞 +593 96 171 2106
            </CTAButton>
          </div>

          <p className="text-sm text-gray-400">
            Respuesta inmediata • Mejor precio garantizado • Sin comisiones extras
          </p>
        </div>
      </section>
    </div>
  );
}