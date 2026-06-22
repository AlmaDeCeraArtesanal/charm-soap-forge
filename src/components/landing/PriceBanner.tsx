import { CTAButton } from "./CTAButton";
import { SectionReveal } from "./SectionReveal";
import ofertaImg from "@/assets/oferta-65-v2.jpg.asset.json";

export function PriceBanner() {
  return (
    <section
      className="py-16"
      style={{ background: "linear-gradient(135deg, #FFF0F6 0%, #F3ECFF 100%)" }}
    >
      <SectionReveal className="mx-auto max-w-5xl px-5 text-center">
        <span
          className="inline-block rounded-full px-4 py-2 text-xs font-bold text-white"
          style={{ background: "var(--cta-gradient)", fontFamily: "var(--font-body)" }}
        >
          🔥 PRECIO ESPECIAL
        </span>
        <img
          src={ofertaImg.url}
          alt="Hoy 65% de descuento - Valor total $100 USD por solo $35 USD"
          loading="lazy"
          className="mx-auto mt-6 w-full rounded-[20px]"
          style={{ boxShadow: "var(--card-shadow)" }}
        />
        <div className="mt-10">
          <CTAButton size="xl">
            ¡COMIENZA AHORA!<br />
            HAZ CLIC AQUÍ
          </CTAButton>
        </div>
      </SectionReveal>
    </section>
  );
}
