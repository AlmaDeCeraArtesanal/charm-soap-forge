import { SectionReveal } from "./SectionReveal";

const items = [
  {
    emoji: "💰",
    title: "Generarás ingresos reales",
    desc: "Construirás un negocio rentable de jabones artesanales desde casa, con tu propia marca y clientes fieles.",
    bg: "#FFFDE7",
    border: "#F5C842",
  },
  {
    emoji: "✨",
    title: "Crearás jabones de alta calidad",
    desc: "Dominarás técnicas profesionales para hacer jabones visualmente impactantes que se venden solos.",
    bg: "#E8F6FD",
    border: "#3A9DC8",
  },
  {
    emoji: "💸",
    title: "Optimizarás tu inversión",
    desc: "Aprenderás a elegir materiales accesibles y económicos sin sacrificar calidad ni estética.",
    bg: "#FFFDE7",
    border: "#F5C842",
  },
  {
    emoji: "📱",
    title: "Venderás en redes sociales",
    desc: "Aplicarás estrategias probadas para captar clientes, publicar contenido que convierte y crecer tu marca.",
    bg: "#E8F6FD",
    border: "#3A9DC8",
  },
  {
    emoji: "🕐",
    title: "Tendrás libertad de horarios",
    desc: "Serás tu propia jefa, trabajando desde casa a tu ritmo, sin depender de un jefe ni un horario fijo.",
    bg: "#FFFDE7",
    border: "#F5C842",
  },
  {
    emoji: "🏆",
    title: "Contarás con un certificado",
    desc: "Al finalizar recibirás tu certificado personalizado, que respalda tu formación y potencia tu credibilidad.",
    bg: "#E8F6FD",
    border: "#3A9DC8",
  },
];

export function ForYou() {
  return (
    <section className="py-20 md:py-24" style={{ background: "var(--bg-primary)" }}>
      <div className="mx-auto max-w-6xl px-5 text-center">
        <SectionReveal>
          <span
            className="inline-block rounded-full px-4 py-2 text-xs font-bold"
            style={{ background: "var(--rosa-pastel)", color: "var(--texto-dark)", fontFamily: "var(--font-body)" }}
          >
            🎯 Tu transformación
          </span>
          <h2
            className="mt-4 text-3xl md:text-4xl"
            style={{ fontFamily: "var(--font-display)", color: "var(--texto-dark)", fontWeight: 700 }}
          >
            Esto es todo lo que lograrás con nosotros
          </h2>
          <p
            className="mx-auto mt-4 max-w-2xl text-base md:text-lg"
            style={{ fontFamily: "var(--font-body)", color: "var(--texto-mid)" }}
          >
            Al terminar el curso, tu vida como emprendedora habrá cambiado en 6 áreas clave:
          </p>
        </SectionReveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              style={{
                background: item.bg,
                border: `2px solid ${item.border}`,
                borderRadius: 20,
                padding: "28px 22px",
                textAlign: "left",
                boxShadow: "0 6px 24px rgba(58,157,200,0.10), 0 2px 6px rgba(0,0,0,0.04)",
                transition: "transform 0.25s ease, box-shadow 0.25s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow =
                  "0 12px 32px rgba(58,157,200,0.18), 0 4px 12px rgba(0,0,0,0.06)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 6px 24px rgba(58,157,200,0.10), 0 2px 6px rgba(0,0,0,0.04)";
              }}
            >
              <div style={{ fontSize: "2.4rem", lineHeight: 1, marginBottom: 12 }}>{item.emoji}</div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "1.15rem",
                  color: "var(--texto-dark)",
                  marginBottom: 8,
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  color: "var(--texto-mid)",
                  fontSize: "0.95rem",
                  lineHeight: 1.55,
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
