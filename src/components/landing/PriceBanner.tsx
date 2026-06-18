import { CTAButton } from "./CTAButton";
import { IMG } from "./constants";
import { SectionReveal } from "./SectionReveal";

export function PriceBanner() {
  return (
    <section
      className="py-16"
      style={{ background: "linear-gradient(135deg, #FFF0F6 0%, #F3ECFF 100%)" }}
    >
      <SectionReveal className="mx-auto max-w-5xl px-5 text-center">
        <img
          src={IMG.inscripciones}
          alt="Inscripciones abiertas"
          loading="lazy"
          className="mx-auto w-full rounded-[20px]"
          style={{ boxShadow: "var(--card-shadow)" }}
        />
        <div className="relative mt-8">
          <span
            className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full px-4 py-2 text-xs font-bold text-white"
            style={{ background: "var(--cta-gradient)", fontFamily: "var(--font-body)" }}
          >
            🔥 PRECIO ESPECIAL
          </span>
          <img
            src={IMG.oferta}
            alt="Oferta especial"
            loading="lazy"
            className="mx-auto w-full rounded-[20px]"
            style={{ boxShadow: "var(--card-shadow)" }}
          />
        </div>
        <div className="mt-10">
          <CTAButton size="xl">COMIENZA AHORA — HAZ CLIC AQUÍ</CTAButton>
        </div>
      </SectionReveal>
    </section>
  );
}
