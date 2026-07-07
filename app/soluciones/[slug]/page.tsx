import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import ProblemSolutionBlock from "@/components/solutions/ProblemSolutionBlock";
import CTAFinal from "@/components/CTAFinal";
import { PROBLEM_SOLUTIONS } from "@/lib/solutions-data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return PROBLEM_SOLUTIONS.map((item) => ({ slug: item.id }));
}

export default async function SolutionLandingPage({ params }: PageProps) {
  const { slug } = await params;
  const problem = PROBLEM_SOLUTIONS.find((item) => item.id === slug);

  if (!problem) {
    notFound();
  }

  return (
    <>
      <PageHero
        eyebrow="Solución"
        title={problem.question}
        description={problem.problemDesc}
        backHref="/soluciones"
        backLabel="Volver a soluciones"
      />

      <ProblemSolutionBlock data={problem} index={0} />

      <CTAFinal
        title={
          <>
            ¿Querés resolver este
            <br />
            problema en tu negocio?
          </>
        }
        description="Contanos tu situación y te guiamos hacia la mejor solución para hoy."
        primaryLabel="Hablar con un asesor"
        primaryHref="/contacto"
        secondaryLabel="Volver a soluciones"
        secondaryHref="/soluciones"
      />
    </>
  );
}
