import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SectionReveal } from "./SectionReveal";

const faqs = [
  {
    q: "¿Necesito experiencia previa en jabonería?",
    a: "No. El curso está diseñado desde cero, ideal para principiantes absolutas.",
  },
  {
    q: "¿Cuánto tiempo necesito por día?",
    a: "Con 30-60 minutos diarios es suficiente para completar el programa en 21 días.",
  },
  {
    q: "¿El curso es presencial o en línea?",
    a: "100% en línea, videos a tu ritmo desde cualquier dispositivo.",
  },
  {
    q: "¿Cuánto tiempo tengo acceso?",
    a: "Acceso de por vida. Repite las clases cuantas veces necesites.",
  },
  {
    q: "¿Qué materiales necesito para empezar?",
    a: "En el Módulo 3 te explicamos exactamente qué necesitas y dónde comprarlo. La inversión inicial es mínima.",
  },
  {
    q: "¿Es seguro realizar el pago?",
    a: "Sí. El pago se procesa a través de Hotmart, plataforma internacional 100% segura.",
  },
  {
    q: "¿Y si el curso no es lo que esperaba?",
    a: "Tienes 7 días de garantía. Si no quedas satisfecha, te devolvemos el dinero sin preguntas.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-20 md:py-24" style={{ background: "var(--bg-celeste)" }}>
      <SectionReveal className="mx-auto max-w-[860px] px-5 text-center">
        <span
          className="inline-block rounded-full px-4 py-2 text-xs font-bold"
          style={{ background: "var(--celeste-pastel)", color: "var(--texto-dark)", fontFamily: "var(--font-body)" }}
        >
          ❓ Resolvemos tus dudas
        </span>
        <h2
          className="mt-4 text-3xl md:text-4xl"
          style={{ fontFamily: "var(--font-display)", color: "var(--texto-dark)", fontWeight: 700 }}
        >
          Preguntas frecuentes
        </h2>
      </SectionReveal>
      <div className="mx-auto mt-10 max-w-[860px] space-y-3 px-5">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div
              key={f.q}
              className="overflow-hidden rounded-[20px] bg-white"
              style={{ boxShadow: "var(--card-shadow)" }}
            >
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center gap-4 px-5 py-4 text-left"
              >
                <span
                  className="flex-1 text-base font-bold md:text-lg"
                  style={{ color: "var(--texto-dark)", fontFamily: "var(--font-display)" }}
                >
                  {f.q}
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
                  <p className="px-5 pb-5 text-base" style={{ color: "var(--texto-mid)", fontFamily: "var(--font-body)" }}>
                    {f.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
