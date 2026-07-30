import Link from "next/link";
import { ArrowRight } from "lucide-react";


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


  return (

    <article
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-dc-border
        bg-dc-card
        p-8
        transition
        duration-300
        hover:border-dc-blue
        md:p-10
      "
    >


      <span
        className="
          absolute
          right-6
          top-4
          font-display
          text-8xl
          font-bold
          text-white/5
        "
      >
        {number}
      </span>



      <div
        className="
          relative
          z-10
        "
      >


        <div
          className="
            mb-6
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-xl
            bg-dc-blue/10
            text-dc-blue
          "
        >

          <Icon size={24}/>

        </div>



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



        <h3
          className="
            mt-4
            font-display
            text-3xl
            font-bold
          "
        >
          {title}
        </h3>



        <p
          className="
            mt-4
            leading-relaxed
            text-dc-muted
          "
        >
          {description}
        </p>



        <ul
          className="
            mt-8
            space-y-3
          "
        >

          {solutions.map((item) => (

            <li
              key={item}
              className="
                flex
                items-center
                gap-3
                text-sm
              "
            >

              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-dc-cyan
                "
              />

              {item}

            </li>

          ))}

        </ul>



        <p
          className="
            mt-8
            font-medium
          "
        >
          {result}
        </p>



        <Link
          href={href}
          className="
            mt-8
            inline-flex
            items-center
            gap-2
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

}