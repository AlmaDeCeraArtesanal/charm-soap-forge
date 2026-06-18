import { CheckCircle2 } from "lucide-react";
import { IMG } from "./constants";
import { SectionReveal } from "./SectionReveal";

const items = [
  "Aprender a hacer jabones artesanales desde cero sin experiencia",
  "Generar ingresos reales desde casa con algo que te apasiona",
  "Construir una marca de jabones con identidad propia",
  "Vender en redes sociales y mercados locales o en línea",
  "Tener flexibilidad de horario y ser tu propia jefa",
  "Regalar productos artesanales únicos hechos por ti con amor",
];

export function ForYou() {
  return (
    <section className="py-20 md:py-24" style={{ background: "var(--bg-primary)" }}>
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-2">
        <SectionReveal>
          <img
            src={IMG.forYou}
            alt="Este curso es para ti"
            loading="lazy"
            className="w-full rounded-[24px]"
            style={{ boxShadow: "var(--card-shadow)" }}
          />
        </SectionReveal>
        <SectionReveal>
          <span
            className="inline-block rounded-full px-4 py-2 text-xs font-bold"
            style={{ background: "var(--rosa-pastel)", color: "var(--texto-dark)", fontFamily: "var(--font-body)" }}
          >
            ✨ ESTO ES TODO LO QUE LOGRARAS JUNTO A NOSOTROS...
          </span>
          <h2
            className="mt-4 text-3xl md:text-4xl"
            style={{ fontFamily: "var(--font-display)", color: "var(--texto-dark)", fontWeight: 700 }}
          >
            <br />
          </h2>
          <ul className="mt-6 space-y-4" style={{ fontFamily: "var(--font-body)" }}>
            {items.map((t) => (
              <li key={t} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 shrink-0" size={22} color="var(--morado-medio)" />
                <span className="text-base" style={{ color: "var(--texto-dark)" }}>{t}</span>
              </li>
            ))}
          </ul>
          <a
            href="#modulos"
            className="mt-8 inline-block rounded-full border-2 px-7 py-3 text-sm font-bold transition-colors"
            style={{
              borderColor: "var(--morado-medio)",
              color: "var(--morado-medio)",
              fontFamily: "var(--font-display)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--morado-medio)";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "var(--morado-medio)";
            }}
          >
            Ver el contenido completo
          </a>
        </SectionReveal>
      </div>
    </section>
  );
}
