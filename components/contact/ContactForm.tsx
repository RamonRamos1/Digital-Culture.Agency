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
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [budget, setBudget] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitAttempted, setSubmitAttempted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!name.trim()) newErrors.name = "El nombre es requerido";
    if (!company.trim()) newErrors.company = "La empresa es requerida";
    if (!email.trim()) newErrors.email = "El email es requerido";
    else if (!/^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/.test(email))
      newErrors.email = "El email no es válido";
    if (!phone.trim()) newErrors.phone = "El teléfono es requerido";
    if (!service) newErrors.service = "Selecciona un servicio";
    if (!budget) newErrors.budget = "Selecciona un rango de presupuesto";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log({
        name,
        company,
        email,
        phone,
        service,
        budget,
        message,
      });
      // Aquí irá la lógica para enviar el formulario
    } else {
      setSubmitAttempted(true);
    }
  };

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
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Nombre" error={errors.name}>
            <input
              type="text"
              placeholder="Nombre y apellido"
              className="dc-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Field>
          <Field label="Empresa" error={errors.company}>
            <input
              type="text"
              placeholder="Nombre de tu negocio"
              className="dc-input"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              required
            />
          </Field>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Email" error={errors.email}>
            <input
              type="email"
              placeholder="tu@empresa.com; @gmail.com; @outlook.es; etc"
              className="dc-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Field>
          <Field label="Teléfono / WhatsApp" error={errors.phone}>
            <input
              type="tel"
              placeholder="Numero telefónio de la empresa o personal"
              className="dc-input"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </Field>
        </div>

        <Field label="¿Qué necesitás?" error={errors.service}>
          <select
            className="dc-select"
            value={service}
            onChange={(e) => setService(e.target.value)}
            required
          >
            <option value="">Selecciona una opción</option>
            {SERVICE_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Rango de presupuesto estimado" error={errors.budget}>
          <div className="flex gap-2 flex-wrap">
            {BUDGET_OPTIONS.map((opt) => (
              <button
                type="button"
                key={opt}
                onClick={() => setBudget(budget === opt ? null : opt)}
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
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Field>

        <button
          type="submit"
          className="btn-primary w-full justify-center mt-1"
          disabled={!name || !company || !email || !phone || !service || !budget}
        >
          Enviar mensaje
          <ArrowRight size={15} />
        </button>
        {submitAttempted && Object.keys(errors).length > 0 && (
          <p className="text-xs text-red-500 text-center font-medium">
            Faltan datos válidos en alguno de los campos señalados con *
          </p>
        )}
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
  error,
}: {
  label: string;
  children: React.ReactNode;
  error?: string;
}) {
  return (
    <div>
      <label className="block text-[13px] text-dc-muted mb-2 font-medium">
        {label}
        <span className="text-red-500">*</span>
      </label>
      {children}
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
}
