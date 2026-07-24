"use client"

import { useState } from "react"

import {
  PROBLEMS
} from "./problemData"

import ProblemCard from "./ProblemCard"



export default function Solutions(){

const [
selected,
setSelected
]=useState(PROBLEMS[0])


return (

<section

className="
relative
px-6
py-16
md:px-12
md:py-20
"

>

<div
className="
mx-auto
max-w-7xl
"
>


{/* HEADER */}

<div
className="
max-w-3xl
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

Diagnóstico digital

</p>


<h2
className="
mt-4
font-display
text-4xl
font-bold
leading-tight
text-dc-text
md:text-5xl
"
>

¿Qué está frenando el crecimiento de tu empresa?

</h2>


<p
className="
mt-5
text-lg
leading-relaxed
text-dc-muted
"
>

Seleccioná el desafío que enfrenta tu empresa y descubrí
cómo podemos ayudarte a solucionarlo.

</p>


</div>



{/* CARDS */}

<div
className="
mt-10
grid
gap-5
md:grid-cols-2
lg:grid-cols-3
"
>

{
PROBLEMS.map(problem => (

<ProblemCard

key={problem.id}

problem={problem}

selected={
selected.id === problem.id
}

onClick={() =>
setSelected(problem)
}

/>

))

}

</div>



{/* DETAIL */}

<div
className="
mt-8
"
>

</div>



</div>


</section>

)

}