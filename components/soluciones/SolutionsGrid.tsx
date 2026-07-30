import SolutionCard from "./SolutionCard";
import { SOLUTIONS } from "./ts";


export default function SolutionsGrid() {

  return (

    <section
      id="soluciones"
      className="
        px-6
        md:px-12
        pb-20
      "
    >

      <div
        className="
          mx-auto
          max-w-7xl
        "
      >

        <div
          className="
            mb-12
            max-w-3xl
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
            Cómo podemos ayudarte
          </p>


          <h2
            className="
              mt-4
              font-display
              text-3xl
              font-bold
              leading-tight
              md:text-5xl
            "
          >
            Soluciones diseñadas
            para problemas reales de negocio.
          </h2>


          <p
            className="
              mt-5
              text-lg
              leading-relaxed
              text-dc-muted
            "
          >
            Cada empresa tiene desafíos diferentes.
            Analizamos tu situación actual y construimos
            la solución que tu negocio realmente necesita.
          </p>

        </div>



        <div
          className="
            grid
            grid-cols-1
            gap-6
            lg:grid-cols-2
          "
        >

          {SOLUTIONS.map((solution) => (

            <SolutionCard
              key={solution.id}
              {...solution}
            />

          ))}


        </div>


      </div>

    </section>

  );
}