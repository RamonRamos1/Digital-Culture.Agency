import Link from "next/link"
import HeroVideo from "./HeroVideo"


export default function Hero(){

return (

<section
className="
relative
overflow-hidden
px-6
pt-24
pb-16
md:px-12
md:pt-32
"
>


<div
className="
mx-auto
grid
max-w-7xl
items-center
gap-8
lg:gap-12
md:grid-cols-[1.1fr_0.9fr]
"
>


{/* CONTENIDO */}

<div>



<h1
className="
font-display
text-4xl
font-bold
leading-tight
text-dc-text
sm:text-5xl
text-4xl
sm:text-5xl
md:text-[3.2rem]
lg:text-6xl"
>

Convertimos problemas
de negocio en
soluciones digitales.

</h1>



<p
className="
mt-6
max-w-xl
text-lg
leading-relaxed
text-dc-muted
"
>

Ayudamos a empresas a eliminar procesos
ineficientes, automatizar operaciones e
integrar tecnología para crecer de manera
más rápida y eficiente.

</p>



<div
className="
mt-8
flex
flex-col
gap-4
sm:flex-row
"
>


<Link
href="/contacto"
className="
btn-primary
text-center
"
>

Quiero conocer Digital Culture

</Link>


</div>


</div>



{/* VIDEO */}

<div
className="
w-full
max-w-sm
mx-auto
md:max-w-md
lg:max-w-xl
lg:mx-0
lg:justify-self-end
"
>

<HeroVideo />


<p
className="
mt-4
text-center
text-sm
text-dc-muted
"
>

Conocé cómo ayudamos a transformar empresas

</p>


</div>


</div>


</section>

)

}