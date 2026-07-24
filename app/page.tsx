import Hero from "@/components/home/Hero/Hero";
import Solutions from "@/components/home/Solutions/Solutions";
import CasesGrid from "@/components/home/CasesGrid";
import CTAFinal from "@/components/CTAFinal";

export default function Home() {

  return (

    <main>

      <Hero />

      <Solutions />

      <CasesGrid />

      <CTAFinal
        title="¿Listo para transformar tu empresa?"
        primaryLabel="Quiero contarles sobre mi proyecto"
        primaryHref="/contacto"
        showWhatsapp={true}
      />

    </main>

  );

}