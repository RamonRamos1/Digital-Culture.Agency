"use client";

import {
Eye,
Target,
Code2,
Database,
Cloud,
BarChart3,
Zap,
Globe,
Smartphone,
Server,
Workflow
} from "lucide-react";

import {
SiNextdotjs,
SiReact,
SiTypescript,
SiTailwindcss,
SiNodedotjs,
SiPostgresql,
SiMongodb,
SiGoogleanalytics,
SiWhatsapp,
SiGithub,
SiDjango
} from "react-icons/si";
import { useState } from "react";


const VALUES = [
  {
    title: "Innovación",
    desc:
      "Buscamos nuevas formas de resolver desafíos empresariales utilizando tecnología, creatividad y estrategia.",
  },
  {
    title: "Compromiso",
    desc:
      "Trabajamos cada proyecto como un socio estratégico, acompañando al cliente durante todo el proceso.",
  },
  {
    title: "Transparencia",
    desc:
      "Creemos en la comunicación clara, objetivos definidos y procesos visibles para construir relaciones duraderas.",
  },
  {
    title: "Adaptabilidad",
    desc:
      "Creamos soluciones flexibles que pueden evolucionar junto con las necesidades de cada negocio.",
  },
];


const METHOD_STEPS = [
  {
    n: 1,
    title: "Diagnóstico",
    desc:
      "Analizamos el negocio, sus procesos y objetivos para comprender el verdadero desafío.",
  },
  {
    n: 2,
    title: "Estrategia",
    desc:
      "Definimos una hoja de ruta personalizada con prioridades, alcance y tecnología adecuada.",
  },
  {
    n: 3,
    title: "Ejecución",
    desc:
      "Desarrollamos la solución con comunicación constante y entregas parciales para validar avances.",
  },
  {
    n: 4,
    title: "Optimización",
    desc:
      "Medimos resultados y ajustamos la solución para acompañar el crecimiento del negocio.",
  },
];


const TECH_CATEGORIES = [
  {
    title: "Desarrollo Web",
    icon: Code2,
    items: [
      {
        name: "Next.js",
        icon: SiNextdotjs,
      },
      {
        name: "React",
        icon: SiReact,
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
      },
    ],
  },

  {
    title: "Sistemas & Datos",
    icon: Database,
    items: [
      {
        name: "Node.js",
        icon: SiNodedotjs,
      },
      {
        name: "Django",
        icon: SiDjango,
      },
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
      },
    ],
  },

  {
    title: "Cloud & Integraciones",
    icon: Workflow,
    items: [
      {
        name: "AWS",
        icon: Cloud,
      },
      {
        name: "WhatsApp API",
        icon: SiWhatsapp,
      },
      {
        name: "Google Analytics",
        icon: SiGoogleanalytics,
      },
      {
        name: "GitHub",
        icon: SiGithub,
      },
      {
        name: "Automatizaciones",
        icon: Zap,
      },
    ],
  },
];


const TEAM = [
  {
    initials:"MC",
    role:"Estrategia Comercial",
    title:"Maximiliano Iasuozzi",
    desc:
    "Conecta objetivos comerciales con estrategias digitales para potenciar ventas y crecimiento.",
  },
  {
    initials:"RR",
    role:"Desarrollo y Arquitectura Digital",
    title:"Ramón Ramos",
    desc:
    "Lidera la planificación técnica y desarrollo de soluciones digitales personalizadas.",
  },
  {
    initials:"MN",
    role:"Marketing y Diseño",
    title:"Margarita Novichkova",
    desc:
    "Desarrolla estrategias de comunicación, identidad de marca y generación de oportunidades.",
  },
  {
    initials:"VA",
    role:"Ciencia de Datos",
    title:"Valentín Albornoz",
    desc:
    "Implementa soluciones basadas en datos, automatización y análisis de información.",
  },
];


export default function NosotrosContent(){

const [showAbout,setShowAbout] = useState(false);

const [flipCard,setFlipCard] =
useState<string | null>(null);

const [showProcesses,setShowProcesses] = useState(false);

return (
<>


{/* QUIENES SOMOS */}

<section className="
bg-dc-dark
px-6
md:px-12
py-20
md:py-24
">


<div className="section-eyebrow">
Quiénes Somos
</div>


<h2 className="section-title">

Un equipo multidisciplinario
<br/>
con una visión integral

</h2>



<div className="max-w-4xl mt-10">


<div
className={`
text-dc-muted
text-[16px]
leading-relaxed
space-y-5

${showAbout ? "block" : "hidden md:block"}

`}
>

<p>
Digital Culture es un ecosistema de transformación digital
formado por profesionales especializados en estrategia,
marketing, diseño, desarrollo de software y automatización.
</p>


<p>
Creemos que las empresas no necesitan herramientas aisladas,
sino soluciones conectadas que permitan mejorar procesos,
tomar mejores decisiones y crecer de manera sostenible.
</p>


<p>
Trabajamos junto a cada cliente entendiendo su realidad,
identificando oportunidades y construyendo soluciones
adaptadas a sus objetivos.
</p>


</div>



<button
onClick={()=>setShowAbout(!showAbout)}
className="
mt-6
md:hidden
rounded-full
bg-dc-cyan
px-5
py-2.5
text-sm
font-semibold
text-dc-dark
"
>

{
showAbout
?
"Ocultar descripción"
:
"Ver descripción"
}


</button>


</div>


</section>


{/* MISION Y VISION */}

<section className="bg-dc-black px-6 md:px-12 py-16">

  <div className="section-eyebrow justify-center flex">
    Nuestra Identidad
  </div>

  <h2 className="section-title text-center">
    Nuestra Misión y Visión
  </h2>


  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 max-w-4xl mx-auto">


    {[
      {
        id:"mision",
        icon: Target,
        title:"Nuestra Misión",
        desc:
        "Ayudar a empresas a evolucionar mediante soluciones digitales personalizadas que mejoren sus procesos, potencien sus ventas y permitan aprovechar las oportunidades que brinda la tecnología."
      },
      {
        id:"vision",
        icon: Eye,
        title:"Nuestra Visión",
        desc:
        "Ser un referente en transformación digital para empresas que buscan adaptarse, crecer y competir en un entorno cada vez más tecnológico."
      }

    ].map((card)=>{


      const Icon = card.icon;


      return (

        <div
          key={card.id}
          onClick={() =>
            setFlipCard(
              flipCard === card.id
              ? null
              : card.id
            )
          }
          className="
          perspective
          cursor-pointer
          h-[200px]
          "
        >


          <div
            className={`
            relative
            w-full
            h-full
            transition-transform
            duration-700
            preserve-3d

            ${
              flipCard === card.id
              ? "rotate-y-180"
              : ""
            }

            md:hover:rotate-y-180
            `}
          >


            {/* FRONT */}

            <div
              className="
              absolute
              inset-0
              backface-hidden
              bg-dc-surface
              border
              border-dc-border
              rounded-2xl
              p-5
              flex
              flex-col
              items-center
              justify-center
              text-center
              "
            >


              <div
                className="
                w-10
                h-10
                rounded-xl
                bg-dc-blue/10
                border
                border-dc-blue/20
                flex
                items-center
                justify-center
                mb-4
                "
              >

                <Icon
                  size={20}
                  className="text-dc-cyan"
                />

              </div>



              <h3
                className="
                font-display
                text-lg
                font-bold
                "
              >
                {card.title}
              </h3>
              <p
                className="
                mt-3
                text-xs
                text-dc-muted
                "
              >
                Pasá el cursor para conocer más
              </p>


            </div>




            {/* BACK */}

            <div
              className="
              absolute
              inset-0
              backface-hidden
              rotate-y-180
              bg-dc-dark
              border
              border-dc-cyan/30
              rounded-2xl
              p-5
              flex
              items-center
              justify-center
              text-center
              "
            >


              <p
                className="
                text-sm
                leading-relaxed
                text-dc-muted
                "
              >
                {card.desc}
              </p>


            </div>


          </div>


        </div>

      )


    })}


  </div>


</section>

{/* VALORES */}

<section className="bg-dc-dark px-6 md:px-12 py-16">


  <div className="section-eyebrow">
    Nuestros Valores
  </div>


  <h2 className="section-title">
    Los principios que guían
    <br />
    nuestra forma de trabajar
  </h2>



  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 max-w-4xl mx-auto">


    {VALUES.map((value)=>{


      const valueId = value.title;


      return (

        <div
          key={value.title}
          onClick={() =>
            setFlipCard(
              flipCard === valueId
              ? null
              : valueId
            )
          }
          className="
          perspective
          cursor-pointer
          h-[180px]
          "
        >


          <div
            className={`
            relative
            w-full
            h-full
            transition-transform
            duration-700
            preserve-3d

            ${
              flipCard === valueId
              ? "rotate-y-180"
              : ""
            }

            md:hover:rotate-y-180
            `}
          >



            {/* FRONT */}

            <div
              className="
              absolute
              inset-0
              backface-hidden
              bg-dc-surface
              border
              border-dc-border
              rounded-2xl
              p-5
              flex
              flex-col
              items-center
              justify-center
              text-center
              "
            >


              <div
                className="
                w-10
                h-10
                rounded-xl
                bg-dc-blue/10
                border
                border-dc-blue/20
                flex
                items-center
                justify-center
                mb-4
                "
              >

                <span
                  className="
                  text-dc-cyan
                  font-display
                  font-bold
                  text-lg
                  "
                >
                  ✦
                </span>


              </div>



              <h3
                className="
                font-display
                text-lg
                font-bold
                "
              >
                {value.title}
              </h3>



              <p
                className="
                mt-3
                text-xs
                text-dc-muted
                "
              >
                Pasá el cursor para conocer más
              </p>


            </div>




            {/* BACK */}

            <div
              className="
              absolute
              inset-0
              backface-hidden
              rotate-y-180
              bg-dc-black
              border
              border-dc-cyan/30
              rounded-2xl
              p-5
              flex
              items-center
              justify-center
              text-center
              "
            >

              <p
                className="
                text-sm
                leading-relaxed
                text-dc-muted
                "
              >
                {value.desc}
              </p>


            </div>



          </div>


        </div>


      )


    })}


  </div>


</section>

{/* COMO LO LOGRAMOS */}

<section className="bg-dc-black px-6 md:px-12 py-20 md:py-24">


  <div className="text-center">


    <div className="section-eyebrow justify-center flex">
      Cómo lo logramos
    </div>


    <h2 className="section-title">
      Un proceso ordenado
      <br />
      para resultados reales
    </h2>


  </div>



  {/* MOBILE BUTTON */}

  <div className="flex justify-center mt-10 md:hidden">


    <button
      onClick={() =>
        setShowProcesses(!showProcesses)
      }
      className="
      rounded-full
      bg-dc-cyan
      px-6
      py-3
      text-sm
      font-semibold
      text-dc-dark
      "
    >

      {
        showProcesses
        ? "Ocultar Procesos"
        : "Desplegar Procesos"
      }

    </button>


  </div>




  {/* PROCESS CONTAINER */}

  <div
    className={`
    relative
    mt-14
    grid
    grid-cols-1
    md:grid-cols-4
    gap-10
    md:gap-8

    ${
      showProcesses
      ? "block"
      : "hidden md:grid"
    }

    `}
  >



    {/* LINE DESKTOP */}

    <div
      className="
      hidden
      md:block
      absolute
      top-7
      left-[12%]
      right-[12%]
      h-[2px]
      bg-dc-border
      overflow-hidden
      "
    >

      <div
        className="
        h-full
        bg-dc-cyan
        animate-process-line
        "
      />

    </div>




    {METHOD_STEPS.map((step,index)=>(


      <div
        key={step.n}
        className="
        relative
        z-10
        text-center
        animate-process-card
        "
      >



        <div
          className="
          w-14
          h-14
          rounded-full
          bg-dc-surface
          border-2
          border-dc-border
          flex
          items-center
          justify-center
          mx-auto
          mb-5
          font-display
          font-bold
          text-dc-cyan
          "
        >

          {step.n}


        </div>




        <h3
          className="
          font-display
          font-semibold
          mb-3
          "
        >

          {step.title}

        </h3>




        <p
          className="
          text-sm
          text-dc-muted
          leading-relaxed
          max-w-[220px]
          mx-auto
          "
        >

          {step.desc}

        </p>



      </div>


    ))}


  </div>



</section>

{/* EQUIPO */}


<section className="
bg-dc-dark
px-6
md:px-12
py-20
md:py-24
">


<div className="section-eyebrow">
Equipo
</div>


<h2 className="section-title">

Las personas detrás
<br/>
de cada proyecto

</h2>



<div className="
grid
grid-cols-1
md:grid-cols-4
gap-6
mt-12
">


{
TEAM.map(member=>(


<div
key={member.title}
className="
bg-dc-surface
border
border-dc-border
rounded-xl
p-6
"
>


<div className="
w-20
h-20
rounded-full
bg-dc-dark
border
border-dc-border
flex
items-center
justify-center
text-dc-cyan
font-bold
mb-5
">

{member.initials}

</div>


<h3 className="
font-display
font-bold
">

{member.title}

</h3>


<div className="
text-xs
text-dc-cyan
mt-2
mb-3
uppercase
">

{member.role}

</div>


<p className="
text-sm
text-dc-muted
leading-relaxed
">

{member.desc}

</p>


</div>


))

}


</div>


</section>

{/* TECNOLOGIA */}

<section className="bg-dc-black px-6 md:px-12 py-20 md:py-24">

  <div className="section-eyebrow">
    Tecnología
  </div>


  <h2 className="section-title">
    Herramientas que utilizamos
    <br />
    para crear soluciones digitales
  </h2>



  <div
    className="
    grid
    grid-cols-1
    md:grid-cols-3
    gap-6
    mt-12
    "
  >


    {TECH_CATEGORIES.map((cat)=>{


      const CategoryIcon = cat.icon;


      return (

        <div
          key={cat.title}
          className="
          bg-dc-surface
          border
          border-dc-border
          rounded-2xl
          p-6
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-dc-cyan/40
          "
        >


          {/* TITULO CATEGORIA */}

          <div
            className="
            flex
            items-center
            gap-3
            mb-6
            "
          >

            <div
              className="
              w-10
              h-10
              rounded-xl
              bg-dc-blue/10
              border
              border-dc-blue/20
              flex
              items-center
              justify-center
              "
            >

              <CategoryIcon
                size={20}
                className="text-dc-cyan"
              />

            </div>


            <h3
              className="
              font-display
              font-bold
              text-lg
              "
            >
              {cat.title}
            </h3>


          </div>




          {/* TECNOLOGIAS */}

          <div
            className="
            grid
            grid-cols-2
            gap-3
            "
          >

            {cat.items.map((item)=>{


              const TechIcon = item.icon;


              return (

                <div
                  key={item.name}
                  className="
                  flex
                  flex-col
                  items-center
                  justify-center
                  gap-2
                  bg-dc-dark
                  border
                  border-dc-border
                  rounded-xl
                  p-3
                  transition-all
                  hover:border-dc-cyan/50
                  "
                >


                  <TechIcon
                    size={24}
                    className="text-dc-cyan"
                  />



                  <span
                    className="
                    text-xs
                    text-dc-muted
                    text-center
                    "
                  >

                    {item.name}

                  </span>


                </div>

              );


            })}

          </div>


        </div>

      );


    })}


  </div>


</section>


</>

)

}