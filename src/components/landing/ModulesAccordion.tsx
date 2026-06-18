import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SectionReveal } from "./SectionReveal";

const modules = [
  {
    title: "Bienvenida y acompañamiento",
    items: [
      "Introducción al curso y bienvenida",
      "Acceso al grupo privado de alumnas",
      "Cómo aprovechar al máximo cada lección",
    ],
  },
  {
    title: "Bases sólidas de la jabonería artesanal",
    items: [
      "¿Cómo funciona el jabón de glicerina?",
      "Beneficios del jabón artesanal vs. industrial",
      "Buenas prácticas para trabajar de forma segura y profesional",
    ],
  },
  {
    title: "Materiales y preparación profesional",
    items: [
      "Insumos correctos y dónde conseguirlos",
      "Herramientas necesarias y cómo elegirlas",
      "Organiza tu espacio de trabajo sin desperdiciar dinero",
    ],
  },
  {
    title: "Elaboración paso a paso",
    items: [
      "Proceso base para crear jabones bien terminados",
      "Técnicas esenciales para principiantes",
      "Control de temperatura, colores y fragancias",
    ],
  },
  {
    title: "Diseño y creatividad",
    items: [
      "Jabones llamativos con alto valor comercial",
      "Técnicas de decoración y acabados únicos",
      "Inspiración en tendencias de mercado",
    ],
  },
  {
    title: "Cuidado de la piel y formulación consciente",
    items: [
      "Tipos de piel y sus necesidades específicas",
      "Ingredientes activos naturales y sus beneficios",
      "Cómo adaptar tus fórmulas según el cliente",
    ],
  },
  {
    title: "Línea de jabones naturales",
    items: [
      "Colección completa con ingredientes naturales",
      "Ingredientes de alta demanda en el mercado actual",
      "Packaging y presentación de tu línea de jabones",
    ],
  },
  {
    title: "Emprendimiento desde casa",
    items: [
      "Cómo poner el precio correcto a tus jabones",
      "Estrategias para vender en redes sociales y mercados",
      "Construye una marca desde cero con pocos recursos",
    ],
  },
  {
    title: "Jabonería temática y temporadas",
    items: [
      "Jabones especiales para fechas clave que más venden",
      "Diseños navideños, San Valentín, Día de la Madre y más",
      "Cómo anticiparte a las temporadas para maximizar ventas",
    ],
  },
];

const palette = ["var(--rosa-pastel)", "var(--morado-pastel)", "var(--celeste-pastel)"];

export function ModulesAccordion() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="modulos" className="py-20 md:py-24" style={{ background: "var(--bg-celeste)" }}>
      <SectionReveal className="mx-auto max-w-[860px] px-5 text-center">
        <span
          className="inline-block rounded-full px-4 py-2 text-xs font-bold"
          style={{ background: "var(--celeste-pastel)", color: "var(--texto-dark)", fontFamily: "var(--font-body)" }}
        >
          📖 El programa
        </span>
        <h2
          className="mt-4 text-3xl md:text-4xl"
          style={{ fontFamily: "var(--font-display)", color: "var(--texto-dark)", fontWeight: 700 }}
        >
          Estos son los módulos que estudiarás
        </h2>
        <p
          className="mt-3 text-lg"
          style={{ fontFamily: "var(--font-body)", color: "var(--texto-mid)" }}
        >
          9 módulos diseñados para llevarte de cero a emprendedora en 21 días
        </p>
      </SectionReveal>

      <div className="mx-auto mt-10 max-w-[860px] space-y-3 px-5">
        {modules.map((m, i) => {
          const isOpen = open === i;
          return (
            <div
              key={m.title}
              className="overflow-hidden rounded-[20px] bg-white"
              style={{ boxShadow: "var(--card-shadow)", background: isOpen ? "white" : palette[i % palette.length] + "40" }}
            >
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center gap-4 px-5 py-4 text-left"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                  style={{ background: "var(--morado-medio)" }}
                >
                  {i + 1}
                </span>
                <span className="flex-1 text-base font-bold md:text-lg" style={{ color: "var(--texto-dark)" }}>
                  Módulo {i + 1} — {m.title}
                </span>
                <ChevronDown
                  size={22}
                  className="shrink-0 transition-transform duration-300"
                  style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", color: "var(--morado-medio)" }}
                />
              </button>
              <div
                className="grid transition-[grid-template-rows] duration-300 ease-out"
                style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
              >
                <div className="overflow-hidden">
                  <ul className="space-y-2 px-5 pb-5 pl-16" style={{ fontFamily: "var(--font-body)", color: "var(--texto-dark)" }}>
                    {m.items.map((it) => (
                      <li key={it} className="relative pl-5">
                        <span className="absolute left-0 top-2 h-2 w-2 rounded-full" style={{ background: "var(--rosa-medio)" }} />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
