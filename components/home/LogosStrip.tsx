const TECHS = [
  "React",
  "Node.js",
  "Next.js",
  "Python",
  "TypeScript",
  "AWS",
  "Firebase",
  "PostgreSQL",
  "Flutter",
  "TailwindCSS",
];

export default function LogosStrip() {
  return (
    <div className="px-6 md:px-12 py-10 border-t border-b border-dc-border bg-dc-dark">
      <div className="flex items-center gap-4 overflow-hidden">
        <span className="text-xs text-dc-muted tracking-wide uppercase whitespace-nowrap flex-shrink-0">
          Tecnologías que dominamos
        </span>
        <div className="flex gap-10 items-center flex-1 overflow-hidden flex-wrap">
          {TECHS.map((tech) => (
            <span
              key={tech}
              className="font-display text-[15px] font-semibold text-white/20 whitespace-nowrap"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
