"use client";

import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";

import HeroStats from "./HeroStats";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 md:px-12 pt-28 md:pt-32 pb-14 md:pb-16">
      <div className="mx-auto max-w-5xl">

        <div className="eyebrow mb-7">
          <span className="eyebrow-dot animate-pulse" />
          Ecosistema de Transformación Digital
        </div>

        <h1 className="font-display font-bold tracking-tighter leading-[1.02] text-[clamp(44px,6vw,82px)]">
          Planteamos
          <br />

          <span className="bg-gradient-to-r from-dc-blue via-dc-cyan to-white bg-clip-text text-transparent">
            Soluciones
          </span>

          <br />

          a problemas reales
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-dc-muted">
          Creemos que para poder ayudarte realmente, primero necesitamos
          conocer tu negocio, entender sus fortalezas y detectar sus
          oportunidades de mejora. Recién entonces proponemos una solución
          tecnológica pensada específicamente para vos.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/contacto" className="btn-primary">
            Queremos conocerte
            <ArrowRight size={18} />
          </Link>

          <Link href="/casos-de-exito" className="btn-secondary">
            <PlayCircle size={18} />
            Ver Casos de Éxito
          </Link>
        </div>

        <HeroStats />

      </div>
    </section>
  );
}