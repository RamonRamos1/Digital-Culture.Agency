import Link from "next/link";
import { ArrowRight } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import { getWhatsAppLink } from "@/lib/links";

interface CTAFinalProps {
  title: React.ReactNode;
  description: string;
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
    <section className="relative overflow-hidden text-center bg-dc-black border-t border-dc-border px-6 md:px-12 py-24 md:py-32">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_800px_400px_at_50%_50%,rgba(0,85,255,0.08)_0%,transparent_70%)]" />
      <h2 className="relative font-display font-bold tracking-tighter text-[clamp(32px,4.5vw,56px)] max-w-2xl mx-auto mb-5 leading-tight">
        {title}
      </h2>
      <p className="relative text-dc-muted text-lg max-w-lg mx-auto mb-10">
        {description}
      </p>
      <div className="relative flex gap-4 justify-center flex-wrap">
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
