"use client";

type Ring = { items: string[]; radius: number; duration: number; reverse?: boolean };

const RINGS: Ring[] = [
  {
    items: ["React", "TypeScript", "Node.js", "MongoDB"],
    radius: 88,
    duration: 16,
  },
  {
    items: ["Next.js", "Python", "Firebase", "Docker", "Socket.io"],
    radius: 136,
    duration: 26,
    reverse: true,
  },
  {
    items: ["Gemini API", "JWT Auth", "Tailwind", "Supabase", "Express.js", "React Native"],
    radius: 186,
    duration: 38,
  },
];

function OrbitRing({ ring }: { ring: Ring }) {
  const { items, radius, duration, reverse } = ring;
  const spinAnim = reverse ? "orbit-ccw" : "orbit-cw";
  const counterAnim = reverse ? "orbit-cw" : "orbit-ccw";

  return (
    <>
      {/* Dashed orbit ring */}
      <div
        className="absolute top-1/2 left-1/2 rounded-full border border-dashed border-border/30 pointer-events-none"
        style={{
          width: radius * 2,
          height: radius * 2,
          marginLeft: -radius,
          marginTop: -radius,
        }}
      />

      {items.map((item, i) => {
        const startDeg = (360 / items.length) * i;
        return (
          <div
            key={item}
            className="absolute top-1/2 left-1/2"
            style={{
              width: 0,
              height: 0,
              animation: `${spinAnim} ${duration}s linear infinite`,
              /* stagger start so items are evenly distributed */
              animationDelay: `-${(duration / items.length) * i}s`,
            }}
          >
            {/* Push out to radius then counter-rotate the label */}
            <div
              style={{
                transform: `translateX(${radius}px) translateY(-50%)`,
                animation: `${counterAnim} ${duration}s linear infinite`,
                animationDelay: `-${(duration / items.length) * i}s`,
              }}
            >
              <span className="inline-flex items-center whitespace-nowrap rounded-full border border-border bg-background/80 backdrop-blur-sm px-2.5 py-1 text-[10px] font-mono font-medium text-foreground shadow-sm select-none">
                {item}
              </span>
            </div>
          </div>
        );
      })}
    </>
  );
}

export function SkillsOrbit() {
  const maxRadius = Math.max(...RINGS.map((r) => r.radius));
  const size = (maxRadius + 36) * 2;

  return (
    <div className="flex items-center justify-center w-full py-4">
      <div
        className="relative flex-none"
        style={{ width: size, height: size, maxWidth: "100%" }}
      >
        {RINGS.map((ring) => (
          <OrbitRing key={ring.radius} ring={ring} />
        ))}

        {/* Center node */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-14 rounded-full border border-border bg-background flex flex-col items-center justify-center gap-0.5 shadow-lg"
          style={{ animation: "pulse-glow 3s ease-in-out infinite" }}
        >
          <span className="text-[9px] font-mono tracking-widest text-muted-foreground/60 uppercase">
            Tech
          </span>
          <span className="text-xs font-bold text-foreground leading-none">Stack</span>
        </div>

        {/* Subtle radial gradient fade at edges */}
        <div
          className="absolute inset-0 pointer-events-none rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 55%, var(--background) 100%)",
          }}
        />
      </div>
    </div>
  );
}
