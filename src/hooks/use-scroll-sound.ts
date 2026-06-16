"use client";

import { useEffect, useRef } from "react";
import { playSound, isMuted } from "@/lib/sound-engine";
import { dropLeatherSound } from "@/lib/drop-leather";
import { click8bitSound } from "@/lib/click-8bit";

const THROTTLE_MS = 300;      // minimum gap between sounds
const MIN_DELTA  = 40;        // ignore tiny scroll twitches

export function useScrollSound() {
  const lastFiredAt = useRef(0);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isMuted()) return;
      if (Math.abs(e.deltaY) < MIN_DELTA) return;

      const now = Date.now();
      if (now - lastFiredAt.current < THROTTLE_MS) return;
      lastFiredAt.current = now;

      const scrollingDown = e.deltaY > 0;

      if (scrollingDown) {
        // deeper, softer thud going down
        playSound(dropLeatherSound.dataUri, { volume: 0.18, playbackRate: 0.95 }).catch(() => {});
      } else {
        // lighter tick going up
        playSound(click8bitSound.dataUri, { volume: 0.12, playbackRate: 1.2 }).catch(() => {});
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);
}
