"use client";
import React from "react";

// Botón flotante de WhatsApp reutilizable
function sendGAEvent(eventName: string, eventParams: Record<string, unknown> = {}) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, eventParams);
  }
}

export default function WhatsAppFloatButton({ section = "blog" }: { section?: string }) {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=593961712106&text=Hola,%20quiero%20información%20de%20Eudiq%20Hotel%20Loja"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-50 bottom-6 right-6 bg-green-600 text-white px-5 py-3 rounded-full shadow-lg flex items-center gap-2 font-bold hover:bg-green-700 transition"
      style={{ boxShadow: "0 4px 24px 0 rgba(37, 211, 102, 0.3)" }}
      onClick={() => sendGAEvent("click_whatsapp_flotante", { section, method: "whatsapp_flotante" })}
      aria-label="Chatea por WhatsApp"
    >
      <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.22-1.63A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.77 0-3.5-.46-5.01-1.33l-.36-.21-3.69.97.99-3.59-.23-.37A9.94 9.94 0 0 1 2 12C2 6.48 6.48 2 12 2c2.61 0 5.07 1.02 6.93 2.87A9.77 9.77 0 0 1 22 12c0 5.52-4.48 10-10 10zm5.2-7.6c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.34-.26.27-1 1-.97 2.43.03 1.43 1.03 2.81 1.18 3.01.15.2 2.03 3.1 5.01 4.23.7.24 1.25.38 1.68.49.71.18 1.36.15 1.87.09.57-.07 1.65-.67 1.89-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z"/></svg>
      WhatsApp
    </a>
  );
}
