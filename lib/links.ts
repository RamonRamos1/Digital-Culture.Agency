/**
 * Genera el link de WhatsApp usando el número configurado en
 * NEXT_PUBLIC_WHATSAPP_NUMBER (ver .env.example).
 *
 * Si la variable no está definida, devuelve "https://wa.me/" como
 * fallback seguro para no romper el build.
 */
export function getWhatsAppLink(message?: string): string {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";
  const base = number ? `https://wa.me/${number}` : "https://wa.me/";
  if (message) {
    return `${base}?text=${encodeURIComponent(message)}`;
  }
  return base;
}

export function getCalendlyLink(): string {
  return process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/";
}

export function getContactEmail(): string {
  return process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hola@digitalculture.com";
}
