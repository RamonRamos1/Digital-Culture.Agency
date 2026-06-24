import PageHero from "@/components/PageHero";
import QuickNavPills from "@/components/solutions/QuickNavPills";
import ProblemSolutionBlock from "@/components/solutions/ProblemSolutionBlock";
import CTAFinal from "@/components/CTAFinal";
import { PROBLEM_SOLUTIONS } from "@/lib/solutions-data";

export const metadata = {
  title: "Soluciones | Digital Culture",
  description:
    "No vendemos servicios, resolvemos problemas. Encontrá la solución exacta para lo que tu negocio necesita hoy.",
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

      <QuickNavPills />

      {PROBLEM_SOLUTIONS.map((data, i) => (
        <ProblemSolutionBlock key={data.id} data={data} index={i} />
      ))}

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
