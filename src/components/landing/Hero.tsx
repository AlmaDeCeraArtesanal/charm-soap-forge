import { Blob } from "./Blob";
import { CTAButton } from "./CTAButton";
import { IMG } from "./constants";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #FFFDE7 0%, #E8F6FD 50%, #D6F0FB 100%)" }}
    >
      <Blob color="rgba(255, 236, 100, 0.45)" size={420} className="-left-24 -top-24" />
      <Blob color="rgba(100, 195, 235, 0.40)" size={460} className="-right-24 bottom-0" />

      <div className="relative mx-auto max-w-3xl px-5 py-14 md:py-20 text-center">
        <div>
          <span
            className="inline-block animate-pulse rounded-full px-4 py-2 text-xs font-bold text-white"
            style={{ background: "var(--cta-gradient)", fontFamily: "var(--font-body)" }}
          >
            🔥 ¡50% de descuento por tiempo limitado!
          </span>
          <h1
            className="mt-5 text-4xl leading-tight md:text-[3.5rem] md:leading-[1.1]"
            style={{ fontFamily: "var(--font-display)", color: "var(--texto-dark)", fontWeight: 700 }}
          >
            En 21 días aprenderás a transformar tu creatividad en jabones que venden y un negocio que te da libertad 💰🧼
          </h1>
          <p
            className="mt-5 text-lg"
            style={{ fontFamily: "var(--font-body)", color: "var(--texto-mid)" }}
          >
            Un método paso a paso pensado para mujeres emprendedoras que quieren aprender desde casa sin experiencia previa.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3" style={{ fontFamily: "var(--font-body)" }}>
            {["✅ Acceso inmediato", "🎓 Certificado incluido", "🔒 Garantía 7 días", "👩‍🎓 +500 alumnas"].map((t) => (
              <span
                key={t}
                className="rounded-full bg-white/80 px-4 py-2 text-sm font-semibold"
                style={{ color: "var(--texto-dark)", boxShadow: "var(--card-shadow)" }}
              >
                {t}
              </span>
            ))}
          </div>
          <div className="mt-8">
            <CTAButton size="xl">¡Quiero empezar ahora!</CTAButton>
          </div>
          <p className="mt-3 text-sm" style={{ color: "var(--texto-mid)", fontFamily: "var(--font-body)" }}>
            Pago único · Sin mensualidades · Acceso de por vida
          </p>
        </div>
      </div>
    </section>
  );
}
