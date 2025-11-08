/**
 * Notificaciones en tiempo real para crear urgencia y social proof
 * Sistema de notificaciones que simula reservas recientes
 */

"use client";

import { useState, useEffect } from 'react';
import { useBottomNavigation } from '@/hooks/useBottomNavigation';

interface ConversionNotification {
  id: string;
  message: string;
  timestamp: Date;
  location: string;
  type: 'booking' | 'inquiry' | 'review';
}

// Base de datos simulada de notificaciones
const notificationTemplates = [
  {
    type: 'booking' as const,
    messages: [
      'reservó una habitación para el fin de semana',
      'hizo una reserva para 2 noches',
      'reservó la Suite Familiar',
      'confirmó su estadía de 3 días',
      'reservó para graduación UTPL',
    ],
    locations: ['Loja', 'Cuenca', 'Quito', 'Guayaquil', 'Machala', 'Zamora', 'Vilcabamba']
  },
  {
    type: 'inquiry' as const,
    messages: [
      'consultó disponibilidad',
      'pidió información por WhatsApp',
      'preguntó por tarifas grupales',
      'consultó sobre el desayuno',
    ],
    locations: ['Loja', 'Cuenca', 'Machala', 'Catamayo', 'Cariamanga']
  },
  {
    type: 'review' as const,
    messages: [
      'dejó una reseña de 5 estrellas',
      'recomendó el hotel en Google',
      'valoró positivamente el servicio',
    ],
    locations: ['Huésped verificado', 'Cliente frecuente', 'Familia']
  }
];

function generateRandomNotification(): ConversionNotification {
  const template = notificationTemplates[Math.floor(Math.random() * notificationTemplates.length)];
  const message = template.messages[Math.floor(Math.random() * template.messages.length)];
  const location = template.locations[Math.floor(Math.random() * template.locations.length)];
  
  return {
    id: Date.now().toString(),
    message,
    timestamp: new Date(),
    location,
    type: template.type
  };
}

const getNotificationIcon = (type: ConversionNotification['type']) => {
  switch (type) {
    case 'booking':
      return '🏨';
    case 'inquiry':
      return '💬';
    case 'review':
      return '⭐';
    default:
      return '✅';
  }
};

const getNotificationColor = (type: ConversionNotification['type']) => {
  switch (type) {
    case 'booking':
      return 'from-green-500 to-emerald-600';
    case 'inquiry':
      return 'from-blue-500 to-cyan-600';
    case 'review':
      return 'from-yellow-500 to-orange-600';
    default:
      return 'from-gray-500 to-gray-600';
  }
};

export default function ConversionNotifications() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [notifications, setNotifications] = useState<ConversionNotification[]>([]);
  const [currentNotification, setCurrentNotification] = useState<ConversionNotification | null>(null);
  const { isBottomNavActive, bottomNavHeight } = useBottomNavigation();

  useEffect(() => {
    // Mostrar primera notificación después de 10 segundos
    const initialTimer = setTimeout(() => {
      const notification = generateRandomNotification();
      setCurrentNotification(notification);
      setNotifications(prev => [notification, ...prev.slice(0, 4)]);
    }, 10000);

    // Luego mostrar notificaciones cada 45-90 segundos
    const intervalTimer = setInterval(() => {
      const notification = generateRandomNotification();
      setCurrentNotification(notification);
      setNotifications(prev => [notification, ...prev.slice(0, 4)]);
    }, Math.random() * 45000 + 45000); // Entre 45-90 segundos

    return () => {
      clearTimeout(initialTimer);
      clearInterval(intervalTimer);
    };
  }, []);

  useEffect(() => {
    if (currentNotification) {
      // Auto-hide después de 8 segundos
      const timer = setTimeout(() => {
        setCurrentNotification(null);
      }, 8000);

      return () => clearTimeout(timer);
    }
  }, [currentNotification]);

  if (!currentNotification) return null;

  return (
    <div 
      className="fixed left-4 z-50 max-w-sm"
      style={{
        bottom: isBottomNavActive ? `${bottomNavHeight + 16}px` : '16px'
      }}
    >
      <div
        className={`bg-gradient-to-r ${getNotificationColor(currentNotification.type)} text-white rounded-lg shadow-2xl p-4 transform transition-all duration-500 ease-out animate-slide-in`}
        style={{
          animation: 'slideInLeft 0.5s ease-out forwards'
        }}
      >
        <div className="flex items-start gap-3">
          <div className="text-2xl">
            {getNotificationIcon(currentNotification.type)}
          </div>
          
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium">
              Alguien en {currentNotification.location}
            </p>
            <p className="text-xs opacity-90 truncate">
              {currentNotification.message}
            </p>
            <p className="text-xs opacity-75 mt-1">
              Hace {Math.floor(Math.random() * 15) + 1} minutos
            </p>
          </div>
          
          <button
            onClick={() => setCurrentNotification(null)}
            className="text-white/70 hover:text-white text-lg leading-none"
          >
            ×
          </button>
        </div>
        
        {/* Barra de progreso */}
        <div className="mt-3 h-1 bg-white/20 rounded-full overflow-hidden">
          <div 
            className="h-full bg-white/60 rounded-full animate-progress"
            style={{
              animation: 'progress 8s linear forwards'
            }}
          />
        </div>
      </div>

      {/* Estilos CSS en línea para las animaciones */}
      <style jsx>{`
        @keyframes slideInLeft {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @keyframes progress {
          from {
            width: 100%;
          }
          to {
            width: 0%;
          }
        }
        
        .animate-slide-in {
          animation: slideInLeft 0.5s ease-out forwards;
        }
        
        .animate-progress {
          animation: progress 8s linear forwards;
        }
      `}</style>
    </div>
  );
}

// Hook para trackear las notificaciones
export function useConversionNotifications() {
  const [notificationCount, setNotificationCount] = useState(0);

  useEffect(() => {
    // Simular conteo de conversiones del día
    const baseCount = 12; // Base de reservas del día
    const randomExtra = Math.floor(Math.random() * 8); // 0-7 extra
    setNotificationCount(baseCount + randomExtra);
  }, []);

  return { notificationCount };
}