import { HOTMART_URL } from "./constants";

type Props = {
  children: React.ReactNode;
  size?: "md" | "lg" | "xl";
  href?: string;
  className?: string;
};

export function CTAButton({ children, size = "lg", href = HOTMART_URL, className = "" }: Props) {
  const padding =
    size === "xl" ? "px-14 py-5 text-lg" : size === "lg" ? "px-10 py-4 text-base" : "px-6 py-3 text-sm";
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block rounded-full font-bold text-white transition-transform duration-200 hover:scale-105 active:scale-100 ${padding} ${className}`}
      style={{
        background: "var(--cta-gradient)",
        boxShadow: "var(--glow-cta)",
        fontFamily: "var(--font-display)",
        letterSpacing: "0.01em",
      }}
    >
      {children}
    </a>
  );
}
