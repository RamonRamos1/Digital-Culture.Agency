# Digital Culture — Sitio Corporativo

Sitio web corporativo premium para Digital Culture, construido como ecosistema
de transformación digital (Marketing, Branding, Desarrollo Web, Apps, Sistemas
a Medida, Automatizaciones y Mercado Libre).

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **TailwindCSS** para estilos
- **Framer Motion** disponible para animaciones (instalado, no usado por defecto en todas las secciones — agregar donde se necesite)
- **lucide-react** para iconografía
- Fuentes: **Space Grotesk** (display) + **Inter** (body), vía `next/font/google`

## Estructura del proyecto

```
app/
  layout.tsx              → Layout raíz (fuentes, metadata, Navbar/Footer/Analytics)
  globals.css              → Estilos globales + clases reutilizables (@layer components)
  page.tsx                  → Home
  servicios/page.tsx        → Servicios (7 bloques: Marketing, Branding, Web, Sistemas, Automatizaciones, Apps, Mercado Libre)
  soluciones/page.tsx       → Soluciones (navegación por problema → servicio)
  calculadora/page.tsx      → Calculadora interactiva de presupuesto
  contacto/page.tsx         → Contacto (dos columnas: info + formulario)
  nosotros/page.tsx         → Sobre Nosotros (quiénes somos, visión, metodología, tech, equipo, proceso)
  casos-de-exito/page.tsx   → Casos de éxito (página completa)

components/
  Navbar.tsx, Footer.tsx, PageHero.tsx, CTAFinal.tsx, WhatsAppIcon.tsx, Analytics.tsx
  home/        → Subcomponentes exclusivos del Home
  services/    → Subcomponentes de Servicios
  solutions/   → Subcomponentes de Soluciones
  calculator/  → Lógica y UI de la calculadora
  contact/     → Formulario de contacto + embed de Jotform

lib/
  services-data.tsx    → Data de los 7 servicios (usada por /servicios)
  solutions-data.tsx   → Data de problema → solución (usada por /soluciones)
  calculator-data.ts   → Tipos de proyecto, rangos de precio y lógica de estimación
  links.ts             → Helpers centralizados para WhatsApp, Calendly y email
```

## Instalación

Requiere **Node.js 18.17+** (recomendado 20+).

```bash
npm install
```

## Variables de entorno

Copiá `.env.example` como `.env.local` y completá tus valores:

```bash
cp .env.example .env.local
```

| Variable | Descripción |
|---|---|
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Número en formato internacional sin signos (ej: `5491100000000`) |
| `NEXT_PUBLIC_JOTFORM_ID` | ID del formulario de Jotform (para `JotformEmbed.tsx`) |
| `NEXT_PUBLIC_CALENDLY_URL` | URL completa de tu Calendly |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 Measurement ID (`G-XXXXXXXXXX`) |
| `NEXT_PUBLIC_GTM_ID` | Google Tag Manager Container ID (`GTM-XXXXXXX`) |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Email de contacto mostrado en el sitio |

Si no completás alguna, el sitio sigue funcionando con valores de fallback
seguros (no rompe el build).

## Desarrollo local

```bash
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

## Build de producción

```bash
npm run build
npm run start
```

## Deploy

### Opción A — Vercel (recomendado, cero configuración)

1. Subí este proyecto a un repositorio de GitHub/GitLab/Bitbucket.
2. Entrá a [vercel.com/new](https://vercel.com/new) e importá el repositorio.
3. Vercel detecta Next.js automáticamente (el `vercel.json` incluido es solo
   explícito, no es obligatorio).
4. Agregá las variables de entorno del `.env.example` en
   **Project Settings → Environment Variables**.
5. Deploy. Cada push a `main` genera un deploy de producción automático.

CLI alternativa:

```bash
npm i -g vercel
vercel login
vercel --prod
```

### Opción B — Netlify

1. `npm install -g netlify-cli`
2. `netlify init`
3. Build command: `npm run build` — Publish directory: `.next`
   (Netlify usa el plugin oficial `@netlify/plugin-nextjs`, se instala solo
   si usás `netlify init` con detección automática).
4. Agregá las variables de entorno en **Site settings → Environment variables**.
5. `netlify deploy --prod`

### Opción C — Servidor propio / VPS (Docker o Node directo)

```bash
npm run build
npm run start -- -p 3000
```

Usá un proceso manager como **pm2** o un contenedor Docker con
`node:20-alpine` y un reverse proxy (nginx) delante para HTTPS.

## Pendientes para producción real

Estos puntos quedaron como placeholders funcionales — el sitio compila y se
ve completo, pero antes de un lanzamiento real conviene resolver:

- **Formulario de contacto**: `ContactForm.tsx` no envía datos a ningún
  backend todavía. Opciones: conectar a un endpoint propio
  (`/app/api/contact/route.ts`), a Jotform (ya hay un componente
  `JotformEmbed.tsx` listo, solo falta el ID), o a un servicio como
  Resend/Formspree.
- **Imágenes reales**: los "casos de éxito" y "equipo" usan bloques con
  iniciales/badges en lugar de fotos. Reemplazar por imágenes reales cuando
  estén disponibles (usar `next/image` para optimización automática).
- **Contenido de casos de éxito**: los datos en `app/casos-de-exito/page.tsx`
  y `components/home/CasesGrid.tsx` son ilustrativos. Reemplazar por
  proyectos reales con permiso del cliente.
- **SEO avanzado**: agregar `sitemap.xml` y `robots.txt` (Next.js soporta
  generarlos vía `app/sitemap.ts` y `app/robots.ts`).
