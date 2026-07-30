"use client";

import { useState } from "react";


interface FlipCardProps {

  front: React.ReactNode;

  back: React.ReactNode;

}



export default function FlipCard({

  front,

  back

}: FlipCardProps) {


const [flipped,setFlipped] = useState(false);



return (

<div
className="
relative
h-[560px]
"

>


<div

className={`
relative
h-full
transition-transform
duration-700
preserve-3d

${flipped ? "rotate-y-180" : ""}

`}

onClick={()=>setFlipped(!flipped)}

>


{/* FRONT */}

<div

className="
relative
h-full
backface-hidden
"

>

{front}

</div>





{/* BACK */}

<div

className="
absolute
inset-0
backface-hidden
rotate-y-180
"

>

{back}

</div>



</div>


</div>

);

}