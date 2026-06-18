import { IMG } from "./constants";
import { SectionReveal } from "./SectionReveal";

export function CourseContent() {
  return (
    <section className="py-20 md:py-24" style={{ background: "var(--bg-celeste)" }}>
      <SectionReveal className="mx-auto max-w-7xl px-5 text-center">
        <span
          className="inline-block rounded-full px-4 py-2 text-xs font-bold"
          style={{ background: "var(--celeste-pastel)", color: "var(--texto-dark)", fontFamily: "var(--font-body)" }}
        >
          📚 Contenido premium
        </span>
        <h2
          className="mt-4 text-3xl md:text-4xl"
          style={{ fontFamily: "var(--font-display)", color: "var(--texto-dark)", fontWeight: 700 }}
        >
          En nuestro curso encontrarás...
        </h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {[IMG.content1, IMG.content2].map((src, i) => (
            <div key={src} className="overflow-hidden rounded-[24px] bg-white transition-transform duration-300 hover:scale-[1.02]" style={{ boxShadow: "var(--card-shadow)" }}>
              <img src={src} alt={`Contenido del curso ${i + 1}`} loading="lazy" className="w-full" />
            </div>
          ))}
        </div>
        <p
          className="mt-8 text-xl"
          style={{ fontFamily: "var(--font-display)", color: "var(--morado-medio)", fontWeight: 600 }}
        >
          y mucho más...
        </p>
      </SectionReveal>
    </section>
  );
}
