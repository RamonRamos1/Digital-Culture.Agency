import ProblemSection from "@/components/soluciones/shared/ProblemSection";
import Benefits from "@/components/soluciones/shared/benefits";
import Process from "@/components/soluciones/shared/Process";
import FinalCTA from "@/components/soluciones/shared/FinalCTA";


export const metadata = {
  title: "Branding e Identidad Visual | Digital Culture",
  description:
    "Creamos marcas profesionales que transmiten confianza y aumentan el valor percibido."
};


export default function BrandingPage() {

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

        <div className="mx-auto max-w-5xl">


          <p className="text-sm uppercase tracking-[0.25em] text-dc-blue">
            Branding
          </p>


          <h1
            className="
              mt-6
              font-display
              text-4xl
              font-bold
              md:text-6xl
            "
          >

            Tu negocio vale más
            de lo que hoy comunica.

          </h1>


          <p className="mt-6 max-w-3xl text-lg text-dc-muted">

            Construimos identidades visuales que reflejan
            la calidad real de tu empresa.

          </p>


        </div>


      </section>



      <ProblemSection

        title="Tu marca no refleja su verdadero valor"

        description="Una identidad débil puede afectar la confianza del cliente y limitar la percepción de valor."

        problems={[
          "Imagen visual poco profesional",
          "Falta de diferenciación frente a competidores",
          "Comunicación sin coherencia",
          "Material comercial desactualizado"
        ]}

      />


      <Benefits />

      <Process />

      <FinalCTA />


    </main>

  );

}