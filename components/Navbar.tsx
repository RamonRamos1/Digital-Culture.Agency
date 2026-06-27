"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/soluciones", label: "Soluciones" },
  { href: "/casos-de-exito", label: "Casos de Éxito" },
  { href: "/nosotros", label: "Sobre Nosotros" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-dc-black/85 backdrop-blur-xl border-b border-dc-blue/10">
      <Link
        href="/"
        className="font-display text-xl font-bold flex items-center gap-2 text-dc-text"
      >
        <span className="w-2 h-2 rounded-full bg-dc-blue shadow-[0_0_12px_#0055FF]" />
        Digital Culture
      </Link>

      <ul className="hidden md:flex items-center gap-8">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={clsx(
                "text-sm font-medium transition-colors hover:text-dc-text",
                pathname === link.href ? "text-dc-text" : "text-dc-muted"
              )}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <Link
        href="/contacto"
        className="hidden md:inline-flex bg-dc-blue text-white px-5 py-2.5 rounded-md text-[13px] font-display font-semibold transition-colors hover:bg-dc-blueHover"
      >
        Solicitar Presupuesto
      </Link>

      {/* Mobile toggle */}
      <button
        className="md:hidden text-dc-text"
        onClick={() => setOpen(!open)}
        aria-label="Abrir menú"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-full left-0 right-0 bg-dc-black border-b border-dc-border md:hidden flex flex-col p-6 gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={clsx(
                "text-base font-medium",
                pathname === link.href ? "text-dc-text" : "text-dc-muted"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contacto"
            onClick={() => setOpen(false)}
            className="bg-dc-blue text-white px-5 py-3 rounded-md text-sm font-display font-semibold text-center mt-2"
          >
            Solicitar Presupuesto
          </Link>
        </div>
      )}
    </nav>
  );
}
