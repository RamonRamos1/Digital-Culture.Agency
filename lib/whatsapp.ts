export const WHATSAPP_NUMBER = "5492604828329";

export function makeWhatsAppLink(message: string, number?: string) {
  const phone = (number ?? WHATSAPP_NUMBER).replace(/\D/g, "");
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encoded}`;
}

export default makeWhatsAppLink;
