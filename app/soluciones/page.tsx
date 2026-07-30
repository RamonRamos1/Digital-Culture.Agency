import Hero from "@/components/soluciones/Hero";
import SolutionsGrid from "@/components/soluciones/SolutionsGrid";


export const metadata = {
  title: "Soluciones Digitales | Digital Culture",
  description:
    "Creamos soluciones digitales para empresas que buscan crecer."
};


export default function SolucionesPage() {

  return (

    <main>

      <Hero />

      <SolutionsGrid />

    </main>

  );

}