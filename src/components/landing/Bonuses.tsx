import { CTAButton } from "./CTAButton";
import { IMG } from "./constants";
import { SectionReveal } from "./SectionReveal";

const bonos = [
  { n: 1, src: IMG.bono1 },
  { n: 2, src: IMG.bono2 },
  { n: 3, src: IMG.bono3 },
  { n: 4, src: IMG.bono4 },
];

export function Bonuses() {
  return (
    <section id="bonos" className="py-20 md:py-24" style={{ background: "var(--bg-lavanda)" }}>
      <SectionReveal className="mx-auto max-w-7xl px-5 text-center">
        <span
          className="inline-block animate-pulse rounded-full px-4 py-2 text-xs font-bold text-white"
          style={{ background: "var(--cta-gradient)", fontFamily: "var(--font-body)" }}
        >
          🎁 BONUS EXCLUSIVOS — Solo por tiempo limitado
        </span>
        <h2
          className="mt-5 text-3xl md:text-4xl"
          style={{ fontFamily: "var(--font-display)", color: "var(--texto-dark)", fontWeight: 700 }}
        >
          ¡Únete hoy y lleva regalos exclusivos!
        </h2>
        <p
          className="mt-3 text-lg"
          style={{ fontFamily: "var(--font-body)", color: "var(--texto-mid)" }}
        >
          Al inscribirte hoy recibirás estos bonos completamente GRATIS:
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {bonos.map(({ n, src }) => (
            <div
              key={n}
              className="relative overflow-hidden rounded-[20px] bg-white"
              style={{ boxShadow: "var(--card-shadow)" }}
            >
              <span
                className="absolute left-4 top-4 z-10 rounded-full px-3 py-1 text-xs font-bold text-white"
                style={{ background: "var(--rosa-medio)", fontFamily: "var(--font-body)" }}
              >
                BONO #{n}
              </span>
              <img src={src} alt={`Bono ${n}`} loading="lazy" className="w-full" />
            </div>
          ))}
        </div>

        <div
          className="relative mt-6 overflow-hidden rounded-[20px] bg-white"
          style={{ boxShadow: "var(--card-shadow)" }}
        >
          <span
            className="absolute left-4 top-4 z-10 rounded-full px-3 py-1 text-xs font-bold text-white"
            style={{ background: "var(--rosa-medio)", fontFamily: "var(--font-body)" }}
          >
            BONO #5
          </span>
          <img src={IMG.bono5} alt="Bono 5 destacado" loading="lazy" className="w-full" />
        </div>

        <div
          className="mt-10 rounded-[24px] px-6 py-8"
          style={{ background: "var(--morado-pastel)" }}
        >
          <p
            className="text-xl"
            style={{ fontFamily: "var(--font-display)", color: "var(--texto-dark)", fontWeight: 700 }}
          >
            Todo esto incluido en un solo pago. Sin mensualidades.
          </p>
          <div className="mt-5">
            <CTAButton size="lg">¡Quiero los bonos ahora!</CTAButton>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
