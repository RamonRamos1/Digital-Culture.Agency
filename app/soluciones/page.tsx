import PageHero from "@/components/PageHero";
import ProblemsGrid from "@/components/solutions/ProblemsGrid";
import CTAFinal from "@/components/CTAFinal";

export const metadata = {
  title: "Soluciones | Digital Culture",
  description:
    "Che, nos quedamos con la sección de soluciones o servicios o una combinación de Ambas?. PD: Encontré otra forma de comunicarnoos, directamente mensajes desperdigados por la web :) PD2: El mundial me esta haciendo alusinar - No vendemos servicios, resolvemos problemas. Encontrá la solución exacta para lo que tu negocio necesita hoy.",
    
};

export default function SolucionesPage() {
  return (
    <>
      <PageHero
        eyebrow="Soluciones"
        title={
          <>
            No vendemos servicios.
            <br />
            Resolvemos problemas.
          </>
        }
        description="Decinos qué te está frenando hoy. Nosotros te mostramos exactamente qué hacemos para resolverlo."
      />

      <ProblemsGrid />

      <CTAFinal
        title={
          <>
            ¿No encontrás tu
            <br />
            problema exacto?
          </>
        }
        description="Cada negocio es distinto. Contanos tu situación y te decimos exactamente qué necesitás."
        primaryLabel="Hablar con un asesor"
        primaryHref="/contacto"
        secondaryLabel="Ir a la Calculadora"
        secondaryHref="/calculadora"
      />
    </>
  );
}
