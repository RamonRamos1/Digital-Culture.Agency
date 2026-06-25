const TECH_LOGOS = [
  {
    name: "JavaScript",
    svg: (
      <svg viewBox="0 0 64 64" className="h-10 w-10" aria-hidden="true">
        <rect width="64" height="64" rx="12" fill="#F7DF1E" />
        <text x="32" y="44" textAnchor="middle" fontSize="28" fontFamily="Inter, sans-serif" fill="#000">JS</text>
      </svg>
    ),
  },
  {
    name: "Python",
    svg: (
      <svg viewBox="0 0 64 64" className="h-10 w-10" aria-hidden="true">
        <rect width="64" height="64" rx="14" fill="#306998" />
        <path d="M20 16h24v16c0 8-8 8-8 8h-8v-8h12V16H20Z" fill="#FFE873" />
        <path d="M44 48H20V32c0-8 8-8 8-8h8v8H24v16h20V48Z" fill="#FFE873" />
      </svg>
    ),
  },
  {
    name: "TailwindCSS",
    svg: (
      <svg viewBox="0 0 64 64" className="h-10 w-10" aria-hidden="true">
        <rect width="64" height="64" rx="14" fill="#38B2AC" />
        <path d="M16 40c8 0 12-6 20-6 4 0 8 2 12 6v8c-8 0-12-6-20-6-4 0-8 2-12 6v-8Z" fill="#0EA5E9" />
      </svg>
    ),
  },
  {
    name: "Docker",
    svg: (
      <svg viewBox="0 0 64 64" className="h-10 w-10" aria-hidden="true">
        <rect width="64" height="64" rx="14" fill="#2496ED" />
        <path d="M16 36h32v10H16z" fill="#2AA1E0" />
        <path d="M24 24h8v6h-8zm12 0h8v6h-8zm-12-8h8v6h-8z" fill="#fff" />
      </svg>
    ),
  },
  {
    name: "React",
    svg: (
      <svg viewBox="0 0 64 64" className="h-10 w-10" aria-hidden="true">
        <circle cx="32" cy="32" r="8" fill="#61DAFB" />
        <g stroke="#61DAFB" strokeWidth="4" fill="none">
          <ellipse cx="32" cy="32" rx="20" ry="8" />
          <ellipse cx="32" cy="32" rx="8" ry="20" transform="rotate(60 32 32)" />
          <ellipse cx="32" cy="32" rx="8" ry="20" transform="rotate(120 32 32)" />
        </g>
      </svg>
    ),
  },
  {
    name: "Node.js",
    svg: (
      <svg viewBox="0 0 64 64" className="h-10 w-10" aria-hidden="true">
        <rect width="64" height="64" rx="14" fill="#3C873A" />
        <path d="M32 18l14 8v12l-14 8-14-8V26l14-8Z" fill="#fff" />
      </svg>
    ),
  },
  {
    name: "Next.js",
    svg: (
      <svg viewBox="0 0 64 64" className="h-10 w-10" aria-hidden="true">
        <rect width="64" height="64" rx="14" fill="#000" />
        <text x="32" y="42" textAnchor="middle" fontSize="26" fontFamily="Inter, sans-serif" fill="#fff">N</text>
      </svg>
    ),
  },
  {
    name: "PostgreSQL",
    svg: (
      <svg viewBox="0 0 64 64" className="h-10 w-10" aria-hidden="true">
        <rect width="64" height="64" rx="14" fill="#336791" />
        <path d="M20 20c0 8 8 16 12 16s12-8 12-16-8-12-12-12-12 4-12 12Z" fill="#fff" />
      </svg>
    ),
  },
  {
    name: "MySQL",
    svg: (
      <svg viewBox="0 0 64 64" className="h-10 w-10" aria-hidden="true">
        <rect width="64" height="64" rx="14" fill="#00758F" />
        <path d="M32 16c10 0 16 6 16 16s-8 16-16 16-16-6-16-16 6-16 16-16Z" fill="#fff" />
      </svg>
    ),
  },
  {
    name: "AWS",
    svg: (
      <svg viewBox="0 0 64 64" className="h-10 w-10" aria-hidden="true">
        <rect width="64" height="64" rx="14" fill="#FF9900" />
        <path d="M16 42c6-4 12-8 20-8s14 4 20 8" stroke="#fff" strokeWidth="4" fill="none" />
        <path d="M16 30c6-4 12-8 20-8s14 4 20 8" stroke="#fff" strokeWidth="4" fill="none" />
      </svg>
    ),
  },
];

export default function LogosStrip() {
  return (
    <div className="px-6 md:px-12 py-10 border-t border-b border-dc-border bg-dc-dark">
      <div className="flex items-center gap-4 overflow-hidden">
        <span className="text-xs text-dc-muted tracking-wide uppercase whitespace-nowrap flex-shrink-0">
          Tecnologías que dominamos
        </span>
        <div className="flex gap-4 flex-wrap items-center flex-1 overflow-hidden">
          {TECH_LOGOS.map((tech) => (
            <span
              key={tech.name}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/20"
              aria-label={tech.name}
              title={tech.name}
            >
              {tech.svg}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
