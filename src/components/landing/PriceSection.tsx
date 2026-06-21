import { CTAButton } from "./CTAButton";
import { SectionReveal } from "./SectionReveal";
import ofertaImg from "@/assets/oferta-completa.webp.asset.json";


export function PriceSection() {
  return (
    <section
      className="py-20"
      style={{ background: "linear-gradient(135deg, #FFF0F6 0%, #F3ECFF 100%)" }}
    >
      <SectionReveal className="mx-auto max-w-5xl px-5 text-center">
        <h2
          className="mb-10 text-3xl"
          style={{ fontFamily: "var(--font-display)", color: "var(--morado-medio)", fontWeight: 700 }}
        >
          Conoce a tu profesora y guía en este maravilloso recorrido 🎓
        </h2>
        <img
          src={ofertaImg.url}
          alt="Oferta completa del curso"
          loading="lazy"
          className="mx-auto w-full rounded-3xl"
          style={{ boxShadow: "var(--card-shadow)" }}
        />

        <div className="mt-8">
          <CTAButton size="xl">
            ¡COMIENZA AHORA!<br />
            HAZ CLIC AQUÍ
          </CTAButton>
        </div>
      </SectionReveal>
    </section>
  );
}
