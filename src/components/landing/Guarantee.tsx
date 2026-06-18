import { IMG } from "./constants";
import { SectionReveal } from "./SectionReveal";

export function Guarantee() {
  return (
    <section id="garantia" className="py-20 md:py-24" style={{ background: "var(--bg-primary)" }}>
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-2">
        <SectionReveal className="flex justify-center">
          <img
            src={IMG.garantia}
            alt="Sello de garantía 7 días"
            loading="lazy"
            className="max-w-[220px]"
            style={{ filter: "drop-shadow(0 12px 24px rgba(185,143,224,0.3))" }}
          />
        </SectionReveal>
        <SectionReveal>
          <span
            className="inline-block rounded-full px-4 py-2 text-xs font-bold"
            style={{ background: "var(--morado-pastel)", color: "var(--texto-dark)", fontFamily: "var(--font-body)" }}
          >
            🛡️ Garantía sin preguntas
          </span>
          <h2
            className="mt-4 text-3xl md:text-4xl"
            style={{ fontFamily: "var(--font-display)", color: "var(--texto-dark)", fontWeight: 700 }}
          >
            ¡Asumo todo el riesgo por ti!
          </h2>
          <p
            className="mt-4 text-base leading-relaxed"
            style={{ fontFamily: "var(--font-body)", color: "var(--texto-mid)" }}
          >
            No quiero que tomes una decisión apresurada, quiero que tomes una decisión con confianza. La mejor manera de aprender y emprender con jabones de glicerina es viviendo la experiencia dentro del programa. Una vez conozcas todo el contenido, las técnicas y el valor que recibirás, tú decidirás si quieres seguir formando parte de esta gran comunidad de creadoras. Y si después de acceder al curso sientes que no es para ti, tienes 7 días completos para solicitar la devolución de tu dinero. Te ofrezco esta garantía porque estoy segura de que mi método comprobado funciona, y puede ayudarte a construir un emprendimiento real y rentable desde casa, tal como lo han hecho cientos de alumnas antes que tú. 🌿✨
          </p>
          <div
            className="mt-6 inline-block rounded-full px-5 py-3 text-sm font-bold"
            style={{ background: "var(--morado-pastel)", color: "var(--texto-dark)", fontFamily: "var(--font-display)" }}
          >
            ✅ 7 días de garantía total — Sin condiciones
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
