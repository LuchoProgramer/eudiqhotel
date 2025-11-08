/**
 * Componente de formulario de contacto optimizado para conversiones
 * Incluye validación en tiempo real y tracking de eventos
 */

'use client';

import { useState } from 'react';
import { trackConversion, CTAButton } from './ConversionOptimizer';

interface ContactFormData {
  nombre: string;
  email: string;
  telefono: string;
  fechaLlegada: string;
  fechaSalida: string;
  huespedes: number;
  mensaje: string;
}

interface FormErrors {
  [key: string]: string;
}

export default function ContactFormOptimized() {
  const [formData, setFormData] = useState<ContactFormData>({
    nombre: '',
    email: '',
    telefono: '',
    fechaLlegada: '',
    fechaSalida: '',
    huespedes: 1,
    mensaje: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  // Validación en tiempo real
  const validateField = (name: string, value: string | number) => {
    const newErrors = { ...errors };

    switch (name) {
      case 'nombre':
        if (!value || (value as string).length < 2) {
          newErrors.nombre = 'El nombre debe tener al menos 2 caracteres';
        } else {
          delete newErrors.nombre;
        }
        break;
      
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value) {
          newErrors.email = 'El email es requerido';
        } else if (!emailRegex.test(value as string)) {
          newErrors.email = 'Ingresa un email válido';
        } else {
          delete newErrors.email;
        }
        break;
      
      case 'telefono':
        const phoneRegex = /^[+]?[\d\s\-\(\)]{8,}$/;
        if (!value) {
          newErrors.telefono = 'El teléfono es requerido';
        } else if (!phoneRegex.test(value as string)) {
          newErrors.telefono = 'Ingresa un teléfono válido';
        } else {
          delete newErrors.telefono;
        }
        break;
      
      case 'fechaLlegada':
        if (!value) {
          newErrors.fechaLlegada = 'La fecha de llegada es requerida';
        } else {
          const today = new Date();
          today.setHours(0, 0, 0, 0);
          const selectedDate = new Date(value as string);
          if (selectedDate < today) {
            newErrors.fechaLlegada = 'La fecha debe ser hoy o posterior';
          } else {
            delete newErrors.fechaLlegada;
          }
        }
        break;
      
      case 'fechaSalida':
        if (!value) {
          newErrors.fechaSalida = 'La fecha de salida es requerida';
        } else if (formData.fechaLlegada && new Date(value as string) <= new Date(formData.fechaLlegada)) {
          newErrors.fechaSalida = 'Debe ser posterior a la fecha de llegada';
        } else {
          delete newErrors.fechaSalida;
        }
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const processedValue = name === 'huespedes' ? parseInt(value) || 1 : value;
    
    setFormData(prev => ({ ...prev, [name]: processedValue }));
    
    // Validación en tiempo real con debounce
    setTimeout(() => validateField(name, processedValue), 300);

    // Track field completion
    if (value && !errors[name]) {
      trackConversion({
        action: 'form_field_completed',
        category: 'form_interaction',
        label: name
      });
    }
  };

  const handleStepChange = (step: number) => {
    setCurrentStep(step);
    trackConversion({
      action: 'form_step_change',
      category: 'form_interaction',
      value: step
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validar todos los campos
    const requiredFields = ['nombre', 'email', 'telefono', 'fechaLlegada', 'fechaSalida'];
    let isValid = true;

    requiredFields.forEach(field => {
      const fieldValue = formData[field as keyof ContactFormData];
      if (!validateField(field, fieldValue)) {
        isValid = false;
      }
    });

    if (!isValid) {
      setIsSubmitting(false);
      trackConversion({
        action: 'form_validation_error',
        category: 'form_interaction'
      });
      return;
    }

    try {
      // Track form submission attempt
      trackConversion({
        action: 'form_submit_attempt',
        category: 'conversion'
      });

      // Crear mensaje para WhatsApp
      const whatsappMessage = `
🏨 *NUEVA RESERVA - EUDIQ HOTEL*

👤 *Cliente:* ${formData.nombre}
📧 *Email:* ${formData.email}
📱 *Teléfono:* ${formData.telefono}

📅 *Check-in:* ${formData.fechaLlegada}
📅 *Check-out:* ${formData.fechaSalida}
👥 *Huéspedes:* ${formData.huespedes}

💬 *Mensaje:*
${formData.mensaje || 'Sin mensaje adicional'}

---
*Enviado desde hoteleudiq.com*
      `.trim();

      // Enviar por WhatsApp
      const encodedMessage = encodeURIComponent(whatsappMessage);
      const whatsappUrl = `https://wa.me/593961712106?text=${encodedMessage}`;
      
      // Abrir WhatsApp en nueva pestaña
      window.open(whatsappUrl, '_blank');

      // Track successful submission
      trackConversion({
        action: 'form_submit_success',
        category: 'conversion',
        value: 1
      });

      setIsSubmitted(true);
      
      // Reset form después de 3 segundos
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          nombre: '',
          email: '',
          telefono: '',
          fechaLlegada: '',
          fechaSalida: '',
          huespedes: 1,
          mensaje: ''
        });
        setCurrentStep(1);
      }, 3000);

    } catch (error) {
      console.error('Error al enviar formulario:', error);
      trackConversion({
        action: 'form_submit_error',
        category: 'conversion'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Mostrar mensaje de éxito
  if (isSubmitted) {
    return (
      <div className="bg-white rounded-xl shadow-2xl p-8 text-center max-w-md mx-auto">
        <div className="text-6xl mb-4">✅</div>
        <h3 className="text-2xl font-bold text-[#038C7F] mb-2">
          ¡Reserva Enviada!
        </h3>
        <p className="text-gray-600 mb-4">
          Te hemos redirigido a WhatsApp con todos tus datos. Responderemos en minutos.
        </p>
        <div className="text-sm text-gray-500">
          Si no se abrió WhatsApp automáticamente, puedes llamarnos al <strong>+593 96 171 2106</strong>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-2xl overflow-hidden max-w-lg mx-auto">
      {/* Header con progreso */}
      <div className="bg-gradient-to-r from-[#038C7F] to-[#CBD95F] p-6 text-white">
        <h3 className="text-xl font-bold mb-2">Reserva Directa</h3>
        <p className="text-white/90 text-sm">Sin comisiones • Mejor precio garantizado</p>
        
        {/* Barra de progreso */}
        <div className="mt-4 flex justify-between items-center">
          {[1, 2, 3].map((step) => (
            <div
              key={step}
              className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold ${
                step <= currentStep ? 'bg-white text-[#038C7F]' : 'bg-white/30 text-white/60'
              }`}
            >
              {step}
            </div>
          ))}
        </div>
        <div className="mt-2 text-xs text-white/80">
          Paso {currentStep} de 3
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-6">
        {/* Paso 1: Datos personales */}
        {currentStep === 1 && (
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900 mb-4">Datos Personales</h4>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nombre completo *
              </label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                  errors.nombre ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-[#038C7F]/20'
                }`}
                placeholder="Tu nombre completo"
              />
              {errors.nombre && <p className="text-red-500 text-xs mt-1">{errors.nombre}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                  errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-[#038C7F]/20'
                }`}
                placeholder="tu@email.com"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Teléfono/WhatsApp *
              </label>
              <input
                type="tel"
                name="telefono"
                value={formData.telefono}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                  errors.telefono ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-[#038C7F]/20'
                }`}
                placeholder="+593 99 999 9999"
              />
              {errors.telefono && <p className="text-red-500 text-xs mt-1">{errors.telefono}</p>}
            </div>

            <CTAButton
              variant="primary"
              size="large"
              onClick={() => handleStepChange(2)}
              className="w-full mt-6"
            >
              Continuar →
            </CTAButton>
          </div>
        )}

        {/* Paso 2: Fechas y huéspedes */}
        {currentStep === 2 && (
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900 mb-4">Detalles de la Reserva</h4>
            
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Check-in *
                </label>
                <input
                  type="date"
                  name="fechaLlegada"
                  value={formData.fechaLlegada}
                  onChange={handleInputChange}
                  min={new Date().toISOString().split('T')[0]}
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.fechaLlegada ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-[#038C7F]/20'
                  }`}
                />
                {errors.fechaLlegada && <p className="text-red-500 text-xs mt-1">{errors.fechaLlegada}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Check-out *
                </label>
                <input
                  type="date"
                  name="fechaSalida"
                  value={formData.fechaSalida}
                  onChange={handleInputChange}
                  min={formData.fechaLlegada || new Date().toISOString().split('T')[0]}
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.fechaSalida ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-[#038C7F]/20'
                  }`}
                />
                {errors.fechaSalida && <p className="text-red-500 text-xs mt-1">{errors.fechaSalida}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Número de huéspedes
              </label>
              <select
                name="huespedes"
                value={formData.huespedes}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#038C7F]/20"
              >
                {[1,2,3,4,5,6].map(num => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? 'huésped' : 'huéspedes'}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex gap-3 mt-6">
              <CTAButton
                variant="secondary"
                size="medium"
                onClick={() => handleStepChange(1)}
                className="flex-1"
              >
                ← Atrás
              </CTAButton>
              <CTAButton
                variant="primary"
                size="medium"
                onClick={() => handleStepChange(3)}
                className="flex-1"
              >
                Continuar →
              </CTAButton>
            </div>
          </div>
        )}

        {/* Paso 3: Mensaje y envío */}
        {currentStep === 3 && (
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900 mb-4">Mensaje Adicional</h4>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                ¿Algo más que debamos saber?
              </label>
              <textarea
                name="mensaje"
                value={formData.mensaje}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#038C7F]/20"
                placeholder="Ocasión especial, preferencias, preguntas..."
              />
            </div>

            {/* Resumen */}
            <div className="bg-gray-50 rounded-lg p-4 space-y-2 text-sm">
              <h5 className="font-medium text-gray-900">Resumen de reserva:</h5>
              <p><strong>Huésped:</strong> {formData.nombre}</p>
              <p><strong>Fechas:</strong> {formData.fechaLlegada} al {formData.fechaSalida}</p>
              <p><strong>Huéspedes:</strong> {formData.huespedes}</p>
              <p><strong>Contacto:</strong> {formData.telefono}</p>
            </div>

            <div className="flex gap-3 mt-6">
              <CTAButton
                variant="secondary"
                size="medium"
                onClick={() => handleStepChange(2)}
                className="flex-1"
              >
                ← Atrás
              </CTAButton>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-2 bg-[#25D366] hover:bg-[#25D366]/90 text-white font-semibold rounded-full px-6 py-3 transition-all hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#25D366]/50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Enviando...' : '📱 Enviar por WhatsApp'}
              </button>
            </div>

            <div className="text-xs text-gray-500 text-center mt-4">
              Al enviar, aceptas que te contactemos por WhatsApp
            </div>
          </div>
        )}
      </form>
    </div>
  );
}