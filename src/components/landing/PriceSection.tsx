import { CTAButton } from "./CTAButton";
import { SectionReveal } from "./SectionReveal";
import mentoraImg from "@/assets/mentora.jpg.asset.json";

export function PriceSection() {
  return (
    <section
      className="py-20"
      style={{ background: "linear-gradient(135deg, #FFF0F6 0%, #F3ECFF 100%)" }}
    >
      <SectionReveal className="mx-auto max-w-5xl px-5 text-center">
        <div
          className="mx-auto mb-6 inline-block rounded-full px-5 py-2 text-sm uppercase tracking-wider"
          style={{
            background: "linear-gradient(135deg, var(--morado-medio), var(--rosa-fuerte, #E94FA1))",
            color: "#fff",
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            letterSpacing: "0.08em",
            boxShadow: "var(--card-shadow)",
          }}
        >
          Tu mentora
        </div>
        <h2
          className="mb-10 text-3xl"
          style={{ fontFamily: "var(--font-display)", color: "var(--morado-medio)", fontWeight: 700 }}
        >
          Conoce a tu profesora y guía en este maravilloso recorrido 🎓
        </h2>
        <img
          src={mentoraImg.url}
          alt="Karen Isabel, tu mentora en jabonería artesanal"
          loading="lazy"
          className="mx-auto w-full"
          style={{ boxShadow: "var(--card-shadow)", borderRadius: "16px" }}
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
