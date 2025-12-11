/**
 * Sistema de A/B Testing para optimización de conversiones
 * Permite probar diferentes versiones de CTAs y elementos
 */

"use client";

import { useEffect, useState } from 'react';

export type ABTestVariant = 'A' | 'B';

interface ABTest {
  testId: string;
  variant: ABTestVariant;
  startDate: Date;
}

interface ABTestConfig {
  testId: string;
  name: string;
  description: string;
  variants: {
    A: {
      name: string;
      weight: number; // Porcentaje de tráfico (0-100)
    };
    B: {
      name: string;
      weight: number;
    };
  };
  isActive: boolean;
}

// Configuración de tests A/B activos
const AB_TESTS: ABTestConfig[] = [
  {
    testId: 'cta_button_text',
    name: 'Texto de botones CTA',
    description: 'Comparar diferentes textos en los botones de reserva',
    variants: {
      A: { name: 'Reservar Ahora', weight: 50 },
      B: { name: '¡Reserva tu habitación!', weight: 50 }
    },
    isActive: true // ✅ A/B Test Activo
  },
  {
    testId: 'hero_cta_position',
    name: 'Posición CTA Hero',
    description: 'Probar diferentes posiciones del CTA principal',
    variants: {
      A: { name: 'Centro', weight: 50 },
      B: { name: 'Izquierda', weight: 50 }
    },
    isActive: true // ✅ A/B Test Activo
  },
  {
    testId: 'urgency_banner',
    name: 'Banner de urgencia',
    description: 'Comparar diferentes mensajes de urgencia',
    variants: {
      A: { name: 'Solo quedan 3 habitaciones', weight: 50 },
      B: { name: 'Reserva hoy y ahorra 15%', weight: 50 }
    },
    isActive: true // ✅ A/B Test Activo
  },
  {
    testId: 'whatsapp_cta_text',
    name: 'Texto WhatsApp CTA',
    description: 'Diferentes textos para el botón de WhatsApp',
    variants: {
      A: { name: 'Consultar por WhatsApp', weight: 50 },
      B: { name: '💬 Chatea con nosotros', weight: 50 }
    },
    isActive: true // ✅ A/B Test Activo
  },
  // Tests específicos para Cafetería Viviates
  {
    testId: 'cafe_hero_message',
    name: 'Mensaje principal café',
    description: 'Comparar diferentes propuestas de valor para café',
    variants: {
      A: { name: 'Abierto desde 05:30', weight: 50 },
      B: { name: 'El mejor café de Loja desde las 05:30', weight: 50 }
    },
    isActive: true
  },
  {
    testId: 'cafe_offer_urgency',
    name: 'Urgencia ofertas café',
    description: 'Diferentes mensajes de urgencia para ofertas de café',
    variants: {
      A: { name: 'Oferta válida solo HOY', weight: 50 },
      B: { name: 'Cupos limitados por horario', weight: 50 }
    },
    isActive: true
  },
  {
    testId: 'cafe_whatsapp_message',
    name: 'WhatsApp café específico',
    description: 'Mensajes específicos de WhatsApp para café',
    variants: {
      A: { name: 'Ver menú y reservar mesa', weight: 50 },
      B: { name: 'Consultar ofertas del día', weight: 50 }
    },
    isActive: true
  }
];

// Almacenar tests en localStorage
const AB_STORAGE_KEY = 'eudiq_ab_tests';

export function useABTest(testId: string): ABTestVariant {
  const [variant, setVariant] = useState<ABTestVariant>('A');

  useEffect(() => {
    const testConfig = AB_TESTS.find(test => test.testId === testId);
    if (!testConfig || !testConfig.isActive) {
      setVariant('A');
      return;
    }

    // Obtener tests guardados
    const storedTests = getStoredABTests();
    const existingTest = storedTests.find(test => test.testId === testId);

    if (existingTest) {
      setVariant(existingTest.variant);
      return;
    }

    // Asignar variante según peso
    const randomValue = Math.random() * 100;
    const selectedVariant = randomValue < testConfig.variants.A.weight ? 'A' : 'B';

    // Guardar nuevo test
    const newTest: ABTest = {
      testId,
      variant: selectedVariant,
      startDate: new Date()
    };

    const updatedTests = [...storedTests, newTest];
    localStorage.setItem(AB_STORAGE_KEY, JSON.stringify(updatedTests));

    setVariant(selectedVariant);

    // Trackear asignación de variante
    if (typeof window !== 'undefined') {
      const w = window as unknown as { gtag?: (...args: unknown[]) => void };
      if (w.gtag) {
        w.gtag('event', 'ab_test_assignment', {
          test_id: testId,
          variant: selectedVariant,
          event_category: 'AB Testing'
        });
      }
    }
  }, [testId]);

  return variant;
}

function getStoredABTests(): ABTest[] {
  if (typeof window === 'undefined') return [];

  try {
    const stored = localStorage.getItem(AB_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

// Hook para trackear conversiones por variante
export function useABTestConversion(testId: string, conversionEvent: string) {
  const variant = useABTest(testId);

  const trackConversion = () => {
    if (typeof window !== 'undefined') {
      const w = window as unknown as { gtag?: (...args: unknown[]) => void };
      if (w.gtag) {
        w.gtag('event', 'ab_test_conversion', {
          test_id: testId,
          variant,
          conversion_event: conversionEvent,
          event_category: 'AB Testing'
        });
      }
    }
  };

  return { variant, trackConversion };
}

// Componente para mostrar contenido según variante
interface ABTestComponentProps {
  testId: string;
  variantA: React.ReactNode;
  variantB: React.ReactNode;
}

export function ABTestComponent({ testId, variantA, variantB }: ABTestComponentProps) {
  const variant = useABTest(testId);

  return <>{variant === 'A' ? variantA : variantB}</>;
}

// Textos optimizados para diferentes variantes
export const AB_TEST_CONTENT = {
  cta_button_text: {
    A: 'Reservar Ahora',
    B: '¡Reserva tu habitación!'
  },
  whatsapp_cta_text: {
    A: 'Consultar por WhatsApp',
    B: '💬 Chatea con nosotros'
  },
  urgency_banner: {
    A: '⚡ Solo quedan 3 habitaciones disponibles hoy',
    B: '🎉 Reserva hoy y ahorra 15% - Oferta limitada'
  },
  hero_subtitle: {
    A: 'La mejor ubicación de Loja, diagonal al Terminal Terrestre',
    B: 'Tu casa lejos de casa en el corazón de Loja'
  },
  // Contenido específico para Cafetería Viviates
  cafe_hero_message: {
    A: '¡Desayuno desde las 05:30!',
    B: 'El mejor café de Loja desde las 05:30'
  },
  cafe_offer_urgency: {
    A: '⏰ Oferta válida solo HOY',
    B: '👥 Cupos limitados por horario'
  },
  cafe_whatsapp_message: {
    A: 'Ver menú y reservar mesa',
    B: 'Consultar ofertas del día'
  }
} as const;

// Hook para obtener contenido según variante
export function useABTestContent<T extends keyof typeof AB_TEST_CONTENT>(
  testId: T
): string {
  const variant = useABTest(testId);
  return AB_TEST_CONTENT[testId][variant] as string;
}

// Dashboard de resultados de A/B testing (para desarrollo)
export function ABTestDashboard() {
  const [tests, setTests] = useState<ABTest[]>([]);

  useEffect(() => {
    setTests(getStoredABTests());
  }, []);

  if (process.env.NODE_ENV !== 'development') return null;

  return (
    <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg p-4 max-w-xs z-50 border">
      <h3 className="font-bold text-sm mb-2">A/B Tests Activos</h3>
      <div className="space-y-2 text-xs">
        {AB_TESTS.filter(test => test.isActive).map(test => {
          const userTest = tests.find(t => t.testId === test.testId);
          return (
            <div key={test.testId} className="border-b pb-2">
              <div className="font-medium">{test.name}</div>
              <div className="text-gray-600">
                Variante: {userTest?.variant || 'No asignada'}
              </div>
            </div>
          );
        })}
      </div>
      <button
        onClick={() => {
          localStorage.removeItem(AB_STORAGE_KEY);
          window.location.reload();
        }}
        className="mt-2 text-xs bg-red-500 text-white px-2 py-1 rounded"
      >
        Reset Tests
      </button>
    </div>
  );
}