import PageHero from "@/components/PageHero";
import ProblemChips from "@/components/services/ProblemChips";
import ServiceBlockSection from "@/components/services/ServiceBlockSection";
import CTAFinal from "@/components/CTAFinal";
import { SERVICES } from "@/lib/services-data";

export const metadata = {
  title: "Servicios | Digital Culture",
  description:
    "Marketing Digital, Branding, Desarrollo Web, Sistemas a Medida, Automatizaciones, Apps y Mercado Libre. Todo lo que tu negocio necesita en un solo ecosistema.",
};

export default function ServiciosPage() {
  return (
    <>
      <PageHero
        eyebrow="Nuestros Servicios"
        title={
          <>
            Todo lo que tu negocio
            <br />
            necesita para{" "}
            <span className="bg-gradient-to-br from-dc-blue to-dc-cyan bg-clip-text text-transparent">
              escalar
            </span>
          </>
        }
        description="Marketing, branding, desarrollo, sistemas a medida y automatizaciones — un ecosistema completo, no servicios sueltos."
      />

      <ProblemChips />

      {SERVICES.map((service, i) => (
        <ServiceBlockSection key={service.id} service={service} index={i} />
      ))}

      <CTAFinal
        title={
          <>
            ¿No sabés por dónde
            <br />
            empezar?
          </>
        }
        description="Usá nuestra calculadora para estimar tu proyecto, o agendá una reunión de descubrimiento gratuita."
        primaryLabel="Ir a la Calculadora"
        primaryHref="/calculadora"
        secondaryLabel="Hablar con un asesor"
        secondaryHref="/contacto"
      />
    </>
  );
}
