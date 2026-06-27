import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";
import LogosStrip from "@/components/home/LogosStrip";
import ProblemsGrid from "@/components/home/ProblemsGrid";
import ProcessSteps from "@/components/home/ProcessSteps";
import MercadoLibreSection from "@/components/home/MercadoLibreSection";
import CasesGrid from "@/components/home/CasesGrid";
import CTAFinal from "@/components/CTAFinal";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden flex flex-col justify-center px-6 md:px-12 pt-32 pb-20 min-h-screen">
        <div className="absolute inset-0 bg-circuit pointer-events-none" />
        <div className="absolute w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(0,85,255,0.15)_0%,transparent_70%)] -top-24 -right-24 pointer-events-none" />
        <div className="absolute w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(0,200,255,0.08)_0%,transparent_70%)] bottom-0 left-32 pointer-events-none" />

        <div className="relative z-10">
          <div className="eyebrow mb-7">
            <span className="eyebrow-dot animate-pulse" />
            Ecosistema de Transformación Digital
          </div>

          <h1 className="font-display font-bold text-[clamp(42px,6vw,80px)] leading-[1.05] tracking-tighter max-w-3xl mb-6">
            Construimos
            <br />
            <span className="bg-gradient-to-br from-dc-blue to-dc-cyan bg-clip-text text-transparent">
              ecosistemas
            </span>
            <br />
            digitales
          </h1>

          <p className="text-lg text-dc-muted max-w-xl leading-relaxed mb-12">
            Digitalizamos, automatizamos y escalamos negocios mediante
            tecnología, marketing y software a medida. Del branding al ERP,
            en un solo ecosistema.
          </p>

          <div className="flex gap-4 flex-wrap mb-16">
            <Link href="/contacto" className="btn-primary">
              Solicitar Presupuesto
              <ArrowRight size={16} />
            </Link>
            <Link href="/casos-de-exito" className="btn-secondary">
              <PlayCircle size={16} />
              Ver Casos de Éxito
            </Link>
          </div>
        </div>
      </section>

      <LogosStrip />
      <ProblemsGrid />
      <ProcessSteps />
      <MercadoLibreSection />
      <CasesGrid />

      <CTAFinal
        title={
          <>
            ¿Listo para transformar
            <br />
            tu negocio?
          </>
        }
        description="Contanos tu proyecto. En 24 horas te respondemos con un diagnóstico gratuito y una propuesta concreta."
        showWhatsapp
        secondaryLabel="Agendar una llamada"
        secondaryHref="/contacto"
      />
    </>
  );
}
