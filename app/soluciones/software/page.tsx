import ProblemSection from "@/components/soluciones/shared/ProblemSection";
import Benefits from "@/components/soluciones/shared/benefits";
import Process from "@/components/soluciones/shared/Process";
import FinalCTA from "@/components/soluciones/shared/FinalCTA";


export const metadata = {
  title: "Automatización y Software | Digital Culture",
  description:
    "Creamos sistemas digitales y automatizaciones para optimizar procesos y mejorar la eficiencia de tu negocio."
};


export default function SoftwarePage() {

  return (

    <main>


      <section
        className="
          px-6
          md:px-12
          pt-32
          pb-16
        "
      >

        <div
          className="
            mx-auto
            max-w-5xl
          "
        >

          <p
            className="
              text-sm
              uppercase
              tracking-[0.25em]
              text-dc-blue
            "
          >
            Automatización y Software
          </p>


          <h1
            className="
              mt-6
              font-display
              text-4xl
              font-bold
              leading-tight
              md:text-6xl
            "
          >

            Tu empresa creció.
            Tus procesos también deben crecer.

          </h1>


          <p
            className="
              mt-6
              max-w-3xl
              text-lg
              text-dc-muted
            "
          >

            Desarrollamos sistemas personalizados y automatizamos
            tareas repetitivas para que tu negocio funcione mejor.

          </p>


        </div>

      </section>



      <ProblemSection

        title="Perdés demasiado tiempo haciendo tareas que podrían estar automatizadas"

        description="Muchas empresas utilizan procesos manuales que consumen horas, generan errores y dificultan el crecimiento."

        problems={[
          "Información dispersa en diferentes herramientas",
          "Seguimiento manual de clientes",
          "Control de stock poco eficiente",
          "Procesos administrativos repetitivos"
        ]}

      />



      <Benefits />


      <Process />


      <FinalCTA />


    </main>

  );

}