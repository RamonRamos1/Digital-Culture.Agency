import Link from "next/link";
import { ArrowRight } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import { getWhatsAppLink } from "@/lib/links";

interface CTAFinalProps {
  title: React.ReactNode;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  showWhatsapp?: boolean;
}

export default function CTAFinal({
  title,
  description,
  primaryLabel = "Empezá y dejate de joder",
  primaryHref = "/contacto",
  secondaryLabel,
  secondaryHref,
  showWhatsapp = false,
}: CTAFinalProps) {
  return (
    <section className="relative overflow-hidden border-t border-dc-border bg-dc-black px-6 py-14 text-center md:px-12 md:py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_800px_400px_at_50%_50%,rgba(0,85,255,0.08)_0%,transparent_70%)]" />
      <h2 className="relative mx-auto mb-4 max-w-xl font-display font-bold leading-tight tracking-[-0.03em] text-[clamp(28px,4vw,44px)]">
        {title}
      </h2>
      {description && (
  <p className="relative mx-auto mb-8 max-w-lg text-base leading-relaxed text-dc-muted">
    {description}
  </p>
)}
      <div className="relative flex flex-wrap justify-center gap-3">
        <Link href={primaryHref} className="btn-primary">
          {primaryLabel}
          <ArrowRight size={16} />
        </Link>
        {showWhatsapp && (
          <a href={getWhatsAppLink("Hola, quiero info sobre mi proyecto")} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
            <WhatsAppIcon size={18} />
            Escribinos por WhatsApp
          </a>
        )}
        {secondaryLabel && secondaryHref && (
          <Link href={secondaryHref} className="btn-secondary">
            {secondaryLabel}
          </Link>
        )}
      </div>
    </section>
  );
}
