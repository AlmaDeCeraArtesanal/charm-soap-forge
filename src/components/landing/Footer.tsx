import { Instagram, Facebook, Youtube } from "lucide-react";

const links = [
  { href: "#modulos", label: "Módulos" },
  { href: "#bonos", label: "Bonos" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#garantia", label: "Garantía" },
];

export function Footer() {
  return (
    <footer style={{ background: "var(--texto-dark)", color: "#fff" }}>
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-5 py-12 text-center md:flex-row md:justify-between md:text-left">
        <div className="flex items-center gap-2" style={{ fontFamily: "var(--font-display)" }}>
          <span className="text-2xl">🧼</span>
          <span className="text-lg font-bold">Jabonería Artesanal</span>
        </div>
        <nav className="flex flex-wrap justify-center gap-5" style={{ fontFamily: "var(--font-body)" }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm transition-opacity hover:opacity-80" style={{ color: "var(--rosa-pastel)" }}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex gap-4">
          {[Instagram, Facebook, Youtube].map((Icon, i) => (
            <a key={i} href="#" aria-label="Red social" className="transition-transform hover:scale-110">
              <Icon size={22} color="var(--rosa-pastel)" />
            </a>
          ))}
        </div>
      </div>
      <div
        className="border-t px-5 py-5 text-center text-xs"
        style={{ borderColor: "rgba(255,255,255,0.1)", color: "var(--rosa-pastel)", fontFamily: "var(--font-body)" }}
      >
        © 2026 Jabonería Artesanal — Academia Digital. Todos los derechos reservados.
      </div>
    </footer>
  );
}
