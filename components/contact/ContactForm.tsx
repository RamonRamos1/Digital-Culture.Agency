"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import clsx from "clsx";

const BUDGET_OPTIONS = [
  "Menos de USD 1.000",
  "USD 1.000 – 3.000",
  "USD 3.000 – 8.000",
  "Más de USD 8.000",
];

const SERVICE_OPTIONS = [
  "Marketing Digital",
  "Branding",
  "Desarrollo Web",
  "Sistema a Medida (CRM / ERP)",
  "Automatizaciones",
  "App Móvil",
  "Mercado Libre",
  "No estoy seguro / Quiero asesoramiento",
];

export default function ContactForm() {
  const [budget, setBudget] = useState<string | null>(null);

  return (
    <div className="bg-dc-surface border border-dc-border rounded-2xl p-8 md:p-11">
      <div className="mb-8">
        <h3 className="font-display text-xl font-bold mb-1.5 tracking-tight">
          Contanos sobre tu proyecto
        </h3>
        <p className="text-sm text-dc-muted">
          Completá el formulario y nuestro equipo te va a contactar con una
          propuesta inicial.
        </p>
      </div>

      <form
        className="flex flex-col gap-5"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Nombre">
            <input type="text" placeholder="Tu nombre" className="dc-input" />
          </Field>
          <Field label="Empresa">
            <input
              type="text"
              placeholder="Nombre de tu negocio"
              className="dc-input"
            />
          </Field>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Email">
            <input
              type="email"
              placeholder="tu@email.com"
              className="dc-input"
            />
          </Field>
          <Field label="Teléfono / WhatsApp">
            <input
              type="tel"
              placeholder="+54 9 11 0000 0000"
              className="dc-input"
            />
          </Field>
        </div>

        <Field label="¿Qué necesitás?">
          <select className="dc-select">
            {SERVICE_OPTIONS.map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </select>
        </Field>

        <Field label="Rango de presupuesto estimado">
          <div className="flex gap-2 flex-wrap">
            {BUDGET_OPTIONS.map((opt) => (
              <button
                type="button"
                key={opt}
                onClick={() => setBudget(opt)}
                className={clsx(
                  "px-4 py-2.5 rounded-full border text-xs font-medium transition-all",
                  budget === opt
                    ? "bg-dc-blue text-white border-dc-blue"
                    : "bg-dc-dark text-dc-muted border-dc-border hover:border-dc-blue"
                )}
              >
                {opt}
              </button>
            ))}
          </div>
        </Field>

        <Field label="Contanos más">
          <textarea
            placeholder="Describí brevemente tu proyecto o el problema que querés resolver..."
            className="dc-textarea"
          />
        </Field>

        <button type="submit" className="btn-primary w-full justify-center mt-1">
          Enviar mensaje
          <ArrowRight size={15} />
        </button>
        <p className="text-xs text-dc-muted text-center">
          Al enviar este formulario aceptás nuestra política de privacidad.
        </p>
      </form>
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-[13px] text-dc-muted mb-2 font-medium">
        {label}
      </label>
      {children}
    </div>
  );
}
