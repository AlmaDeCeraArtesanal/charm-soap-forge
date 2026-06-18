import { useState } from "react";
import { Menu, X } from "lucide-react";
import { CTAButton } from "./CTAButton";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#curso", label: "El Curso" },
  { href: "#modulos", label: "Módulos" },
  { href: "#bonos", label: "Bonos" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#garantia", label: "Garantía" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header
      className="sticky top-0 z-50"
      style={{
        background: "rgba(255,251,248,0.85)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--morado-pastel)",
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
        <a href="#inicio" className="flex items-center gap-2" style={{ fontFamily: "var(--font-display)", color: "var(--texto-dark)" }}>
          <span className="text-2xl">🧼</span>
          <span className="text-lg font-bold">Jabonería Artesanal</span>
        </a>
        <nav className="hidden items-center gap-7 md:flex" style={{ fontFamily: "var(--font-body)" }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-semibold transition-colors hover:opacity-70" style={{ color: "var(--texto-mid)" }}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <CTAButton size="md">Inscribirme ahora</CTAButton>
        </div>
        <button
          aria-label="Abrir menú"
          className="md:hidden rounded-full p-2"
          style={{ color: "var(--texto-dark)" }}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t" style={{ borderColor: "var(--morado-pastel)" }}>
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-4" style={{ fontFamily: "var(--font-body)" }}>
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-1 text-sm font-semibold" style={{ color: "var(--texto-dark)" }}>
                {l.label}
              </a>
            ))}
            <CTAButton size="md" className="self-start">Inscribirme ahora</CTAButton>
          </div>
        </div>
      )}
    </header>
  );
}
