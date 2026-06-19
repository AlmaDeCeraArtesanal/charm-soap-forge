import { useRef, useState } from "react";
import { Play } from "lucide-react";
import { SectionReveal } from "./SectionReveal";

export function VSL() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setIsPlaying(true);
    videoRef.current?.play();
  };

  return (
    <section style={{ background: "var(--bg-lavanda)", padding: "80px 24px", textAlign: "center" }}>
      <SectionReveal>
        <p
          style={{
            color: "var(--morado-medio)",
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
          }}
        >
          Mirá de qué se trata el curso
        </h2>
        <p
          style={{
            fontFamily: "var(--font-body)",
            color: "var(--texto-mid)",
            maxWidth: "600px",
            margin: "0 auto 40px",
            lineHeight: 1.6,
          }}
        >
          En este video te cuento exactamente qué vas a aprender y cómo este curso puede cambiar tu vida.
        </p>

        <div
          style={{
            position: "relative",
            maxWidth: "720px",
            margin: "0 auto",
            borderRadius: "24px",
            overflow: "hidden",
            boxShadow: "var(--card-shadow)",
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
              <div
                className="vsl-play"
                style={{
                  width: "90px",
                  height: "90px",
                  borderRadius: "50%",
                  background: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
                  transition: "transform 0.2s",
                }}
              >
                <Play size={32} color="var(--morado-medio)" fill="var(--morado-medio)" style={{ marginLeft: "4px" }} />
              </div>
              <span
                style={{
                  position: "absolute",
                  bottom: "24px",
                  left: "24px",
                  color: "white",
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "1.3rem",
                  textAlign: "left",
                }}
              >
                Jabonería Artesanal: De Cero a Emprendedora
              </span>
            </div>
          )}
        </div>
      </SectionReveal>
      <style>{`.vsl-play:hover { transform: scale(1.08); }`}</style>
    </section>
  );
}
