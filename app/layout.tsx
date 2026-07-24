import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Digital Culture | Ecosistema de Transformación Digital",
  description:
    "Digitalizamos, automatizamos y escalamos negocios mediante tecnología, marketing y software a medida. Marketing Digital, Branding, Desarrollo Web, Apps, Sistemas a Medida, Automatizaciones y Mercado Libre.",

  keywords: [
    "transformación digital",
    "marketing digital",
    "desarrollo web",
    "CRM a medida",
    "ERP",
    "automatizaciones",
    "Mercado Libre",
    "branding",
  ],

  openGraph: {
    title: "Digital Culture | Ecosistema de Transformación Digital",
    description:
      "Construimos ecosistemas digitales. Automatizamos procesos. Escalamos negocios.",
    type: "website",
    locale: "es_AR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${spaceGrotesk.variable} ${inter.variable}`}
    >
      <body className="relative overflow-x-hidden bg-dc-dark text-dc-text antialiased">

        {/* Fondo global */}
        <div className="ambient-background" />

        {/* Contenido */}
        <div className="relative z-10">
          <Navbar />

          <main>{children}</main>

          <Footer />
        </div>

        <Analytics />
      </body>
    </html>
  );
}