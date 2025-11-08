/**
 * Hook para coordinar el Bottom Navigation con otros componentes flotantes
 */

'use client';

import { useState, useEffect } from 'react';

export function useMobileDetection() {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  return isMobile;
}

export function useBottomNavigation() {
  const isMobile = useMobileDetection();
  
  // El Bottom Navigation está activo en móvil
  const isBottomNavActive = isMobile;
  
  // Altura que otros componentes deben respetar
  const bottomNavHeight = isBottomNavActive ? 70 : 0;
  
  return {
    isBottomNavActive,
    bottomNavHeight,
    isMobile
  };
}