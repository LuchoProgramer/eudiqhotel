"use client";


import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { Phone } from 'lucide-react';

const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Habitaciones", href: "/habitaciones" },
  { label: "Servicios", href: "/servicios" },
  { label: "Ubicación", href: "/ubicacion" },
  { label: "Cafetería", href: "/cafe-viviates" },
  { label: "Blog", href: "/blog" },
  { label: "Contacto", href: "/contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
  <nav className="fixed top-0 left-0 w-full z-40 bg-white/95 backdrop-blur-md border-b border-[#CBD95F]/30 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3 md:py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center flex-shrink-0" aria-label="Inicio">
          <Image 
            src="/Logo.svg" 
            alt="Eudiq Hotel Logo" 
            width={160} 
            height={50} 
            className="h-8 sm:h-10 w-auto" 
            style={{display: 'block'}} 
          />
        </Link>
        {/* Desktop nav - Adaptable en diferentes breakpoints */}
        <div className="hidden md:flex gap-3 lg:gap-6 items-center overflow-hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[#038C7F] hover:text-[#A9BF04] font-medium text-xs lg:text-sm transition-colors duration-200 hover:scale-105 whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
          
          {/* Botón de reserva destacado */}
          <Link
            href="https://wa.me/593961712106?text=Hola,%20quiero%20reservar%20en%20Eudiq%20Hotel"
            className="bg-[#038C7F] hover:bg-[#A9BF04] text-white px-3 lg:px-4 py-2 rounded-full text-xs lg:text-sm font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg flex items-center gap-1 lg:gap-2 whitespace-nowrap flex-shrink-0"
          >
            <Phone className="h-4 w-4 hidden sm:inline" />
            <span className="hidden lg:inline">Reservar</span>
            <span className="lg:hidden">Reserva</span>
          </Link>
        </div>
        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-[#038C7F]/10 transition-colors flex-shrink-0"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          <span className={`block h-0.5 w-5 sm:w-6 bg-[#038C7F] rounded transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`block h-0.5 w-5 sm:w-6 bg-[#038C7F] rounded transition-all duration-300 ${open ? "opacity-0" : ""}`}></span>
          <span className={`block h-0.5 w-5 sm:w-6 bg-[#038C7F] rounded transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
      </div>
      {/* Mobile nav */}
      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur-md px-4 sm:px-6 pb-6 pt-2 border-b border-[#CBD95F]/30 shadow-lg">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#038C7F] hover:text-[#A9BF04] font-medium text-base py-3 px-3 rounded-lg hover:bg-[#038C7F]/5 transition-all duration-200 border-b border-gray-100 last:border-b-0"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Botón de reserva en móvil */}
            <Link
              href="https://wa.me/593961712106?text=Hola,%20quiero%20reservar%20en%20Eudiq%20Hotel"
              className="bg-[#038C7F] hover:bg-[#A9BF04] text-white px-4 py-3 rounded-lg text-center font-semibold transition-all duration-200 mt-2 flex items-center justify-center gap-2"
              onClick={() => setOpen(false)}
            >
              <Phone className="h-5 w-5" />
              Reservar por WhatsApp
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
