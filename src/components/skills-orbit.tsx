"use client";

/*
  3-level orbit trick (must keep these three concerns on separate elements):
    Level 1 – rotates (clockwise or CCW) around the center point
    Level 2 – translates outward to the orbit radius (NO animation, just static transform)
    Level 3 – counter-rotates so the badge text stays upright
*/

type Ring = {
  items: string[];
  radius: number;
  duration: number;
  reverse?: boolean;
};

const RINGS: Ring[] = [
  { items: ["React", "TypeScript", "Node.js", "MongoDB"], radius: 88,  duration: 14 },
  { items: ["Next.js", "Python", "Firebase", "Docker", "Socket.io"], radius: 138, duration: 24, reverse: true },
  { items: ["Gemini API", "JWT Auth", "Tailwind", "Supabase", "Express.js", "React Native"], radius: 190, duration: 36 },
];

const BADGE_H = 22; // px – half the badge height for vertical centering

function OrbitRing({ ring }: { ring: Ring }) {
  const { items, radius, duration, reverse } = ring;
  const cwAnim  = `orbit-cw  ${duration}s linear infinite`;
  const ccwAnim = `orbit-ccw ${duration}s linear infinite`;

  return (
    <>
      {/* Dashed ring track */}
      <div
        className="absolute top-1/2 left-1/2 rounded-full border border-dashed border-border/25 pointer-events-none"
        style={{ width: radius * 2, height: radius * 2, marginLeft: -radius, marginTop: -radius }}
      />

      {items.map((item, i) => {
        /* Stagger items evenly around the ring using animationDelay */
        const delay = `-${(duration / items.length) * i}s`;

        return (
          <div
            key={item}
            /* Level 1: zero-size anchor at center that ROTATES */
            className="absolute top-1/2 left-1/2"
            style={{
              width: 0,
              height: 0,
              animation: reverse ? ccwAnim : cwAnim,
              animationDelay: delay,
            }}
          >
            {/* Level 2: push outward to orbit radius – NO animation here */}
            <div
              style={{
                position: "absolute",
                left: radius,       // move right by radius
                top: -BADGE_H,      // vertically center the badge
              }}
            >
              {/* Level 3: counter-rotate so the badge text stays upright */}
              <div
                style={{
                  animation: reverse ? cwAnim : ccwAnim,
                  animationDelay: delay,
                }}
              >
                <span className="inline-flex items-center whitespace-nowrap rounded-full border border-border bg-background/85 backdrop-blur-sm px-2.5 py-1 text-[10px] font-mono font-medium text-foreground shadow-sm select-none">
                  {item}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export function SkillsOrbit() {
  const maxR = Math.max(...RINGS.map((r) => r.radius));
  const size = (maxR + 40) * 2;

  return (
    <div className="flex items-center justify-center w-full py-6 overflow-hidden">
      <div className="relative flex-none" style={{ width: size, height: size, maxWidth: "min(100%, 480px)" }}>
        {RINGS.map((ring) => (
          <OrbitRing key={ring.radius} ring={ring} />
        ))}

        {/* Center pulsing node */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-16 rounded-full border border-indigo-500/40 bg-background flex flex-col items-center justify-center gap-0.5 shadow-lg z-10"
          style={{ animation: "pulse-glow 3s ease-in-out infinite" }}
        >
          <span className="text-[8px] font-mono tracking-widest text-muted-foreground/60 uppercase leading-none">
            Tech
          </span>
          <span className="text-sm font-bold text-foreground leading-none">Stack</span>
        </div>

        {/* Radial fade at edges so it blends into the page background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 50%, var(--background) 80%)",
          }}
        />
      </div>
    </div>
  );
}
