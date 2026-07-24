import Hero from "@/components/home/Hero/Hero";
import ProblemsGrid from "@/components/home/ProblemsGrid";
import CasesGrid from "@/components/home/CasesGrid";
import CTAFinal from "@/components/CTAFinal";

export default function HomePage() {
  return (
    <>
      <Hero />

      <ProblemsGrid />

      <CasesGrid />

      <CTAFinal
        title={
          <>
            ¿Listo para transformar?
            <br />
            Tu negocio
          </>
        }
        description="Contanos tu proyecto. En menos de 24 horas te responderemos con un diagnóstico gratuito y una propuesta concreta."
        showWhatsapp
        secondaryLabel="Agendar una llamada"
        secondaryHref="/contacto"
      />
    </>
  );
}