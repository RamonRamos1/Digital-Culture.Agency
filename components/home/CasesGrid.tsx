const CASES = [
  {
    badge: "Volta Energía",
    type: "Sistema a Medida",
    title: "CRM personalizado para obras de energía",
    desc: "La empresa tenía un problema de recibir multiples llamados a lo largo de la semana de clientes consultando por qué etapa iba su obra. La solución fue realizarle un dashboard en el que pueda colocar todos sus clientes e ir agregando obras en estado Realizado, Pendiente y En Curso. A partir de eso se genera un codigo de seguimiento para cada cliente que la empresa se lo da y cada uno de ellos puede ver en tiempo real en qué estado se encuentra su obra.",
    resultNum: "Disminución de gestión",
    resultTxt: "30hs semanales aprox, que ahora no le inflan las pelotas los clientes como vos",
  },
  {
    badge: "Blue Dragon",
    type: "Empresa de Módulos Mobiliarios",
    title: "Web Corporativa para Presentación de Empresa y Servicios",
    desc: "Es una empresa dedicada a la importación de Módulos, los cuáles pueden ser utilizados para vivienda, oficina o departamentos. Realizan toda la logística, instalación de servicios y todo lo necesario para dejártelo 100% Funcionando.",
    resultNum: "El resultado fue: NI IDEA, PREGUNTALE A ELLOS",
    resultTxt: "No sabían lo que necesitaban, igual que vos. Así que animate y preguntanos, sabemos que no estás vendiendo una poronga",
  },
  {
    badge: "Distribuidora Omega",
    type: "Calculadora de Márgenes",
    title: "Mercado Libre",
    desc: "Una distribuidora dedicada a la venta de productos varios mediante la plataforma de Mercado Libre, tenía un inconveniente con el cálculo de sus ganancias. Entre comisiones por venta fijo, porcentual, envíos, colecta y almacenamiento FULL, promociones, publicidad y los impuestos a pagar nunca podían saber bien cuánto realmente pagaban. Esta calculadora les pudo resolver el problema contemplando todos estos parámetros y algunos más propios o internos de la empresa.",
    resultNum: "Somos unas bestias",
    resultTxt: "Si querés la calculadora, pagála rata. Na mentira, aca tendria que haber un link para que puedan previsualizar la calcu",
  },
];

export default function CasesGrid() {
  return (
    <section className="bg-dc-dark px-6 md:px-12 py-24 md:py-28">
      <div className="section-eyebrow">Casos de Éxito</div>
      <h2 className="section-title">
        Resultados reales,
        <br />
        no promesas
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
        {CASES.map((c) => (
          <div
            key={c.title}
            className="bg-dc-surface border border-dc-border rounded-xl overflow-hidden transition-all hover:-translate-y-1 hover:border-dc-blue/30"
          >
            <div className="h-40 bg-gradient-to-br from-dc-card to-dc-blue/5 flex items-center justify-center border-b border-dc-border font-display text-4xl font-bold tracking-tighter text-white/[0.07]">
              {c.badge}
            </div>
            <div className="p-7">
              <div className="text-[11px] text-dc-cyan tracking-wide uppercase font-semibold mb-2.5">
                {c.type}
              </div>
              <h3 className="font-display text-lg font-bold mb-2.5 tracking-tight">
                {c.title}
              </h3>
              <p className="text-sm text-dc-muted leading-relaxed">{c.desc}</p>
              <div className="mt-5 p-3.5 bg-dc-blue/5 border border-dc-blue/10 rounded-md">
                <div className="font-display text-2xl font-bold text-dc-cyan">
                  {c.resultNum}
                </div>
                <div className="text-xs text-dc-muted mt-0.5">
                  {c.resultTxt}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
