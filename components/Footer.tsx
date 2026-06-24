export default function Footer() {
  return (
    <footer className="bg-dc-dark border-t border-dc-border px-6 md:px-12 py-10 flex flex-wrap items-center justify-between gap-5">
      <div className="font-display text-lg font-bold flex items-center gap-2">
        <span className="text-dc-blue">●</span> Digital Culture
      </div>
      <p className="text-sm text-dc-muted">
        © {new Date().getFullYear()} Digital Culture. Todos los derechos
        reservados.
      </p>
      <div className="flex gap-6">
        <a href="#" className="text-sm text-dc-muted hover:text-dc-text">
          Privacidad
        </a>
        <a href="#" className="text-sm text-dc-muted hover:text-dc-text">
          Términos
        </a>
      </div>
    </footer>
  );
}
