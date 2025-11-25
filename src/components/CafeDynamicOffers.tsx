'use client';

import { useState, useEffect } from 'react';
import { Clock, Users, Sunrise, Briefcase, Palette, Coffee as CoffeeIcon, type LucideIcon, CheckCircle2, Flame } from 'lucide-react';
import { CTAButton } from '@/components/ConversionOptimizer';

interface TimeBasedOffer {
  id: string;
  name: string;
  Icon: LucideIcon;
  startHour: number;
  endHour: number;
  price: string;
  originalPrice?: string;
  description: string;
  whatsappMessage: string;
  benefits: string[];
  isActive: boolean;
}

// Configuración de ofertas por horario
const TIME_BASED_OFFERS: TimeBasedOffer[] = [
  {
    id: 'madrugadores',
    name: 'Madrugadores VIP',
    Icon: Sunrise,
    startHour: 5.5, // 5:30 AM
    endHour: 7,
    price: '$3.50',
    originalPrice: '$4.50',
    description: 'Café + Empanada',
    whatsappMessage: 'Hola, quiero la Oferta Madrugadores VIP (5:30-7:00 AM)',
    benefits: ['WiFi Premium incluido', 'Servicio express', 'Mesa garantizada'],
    isActive: true
  },
  {
    id: 'profesional',
    name: 'Combo Profesional',
    Icon: Briefcase,
    startHour: 7,
    endHour: 10,
    price: '$6.00',
    originalPrice: '$8.00',
    description: 'Café Premium + Sándwich + Mesa reservada 2h',
    whatsappMessage: 'Hola, quiero el Combo Profesional (7:00-10:00 AM) - mesa reservada',
    benefits: ['Mesa reservada 2 horas', 'Cargador incluido', 'Wifi'],
    isActive: true
  },
  {
    id: 'cultural',
    name: 'Experiencia Cultural',
    Icon: Palette,
    startHour: 8,
    endHour: 22,
    price: '$4.50',
    description: 'Café Artístico + Postres de autor',
    whatsappMessage: 'Hola, quiero la Experiencia Cultural - Festival de Artes',
    benefits: ['Postres de autor incluidos', 'Ambiente cultural', 'Arte local'],
    isActive: true
  },
  {
    id: 'tarde',
    name: 'Café de Tarde',
    Icon: CoffeeIcon,
    startHour: 14,
    endHour: 18,
    price: '$3.00',
    originalPrice: '$4.00',
    description: 'Café + Postre casero',
    whatsappMessage: 'Hola, quiero el especial Café de Tarde (2:00-6:00 PM)',
    benefits: ['Postre casero incluido', 'Ambiente relajado', 'Música suave'],
    isActive: true
  }
];

// Hook para detectar oferta activa actual
export function useCurrentOffer(): TimeBasedOffer | null {
  const [currentOffer, setCurrentOffer] = useState<TimeBasedOffer | null>(null);

  useEffect(() => {
    function updateCurrentOffer() {
      const now = new Date();
      const currentHour = now.getHours() + now.getMinutes() / 60;
      
      const activeOffer = TIME_BASED_OFFERS.find(offer => 
        offer.isActive && 
        currentHour >= offer.startHour && 
        currentHour < offer.endHour
      );
      
      setCurrentOffer(activeOffer || null);
    }

    updateCurrentOffer();
    
    // Actualizar cada minuto
    const interval = setInterval(updateCurrentOffer, 60000);
    
    return () => clearInterval(interval);
  }, []);

  return currentOffer;
}

// Componente de banner de oferta activa
export function ActiveOfferBanner() {
  const currentOffer = useCurrentOffer();

  if (!currentOffer) return null;

  return (
    <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 text-center animate-pulse">
      <div className="max-w-4xl mx-auto flex items-center justify-center gap-4">
        <currentOffer.Icon className="h-8 w-8" />
        <div>
          <span className="font-bold">¡{currentOffer.name} ACTIVA AHORA!</span>
          <span className="ml-2">{currentOffer.description}</span>
          {currentOffer.originalPrice && (
            <span className="ml-2">
              <span className="line-through text-orange-200">{currentOffer.originalPrice}</span>
              <span className="ml-1 font-bold">{currentOffer.price}</span>
            </span>
          )}
        </div>
        <CTAButton
          variant="secondary"
          size="small"
          href={`https://api.whatsapp.com/send?phone=593961712106&text=${encodeURIComponent(currentOffer.whatsappMessage)}`}
          section={`cafe_offer_${currentOffer.id}`}
          className="bg-white text-orange-600 hover:bg-gray-100 flex-shrink-0"
        >
          ¡Aprovechar!
        </CTAButton>
      </div>
    </div>
  );
}

// Componente de countdown para próxima oferta
export function NextOfferCountdown() {
  const [nextOffer, setNextOffer] = useState<TimeBasedOffer | null>(null);
  const [timeRemaining, setTimeRemaining] = useState<string>('');

  useEffect(() => {
    function updateNextOffer() {
      const now = new Date();
      const currentHour = now.getHours() + now.getMinutes() / 60;
      
      // Buscar próxima oferta del día
      const upcomingOffers = TIME_BASED_OFFERS
        .filter(offer => offer.isActive && offer.startHour > currentHour)
        .sort((a, b) => a.startHour - b.startHour);
      
      const next = upcomingOffers[0] || null;
      setNextOffer(next);
      
      if (next) {
        const nextStartTime = new Date();
        nextStartTime.setHours(Math.floor(next.startHour));
        nextStartTime.setMinutes((next.startHour % 1) * 60);
        nextStartTime.setSeconds(0);
        
        const diff = nextStartTime.getTime() - now.getTime();
        if (diff > 0) {
          const hours = Math.floor(diff / (1000 * 60 * 60));
          const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
          setTimeRemaining(`${hours}h ${minutes}m`);
        }
      }
    }

    updateNextOffer();
    const interval = setInterval(updateNextOffer, 60000);
    
    return () => clearInterval(interval);
  }, []);

  if (!nextOffer || !timeRemaining) return null;

  return (
    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-center">
      <div className="flex items-center justify-center gap-2 mb-2">
        <Clock className="h-5 w-5 text-amber-600" />
        <span className="font-semibold text-amber-800">Próxima oferta especial</span>
      </div>
      <div className="text-sm text-gray-600 mb-2 flex items-center justify-center gap-2">
        <nextOffer.Icon className="h-6 w-6 text-amber-600" />
        <span className="font-medium">{nextOffer.name}</span>
        <span>en {timeRemaining}</span>
      </div>
      <CTAButton
        variant="secondary"
        size="small"
        href={`https://api.whatsapp.com/send?phone=593961712106&text=Hola, quiero información sobre ${nextOffer.name} que inicia en ${timeRemaining}`}
        section={`cafe_upcoming_${nextOffer.id}`}
        className="text-xs"
      >
        Reservar para {nextOffer.name}
      </CTAButton>
    </div>
  );
}

// Componente principal de ofertas dinámicas
export function DynamicOffersSection() {
  const currentOffer = useCurrentOffer();
  const [allOffers] = useState(TIME_BASED_OFFERS);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Banner de oferta activa */}
        <ActiveOfferBanner />
        
        <div className="text-center mb-12 mt-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
            <Clock className="h-8 w-8 text-[#038C7F]" />
            Ofertas Especiales por Horario
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Aprovecha nuestras promociones según tu horario de visita
          </p>
          
          {/* Countdown para próxima oferta */}
          <NextOfferCountdown />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {allOffers.map((offer, index) => {
            const isActive = currentOffer?.id === offer.id;
            const timeRange = `${Math.floor(offer.startHour)}:${String((offer.startHour % 1) * 60).padStart(2, '0')} - ${Math.floor(offer.endHour)}:${String((offer.endHour % 1) * 60).padStart(2, '0')}`;
            
            return (
              <div 
                key={offer.id} 
                className={`relative p-6 rounded-xl border-2 transition-all ${
                  isActive 
                    ? 'border-orange-400 bg-gradient-to-br from-orange-50 to-amber-50 shadow-lg scale-105' 
                    : 'border-gray-200 bg-gradient-to-br from-gray-50 to-white hover:border-gray-300'
                }`}
              >
                {isActive && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                    ¡ACTIVA AHORA!
                  </div>
                )}
                
                {index === 1 && !isActive && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                    MÁS POPULAR
                  </div>
                )}
                
                <div className="text-center mb-4 mt-2">
                  <div className="flex justify-center mb-2">
                    <offer.Icon className="h-10 w-10 text-[#038C7F]" />
                  </div>
                  <h3 className={`text-xl font-bold mb-2 ${isActive ? 'text-orange-600' : 'text-gray-800'}`}>
                    {offer.name}
                  </h3>
                  <p className="text-sm text-gray-600 font-medium">{timeRange}</p>
                </div>
                
                <div className="mb-4">
                  <div className="text-center mb-3">
                    {offer.originalPrice && (
                      <span className="text-sm text-gray-500 line-through mr-2">{offer.originalPrice}</span>
                    )}
                    <span className={`text-2xl font-bold ${isActive ? 'text-orange-600' : 'text-gray-900'}`}>
                      {offer.price}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 text-center mb-3">{offer.description}</p>
                </div>

                <div className="space-y-2 mb-6">
                  {offer.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      <span className="text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>

                <CTAButton
                  variant={isActive ? "whatsapp" : "secondary"}
                  size="small"
                  href={`https://api.whatsapp.com/send?phone=593961712106&text=${encodeURIComponent(offer.whatsappMessage)}`}
                  section={`cafe_${offer.id}`}
                  className={`w-full justify-center flex items-center gap-2 ${isActive ? 'animate-pulse' : ''}`}
                >
                  {isActive ? (
                    <>
                      <Flame className="h-4 w-4" />
                      ¡Aprovechar AHORA!
                    </>
                  ) : (
                    <>
                      <offer.Icon className="h-4 w-4" />
                      Reservar {offer.name}
                    </>
                  )}
                </CTAButton>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}