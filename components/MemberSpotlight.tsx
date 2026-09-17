"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import type { Member } from "@/data/members";

type Props = {
  member: Member;
  index: number;
  total: number;
};

// Each section tracks its own scroll progress from the moment it enters
// the viewport to the moment it leaves. The lamp is dark at both ends and
// fully lit through the middle, so as one section's light fades out the
// next one is already fading in — the handoff happens for free, without
// any shared state between sections.
export default function MemberSpotlight({ member, index, total }: Props) {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const lampOpacity = useTransform(
    scrollYProgress,
    [0, 0.32, 0.5, 0.68, 1],
    [0, 1, 1, 1, 0]
  );
  const beamScale = useTransform(
    scrollYProgress,
    [0, 0.32, 0.5, 0.68, 1],
    [0.55, 1, 1, 1, 0.55]
  );
  const contentOpacity = useTransform(
    scrollYProgress,
    [0.22, 0.38, 0.62, 0.78],
    [0, 1, 1, 0]
  );
  const contentY = useTransform(
    scrollYProgress,
    [0.22, 0.38],
    [28, 0]
  );

  const initial = member.name.charAt(0);

  return (
    <section
      ref={ref}
      data-member-index={index}
      aria-label={`${member.name}, ${member.role}`}
      className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden bg-ink px-6 py-24 text-center"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 font-display leading-none select-none"
        style={{
          fontSize: "clamp(9rem, 38vw, 24rem)",
          color: "var(--paper)",
          opacity: 0.035,
          transform: "translate(-50%, -55%)",
        }}
      >
        {initial}
      </span>

      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 w-px bg-line"
        style={{ height: "16vh", transform: "translateX(-50%)" }}
      />

      <motion.div
        aria-hidden="true"
        className="absolute left-1/2"
        style={{
          top: "16vh",
          width: 56,
          height: 24,
          transform: "translateX(-50%)",
          clipPath: "polygon(22% 0, 78% 0, 100% 100%, 0% 100%)",
          background: "var(--paper)",
          opacity: lampOpacity,
        }}
      />

      <motion.div
        aria-hidden="true"
        className="absolute left-1/2"
        style={{
          top: "calc(16vh + 22px)",
          width: 460,
          height: "58vh",
          transform: "translateX(-50%)",
          transformOrigin: "top center",
          clipPath: "polygon(40% 0, 60% 0, 100% 100%, 0% 100%)",
          background:
            "radial-gradient(ellipse at top, rgba(216,242,78,0.30), rgba(216,242,78,0.06) 42%, transparent 72%)",
          filter: "blur(2px)",
          opacity: lampOpacity,
          scaleY: beamScale,
        }}
      />

      <motion.div
        className="relative z-10 flex max-w-xl flex-col items-center gap-5 motion-reduce:!transform-none"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <span className="font-mono text-xs tracking-[0.2em] text-dim">
          UNIT {member.id} / {String(total).padStart(2, "0")}
        </span>

        <h2 className="font-display text-[clamp(2.25rem,7vw,4.5rem)] leading-[0.95] text-paper">
          {member.name}
        </h2>

        <p className="font-mono text-sm tracking-wide text-dim">
          {member.role}
        </p>

        <p className="max-w-[38ch] text-base leading-relaxed text-paper/80">
          {member.bio}
        </p>

        <ul className="flex flex-wrap items-center justify-center gap-2 pt-2">
          {member.skills.map((skill) => (
            <li
              key={skill}
              className="border border-line px-2.5 py-1 font-mono text-[11px] tracking-wide text-dim"
            >
              {skill}
            </li>
          ))}
        </ul>

        <a
          href={member.link}
          className="mt-2 font-mono text-xs tracking-wide text-paper underline decoration-line underline-offset-4 hover:decoration-acid"
        >
          {member.link.replace("mailto:", "")}
        </a>
      </motion.div>
    </section>
  );
}
