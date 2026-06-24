import PageHero from "@/components/PageHero";
import CalculatorWidget from "@/components/calculator/CalculatorWidget";

export const metadata = {
  title: "Calculadora de Proyectos | Digital Culture",
  description:
    "Estimá el costo de tu proyecto digital en menos de 1 minuto. Landing pages, sitios corporativos, ecommerce, branding y más.",
};

export default function CalculadoraPage() {
  return (
    <>
      <PageHero
        eyebrow="Calculadora de Proyectos"
        title={
          <>
            Estimá tu proyecto
            <br />
            en menos de 1 minuto
          </>
        }
        description="Respondé algunas preguntas y obtené un rango estimado de inversión para tu proyecto digital."
        align="center"
      />
      <CalculatorWidget />
    </>
  );
}
