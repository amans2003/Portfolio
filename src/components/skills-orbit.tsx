"use client";

import {
  SiReact, SiTypescript, SiNodedotjs, SiMongodb,
  SiNextdotjs, SiPython, SiFirebase, SiDocker, SiSocketdotio,
  SiTailwindcss, SiSupabase, SiExpress, SiJsonwebtokens, SiGooglegemini,
} from "react-icons/si";
import type { IconType } from "react-icons";

type OrbitItem = { name: string; Icon: IconType; color: string };
type Ring = { items: OrbitItem[]; radius: number; duration: number; reverse?: boolean };

const RINGS: Ring[] = [
  {
    radius: 88,
    duration: 14,
    items: [
      { name: "React",      Icon: SiReact,      color: "#61DAFB" },
      { name: "TypeScript", Icon: SiTypescript,  color: "#3178C6" },
      { name: "Node.js",    Icon: SiNodedotjs,   color: "#339933" },
      { name: "MongoDB",    Icon: SiMongodb,     color: "#47A248" },
    ],
  },
  {
    radius: 142,
    duration: 24,
    reverse: true,
    items: [
      { name: "Next.js",    Icon: SiNextdotjs,   color: "currentColor" },
      { name: "Python",     Icon: SiPython,      color: "#3776AB" },
      { name: "Firebase",   Icon: SiFirebase,    color: "#FFCA28" },
      { name: "Docker",     Icon: SiDocker,      color: "#2496ED" },
      { name: "Socket.io",  Icon: SiSocketdotio, color: "currentColor" },
    ],
  },
  {
    radius: 198,
    duration: 36,
    items: [
      { name: "Gemini API",  Icon: SiGooglegemini, color: "#8E75B2" },
      { name: "Tailwind",    Icon: SiTailwindcss,  color: "#06B6D4" },
      { name: "Supabase",    Icon: SiSupabase,     color: "#3ECF8E" },
      { name: "Express.js",  Icon: SiExpress,      color: "currentColor" },
      { name: "JWT",         Icon: SiJsonwebtokens,color: "#D63AFF" },
      { name: "React Native",Icon: SiReact,        color: "#61DAFB" },
    ],
  },
];

const ICON_BOX = 18; // half of icon container size, used for centering

function OrbitRing({ ring }: { ring: Ring }) {
  const { items, radius, duration, reverse } = ring;
  const cwAnim  = `orbit-cw  ${duration}s linear infinite`;
  const ccwAnim = `orbit-ccw ${duration}s linear infinite`;

  return (
    <>
      {/* Dashed ring track */}
      <div
        className="absolute top-1/2 left-1/2 rounded-full border border-dashed border-border/20 pointer-events-none"
        style={{ width: radius * 2, height: radius * 2, marginLeft: -radius, marginTop: -radius }}
      />

      {items.map((item, i) => {
        const delay = `-${(duration / items.length) * i}s`;
        const { Icon, color, name } = item;

        return (
          <div
            key={name}
            title={name}
            /* L1 – rotates around center */
            className="absolute top-1/2 left-1/2"
            style={{
              width: 0,
              height: 0,
              animation: reverse ? ccwAnim : cwAnim,
              animationDelay: delay,
            }}
          >
            {/* L2 – translates to orbit radius, no animation */}
            <div
              style={{
                position: "absolute",
                left: radius,
                top: -ICON_BOX,
              }}
            >
              {/* L3 – counter-rotates so icon stays upright */}
              <div
                style={{
                  animation: reverse ? cwAnim : ccwAnim,
                  animationDelay: delay,
                }}
              >
                <div
                  className="size-9 rounded-xl border border-border bg-card flex items-center justify-center shadow-md hover:scale-110 transition-transform cursor-default"
                  style={{ boxShadow: color !== "currentColor" ? `0 0 10px 0 ${color}33` : undefined }}
                >
                  <Icon style={{ color }} size={18} />
                </div>
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
  const size = (maxR + 46) * 2;

  return (
    <div className="flex items-center justify-center w-full py-6 overflow-hidden">
      <div
        className="relative flex-none"
        style={{ width: size, height: size, maxWidth: "min(100%, 500px)" }}
      >
        {RINGS.map((ring) => (
          <OrbitRing key={ring.radius} ring={ring} />
        ))}

        {/* Center pulsing node */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-16 rounded-full border border-indigo-500/50 bg-background flex flex-col items-center justify-center gap-0.5 shadow-lg z-10"
          style={{ animation: "pulse-glow 3s ease-in-out infinite" }}
        >
          <span className="text-[8px] font-mono tracking-widest text-muted-foreground/60 uppercase leading-none">
            Tech
          </span>
          <span className="text-sm font-bold text-foreground leading-none">Stack</span>
        </div>

        {/* Radial fade at edges */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 48%, var(--background) 78%)",
          }}
        />
      </div>
    </div>
  );
}
