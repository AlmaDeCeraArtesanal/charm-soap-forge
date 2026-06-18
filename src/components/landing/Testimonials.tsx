import { Star } from "lucide-react";
import { CTAButton } from "./CTAButton";
import { IMG } from "./constants";
import { SectionReveal } from "./SectionReveal";

const items = [
  {
    name: "María G.",
    text: "Empecé sin saber nada y a las pocas semanas ya estaba vendiendo mis primeros jabones en mi barrio. El curso es súper claro.",
  },
  {
    name: "Andrea P.",
    text: "Lo que más me gustó fue el módulo de emprendimiento. Le puse precio a mis jabones con confianza y ya tengo clientas fijas.",
  },
  {
    name: "Carolina R.",
    text: "Las técnicas de decoración son hermosas. Mis amigas se sorprendieron y empezaron a encargarme jabones para regalo.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonios" className="py-20 md:py-24" style={{ background: "var(--bg-lavanda)" }}>
      <SectionReveal className="mx-auto max-w-7xl px-5 text-center">
        <span
          className="inline-block rounded-full px-4 py-2 text-xs font-bold"
          style={{ background: "var(--rosa-pastel)", color: "var(--texto-dark)", fontFamily: "var(--font-body)" }}
        >
          💬 Ellas ya lo lograron
        </span>
        <h2
          className="mt-4 text-3xl md:text-4xl"
          style={{ fontFamily: "var(--font-display)", color: "var(--texto-dark)", fontWeight: 700 }}
        >
          Testimonios de nuestras alumnas
        </h2>
        <img
          src={IMG.testimonios}
          alt="Collage de testimonios"
          loading="lazy"
          className="mx-auto mt-10 w-full rounded-[20px]"
          style={{ boxShadow: "var(--card-shadow)" }}
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((t) => (
            <div
              key={t.name}
              className="rounded-[20px] bg-white p-6 text-left"
              style={{ boxShadow: "var(--card-shadow)" }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold text-white"
                  style={{ background: "var(--cta-gradient)", fontFamily: "var(--font-display)" }}
                >
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-bold" style={{ color: "var(--texto-dark)", fontFamily: "var(--font-display)" }}>
                    {t.name}
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={14} fill="var(--rosa-medio)" color="var(--rosa-medio)" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm" style={{ color: "var(--texto-mid)", fontFamily: "var(--font-body)" }}>
                {t.text}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <CTAButton size="lg">¡Quiero ser la próxima historia de éxito!</CTAButton>
        </div>
      </SectionReveal>
    </section>
  );
}
