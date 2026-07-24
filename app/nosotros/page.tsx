import PageHero from "@/components/PageHero";
import CTAFinal from "@/components/CTAFinal";
import NosotrosContent from "@/app/nosotros/NosotrosContent";


export const metadata = {
  title: "Sobre Nosotros | Digital Culture",
  description:
    "Digital Culture integra estrategia, marketing, diseño, desarrollo y automatización para ayudar a empresas a evolucionar.",
};


export default function NosotrosPage() {

return (
<>
<PageHero
eyebrow="Sobre Nosotros"
title={
<>
Somos una agencia de software
<br />
y consultoría de marketing
</>
}
description="
Integramos estrategia, marketing, diseño, tecnología y automatización para crear soluciones digitales que acompañan el crecimiento real de las empresas.
"
/>


<NosotrosContent />


<CTAFinal
title={
<>
Construyamos juntos
<br />
el futuro digital de tu empresa
</>
}
description="
Contanos tu desafío y analicemos cómo podemos ayudarte a transformarlo en una solución digital.
"
primaryLabel="Contactarnos"
primaryHref="/contacto"
secondaryLabel="Ver Casos de Éxito"
secondaryHref="/casos-de-exito"
/>


</>
)

}