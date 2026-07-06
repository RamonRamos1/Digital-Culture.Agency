"use client";

import { useState } from "react";
import { Check, ArrowRight, ArrowLeft, AlertCircle, Calendar } from "lucide-react";
import clsx from "clsx";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { getWhatsAppLink, getCalendlyLink } from "@/lib/links";
import { PROJECT_TYPES, isComplexType, getEstimate, getServiceOptions } from "@/lib/calculator-data";

type Step = 0 | 1 | 2;

function getQuantityLabel(projectType: string | null) {
  return projectType === "landing" ? "Cantidad de secciones" : "Cantidad de páginas";
}

function getQuantityUnit(projectType: string | null, value: number) {
  if (projectType === "landing") {
    return value === 1 ? "sección" : "secciones";
  }

  return value === 1 ? "página" : "páginas";
}

export default function CalculatorWidget() {
  const [step, setStep] = useState<Step>(0);
  const [projectType, setProjectType] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(5);
  const [websiteType, setWebsiteType] = useState<"landing" | "corporativa" | "ecommerce">("landing");
  const [commerceStage, setCommerceStage] = useState<string | null>(null);
  const [subservices, setSubservices] = useState<string[]>([]);
  const [isMultilingual, setIsMultilingual] = useState(false);
  const [languageCount, setLanguageCount] = useState(2);
  const [hasContactForm, setHasContactForm] = useState(false);
  const [hasDashboard, setHasDashboard] = useState(false);
  const [brandingType, setBrandingType] = useState<string | null>(null);
  const [postsCount, setPostsCount] = useState(1);
  const [reelsCount, setReelsCount] = useState(0);
  const [marketingType, setMarketingType] = useState<string | null>(null);

  const complex = isComplexType(projectType);
  const totalSteps = complex ? 2 : 3;
  const resultStepIndex = complex ? 1 : 2;

  const toggleSubservice = (id: string) => {
    setSubservices((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const restart = () => {
    setStep(0);
    setProjectType(null);
    setQuantity(5);
    setWebsiteType("landing");
    setCommerceStage(null);
    setSubservices([]);
    setIsMultilingual(false);
    setLanguageCount(2);
    setHasContactForm(false);
    setHasDashboard(false);
    setBrandingType(null);
    setPostsCount(1);
    setReelsCount(0);
    setMarketingType(null);
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
                  onClick={() => {
                    setProjectType(t.id);
                    setQuantity(5);
                    setWebsiteType("landing");
                    setCommerceStage(null);
                    setSubservices([]);
                    setIsMultilingual(false);
                    setLanguageCount(2);
                    setHasContactForm(false);
                    setHasDashboard(false);
                    setBrandingType(null);
                    setPostsCount(1);
                    setReelsCount(0);
                    setMarketingType(null);
                  }}
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

          {projectType === "branding" ? (
            <div className="space-y-4 mt-8">
              <div className="text-sm text-dc-muted mb-3.5">
                ¿Qué tipo de servicio buscás?
              </div>
              <div className="grid grid-cols-1 gap-3.5">
                {[
                  { id: "manual", label: "Manual de Marca" },
                  { id: "palette", label: "Paleta de Colores" },
                  { id: "logo", label: "Logo" },
                  { id: "social", label: "Gestión de Redes Sociales" },
                ].map((option) => {
                  const selected = brandingType === option.id;
                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => setBrandingType(option.id)}
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
                      <h4 className="font-display text-sm font-semibold">{option.label}</h4>
                    </button>
                  );
                })}
              </div>

              {brandingType === "social" && (
                <div className="rounded-xl border border-dc-border bg-dc-dark p-4 space-y-4">
                  <div className="flex items-center gap-4">
                    <label className="text-sm text-dc-muted min-w-[140px]">Posts</label>
                    <input
                      type="range"
                      min={1}
                      max={10}
                      step={1}
                      value={postsCount}
                      onChange={(e) => setPostsCount(parseInt(e.target.value))}
                      className="flex-1 accent-dc-blue"
                    />
                    <span className="font-display text-[15px] font-semibold text-dc-cyan min-w-[90px] text-right">
                      {postsCount} {postsCount === 1 ? "post" : "posts"}
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <label className="text-sm text-dc-muted min-w-[140px]">Reels</label>
                    <input
                      type="range"
                      min={0}
                      max={10}
                      step={1}
                      value={reelsCount}
                      onChange={(e) => setReelsCount(parseInt(e.target.value))}
                      className="flex-1 accent-dc-blue"
                    />
                    <span className="font-display text-[15px] font-semibold text-dc-cyan min-w-[90px] text-right">
                      {reelsCount} {reelsCount === 1 ? "reel" : "reels"}
                    </span>
                  </div>
                </div>
              )}
            </div>
          ) : projectType === "marketing" ? (
            <div className="space-y-4 mt-8">
              <div className="text-sm text-dc-muted mb-3.5">
                Campañas
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {[
                  { id: "meta", label: "Meta Ads (FB e IG)" },
                  { id: "tiktok", label: "TikTok Ads" },
                  { id: "google", label: "Google Ads" },
                  { id: "mercado", label: "Mercado Ads" },
                ].map((option) => {
                  const selected = marketingType === option.id;
                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => setMarketingType(option.id)}
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
                      <h4 className="font-display text-sm font-semibold">{option.label}</h4>
                    </button>
                  );
                })}
              </div>
            </div>
          ) : projectType === "webs" ? (
            <div className="space-y-4 mt-8">
              <div className="text-sm text-dc-muted mb-3.5">
                Elegí el tipo de proyecto
              </div>
              <div className="grid grid-cols-1 gap-3.5">
                {[
                  { id: "landing", label: "Landing Page" },
                  { id: "corporativa", label: "Web Corporativa" },
                  { id: "ecommerce", label: "E-COMMERCE" },
                ].map((option) => {
                  const selected = websiteType === option.id;
                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => setWebsiteType(option.id as "landing" | "corporativa" | "ecommerce")}
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
                      <h4 className="font-display text-sm font-semibold">{option.label}</h4>
                    </button>
                  );
                })}
              </div>
            </div>
          ) : projectType === "ecommerce" ? (
            <div className="space-y-4 mt-8">
              <div className="text-sm text-dc-muted mb-3.5">
                ¿En qué etapa se encuentra tu comercio actualmente?
              </div>
              <div className="grid grid-cols-1 gap-3.5">
                {[
                  { id: "lanzamiento", label: "Lanzamiento de cuenta" },
                  { id: "escalar", label: "Escalar mi negocio" },
                  { id: "asesoria", label: "Asesoría Contable/Financiera" },
                  { id: "sociedad", label: "Aperturar mi propia Sociedad" },
                ].map((option) => {
                  const selected = commerceStage === option.id;
                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => setCommerceStage(option.id)}
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
                      <h4 className="font-display text-sm font-semibold">{option.label}</h4>
                    </button>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-4 mb-8">
              <label className="text-sm text-dc-muted min-w-[140px]">
                {getQuantityLabel(projectType)}
              </label>
              <input
                type="range"
                min={1}
                max={20}
                step={1}
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                className="flex-1 accent-dc-blue"
              />
              <span className="font-display text-[15px] font-semibold text-dc-cyan min-w-[90px] text-right">
                {quantity} {getQuantityUnit(projectType, quantity)}
              </span>
            </div>
          )}

          {projectType !== "webs" && projectType !== "ecommerce" && (
            projectType === "landing" || projectType === "web" ? (
              <div className="space-y-4 mt-8">
                <div className="rounded-xl border border-dc-border bg-dc-dark p-4">
                  <button
                    type="button"
                    onClick={() => setIsMultilingual((prev) => !prev)}
                    className="flex w-full items-center justify-between gap-3 text-left"
                  >
                    <div>
                      <div className="font-display text-sm font-semibold">¿Querés que sea multilingüe?</div>
                      <div className="text-xs text-dc-muted mt-1">Sumá 100 USD por cada idioma adicional.</div>
                    </div>
                    <div
                      className={clsx(
                        "flex h-6 w-11 items-center rounded-full px-1 transition-colors",
                        isMultilingual ? "bg-dc-blue" : "bg-dc-border"
                      )}
                    >
                      <div className={clsx("h-4 w-4 rounded-full bg-white transition-transform", isMultilingual ? "translate-x-5" : "translate-x-0")} />
                    </div>
                  </button>

                  {isMultilingual && (
                    <div className="mt-4 flex items-center gap-4">
                      <label className="text-sm text-dc-muted min-w-[140px]">Cantidad de idiomas</label>
                      <input
                        type="range"
                        min={2}
                        max={5}
                        step={1}
                        value={languageCount}
                        onChange={(e) => setLanguageCount(parseInt(e.target.value))}
                        className="flex-1 accent-dc-blue"
                      />
                      <span className="font-display text-[15px] font-semibold text-dc-cyan min-w-[90px] text-right">
                        {languageCount} {languageCount === 1 ? "idioma" : "idiomas"}
                      </span>
                    </div>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => setHasContactForm((prev) => !prev)}
                  className={clsx(
                    "flex w-full items-center justify-between rounded-xl border p-4 text-left transition-all",
                    hasContactForm
                      ? "border-dc-blue bg-dc-blue/[0.08]"
                      : "border-dc-border bg-dc-dark hover:border-dc-blue/40"
                  )}
                >
                  <div>
                    <div className="font-display text-sm font-semibold">Formulario de contacto</div>
                    <div className="text-xs text-dc-muted mt-1">Agregá un formulario por 50 USD.</div>
                  </div>
                  <div
                    className={clsx(
                      "flex h-6 w-11 items-center rounded-full px-1 transition-colors",
                      hasContactForm ? "bg-dc-blue" : "bg-dc-border"
                    )}
                  >
                    <div className={clsx("h-4 w-4 rounded-full bg-white transition-transform", hasContactForm ? "translate-x-5" : "translate-x-0")} />
                  </div>
                </button>

                {projectType === "web" && (
                  <button
                    type="button"
                    onClick={() => setHasDashboard((prev) => !prev)}
                    className={clsx(
                      "flex w-full items-center justify-between rounded-xl border p-4 text-left transition-all",
                      hasDashboard
                        ? "border-dc-blue bg-dc-blue/[0.08]"
                        : "border-dc-border bg-dc-dark hover:border-dc-blue/40"
                    )}
                  >
                    <div>
                      <div className="font-display text-sm font-semibold">Dashboard de métricas</div>
                      <div className="text-xs text-dc-muted mt-1">Incluye analítica de tu web por 150 USD.</div>
                    </div>
                    <div
                      className={clsx(
                        "flex h-6 w-11 items-center rounded-full px-1 transition-colors",
                        hasDashboard ? "bg-dc-blue" : "bg-dc-border"
                      )}
                    >
                      <div className={clsx("h-4 w-4 rounded-full bg-white transition-transform", hasDashboard ? "translate-x-5" : "translate-x-0")} />
                    </div>
                  </button>
                )}
              </div>
            ) : (
              <>
                <div className="text-sm text-dc-muted mb-3.5 mt-8">
                  ¿Querés sumar alguno de estos subservicios?
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {getServiceOptions(projectType).map((item) => {
                    const selected = subservices.includes(item.id);
                    return (
                      <button
                        key={item.id}
                        onClick={() => toggleSubservice(item.id)}
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
                        <h4 className="font-display text-sm font-semibold">{item.name}</h4>
                      </button>
                    );
                  })}
                </div>
              </>
            )
          )}

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
          quantity={quantity}
          subservicesCount={subservices.length}
          isMultilingual={isMultilingual}
          languageCount={languageCount}
          hasContactForm={hasContactForm}
          hasDashboard={hasDashboard}
          websiteType={websiteType}
          commerceStage={commerceStage}
          brandingType={brandingType}
          postsCount={postsCount}
          reelsCount={reelsCount}
          marketingType={marketingType}
          onRestart={restart}
        />
      )}
    </div>
  );
}

function ResultCard({
  complex,
  projectType,
  quantity,
  subservicesCount,
  isMultilingual,
  languageCount,
  hasContactForm,
  hasDashboard,
  websiteType,
  commerceStage,
  brandingType,
  postsCount,
  reelsCount,
  marketingType,
  onRestart,
}: {
  complex: boolean;
  projectType: string;
  quantity: number;
  subservicesCount: number;
  isMultilingual: boolean;
  languageCount: number;
  hasContactForm: boolean;
  hasDashboard: boolean;
  websiteType: "landing" | "corporativa" | "ecommerce";
  commerceStage: string | null;
  brandingType: string | null;
  postsCount: number;
  reelsCount: number;
  marketingType: string | null;
  onRestart: () => void;
}) {
  const typeData = PROJECT_TYPES.find((t) => t.id === projectType)!;

  if (complex) {
    if (projectType === "sistema" || projectType === "app") {
      const title = projectType === "sistema" ? "Hablemos de tu sistema a medida" : "Hablemos de tu app móvil";
      const message = projectType === "sistema"
        ? "Hola, quiero presupuestar un sistema a medida."
        : "Hola, quiero presupuestar una app móvil.";

      return (
        <div className="bg-dc-surface border border-dc-border rounded-2xl p-8 md:p-12 text-center">
          <div className="w-16 h-16 rounded-full bg-dc-cyan/10 flex items-center justify-center mx-auto mb-6">
            <Check size={28} className="text-dc-cyan" strokeWidth={2} />
          </div>
          <div className="font-display text-2xl font-bold mb-3">
            {title}
          </div>
          <p className="text-sm text-dc-muted max-w-md mx-auto mb-8 leading-relaxed">
            Elegí la opción que prefieras para avanzar con tu proyecto.
          </p>
          <div className="flex gap-3.5 justify-center flex-wrap">
            <a
              href={getWhatsAppLink(message)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <WhatsAppIcon size={16} />
              Presupuestar
            </a>
            <a
              href={getCalendlyLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-dc-border text-dc-text px-[26px] py-3.5 rounded-md text-sm font-medium font-display hover:border-dc-blue transition-colors"
            >
              <Calendar size={16} />
              Solicitar Reunión
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

  const [min, max] = getEstimate(projectType, quantity, subservicesCount, {
    multilingual: isMultilingual,
    languageCount,
    contactForm: hasContactForm,
    dashboard: hasDashboard,
    websiteType,
    brandingType: brandingType ?? undefined,
    posts: postsCount,
    reels: reelsCount,
    marketingType: marketingType ?? undefined,
  });
  const fmt = (n: number) => n.toLocaleString("es-AR");
  const quantityLabel = projectType === "landing" ? "Secciones" : "Páginas";

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
        {projectType === "marketing" ? (
          <SummaryRow label="Campaña" value={marketingType ? { meta: "Meta Ads", tiktok: "TikTok Ads", google: "Google Ads", mercado: "Mercado Ads" }[marketingType] ?? "No definida" : "No definida"} />
        ) : projectType === "webs" ? (
          <SummaryRow label="Paquete" value={websiteType === "landing" ? "Landing Page" : websiteType === "corporativa" ? "Web Corporativa" : "Ecommerce"} />
        ) : projectType === "ecommerce" ? (
          <SummaryRow label="Etapa" value={commerceStage ? { lanzamiento: "Lanzamiento de cuenta", escalar: "Escalar mi negocio", asesoria: "Asesoría Contable/Financiera", sociedad: "Aperturar mi propia Sociedad" }[commerceStage] ?? "No definida" : "No definida"} />
        ) : (
          <SummaryRow label={quantityLabel} value={String(quantity)} />
        )}
        {projectType === "branding" ? (
          <>
            <SummaryRow
              label="Servicio"
              value={brandingType === "manual" ? "Manual de Marca" : brandingType === "palette" ? "Paleta de Colores" : brandingType === "logo" ? "Logo" : brandingType === "social" ? "Gestión de Redes Sociales" : "No definido"}
            />
            {brandingType === "social" && (
              <>
                <SummaryRow label="Posts" value={String(postsCount)} />
                <SummaryRow label="Reels" value={String(reelsCount)} last />
              </>
            )}
            {brandingType !== "social" && <SummaryRow label="Detalle" value="Servicio único" last />}
          </>
        ) : projectType === "landing" || projectType === "web" ? (
          <>
            <SummaryRow
              label="Multilenguaje"
              value={isMultilingual ? `${languageCount} ${languageCount === 1 ? "idioma" : "idiomas"}` : "No"}
            />
            <SummaryRow
              label="Formulario"
              value={hasContactForm ? "Sí" : "No"}
            />
            {projectType === "web" && (
              <SummaryRow
                label="Dashboard"
                value={hasDashboard ? "Sí" : "No"}
                last
              />
            )}
            {projectType === "landing" && (
              <SummaryRow
                label="Formulario"
                value={hasContactForm ? "Sí" : "No"}
                last
              />
            )}
          </>
        ) : (
          <SummaryRow
            label="Subservicios"
            value={subservicesCount > 0 ? String(subservicesCount) : "Ninguno"}
            last
          />
        )}
      </div>

      <div className="flex gap-3.5 justify-center flex-wrap">
        {projectType === "marketing" ? (
          <>
            <a
              href={getWhatsAppLink(
                `Hola, quiero presupuestar una campaña de ${marketingType ? { meta: "Meta Ads", tiktok: "TikTok Ads", google: "Google Ads", mercado: "Mercado Ads" }[marketingType] : "Marketing Digital"}.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <WhatsAppIcon size={16} />
              Presupuestar
            </a>
            <a href={getCalendlyLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-dc-border text-dc-text px-[26px] py-3.5 rounded-md text-sm font-medium font-display hover:border-dc-blue transition-colors">
              <Calendar size={16} />
              Solicitar consulta
            </a>
          </>
        ) : (
          <>
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
          </>
        )}
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
