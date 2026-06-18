import { Blob } from "./Blob";
import { CTAButton } from "./CTAButton";
import { SectionReveal } from "./SectionReveal";

export function FinalCTA() {
  return (
    <section
      className="relative overflow-hidden py-24"
      style={{ background: "linear-gradient(135deg, #FFF0F6 0%, #EDE6FF 50%, #E6F6FC 100%)" }}
    >
      <Blob color="var(--rosa-pastel)" size={420} className="-left-20 -top-20" />
      <Blob color="var(--celeste-pastel)" size={460} className="-right-24 -bottom-24" />
      <SectionReveal className="relative mx-auto max-w-3xl px-5 text-center">
        <h2
          className="text-3xl md:text-5xl"
          style={{ fontFamily: "var(--font-display)", color: "var(--texto-dark)", fontWeight: 700 }}
        >
          ¿Estás lista para crear tu propio negocio de jabones artesanales?
        </h2>
        <p
          className="mt-5 text-lg"
          style={{ fontFamily: "var(--font-body)", color: "var(--texto-mid)" }}
        >
          Cientos de mujeres ya tomaron la decisión. Hoy puede ser el primer día de tu nueva historia.
        </p>
        <div className="mt-8">
          <CTAButton size="xl">COMIENZA AHORA — HAZ CLIC AQUÍ</CTAButton>
        </div>
        <p className="mt-5" style={{ fontFamily: "var(--font-body)" }}>
          <span className="text-sm line-through" style={{ color: "var(--texto-mid)" }}>$197 USD</span>{" "}
          <span className="ml-2 text-2xl font-bold" style={{ color: "var(--morado-medio)", fontFamily: "var(--font-display)" }}>
            $97 USD
          </span>
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3" style={{ fontFamily: "var(--font-body)" }}>
          {[
            "🔒 Pago seguro",
            "🎓 Certificado",
            "⏳ Acceso de por vida",
            "🛡️ Garantía 7 días",
          ].map((t) => (
            <span
              key={t}
              className="rounded-full bg-white/80 px-4 py-2 text-sm font-semibold"
              style={{ color: "var(--texto-dark)", boxShadow: "var(--card-shadow)" }}
            >
              {t}
            </span>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}
