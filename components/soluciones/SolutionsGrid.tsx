import SolutionCard from "./SolutionCard";
import { SOLUTIONS } from "./ts/data";


export default function SolutionGrid() {


return (

<section

id="soluciones"

className="
px-6
pb-24
md:px-12
"

>


<div

className="
mx-auto
max-w-7xl
"

>



{/* Encabezado sección */}

<div

className="
mb-14
max-w-3xl
"

>


<p

className="
text-xs
uppercase
tracking-[0.3em]
text-dc-blue
"

>

Cómo podemos ayudarte

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

Soluciones diseñadas
para problemas reales de negocio.

</h2>




<p

className="
mt-6
text-lg
leading-relaxed
text-dc-muted
"

>

Cada empresa tiene desafíos diferentes.
Analizamos tu situación actual y construimos
soluciones digitales alineadas con tus objetivos.

</p>



</div>





{/* GRID */}

<div
className="
grid
grid-cols-1
items-start
gap-8
md:grid-cols-2
"
>


{

SOLUTIONS.map((solution)=>(


<div

key={solution.id}

className="
h-full
"

>


<SolutionCard

{...solution}

/>


</div>


))


}



</div>



</div>


</section>

);

}