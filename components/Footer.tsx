export default function Footer() {
  return (
    <footer className="bg-dc-dark border-t border-dc-border px-6 md:px-12 py-6 md:py-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 md:gap-5">

        <div className="font-display text-base md:text-lg font-bold flex items-center gap-2">
          <span className="text-dc-blue">●</span>
          Digital Culture
        </div>

        <p className="text-xs md:text-sm text-dc-muted text-center">
          © {new Date().getFullYear()} Digital Culture.
          Todos los derechos reservados.
        </p>

        <div className="flex items-center gap-5">
          <a
            href="#"
            className="text-xs md:text-sm text-dc-muted transition hover:text-dc-text"
          >
            Privacidad
          </a>

          <a
            href="#"
            className="text-xs md:text-sm text-dc-muted transition hover:text-dc-text"
          >
            Términos
          </a>
        </div>

      </div>
    </footer>
  );
}