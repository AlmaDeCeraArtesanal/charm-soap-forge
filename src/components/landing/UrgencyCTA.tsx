import { CTAButton } from "./CTAButton";
import { SectionReveal } from "./SectionReveal";

export function UrgencyCTA() {
  return (
    <section
      className="py-16"
      style={{
        background:
          "linear-gradient(135deg, rgba(244,127,177,0.15), rgba(185,143,224,0.15)), var(--bg-lavanda)",
        borderTop: "1px solid var(--rosa-pastel)",
        borderBottom: "1px solid var(--rosa-pastel)",
      }}
    >
      <SectionReveal className="mx-auto max-w-3xl px-5 text-center">
        <h2
          className="text-2xl md:text-3xl"
          style={{ fontFamily: "var(--font-display)", color: "var(--texto-dark)", fontWeight: 700 }}
        >
          ¿Estás lista para empezar tu negocio de jabones artesanales?
        </h2>
        <div className="mt-6">
          <CTAButton size="xl">COMIENZA AHORA — HAZ CLIC AQUÍ</CTAButton>
        </div>
        <p className="mt-4 text-sm" style={{ color: "var(--texto-mid)", fontFamily: "var(--font-body)" }}>
          Inscripción disponible hoy · Precio especial por tiempo limitado
        </p>
      </SectionReveal>
    </section>
  );
}
