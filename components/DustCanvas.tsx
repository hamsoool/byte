"use client";

import { useEffect, useRef } from "react";

interface DustCanvasProps {
  intensity: number; // 0 to 1
  beamWidth?: number; // center focus
}

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  baseAlpha: number;
  pulsePhase: number;
}

export default function DustCanvas({ intensity, beamWidth = 320 }: DustCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const intensityRef = useRef(intensity);

  useEffect(() => {
    intensityRef.current = intensity;
  }, [intensity]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", handleResize);

    // Generate dust particles inside the conical volume
    const PARTICLE_COUNT = 38;
    const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }).map(() => ({
      x: (Math.random() - 0.5) * beamWidth + width / 2,
      y: Math.random() * height,
      size: Math.random() * 1.8 + 0.6,
      speedX: (Math.random() - 0.5) * 0.35,
      speedY: -Math.random() * 0.45 - 0.1, // thermal rising current
      baseAlpha: Math.random() * 0.65 + 0.25,
      pulsePhase: Math.random() * Math.PI * 2,
    }));

    let lastTime = performance.now();

    const render = (time: number) => {
      const dt = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      const curIntensity = intensityRef.current;
      if (curIntensity > 0.02) {
        const centerX = width / 2;

        particles.forEach((p) => {
          // Update physics
          p.x += p.speedX;
          p.y += p.speedY;
          p.pulsePhase += dt * 1.5;

          // Wrap around vertical bounds
          if (p.y < 0) {
            p.y = height;
            p.x = (Math.random() - 0.5) * beamWidth + centerX;
          }
          if (p.y > height) p.y = 0;

          // Cone constraint: spread widens as y increases
          const spreadAtY = (p.y / height) * (beamWidth * 1.4) + 60;
          const distFromCenter = Math.abs(p.x - centerX);

          if (distFromCenter > spreadAtY) {
            // nudge back inward
            p.x += (centerX - p.x) * 0.05;
          }

          // Lighting attenuation
          const coneFade = Math.max(0, 1 - distFromCenter / (spreadAtY + 20));
          const flicker = 0.85 + Math.sin(p.pulsePhase) * 0.15;
          const alpha = p.baseAlpha * curIntensity * coneFade * flicker;

          if (alpha > 0.01) {
            ctx.fillStyle = `rgba(216, 242, 78, ${alpha})`;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
          }
        });
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, [beamWidth]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
      style={{ opacity: intensity > 0.01 ? 1 : 0, transition: "opacity 0.2s" }}
    />
  );
}
