type Props = {
  color: string;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
};

export function Blob({ color, size = 360, className = "", style }: Props) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute rounded-full ${className}`}
      style={{
        width: size,
        height: size,
        background: color,
        filter: "blur(80px)",
        opacity: 0.6,
        ...style,
      }}
    />
  );
}
