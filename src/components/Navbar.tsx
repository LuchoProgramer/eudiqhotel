"use client";


import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Habitaciones", href: "#habitaciones" },
  { label: "Servicios", href: "#servicios" },
  { label: "Galería", href: "#galeria" },
  { label: "Ubicación", href: "#ubicacion" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
  <nav className="fixed top-0 left-0 w-full z-30 bg-white/40 backdrop-blur border-b border-[#CBD95F]/30 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center" aria-label="Inicio">
          <img src="/Logo.svg" alt="Eudiq Hotel Logo" width={150} height={50} style={{display: 'block'}} />
        </Link>
        {/* Desktop nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#038C7F] hover:text-[#A9BF04] font-medium font-sans transition"
            >
              {link.label}
            </a>
          ))}
        </div>
        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          <span className={`block h-0.5 w-6 bg-[#038C7F] rounded transition-all ${open ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`block h-0.5 w-6 bg-[#038C7F] rounded transition-all ${open ? "opacity-0" : ""}`}></span>
          <span className={`block h-0.5 w-6 bg-[#038C7F] rounded transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
      </div>
      {/* Mobile nav */}
      {open && (
  <div className="md:hidden bg-white/60 px-4 pb-4 pt-2 flex flex-col gap-4 border-b border-[#CBD95F]/30 shadow">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#038C7F] hover:text-[#A9BF04] font-medium font-sans text-lg transition"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
