import { money } from "./format.js";

export const WHATSAPP_NUMBER = "525512345678";

export const normalize = (text) =>
  text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

export function buildProductUrl(product, option) {
  const lines = [
    "Hola, me interesa este producto:",
    `• ${product.name}`,
    option ? `• ${product.optionLabel}: ${option}` : null,
    `• Precio: ${money.format(product.price)}`,
    "¿Lo tienen disponible?",
  ].filter(Boolean);

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
}

export const GENERAL_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hola Skiter, quisiera más información."
)}`;
