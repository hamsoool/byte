"use client";

import { motion, useScroll } from "framer-motion";

export default function Nav({ totalMembers }: { totalMembers: number }) {
  const { scrollYProgress } = useScroll();

  const scrollToSection = (index: number) => {
    const stage = document.getElementById("spotlight-stage");
    if (!stage) return;
    const totalScrollable = stage.offsetHeight - window.innerHeight;
    const targetProgress = index === 0 ? 0.26 : index === 1 ? 0.53 : 0.81;
    const targetY = stage.offsetTop + targetProgress * totalScrollable;
    window.scrollTo({ top: targetY, behavior: "smooth" });
  };

  const memberNames = ["Hans", "Icon", "Sander"];

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-5 py-4 sm:px-8 sm:py-5 border-b border-line/30 bg-ink/80 backdrop-blur-md">
      {/* Brand */}
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="font-display text-sm tracking-widest text-paper hover:text-acid transition-colors"
      >
        BYTE.
      </a>

      {/* Member Names Quick-Nav */}
      <div className="flex items-center gap-6">
        {memberNames.slice(0, totalMembers).map((name, i) => (
          <button
            key={name}
            onClick={() => scrollToSection(i)}
            className="font-mono text-xs tracking-wider text-dim transition-colors hover:text-paper"
          >
            {name}
          </button>
        ))}
      </div>

      {/* Vertical Scroll Progress Bar */}
      <div
        aria-hidden="true"
        className="h-6 w-px overflow-hidden bg-line"
      >
        <motion.div
          className="w-px bg-acid"
          style={{
            height: "100%",
            scaleY: scrollYProgress,
            transformOrigin: "top",
          }}
        />
      </div>
    </header>
  );
}
