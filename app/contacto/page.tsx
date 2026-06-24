import { MapPin, Clock, ShieldCheck, ArrowRight } from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { getWhatsAppLink, getContactEmail, getCalendlyLink } from "@/lib/links";

export const metadata = {
  title: "Contacto | Digital Culture",
  description:
    "Hablemos de tu proyecto. Contanos qué necesitás y te respondemos en menos de 24 horas con un diagnóstico inicial.",
};

export default function ContactoPage() {
  return (
    <section className="relative overflow-hidden px-6 md:px-12 pt-36 md:pt-40 pb-24">
      <div className="absolute inset-0 bg-circuit pointer-events-none" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(0,85,255,0.12)_0%,transparent_70%)] -top-36 -right-24 pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-16 md:gap-20 max-w-[1280px] mx-auto">
        {/* LEFT */}
        <div>
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            Hablemos de tu proyecto
          </div>
          <h1 className="font-display font-bold text-[clamp(36px,4.5vw,54px)] tracking-tighter leading-tight mt-6 mb-6">
            Convertí tu idea
            <br />
            en un{" "}
            <span className="bg-gradient-to-br from-dc-blue to-dc-cyan bg-clip-text text-transparent">
              ecosistema
            </span>
            <br />
            digital
          </h1>
          <p className="text-lg text-dc-muted leading-relaxed max-w-md mb-12">
            Contanos qué necesitás y te respondemos en menos de 24 horas con
            un diagnóstico inicial. Sin compromiso, sin letra chica.
          </p>

          <div className="flex flex-col gap-3.5 mb-12">
            <a
              href={getWhatsAppLink("Hola, quiero contarte sobre mi proyecto")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 bg-dc-surface border border-dc-border rounded-lg transition-all hover:border-[#25D366]/40 hover:bg-dc-card group"
            >
              <div className="w-11 h-11 rounded-lg bg-[#25D366]/10 flex items-center justify-center flex-shrink-0">
                <WhatsAppIcon size={20} />
              </div>
              <div>
                <h4 className="font-display text-[15px] font-semibold mb-0.5">
                  WhatsApp
                </h4>
                <p className="text-[13px] text-dc-muted">
                  Respuesta inmediata en horario laboral
                </p>
              </div>
              <ArrowRight size={16} className="ml-auto text-dc-muted group-hover:text-dc-text transition-colors" />
            </a>

            <a
              href={getCalendlyLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 bg-dc-surface border border-dc-border rounded-lg transition-all hover:border-dc-blue/40 hover:bg-dc-card group"
            >
              <div className="w-11 h-11 rounded-lg bg-dc-blue/10 flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0055FF" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
              </div>
              <div>
                <h4 className="font-display text-[15px] font-semibold mb-0.5">
                  Calendly
                </h4>
                <p className="text-[13px] text-dc-muted">
                  Reservá una llamada de descubrimiento
                </p>
              </div>
              <ArrowRight size={16} className="ml-auto text-dc-muted group-hover:text-dc-text transition-colors" />
            </a>

            <a
              href={`mailto:${getContactEmail()}`}
              className="flex items-center gap-4 p-5 bg-dc-surface border border-dc-border rounded-lg transition-all hover:border-dc-cyan/40 hover:bg-dc-card group"
            >
              <div className="w-11 h-11 rounded-lg bg-dc-cyan/10 flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00C8FF" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22 6 12 13 2 6" />
                </svg>
              </div>
              <div>
                <h4 className="font-display text-[15px] font-semibold mb-0.5">
                  Email
                </h4>
                <p className="text-[13px] text-dc-muted">
                  {getContactEmail()}
                </p>
              </div>
              <ArrowRight size={16} className="ml-auto text-dc-muted group-hover:text-dc-text transition-colors" />
            </a>
          </div>

          <div className="flex gap-8 pt-8 border-t border-dc-border">
            <Stat num="24h" label="Tiempo de respuesta" />
            <Stat num="+120" label="Proyectos entregados" />
            <Stat num="0%" label="Compromiso inicial" />
          </div>
        </div>

        {/* RIGHT: FORM */}
        <ContactForm />
      </div>

      {/* LOCATION ROW */}
      <div className="relative z-10 flex flex-wrap justify-between gap-6 max-w-[1280px] mx-auto mt-16 pt-10 border-t border-dc-border">
        <LocationItem
          icon={MapPin}
          title="Ubicación"
          desc="Trabajo 100% remoto, alcance en toda Latinoamérica"
        />
        <LocationItem
          icon={Clock}
          title="Horario de atención"
          desc="Lunes a viernes, 9 a 18hs"
        />
        <LocationItem
          icon={ShieldCheck}
          title="Respuesta garantizada"
          desc="Te contactamos en menos de 24hs"
        />
      </div>
    </section>
  );
}

function Stat({ num, label }: { num: string; label: string }) {
  return (
    <div>
      <div className="font-display text-[28px] font-bold tracking-tight">
        {num}
      </div>
      <div className="text-xs text-dc-muted mt-0.5">{label}</div>
    </div>
  );
}

function LocationItem({
  icon: Icon,
  title,
  desc,
}: {
  icon: React.ElementType;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <Icon size={18} className="text-dc-cyan flex-shrink-0" />
      <div>
        <h5 className="font-display text-[13px] font-semibold mb-0.5">
          {title}
        </h5>
        <p className="text-xs text-dc-muted">{desc}</p>
      </div>
    </div>
  );
}
