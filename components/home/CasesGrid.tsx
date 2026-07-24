"use client";

import { useState } from "react";

const DESCRIPTION_WORD_LIMIT = 5;

const CASES = [
  {
    badge: "Volta Energía",
    type: "Sistema a Medida",
    title: "CRM personalizado para obras de energía",
    desc: "La empresa tenía un problema de recibir múltiples llamados a lo largo de la semana de clientes consultando por qué etapa iba su obra. La solución fue realizarle un dashboard en el que pueda colocar todos sus clientes e ir agregando obras en estado Realizado, Pendiente y En Curso. A partir de eso se genera un código de seguimiento para cada cliente que la empresa se lo da y cada uno de ellos puede ver en tiempo real en qué estado se encuentra su obra.",
  },
  {
    badge: "Blue Dragon",
    type: "Empresa de Módulos Mobiliarios",
    title: "Web Corporativa para Presentación de Empresa y Servicios",
    desc: "Es una empresa dedicada a la importación de módulos, los cuáles pueden ser utilizados para vivienda, oficina o departamentos. Realizan toda la logística, instalación de servicios y todo lo necesario para dejártelo 100% funcionando.",
  },
  {
    badge: "Distribuidora Omega",
    type: "Calculadora de Márgenes",
    title: "Mercado Libre",
    desc: "Una distribuidora dedicada a la venta de productos varios mediante la plataforma de Mercado Libre tenía un inconveniente con el cálculo de sus ganancias. Entre comisiones por venta fijo, porcentual, envíos, colecta y almacenamiento FULL, promociones, publicidad y los impuestos a pagar nunca podían saber bien cuánto realmente pagaban. Esta calculadora pudo resolver el problema contemplando todos estos parámetros y algunos más propios o internos de la empresa.",
  },
];


function getPreviewText(text: string, limit: number) {
  const words = text.split(/\s+/).filter(Boolean);

  return words.length <= limit
    ? text
    : `${words.slice(0, limit).join(" ")}...`;
}


export default function CasesGrid() {

  const [expandedCases, setExpandedCases] = useState<
    Record<number, boolean>
  >({});


  const [
    openMobileCase,
    setOpenMobileCase
  ] = useState<number | null>(null);



  const toggleExpanded = (index:number)=>{

    setExpandedCases((prev)=>({
      ...prev,
      [index]: !prev[index],
    }));

  };



return (

<section
className="
px-6
py-10
md:px-12
md:py-14
"
>


<div
className="
mx-auto
max-w-7xl
"
>


<p
className="
text-sm
uppercase
tracking-[0.25em]
text-dc-cyan
"
>
Casos de éxito
</p>



<h2
className="
section-title
mt-3
"
>

Resultados reales,
<br/>
no promesas

</h2>



{/* MOBILE */}

<div
className="
mt-6
flex
flex-col
gap-4
md:hidden
"
>

{
CASES.map((c,index)=>{

const isOpen =
openMobileCase === index;


return (

<div
key={c.title}
className="
overflow-hidden
rounded-2xl
border
border-dc-border
bg-dc-surface
"
>


<button

type="button"

onClick={()=> 
setOpenMobileCase(
isOpen ? null : index
)
}

className="
flex
w-full
items-center
justify-between
p-5
text-left
"

>


<div>

<p
className="
text-[11px]
uppercase
tracking-wide
font-semibold
text-dc-cyan
"
>

{c.type}

</p>


<h3
className="
mt-1
font-display
text-lg
font-bold
"
>

{c.badge}

</h3>

</div>



<span
className="
text-2xl
text-dc-cyan
"
>

{isOpen ? "−" : "+"}

</span>


</button>



{
isOpen && (

<div
className="
border-t
border-dc-border
p-5
"
>


<h4
className="
font-display
text-xl
font-bold
mb-2
"
>

{c.title}

</h4>



<p
className="
text-sm
leading-7
text-dc-muted
"
>

{c.desc}

</p>



<button
type="button"
className="
mt-5
inline-flex
rounded-full
bg-dc-cyan
px-4
py-2
text-sm
font-semibold
text-dc-dark
"
>

Ver proyecto

</button>


</div>

)

}


</div>

)

})

}


</div>




{/* DESKTOP */}


<div
className="
hidden
md:grid
md:grid-cols-3
gap-6
mt-8
"
>

{
CASES.map((c,index)=>{


const isExpanded =
expandedCases[index] ?? false;


const words =
c.desc.split(/\s+/).filter(Boolean);



const shouldTruncate =
words.length > DESCRIPTION_WORD_LIMIT;



const displayedText =
isExpanded
?
c.desc
:
getPreviewText(
c.desc,
DESCRIPTION_WORD_LIMIT
);



return (

<div

key={c.title}

className="
flex
h-full
flex-col
overflow-hidden
rounded-2xl
border
border-dc-border
bg-dc-surface
transition-all
duration-300
hover:-translate-y-1
hover:border-dc-blue/30
hover:shadow-xl
hover:shadow-dc-blue/10
"

>


<div
className="
h-24
bg-gradient-to-br
from-dc-card
to-dc-blue/5
flex
items-center
justify-center
border-b
border-dc-border
font-display
text-4xl
font-bold
tracking-tighter
text-white/[0.07]
"
>

{c.badge}

</div>



<div
className="
flex
flex-1
flex-col
p-5
"
>


<div
className="
text-[11px]
uppercase
tracking-wide
font-semibold
text-dc-cyan
mb-3
"
>

{c.type}

</div>



<h3
className="
font-display
text-xl
font-bold
tracking-tight
mb-1
min-h-[48px]
"
>

{c.title}

</h3>



<div
className="
flex-1
"
>

<div
className="
flex
items-start
gap-3
"
>


<p
className="
text-sm
text-dc-muted
leading-6
flex-1
"
>

{displayedText}

</p>



{
shouldTruncate && (

<button

type="button"

onClick={()=>
toggleExpanded(index)
}

className="
shrink-0
text-sm
font-semibold
text-dc-cyan
transition
hover:text-white
"

>

{
isExpanded
?
"ver menos"
:
"ver más"
}

</button>

)

}


</div>


</div>




<div
className="
mt-4
"
>

<button
type="button"
className="
inline-flex
items-center
justify-center
rounded-full
bg-dc-cyan
px-4
py-2
text-sm
font-semibold
text-dc-dark
transition
hover:bg-white/90
"
>

Ver proyecto

</button>

</div>



</div>


</div>


)

})

}


</div>


</div>

</section>

)

}