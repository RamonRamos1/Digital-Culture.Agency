interface ProblemSectionProps {
  eyebrow?: string;
  title: string;
  description: string;
  problems: string[];
}


export default function ProblemSection({
  eyebrow = "EL PROBLEMA",
  title,
  description,
  problems
}: ProblemSectionProps) {

  return (

    <section
      className="
        px-6
        md:px-12
        py-20
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
            grid
            grid-cols-1
            gap-10
            lg:grid-cols-2
            lg:items-start
          "
        >


          <div>

            <p
              className="
                text-sm
                uppercase
                tracking-[0.25em]
                text-dc-blue
              "
            >
              {eyebrow}
            </p>



            <h2
              className="
                mt-5
                font-display
                text-3xl
                font-bold
                leading-tight
                md:text-5xl
              "
            >

              {title}

            </h2>



            <p
              className="
                mt-6
                text-lg
                leading-relaxed
                text-dc-muted
              "
            >

              {description}

            </p>


          </div>




          <div
            className="
              rounded-3xl
              border
              border-dc-border
              bg-dc-card
              p-8
              md:p-10
            "
          >


            <h3
              className="
                font-display
                text-xl
                font-bold
              "
            >

              Situaciones frecuentes

            </h3>



            <ul
              className="
                mt-6
                space-y-4
              "
            >

              {
                problems.map((problem) => (

                  <li
                    key={problem}
                    className="
                      flex
                      items-start
                      gap-4
                      text-dc-muted
                    "
                  >

                    <span
                      className="
                        mt-2
                        h-2
                        w-2
                        shrink-0
                        rounded-full
                        bg-dc-cyan
                      "
                    />


                    <span>
                      {problem}
                    </span>


                  </li>

                ))
              }


            </ul>


          </div>


        </div>


      </div>


    </section>

  );

}