"use client";

import { useEffect, useRef, useState } from "react";
import { Mail, Check, Copy, ArrowDown } from "lucide-react";
import type { Member } from "@/data/members";
import LampFixture from "./LampFixture";

interface StageExperienceProps {
  members: Member[];
}

export default function StageExperience({ members }: StageExperienceProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeLamp, setActiveLamp] = useState<number | null>(null);
  const [lampIntensities, setLampIntensities] = useState<number[]>([0, 0, 0]);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Compute scroll progress through the runway
  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const totalScrollable = container.offsetHeight - window.innerHeight;
      if (totalScrollable <= 0) return;

      const currentProgress = Math.max(
        0,
        Math.min(1, -rect.top / totalScrollable)
      );

      const ranges = [
        { min: 0.14, peakMin: 0.2, peakMax: 0.32, max: 0.38 },
        { min: 0.4, peakMin: 0.46, peakMax: 0.6, max: 0.66 },
        { min: 0.68, peakMin: 0.74, peakMax: 0.88, max: 0.94 },
      ];

      const newIntensities = ranges.map((r) => {
        if (currentProgress < r.min || currentProgress > r.max) return 0;
        if (currentProgress >= r.peakMin && currentProgress <= r.peakMax) return 1;
        if (currentProgress < r.peakMin) {
          return (currentProgress - r.min) / (r.peakMin - r.min);
        }
        return (r.max - currentProgress) / (r.max - r.peakMax);
      });

      setLampIntensities(newIntensities);

      let maxIdx: number | null = null;
      let maxVal = 0.35;
      newIntensities.forEach((val, idx) => {
        if (val > maxVal) {
          maxVal = val;
          maxIdx = idx;
        }
      });

      setActiveLamp(maxIdx);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToLamp = (index: number) => {
    const container = containerRef.current;
    if (!container) return;
    const totalScrollable = container.offsetHeight - window.innerHeight;
    const targetProgress = index === 0 ? 0.26 : index === 1 ? 0.53 : 0.81;
    const targetY = container.offsetTop + targetProgress * totalScrollable;
    window.scrollTo({ top: targetY, behavior: "smooth" });
  };

  const copyEmail = (email: string, id: string) => {
    navigator.clipboard.writeText(email);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2400);
  };

  const lampPositions = [22, 50, 78];

  return (
    <div
      ref={containerRef}
      id="spotlight-stage"
      className="relative h-[440vh] bg-ink"
      aria-label="Three Lamp Spotlight Stage"
    >
      {/* Sticky Stage Viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between bg-ink">
        {/* Subtle ambient ceiling bar */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-24 border-b border-line/40 bg-gradient-to-b from-black/80 to-transparent pointer-events-none"
        />

        {/* Studio Ceiling Rail */}
        <div
          aria-hidden="true"
          className="absolute top-0 inset-x-0 flex justify-center pointer-events-none"
        >
          <div className="w-full max-w-6xl h-px bg-gradient-to-r from-transparent via-line to-transparent" />
        </div>

        {/* Ambient Watermark when lamps are off */}
        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center text-center transition-opacity duration-700"
          style={{
            opacity: activeLamp === null && lampIntensities.every((v) => v < 0.1) ? 0.8 : 0.04,
          }}
        >
          <span className="font-display text-[clamp(4rem,14vw,12rem)] tracking-tighter text-paper/10 select-none">
            BYTE.
          </span>
        </div>

        {/* ============================================================ */}
        {/* 3 PHYSICAL PENDANT LAMPS ON STAGE */}
        {/* ============================================================ */}
        <div
          className="relative w-full h-full pointer-events-none transition-transform duration-500"
          style={{
            transform:
              isMobile && activeLamp !== null
                ? `translateX(${(1 - activeLamp) * 100}%)`
                : "none",
          }}
        >
          {members.map((member, index) => {
            const intensity = lampIntensities[index] || 0;
            const isLit = activeLamp === index;
            const desktopX = lampPositions[index];

            return (
              <div
                key={member.id}
                className="absolute top-0 pointer-events-auto transition-all duration-300"
                style={{
                  left: isMobile ? `${index * 100 + 50}%` : `${desktopX}%`,
                  transform: "translateX(-50%)",
                }}
              >
                <LampFixture
                  id={member.id}
                  name={member.name}
                  isActive={isLit}
                  intensity={intensity}
                  cordHeightVh={14}
                  onClick={() => scrollToLamp(index)}
                />
              </div>
            );
          })}
        </div>

        {/* ============================================================ */}
        {/* MEMBER DETAILS UNDER ILLUMINATION */}
        {/* ============================================================ */}
        <div className="pointer-events-none absolute inset-0 flex items-end justify-center pb-12 sm:pb-16 px-4">
          <div className="w-full max-w-6xl relative h-[62vh] flex items-center justify-center">
            {members.map((member, index) => {
              const intensity = lampIntensities[index] || 0;
              const isVisible = intensity > 0.08;
              const desktopX = lampPositions[index];
              const initial = member.name.charAt(0);

              if (!isVisible) return null;

              return (
                <div
                  key={member.id}
                  className="absolute pointer-events-auto flex flex-col items-center text-center transition-all duration-300 max-w-sm sm:max-w-md px-4"
                  style={{
                    left: isMobile ? "50%" : `${desktopX}%`,
                    transform: "translateX(-50%)",
                    opacity: Math.min(1, intensity * 1.3),
                  }}
                >
                  {/* Subtle initial letter illuminated behind text */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[clamp(6rem,16vw,12rem)] leading-none select-none text-acid"
                    style={{
                      opacity: intensity * 0.07,
                      filter: "blur(2px)",
                    }}
                  >
                    {initial}
                  </span>

                  {/* Member Name */}
                  <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl leading-tight text-paper tracking-tight font-bold drop-shadow-md">
                    {member.name}
                  </h2>

                  {/* Member Role */}
                  <p className="mt-1.5 font-mono text-xs sm:text-sm tracking-wide text-dim">
                    {member.role}
                  </p>

                  {/* Bio */}
                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-paper/85 max-w-xs sm:max-w-sm">
                    {member.bio}
                  </p>

                  {/* Skills */}
                  <ul className="mt-4 flex flex-wrap items-center justify-center gap-1.5">
                    {member.skills.map((skill) => (
                      <li
                        key={skill}
                        className="border border-line/80 bg-ink/70 px-2 py-0.5 font-mono text-[10px] tracking-wider text-dim transition-colors hover:border-acid hover:text-paper"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>

                  {/* Action Bar (Email Copy & Direct Link) */}
                  <div className="mt-5 flex items-center gap-3">
                    <button
                      onClick={() =>
                        copyEmail(member.link.replace("mailto:", ""), member.id)
                      }
                      className="group flex items-center gap-2 rounded-md border border-line bg-paper/5 px-3 py-1.5 font-mono text-xs tracking-wider text-paper transition-all duration-200 hover:border-acid hover:bg-paper/10 active:scale-95"
                      title="Click to copy email address"
                    >
                      {copiedId === member.id ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-acid" />
                          <span className="text-acid">COPIED</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5 text-dim group-hover:text-paper" />
                          <span>{member.link.replace("mailto:", "")}</span>
                        </>
                      )}
                    </button>

                    <a
                      href={member.link}
                      className="flex h-8 w-8 items-center justify-center rounded-md border border-line bg-paper/5 text-paper transition-colors hover:border-acid hover:text-acid"
                      aria-label={`Send email to ${member.name}`}
                    >
                      <Mail className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ============================================================ */}
        {/* STAGE BOTTOM STATUS & NAVIGATION */}
        {/* ============================================================ */}
        <div className="relative z-30 flex items-center justify-between px-6 py-4 sm:px-10 border-t border-line/40 bg-ink/90 backdrop-blur-sm">
          {/* Member navigation indicators */}
          <div className="flex items-center gap-4">
            {members.map((member, idx) => {
              const firstName = member.name.split(" ")[0];
              return (
                <button
                  key={idx}
                  onClick={() => scrollToLamp(idx)}
                  className="group flex items-center gap-1.5 py-1 text-dim transition-colors hover:text-paper"
                  aria-label={`Jump to ${member.name}`}
                >
                  <span
                    className="h-1.5 w-1.5 rounded-full transition-all duration-300"
                    style={{
                      background:
                        activeLamp === idx ? "var(--acid)" : "var(--line)",
                      boxShadow:
                        activeLamp === idx ? "0 0 8px var(--acid)" : "none",
                    }}
                  />
                  <span
                    className="font-mono text-[11px] transition-colors"
                    style={{
                      color:
                        activeLamp === idx ? "var(--paper)" : "var(--dim)",
                    }}
                  >
                    {firstName}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2 text-dim">
            <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
          </div>
        </div>
      </div>
    </div>
  );
}
