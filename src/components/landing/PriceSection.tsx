import { CTAButton } from "./CTAButton";
import { IMG } from "./constants";
import { SectionReveal } from "./SectionReveal";

export function PriceSection() {
  return (
    <section
      className="py-20"
      style={{ background: "linear-gradient(135deg, #FFF0F6 0%, #F3ECFF 100%)" }}
    >
      <SectionReveal className="mx-auto max-w-5xl px-5 text-center">
        <img
          src={IMG.precio}
          alt="Precio del curso"
          loading="lazy"
          className="mx-auto w-full rounded-[20px]"
          style={{ boxShadow: "var(--card-shadow)" }}
        />
        <div
          className="mx-auto mt-8 max-w-md rounded-[24px] bg-white px-8 py-8"
          style={{ boxShadow: "var(--card-shadow)" }}
        >
          <p className="text-sm line-through" style={{ color: "var(--texto-mid)", fontFamily: "var(--font-body)" }}>
            Antes $100 USD
          </p>
          <p
            className="mt-1 text-5xl"
            style={{ fontFamily: "var(--font-display)", color: "var(--morado-medio)", fontWeight: 700 }}
          >
            $35 USD
          </p>
          <p className="mt-3 text-sm" style={{ color: "var(--texto-mid)", fontFamily: "var(--font-body)" }}>
            Pago único · Sin mensualidades · Acceso de por vida
          </p>
        </div>
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
