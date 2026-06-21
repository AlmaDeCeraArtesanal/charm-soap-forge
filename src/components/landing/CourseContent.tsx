import { SectionReveal } from "./SectionReveal";
import grid1 from "@/assets/jabones-grid-1.png.asset.json";
import grid2 from "@/assets/jabones-grid-2.png.asset.json";

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
          {[grid1.url, grid2.url].map((src, i) => (
            <div key={src} className="overflow-hidden rounded-3xl bg-white transition-transform duration-300 hover:scale-[1.02]" style={{ boxShadow: "var(--card-shadow)" }}>
              <img src={src} alt={`Tipos de jabones artesanales ${i + 1}`} loading="lazy" className="w-full rounded-3xl" />
            </div>
          ))}
        </div>
        <p
          className="mt-10 inline-block rounded-full px-8 py-4 text-2xl md:text-3xl"
          style={{
            fontFamily: "var(--font-display)",
            color: "white",
            fontWeight: 800,
            background: "linear-gradient(135deg, var(--morado-medio), var(--celeste-pastel))",
            boxShadow: "var(--card-shadow)",
          }}
        >
          ✨ ¡y mucho más! ✨
        </p>
      </SectionReveal>
    </section>
  );
}
