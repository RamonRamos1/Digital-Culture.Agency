/**
 * Para producción: reemplazá YOUR_JOTFORM_ID por el ID real de tu formulario
 * de Jotform y descomentá este componente en app/contacto/page.tsx en lugar
 * de <ContactForm />.
 *
 * Cómo obtener el ID: en Jotform, Publish > Embed > Iframe, copiá la URL
 * que tiene el formato https://form.jotform.com/XXXXXXXXXXXXX
 */
export default function JotformEmbed({
  formId = process.env.NEXT_PUBLIC_JOTFORM_ID || "YOUR_JOTFORM_ID",
}: {
  formId?: string;
}) {
  return (
    <div className="bg-dc-surface border border-dc-border rounded-2xl overflow-hidden">
      <iframe
        title="Formulario de contacto"
        src={`https://form.jotform.com/${formId}`}
        className="w-full min-h-[640px] border-0"
        loading="lazy"
      />
    </div>
  );
}
