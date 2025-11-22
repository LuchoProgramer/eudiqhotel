"use client";
import React from "react";

type GAEventParams = Record<string, unknown>;
function sendGAEvent(eventName: string, eventParams: GAEventParams = {}) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, eventParams);
  }
}

export default function WhatsAppReservaCafe() {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=593961712106&text=Hola,%20quiero%20consultar%20el%20menú%20de%20Cafetería%20Café%20Viviates"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition mb-4"
      onClick={() => sendGAEvent("click_reserva_cafe", { section: "cafe-viviates", method: "whatsapp" })}
    >
      Reservar desayuno por WhatsApp
    </a>
  );
}
