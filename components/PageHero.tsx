interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  align?: "left" | "center";
}

export default function PageHero({
  eyebrow,
  title,
  description,
  align = "left",
}: PageHeroProps) {
  const isCenter = align === "center";
  return (
    <section
      className={`relative overflow-hidden px-6 md:px-12 pt-36 md:pt-40 pb-16 md:pb-20 ${
        isCenter ? "text-center" : ""
      }`}
    >
      <div className="absolute inset-0 bg-circuit pointer-events-none" />
      <div className="absolute w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(0,85,255,0.13)_0%,transparent_70%)] -top-48 -right-36 pointer-events-none" />

      <div
        className={`eyebrow relative z-10 ${isCenter ? "mx-auto" : ""}`}
      >
        <span className="eyebrow-dot" />
        {eyebrow}
      </div>

      <h1
        className={`relative z-10 font-display font-bold text-[clamp(34px,5.5vw,64px)] leading-[1.08] tracking-tighter mt-6 ${
          isCenter ? "max-w-2xl mx-auto" : "max-w-3xl"
        }`}
      >
        {title}
      </h1>

      <p
        className={`relative z-10 text-lg text-dc-muted mt-5 ${
          isCenter ? "max-w-lg mx-auto" : "max-w-xl"
        }`}
      >
        {description}
      </p>
    </section>
  );
}
