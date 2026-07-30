import Link from "next/link";
import { ArrowRight } from "lucide-react";

import FlipCard from "./shared/FlipCard";


interface SolutionCardProps {

  id: string;

  number: string;

  icon: React.ElementType;

  eyebrow: string;

  title: string;

  description: string;

  href: string;

  solutions: string[];

  result: string;

}



export default function SolutionCard({

  number,

  icon: Icon,

  eyebrow,

  title,

  description,

  href,

  solutions,

  result

}: SolutionCardProps) {



  const Front = (

    <article

      className="
        relative
        flex
        min-h-[560px]
        flex-col
        overflow-hidden
        rounded-3xl
        border
        border-dc-border
        bg-dc-card
        p-6
        md:p-8
      "

    >


      {/* Número decorativo */}

      <span

        className="
          absolute
          right-5
          top-0
          font-display
          text-[110px]
          font-bold
          text-white/5
          select-none
        "

      >

        {number}

      </span>




      <div

        className="
          relative
          z-10
          flex
          h-full
          flex-col
        "

      >



        {/* Icono */}

        <div

          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            bg-dc-blue/10
            text-dc-blue
          "

        >

          <Icon size={28}/>


        </div>





        {/* Categoría */}

        <p

          className="
            mt-8
            text-xs
            uppercase
            tracking-[0.25em]
            text-dc-blue
          "

        >

          {eyebrow}


        </p>






        {/* Título */}

        <h3

          className="
            mt-4
            max-w-md
            font-display
            text-3xl
            font-bold
            leading-tight
          "

        >

          {title}


        </h3>






        {/* Descripción */}

        <p

          className="
            mt-5
            leading-relaxed
            text-dc-muted
          "

        >

          {description}


        </p>






        {/* Indicador mobile */}

        <p

          className="
            mt-auto
            pt-8
            text-xs
            text-dc-blue
            md:hidden
          "

        >

          Tocá para conocer la solución →

        </p>



      </div>



    </article>

  );







  const Back = (

    <article

      className="
        flex
        min-h-[560px]
        flex-col
        rounded-3xl
        border
        border-dc-blue/30
        bg-dc-card
        p-6
        md:p-8
      "

    >



      <h3

        className="
          font-display
          text-2xl
          font-bold
        "

      >

        Cómo podemos ayudarte


      </h3>






      <ul

        className="
          mt-6
          space-y-4
        "

      >

        {

          solutions.map((item)=>(


            <li

              key={item}

              className="
                flex
                items-start
                gap-3
                text-sm
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

                {item}

              </span>


            </li>


          ))

        }


      </ul>







      <div

        className="
          mt-8
        "

      >



        <div

          className="
            rounded-2xl
            border
            border-dc-border
            bg-black/20
            p-5
          "

        >


          <p

            className="
              text-sm
              font-semibold
            "

          >

            Resultado esperado


          </p>



          <p

            className="
              mt-2
              text-sm
              leading-relaxed
              text-dc-muted
            "

          >

            {result}


          </p>



        </div>





        <Link

          href={href}

          className="
            mt-6
            inline-flex
            items-center
            gap-2
            font-semibold
            text-dc-blue
            transition
            hover:text-dc-cyan
          "

        >

          Ver solución completa


          <ArrowRight size={18}/>


        </Link>




      </div>





    </article>

  );






  return (

    <FlipCard

      front={Front}

      back={Back}

    />

  );


}