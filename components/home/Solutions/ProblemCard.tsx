"use client"

import { PROBLEMS } from "./problemData"


interface Props{

 problem:any

 selected:boolean

 onClick:()=>void

}


export default function ProblemCard({
 problem,
 selected,
 onClick
}:Props){


const Icon = problem.icon


return(

<button

onClick={onClick}

className={`
group
relative
rounded-3xl
border
p-6
text-left
transition-all
duration-300

${
selected
?
"border-dc-cyan bg-dc-surface"
:
"border-dc-border bg-dc-card hover:border-dc-cyan/50"
}

`}

>


<div
className="
mb-5
flex
h-12
w-12
items-center
justify-center
rounded-xl
bg-dc-black
"
>

<Icon
size={24}
className="
text-dc-cyan
"
/>

</div>


<h3
className="
font-display
text-xl
font-semibold
text-dc-text
"
>

{problem.title}

</h3>


<p
  className="
  mt-3
  hidden
  text-sm
  leading-6
  text-dc-muted
  md:block
  "
>
  {problem.shortDescription}
</p>


<span
className="
mt-5
block
text-xs
uppercase
tracking-wider
text-dc-cyan
"
>

Ver solución →

</span>


</button>


)

}