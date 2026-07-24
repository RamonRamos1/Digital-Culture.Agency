import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  align?: "left" | "center";
  backHref?: string;
  backLabel?: string;
}

export default function PageHero({
  eyebrow,
  title,
  description,
  align = "left",
  backHref,
  backLabel = "Volver",
}: PageHeroProps) {
  const isCenter = align === "center";

  return (
    <section
      className={`
        relative
        overflow-hidden
        px-6
        md:px-12
        pt-32
        md:pt-36
        pb-12
        md:pb-16
        ${isCenter ? "text-center" : ""}
      `}
    >

      {backHref && (
        <div
          className={`
            absolute
            left-6
            md:left-12
            top-24
            md:top-28
            z-20
          `}
        >
          <Link
            href={backHref}
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/10
              bg-dc-black/60
              px-3
              py-2
              text-sm
              font-medium
              text-dc-cyan
              backdrop-blur-sm
              transition-colors
              hover:text-dc-blue
            "
          >
            <ArrowLeft size={16} />
            <span>{backLabel}</span>
          </Link>
        </div>
      )}

      <div
        className={`
          eyebrow
          relative
          z-10
          ${isCenter ? "mx-auto" : ""}
        `}
      >
        <span className="eyebrow-dot" />
        {eyebrow}
      </div>


      <h1
        className={`
          relative
          z-10
          mt-6
          font-display
          font-bold
          tracking-tighter
          text-[clamp(34px,5.5vw,64px)]
          leading-[1.08]
          ${
            isCenter
              ? "max-w-2xl mx-auto"
              : "max-w-3xl"
          }
        `}
      >
        {title}
      </h1>


      <p
        className={`
          relative
          z-10
          mt-5
          text-lg
          text-dc-muted
          ${
            isCenter
              ? "max-w-lg mx-auto"
              : "max-w-xl"
          }
        `}
      >
        {description}
      </p>

    </section>
  );
}