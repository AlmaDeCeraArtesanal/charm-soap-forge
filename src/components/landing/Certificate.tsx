import { CheckCircle2 } from "lucide-react";
import { IMG } from "./constants";
import { SectionReveal } from "./SectionReveal";

const checks = [
  "Personalizado con tu nombre",
  "Descargable en PDF",
  "Sin costo adicional",
  "Válido para tu portafolio",
];

export function Certificate() {
  return (
    <section className="py-20 md:py-24" style={{ background: "var(--bg-celeste)" }}>
      <div className="mx-auto max-w-7xl px-5">
        <SectionReveal className="text-center">
          <span
            className="inline-block rounded-full px-4 py-2 text-xs font-bold"
            style={{ background: "var(--celeste-pastel)", color: "var(--texto-dark)", fontFamily: "var(--font-body)" }}
          >
            🏆 Reconocimiento oficial
          </span>
        </SectionReveal>
        <div className="mt-10 grid items-center gap-12 md:grid-cols-2">
          <SectionReveal>
            <img
              src={IMG.certificado}
              alt="Certificado de finalización"
              loading="lazy"
              className="w-full rounded-[20px]"
              style={{ boxShadow: "var(--card-shadow)" }}
            />
          </SectionReveal>
          <SectionReveal>
            <h2
            className="mt-4 text-3xl md:text-4xl"
            style={{ fontFamily: "var(--font-display)", color: "var(--texto-dark)", fontWeight: 700 }}
          >
            Al finalizar el curso podrás solicitar tu Certificado de Finalización
          </h2>
          <p
            className="mt-4 text-lg"
            style={{ fontFamily: "var(--font-body)", color: "var(--texto-mid)" }}
          >
            Un reconocimiento personalizado con tu nombre que avala tu formación como jabonera artesanal.
          </p>
          <ul className="mt-6 space-y-3" style={{ fontFamily: "var(--font-body)" }}>
            {checks.map((c) => (
              <li key={c} className="flex items-center gap-3" style={{ color: "var(--texto-dark)" }}>
                <CheckCircle2 size={20} color="var(--morado-medio)" />
                {c}
              </li>
            ))}
          </ul>
        </SectionReveal>
      </div>
    </div>
    </section>
  );
}
