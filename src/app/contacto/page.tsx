/**
 * Página de contacto optimizada para conversiones
 * Incluye formulario multi-paso y múltiples opciones de contacto
 */

import { Metadata } from 'next';
import ContactFormOptimized from '@/components/ContactFormOptimized';
import { CTAButton } from '@/components/ConversionOptimizer';

export const metadata: Metadata = {
  title: 'Contacto y Reservas | Eudiq Hotel Loja | WhatsApp +593 96 171 2106',
  description: 'Contacta y reserva en Eudiq Hotel Loja. WhatsApp, teléfono, formulario online. Respuesta inmediata. Diagonal al Terminal Terrestre, mejor ubicación de Loja.',
  openGraph: {
    title: 'Contacto y Reservas - Eudiq Hotel Loja',
    description: 'Reserva directa sin comisiones. WhatsApp +593 96 171 2106. La mejor ubicación de Loja.',
    images: ['https://res.cloudinary.com/dltfsttr7/image/upload/f_auto,q_auto,w_1200/v1760204433/IMG_4194-HDR_xjuzwj.jpg'],
  },
};

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-[#038C7F]/10 rounded-full">
            <span className="text-[#038C7F] text-sm font-medium">CONTACTO DIRECTO</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Reserva <span className="text-[#038C7F]">sin comisiones</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Contacto directo con Eudiq Hotel. Mejor precio garantizado, respuesta inmediata y atención personalizada.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#038C7F]">&lt; 5min</div>
              <div className="text-sm text-gray-600">Respuesta promedio</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#038C7F]">24/7</div>
              <div className="text-sm text-gray-600">Atención WhatsApp</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#038C7F]">0%</div>
              <div className="text-sm text-gray-600">Comisiones extra</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Formulario de Contacto */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Formulario de Reserva
            </h2>
            <ContactFormOptimized />
          </div>

          {/* Información de Contacto */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Contacto Directo
              </h2>
              
              {/* WhatsApp */}
              <div className="bg-gradient-to-r from-[#25D366]/10 to-[#25D366]/5 rounded-xl p-6 mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">WhatsApp Preferido</h3>
                    <p className="text-sm text-gray-600">Respuesta más rápida</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Nuestro método preferido de contacto. Respuesta inmediata durante horario de oficina y máximo 2 horas fuera de horario.
                </p>
                <CTAButton
                  variant="whatsapp"
                  size="large"
                  href="https://wa.me/593961712106?text=Hola,%20quiero%20hacer%20una%20reserva%20en%20Eudiq%20Hotel"
                  section="contact_page"
                  className="w-full"
                >
                  💬 Chatear por WhatsApp
                </CTAButton>
              </div>

              {/* Teléfono */}
              <div className="bg-gradient-to-r from-[#4285F4]/10 to-[#4285F4]/5 rounded-xl p-6 mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#4285F4] rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Llamada Directa</h3>
                    <p className="text-sm text-gray-600">+593 96 171 2106</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Horario de atención: 7:00 AM - 10:00 PM todos los días. Fuera de horario, puedes dejar mensaje por WhatsApp.
                </p>
                <CTAButton
                  variant="phone"
                  size="large"
                  href="tel:+593961712106"
                  section="contact_page"
                  className="w-full"
                >
                  📞 Llamar Ahora
                </CTAButton>
              </div>
            </div>

            {/* Información Adicional */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-4">Información del Hotel</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 text-[#038C7F] mt-0.5">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Ubicación</div>
                    <div className="text-gray-600 text-sm">Diagonal al Terminal Terrestre de Loja</div>
                    <div className="text-gray-600 text-sm">200 metros del Parque Jipiro</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 text-[#038C7F] mt-0.5">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Check-in / Check-out</div>
                    <div className="text-gray-600 text-sm">Check-in: 14:00 hrs</div>
                    <div className="text-gray-600 text-sm">Check-out: 12:00 hrs</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 text-[#038C7F] mt-0.5">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Servicios Incluidos</div>
                    <div className="text-gray-600 text-sm">WiFi gratis • Desayuno • Estacionamiento</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonios */}
            <div className="bg-gradient-to-r from-[#CBD95F]/10 to-[#038C7F]/10 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-4">Lo que dicen nuestros huéspedes</h3>
              
              <div className="space-y-4">
                <div className="bg-white/50 rounded-lg p-4">
                  <div className="flex text-yellow-400 mb-2">
                    ⭐⭐⭐⭐⭐
                  </div>
                  <p className="text-gray-700 text-sm italic mb-2">
                    &ldquo;Excelente ubicación, muy cerca del terminal. Personal súper amable y las habitaciones muy limpias.&rdquo;
                  </p>
                  <p className="text-gray-600 text-xs">- María González</p>
                </div>
                
                <div className="bg-white/50 rounded-lg p-4">
                  <div className="flex text-yellow-400 mb-2">
                    ⭐⭐⭐⭐⭐
                  </div>
                  <p className="text-gray-700 text-sm italic mb-2">
                    &ldquo;El café Viviates es increíble. Perfecto para graduaciones UTPL, está súper cerca de todo.&rdquo;
                  </p>
                  <p className="text-gray-600 text-xs">- Carlos Mendoza</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mapa de ubicación */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nuestra Ubicación Estratégica
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Diagonal al Terminal Terrestre de Loja, a pasos del Parque Jipiro y cerca de todos los servicios que necesitas.
            </p>
          </div>
          
          <div className="rounded-xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d995.8482337816437!2d-79.20533803042295!3d-3.9755886249915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91cb68474d0608cd%3A0x6e923768b0b022ce!2sEudiq%20Hotel!5e0!3m2!1sen!2sec!4v1635789844842!5m2!1sen!2sec"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Eudiq Hotel Loja"
            />
          </div>
        </div>
      </div>
    </div>
  );
}