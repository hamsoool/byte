"use client";

import Image from "next/image";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const scrollToStage = () => {
    const stage = document.getElementById("spotlight-stage");
    if (stage) {
      window.scrollTo({ top: stage.offsetTop + window.innerHeight * 0.25, behavior: "smooth" });
    }
  };

  return (
    <section
      aria-label="BYTE"
      className="relative flex min-h-screen flex-col items-center justify-center gap-10 overflow-hidden bg-ink px-6 pt-24 pb-16 text-center"
    >
      {/* 3 Pendant Cords hanging down from ceiling matching the stage positions */}
      <div
        aria-hidden="true"
        className="absolute top-0 inset-x-0 flex justify-around max-w-5xl mx-auto pointer-events-none"
      >
        {[0, 1, 2].map((i) => (
          <div key={i} className="flex flex-col items-center">
            <span className="block h-[18vh] w-px bg-gradient-to-b from-transparent to-line" />
            <span className="h-1.5 w-1.5 rounded-full bg-line/60" />
          </div>
        ))}
      </div>

      {/* Main Studio Emblem / Logo */}
      <div className="relative z-10 flex flex-col items-center">
        <Image
          src="/byte-logo.png"
          alt="BYTE"
          width={1075}
          height={577}
          priority
          className="h-auto w-[min(85vw,460px)]"
        />
      </div>

      {/* Minimal Scroll Indicator */}
      <button
        onClick={scrollToStage}
        className="group relative z-10 mt-8 flex flex-col items-center gap-2 font-mono text-[11px] tracking-widest text-dim transition-colors hover:text-paper"
        aria-label="Scroll to view members"
      >
        <span>SCROLL</span>
        <ArrowDown className="h-3.5 w-3.5 animate-bounce text-dim group-hover:text-paper transition-colors" />
      </button>
    </section>
  );
}
