"use client";

import { useState } from "react";
import { Check, ArrowRight, ArrowLeft, AlertCircle, Calendar } from "lucide-react";
import clsx from "clsx";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { getWhatsAppLink, getCalendlyLink } from "@/lib/links";
import {
  PROJECT_TYPES,
  FEATURE_OPTIONS,
  isComplexType,
  getEstimate,
} from "@/lib/calculator-data";

type Step = 0 | 1 | 2;

export default function CalculatorWidget() {
  const [step, setStep] = useState<Step>(0);
  const [projectType, setProjectType] = useState<string | null>(null);
  const [pages, setPages] = useState(5);
  const [features, setFeatures] = useState<string[]>([]);

  const complex = isComplexType(projectType);
  const totalSteps = complex ? 2 : 3;
  const resultStepIndex = complex ? 1 : 2;

  const toggleFeature = (id: string) => {
    setFeatures((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const restart = () => {
    setStep(0);
    setProjectType(null);
    setPages(5);
    setFeatures([]);
  };

  const goNextFromStep1 = () => {
    if (!projectType) return;
    setStep(1);
  };

  const goNextFromStep2 = () => {
    setStep((complex ? 1 : 2) as Step);
  };

  return (
    <div className="max-w-3xl mx-auto px-6 md:px-12 pb-28">
      {/* Progress bar */}
      <div className="flex gap-2 mb-12">
        {Array.from({ length: totalSteps }).map((_, i) => (
          <div
            key={i}
            className={clsx(
              "flex-1 h-[3px] rounded-full transition-colors",
              i <= step ? "bg-dc-blue" : "bg-dc-border"
            )}
          />
        ))}
      </div>

      {/* STEP 0: project type */}
      {step === 0 && (
        <div className="bg-dc-surface border border-dc-border rounded-2xl p-8 md:p-12">
          <div className="text-xs text-dc-cyan tracking-wide uppercase font-semibold mb-2">
            Paso 1 de {totalSteps}
          </div>
          <div className="font-display text-2xl font-bold tracking-tight mb-8">
            ¿Qué tipo de proyecto necesitás?
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {PROJECT_TYPES.map((t) => {
              const selected = projectType === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setProjectType(t.id)}
                  className={clsx(
                    "relative text-left border rounded-lg p-6 transition-all bg-dc-dark",
                    selected
                      ? "border-dc-blue bg-dc-blue/[0.08]"
                      : "border-dc-border hover:border-dc-blue/40 hover:bg-dc-card"
                  )}
                >
                  <div
                    className={clsx(
                      "absolute top-[18px] right-[18px] w-[18px] h-[18px] rounded-full border flex items-center justify-center",
                      selected ? "bg-dc-blue border-dc-blue" : "border-dc-border"
                    )}
                  >
                    {selected && <Check size={10} className="text-white" strokeWidth={3} />}
                  </div>
                  <div className="w-9 h-9 rounded-md bg-dc-blue/10 flex items-center justify-center mb-3.5">
                    <t.icon size={18} className="text-dc-blue" strokeWidth={1.5} />
                  </div>
                  <h4 className="font-display text-[15px] font-semibold mb-1">{t.name}</h4>
                  <p className="text-xs text-dc-muted">{t.desc}</p>
                </button>
              );
            })}
          </div>

          <div className="flex justify-between mt-10">
            <button
              disabled
              className="border border-dc-border text-dc-muted px-7 py-3 rounded-md font-display text-sm font-medium opacity-30 cursor-not-allowed"
            >
              Atrás
            </button>
            <button
              onClick={goNextFromStep1}
              disabled={!projectType}
              className={clsx(
                "flex items-center gap-2 px-8 py-3 rounded-md font-display text-sm font-semibold transition-colors",
                projectType
                  ? "bg-dc-blue text-white hover:bg-dc-blueHover"
                  : "bg-dc-blue/30 text-white/50 cursor-not-allowed"
              )}
            >
              Continuar <ArrowRight size={14} />
            </button>
          </div>
        </div>
      )}

      {/* STEP 1: details (only for non-complex types) */}
      {step === 1 && !complex && (
        <div className="bg-dc-surface border border-dc-border rounded-2xl p-8 md:p-12">
          <div className="text-xs text-dc-cyan tracking-wide uppercase font-semibold mb-2">
            Paso 2 de {totalSteps}
          </div>
          <div className="font-display text-2xl font-bold tracking-tight mb-8">
            Contanos un poco más
          </div>

          <div className="flex items-center gap-4 mb-8">
            <label className="text-sm text-dc-muted min-w-[140px]">
              Cantidad de páginas
            </label>
            <input
              type="range"
              min={1}
              max={20}
              step={1}
              value={pages}
              onChange={(e) => setPages(parseInt(e.target.value))}
              className="flex-1 accent-dc-blue"
            />
            <span className="font-display text-[15px] font-semibold text-dc-cyan min-w-[90px] text-right">
              {pages} {pages === 1 ? "página" : "páginas"}
            </span>
          </div>

          <div className="text-sm text-dc-muted mb-3.5 mt-8">
            ¿Necesitás alguna de estas funcionalidades?
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {FEATURE_OPTIONS.map((f) => {
              const selected = features.includes(f.id);
              return (
                <button
                  key={f.id}
                  onClick={() => toggleFeature(f.id)}
                  className={clsx(
                    "relative text-left border rounded-lg p-[18px] transition-all bg-dc-dark",
                    selected
                      ? "border-dc-blue bg-dc-blue/[0.08]"
                      : "border-dc-border hover:border-dc-blue/40"
                  )}
                >
                  <div
                    className={clsx(
                      "absolute top-4 right-4 w-[18px] h-[18px] rounded-full border flex items-center justify-center",
                      selected ? "bg-dc-blue border-dc-blue" : "border-dc-border"
                    )}
                  >
                    {selected && <Check size={10} className="text-white" strokeWidth={3} />}
                  </div>
                  <h4 className="font-display text-sm font-semibold">{f.name}</h4>
                </button>
              );
            })}
          </div>

          <div className="flex justify-between mt-10">
            <button
              onClick={() => setStep(0)}
              className="flex items-center gap-2 border border-dc-border text-dc-muted px-7 py-3 rounded-md font-display text-sm font-medium hover:border-dc-text hover:text-dc-text transition-colors"
            >
              <ArrowLeft size={14} /> Atrás
            </button>
            <button
              onClick={goNextFromStep2}
              className="flex items-center gap-2 bg-dc-blue text-white px-8 py-3 rounded-md font-display text-sm font-semibold hover:bg-dc-blueHover transition-colors"
            >
              Ver estimación <ArrowRight size={14} />
            </button>
          </div>
        </div>
      )}

      {/* RESULT STEP */}
      {step === resultStepIndex && projectType && (
        <ResultCard
          complex={complex}
          projectType={projectType}
          pages={pages}
          featuresCount={features.length}
          onRestart={restart}
        />
      )}
    </div>
  );
}

function ResultCard({
  complex,
  projectType,
  pages,
  featuresCount,
  onRestart,
}: {
  complex: boolean;
  projectType: string;
  pages: number;
  featuresCount: number;
  onRestart: () => void;
}) {
  const typeData = PROJECT_TYPES.find((t) => t.id === projectType)!;

  if (complex) {
    return (
      <div className="bg-dc-surface border border-dc-orange/30 bg-dc-orange/[0.03] rounded-2xl p-8 md:p-12 text-center">
        <div className="w-16 h-16 rounded-full bg-dc-orange/10 flex items-center justify-center mx-auto mb-6">
          <AlertCircle size={28} className="text-dc-orange" />
        </div>
        <div className="font-display text-2xl font-bold mb-3">
          Este proyecto requiere una reunión de descubrimiento
        </div>
        <p className="text-sm text-dc-muted max-w-md mx-auto mb-8 leading-relaxed">
          Los proyectos de tipo <strong className="text-dc-text">{typeData.name}</strong> dependen de tu operación específica.
          Para darte una estimación seria, necesitamos entender tu negocio en una llamada de 30 minutos, sin costo.
        </p>
        <div className="flex gap-3.5 justify-center flex-wrap">
          <a
            href={getWhatsAppLink(
              `Hola, quiero agendar una reunión de descubrimiento para mi proyecto de ${typeData.name}`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <WhatsAppIcon />
            Agendar por WhatsApp
          </a>
          <a href={getCalendlyLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-dc-border text-dc-text px-[26px] py-3.5 rounded-md text-sm font-medium font-display hover:border-dc-blue transition-colors">
            <Calendar size={16} />
            Reservar en Calendly
          </a>
        </div>
        <button
          onClick={onRestart}
          className="block mx-auto mt-6 text-[13px] text-dc-muted underline hover:text-dc-text"
        >
          Volver a empezar
        </button>
      </div>
    );
  }

  const [min, max] = getEstimate(projectType, pages, featuresCount);
  const fmt = (n: number) => n.toLocaleString("es-AR");

  return (
    <div className="bg-dc-surface border border-dc-border rounded-2xl p-8 md:p-12 text-center">
      <div className="w-16 h-16 rounded-full bg-dc-cyan/10 flex items-center justify-center mx-auto mb-6">
        <Check size={28} className="text-dc-cyan" strokeWidth={2} />
      </div>
      <div className="font-display text-2xl font-bold mb-3">
        Tu estimación está lista
      </div>
      <div className="font-display text-4xl md:text-5xl font-bold text-dc-cyan tracking-tight my-6">
        USD {fmt(min)} – {fmt(max)}
      </div>
      <p className="text-sm text-dc-muted max-w-md mx-auto mb-8 leading-relaxed">
        Este es un rango orientativo. El presupuesto final depende del alcance
        exacto que definamos juntos en la propuesta.
      </p>

      <div className="bg-dc-dark rounded-lg p-5 max-w-sm mx-auto text-left mb-8">
        <SummaryRow label="Tipo de proyecto" value={typeData.name} />
        <SummaryRow label="Páginas" value={String(pages)} />
        <SummaryRow
          label="Funcionalidades extra"
          value={featuresCount > 0 ? String(featuresCount) : "Ninguna"}
          last
        />
      </div>

      <div className="flex gap-3.5 justify-center flex-wrap">
        <a href="/contacto" className="btn-primary">
          Solicitar propuesta formal <ArrowRight size={14} />
        </a>
        <a
          href={getWhatsAppLink(
            `Hola, mi estimación fue de USD ${min}-${max} para un proyecto de ${typeData.name}. Quiero más info.`
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp"
        >
          <WhatsAppIcon size={16} />
          WhatsApp
        </a>
      </div>
      <button
        onClick={onRestart}
        className="block mx-auto mt-6 text-[13px] text-dc-muted underline hover:text-dc-text"
      >
        Volver a empezar
      </button>
    </div>
  );
}

function SummaryRow({
  label,
  value,
  last = false,
}: {
  label: string;
  value: string;
  last?: boolean;
}) {
  return (
    <div
      className={clsx(
        "flex justify-between text-[13px] py-2",
        !last && "border-b border-dc-border"
      )}
    >
      <span className="text-dc-muted">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}
