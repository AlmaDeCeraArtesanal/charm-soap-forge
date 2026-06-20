import { useRef, useState } from "react";
import { Play } from "lucide-react";
import { Blob } from "./Blob";
import { SectionReveal } from "./SectionReveal";

export function VSL() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setIsPlaying(true);
    videoRef.current?.play();
  };

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "#FFFDE7", padding: "80px 24px", textAlign: "center" }}
    >
      <Blob color="rgba(100, 195, 235, 0.35)" size={380} className="-left-20 top-10" />
      <Blob color="rgba(255, 236, 100, 0.55)" size={340} className="-right-16 bottom-0" />

      <SectionReveal>
        <div className="relative mx-auto" style={{ maxWidth: 820 }}>
          <p
            style={{
              color: "var(--celeste-medio)",
              letterSpacing: "0.15em",
              fontWeight: 700,
              fontSize: "0.9rem",
              fontFamily: "var(--font-display)",
            }}
          >
            MIRÁ EL CURSO
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "2.3rem",
              color: "var(--texto-dark)",
              margin: "16px 0",
              lineHeight: 1.15,
            }}
          >
            Mirá de qué se trata el curso
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              color: "var(--texto-mid)",
              maxWidth: 600,
              margin: "0 auto 28px",
              lineHeight: 1.6,
            }}
          >
            En este video te cuento exactamente qué vas a aprender y cómo este curso puede cambiar tu vida.
          </p>

          {/* Chips de valor */}
          <div className="mb-8 flex flex-wrap justify-center gap-2" style={{ fontFamily: "var(--font-body)" }}>
            {["🧼 +9 módulos prácticos", "⏱ A tu ritmo", "🏆 Con certificado"].map((t) => (
              <span
                key={t}
                className="rounded-full px-4 py-2 text-sm font-semibold"
                style={{
                  background: "#fff",
                  color: "var(--texto-dark)",
                  border: "1px solid var(--morado-pastel)",
                  boxShadow: "var(--card-shadow)",
                }}
              >
                {t}
              </span>
            ))}
          </div>

          {/* Marco decorativo del video */}
          <div
            style={{
              position: "relative",
              padding: 8,
              borderRadius: 28,
              background: "var(--cta-gradient)",
              boxShadow: "0 18px 50px rgba(58,157,200,0.25)",
            }}
          >
            <div
              style={{
                position: "relative",
                borderRadius: 22,
                overflow: "hidden",
                background: "#000",
              }}
            >
              <video
                ref={videoRef}
                src="https://d1yei2z3i6k35z.cloudfront.net/14677855/697bfff42e7a3_WhatsAppVideo2026-01-06at5.00.59PM.mp4"
                controls={isPlaying}
                playsInline
                style={{ width: "100%", display: "block" }}
                onPause={() => setIsPlaying(false)}
              />
              {!isPlaying && (
                <div
                  onClick={handlePlay}
                  style={{
                    position: "absolute",
                    inset: 0,
                    cursor: "pointer",
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.55), rgba(0,0,0,0.1) 50%, transparent)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {/* Anillo pulsante */}
                  <div style={{ position: "relative", width: 100, height: 100 }}>
                    <span
                      style={{
                        position: "absolute",
                        inset: 0,
                        borderRadius: "50%",
                        background: "rgba(255,255,255,0.55)",
                        animation: "pulse-ring 1.6s ease-out infinite",
                      }}
                    />
                    <div
                      className="vsl-play"
                      style={{
                        position: "relative",
                        width: 100,
                        height: 100,
                        borderRadius: "50%",
                        background: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
                        transition: "transform 0.2s",
                      }}
                    >
                      <Play size={36} color="var(--celeste-medio)" fill="var(--celeste-medio)" style={{ marginLeft: 4 }} />
                    </div>
                  </div>

                  {/* Texto overlay inferior */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: 20,
                      left: 24,
                      right: 24,
                      textAlign: "left",
                      color: "white",
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    <div style={{ fontWeight: 700, fontSize: "1.3rem", lineHeight: 1.2 }}>
                      Alma De Cera Artesanal: De Cero a Emprendedora
                    </div>
                    <div style={{ fontSize: "0.85rem", opacity: 0.85, marginTop: 4, fontFamily: "var(--font-body)" }}>
                      Haz clic para reproducir · Duración: ~5 min
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Urgencia bajo video */}
          <p
            className="mt-6"
            style={{
              fontFamily: "var(--font-body)",
              color: "var(--texto-mid)",
              fontSize: "0.95rem",
            }}
          >
            👆 Mira este video antes de seguir — solo toma unos minutos y puede cambiar tu decisión.
          </p>
        </div>
      </SectionReveal>

      <style>{`.vsl-play:hover { transform: scale(1.08); }`}</style>
    </section>
  );
}
