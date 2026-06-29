import {
  Monitor,
  Building2,
  ShoppingCart,
  Palette,
  TrendingUp,
  Network,
  Smartphone,
  LucideIcon,
} from "lucide-react";

export interface ProjectType {
  id: string;
  name: string;
  desc: string;
  icon: LucideIcon;
}

// Tipos que requieren reunión de descubrimiento (no se estiman con rango automático)
export const COMPLEX_TYPES = ["sistema", "app"];

export const PROJECT_TYPES: ProjectType[] = [
  { id: "webs", name: "Webs / Ecommerce", desc: "Landing, corporativa o tienda online", icon: Building2 },
  { id: "ecommerce", name: "Ecommerce", desc: "Tienda online con pagos y stock", icon: ShoppingCart },
  { id: "branding", name: "Branding", desc: "Identidad visual completa", icon: Palette },
  { id: "marketing", name: "Marketing Digital", desc: "Campañas y estrategia digital", icon: TrendingUp },
  { id: "sistema", name: "Sistema a Medida", desc: "Software personalizado", icon: Network },
  { id: "app", name: "App Móvil", desc: "Aplicación nativa o multiplataforma", icon: Smartphone },
];

export interface FeatureOption {
  id: string;
  name: string;
  description?: string;
}

export interface EstimateOptions {
  multilingual?: boolean;
  languageCount?: number;
  contactForm?: boolean;
  dashboard?: boolean;
  payments?: boolean;
  seo?: boolean;
  brandingType?: string;
  posts?: number;
  reels?: number;
  marketingType?: string;
  websiteType?: string;
}

export const FEATURE_OPTIONS: FeatureOption[] = [
  { id: "multilang", name: "Multi-idioma" },
  { id: "blog", name: "Blog / Noticias" },
  { id: "payments", name: "Pasarela de pagos" },
  { id: "analytics", name: "Analítica avanzada" },
];

export const SERVICE_OPTIONS_BY_TYPE: Record<string, FeatureOption[]> = {
  landing: [
    { id: "formulario", name: "Formulario de contacto" },
    { id: "whatsapp", name: "Integración con WhatsApp y Redes Sociales" },
  ],
  web: [
    { id: "blog", name: "Blog / Noticias" },
    { id: "casos", name: "Sección de casos" },
    { id: "formulario", name: "Formulario de contacto" },
    { id: "multilang", name: "Multi-idioma" },
  ],
  ecommerce: [
    { id: "catalogo", name: "Catálogo autoadministrable" },
    { id: "checkout", name: "Dashboard con Métricas" },
    { id: "cupones", name: "Cupones y descuentos" },
    { id: "stock", name: "Gestión de stock" },
  ],
  branding: [
    { id: "logo", name: "Diseño de logo" },
    { id: "paleta", name: "Paleta de marca" },
    { id: "manual", name: "Manual de marca" },
    { id: "social", name: "Recursos para redes" },
  ],
  marketing: [
    { id: "seo", name: "Google My Bussines" },
    { id: "ads", name: "Campañas de anuncios" },
    { id: "email", name: "Email marketing" },
    { id: "analytics", name: "Analítica avanzada" },
  ],
  sistema: [
    { id: "api", name: "Integración por API" },
    { id: "usuarios", name: "Gestión de usuarios" },
    { id: "panel", name: "Panel de administración" },
    { id: "panel", name: "Gestionar Mi Negocio/Clientes" }
  ],
  app: [
    { id: "notificaciones", name: "Notificaciones push" },
    { id: "perfil", name: "Gestión de perfil" },
    { id: "offline", name: "Modo offline" },
  ],
};

// Rangos base en USD por tipo de proyecto simple
const BASE_RANGES: Record<string, [number, number]> = {
  landing: [250, 700],
  web: [700, 1800],
  ecommerce: [1500, 4500],
  branding: [400, 1200],
  marketing: [300, 1500],
};

export function isComplexType(typeId: string | null): boolean {
  return typeId ? COMPLEX_TYPES.includes(typeId) : false;
}

export function getServiceOptions(typeId: string | null): FeatureOption[] {
  if (!typeId) return FEATURE_OPTIONS;
  return SERVICE_OPTIONS_BY_TYPE[typeId] ?? FEATURE_OPTIONS;
}

export function getEstimate(
  projectType: string,
  quantity: number,
  subservicesCount: number,
  estimateOptions?: EstimateOptions
): [number, number] {
  if (projectType === "webs") {
    const websiteType = estimateOptions?.websiteType ?? "landing";
    const isLanding = websiteType === "landing";

    if (isLanding) {
      const sectionsCost = quantity * 50;
      let min = sectionsCost;
      let max = sectionsCost;

      if (estimateOptions?.multilingual) {
        const extraLanguages = Math.max(0, (estimateOptions.languageCount ?? 2) - 1);
        const languageCost = extraLanguages * 100;
        min += languageCost;
        max += languageCost;
      }

      if (estimateOptions?.contactForm) {
        min += 50;
        max += 50;
      }

      return [Math.round(min / 50) * 50, Math.round(max / 50) * 50];
    }

    const base = [700, 1800] as [number, number];
    let [min, max] = base;

    const pagesCost = quantity * 80;
    min += pagesCost;
    max += pagesCost;

    if (estimateOptions?.contactForm) {
      min += 50;
      max += 50;
    }

    if (estimateOptions?.multilingual) {
      const extraLanguages = Math.max(0, (estimateOptions.languageCount ?? 2) - 1);
      const languageCost = extraLanguages * 100;
      min += languageCost;
      max += languageCost;
    }

    if (estimateOptions?.dashboard) {
      min += 150;
      max += 150;
    }

    return [Math.round(min / 50) * 50, Math.round(max / 50) * 50];
  }

  if (projectType === "ecommerce") {
    let min = 800;
    let max = 800;

    if (estimateOptions?.payments) {
      min += 150;
      max += 150;
    }

    if (estimateOptions?.dashboard) {
      min += 300;
      max += 300;
    }

    if (estimateOptions?.seo) {
      min += 150;
      max += 150;
    }

    return [Math.round(min / 50) * 50, Math.round(max / 50) * 50];
  }

  if (projectType === "branding") {
    const brandingType = estimateOptions?.brandingType;

    if (brandingType === "manual") {
      return [500, 1200];
    }

    if (brandingType === "palette") {
      return [200, 200];
    }

    if (brandingType === "logo") {
      return [800, 800];
    }

    if (brandingType === "social") {
      const postsCost = (estimateOptions?.posts ?? 0) * 15;
      const reelsCost = (estimateOptions?.reels ?? 0) * 40;
      const total = postsCost + reelsCost;
      return [Math.round(total / 50) * 50, Math.round(total / 50) * 50];
    }

    return [200, 800];
  }

  if (projectType === "marketing") {
    const marketingType = estimateOptions?.marketingType;

    const pricing: Record<string, [number, number]> = {
      meta: [400, 800],
      tiktok: [400, 800],
      google: [500, 1000],
      mercado: [400, 800],
    };

    return pricing[marketingType ?? ""] ?? [400, 800];
  }

  const base = BASE_RANGES[projectType] || [500, 1500];
  let [min, max] = base;

  const extra = Math.max(0, quantity - 5) * 30;
  min += extra;
  max += extra * 1.4;

  const subserviceBonus = subservicesCount * 150;
  min += subserviceBonus * 0.6;
  max += subserviceBonus;

  return [Math.round(min / 50) * 50, Math.round(max / 50) * 50];
}
