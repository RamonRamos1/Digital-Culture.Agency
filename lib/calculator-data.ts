import {
  Monitor,
  Building2,
  ShoppingCart,
  Palette,
  TrendingUp,
  Users,
  Grid3x3,
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
export const COMPLEX_TYPES = ["crm", "erp", "sistema", "automatizacion", "app"];

export const PROJECT_TYPES: ProjectType[] = [
  { id: "landing", name: "Landing Page", desc: "Una página enfocada en conversión", icon: Monitor },
  { id: "web", name: "Web Corporativa", desc: "Sitio institucional multi-página", icon: Building2 },
  { id: "ecommerce", name: "Ecommerce", desc: "Tienda online con pagos y stock", icon: ShoppingCart },
  { id: "branding", name: "Branding", desc: "Identidad visual completa", icon: Palette },
  { id: "marketing", name: "Marketing Digital", desc: "Campañas y estrategia digital", icon: TrendingUp },
  { id: "crm", name: "CRM", desc: "Gestión de clientes a medida", icon: Users },
  { id: "erp", name: "ERP", desc: "Sistema integral de gestión", icon: Grid3x3 },
  { id: "sistema", name: "Sistema a Medida", desc: "Software personalizado", icon: Network },
  { id: "automatizacion", name: "Automatización Avanzada", desc: "Flujos e integraciones complejas", icon: Network },
  { id: "app", name: "App Móvil", desc: "Aplicación nativa o multiplataforma", icon: Smartphone },
];

export interface FeatureOption {
  id: string;
  name: string;
}

export const FEATURE_OPTIONS: FeatureOption[] = [
  { id: "multilang", name: "Multi-idioma" },
  { id: "blog", name: "Blog / Noticias" },
  { id: "payments", name: "Pasarela de pagos" },
  { id: "analytics", name: "Analítica avanzada" },
];

// Rangos base en USD por tipo de proyecto simple
const BASE_RANGES: Record<string, [number, number]> = {
  landing: [350, 700],
  web: [700, 1800],
  ecommerce: [1500, 4500],
  branding: [400, 1200],
  marketing: [300, 1500],
};

export function isComplexType(typeId: string | null): boolean {
  return typeId ? COMPLEX_TYPES.includes(typeId) : false;
}

export function getEstimate(
  projectType: string,
  pages: number,
  featuresCount: number
): [number, number] {
  const base = BASE_RANGES[projectType] || [500, 1500];
  let [min, max] = base;

  const extra = (pages - 5) * 30;
  min += Math.max(0, extra);
  max += Math.max(0, extra * 1.4);

  const featBonus = featuresCount * 150;
  min += featBonus * 0.6;
  max += featBonus;

  return [Math.round(min / 50) * 50, Math.round(max / 50) * 50];
}
