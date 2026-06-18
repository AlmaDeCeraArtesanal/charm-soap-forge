import { SectionReveal } from "./SectionReveal";

export function NarrativeIntro() {
  return (
    <section id="curso" className="py-20 md:py-24" style={{ background: "var(--bg-lavanda)" }}>
      <SectionReveal className="mx-auto max-w-3xl px-5 text-center">
        <span
          className="inline-block rounded-full px-4 py-2 text-xs font-bold"
          style={{ background: "var(--morado-pastel)", color: "var(--texto-dark)", fontFamily: "var(--font-body)" }}
        >
          🧼 Tu transformación empieza aquí
        </span>
        <h2
          className="mt-5 text-3xl md:text-[2.4rem]"
          style={{ fontFamily: "var(--font-display)", color: "var(--texto-dark)", fontWeight: 700 }}
        >
          Crea, Emprende y Transforma tu Vida con la Jabonería Artesanal
        </h2>
        <p
          className="mx-auto mt-5 max-w-[700px] text-lg"
          style={{ fontFamily: "var(--font-body)", color: "var(--texto-mid)" }}
        >
          No necesitas experiencia previa ni grandes inversiones. Solo las ganas de aprender, crear y construir algo tuyo desde casa.
        </p>
        <div
          className="mx-auto mt-8 h-[3px] w-40 rounded-full"
          style={{ background: "var(--cta-gradient)" }}
        />
      </SectionReveal>
    </section>
  );
}
