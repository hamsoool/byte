"use client";

import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { useReducedMotion } from "framer-motion";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const scrollToStage = () => {
    const stage = document.getElementById("spotlight-stage");
    if (stage) {
      window.scrollTo({
        top: stage.offsetTop + window.innerHeight * 0.25,
        behavior: shouldReduceMotion ? "auto" : "smooth",
      });
    }
  };

  return (
    <section
      aria-label="BYTE"
      className="relative flex min-h-dvh flex-col items-center justify-center gap-8 overflow-hidden bg-ink px-5 pb-12 pt-20 text-center sm:gap-10 sm:px-6 sm:pb-16 sm:pt-24"
    >
      {/* Main Studio Emblem / Logo */}
      <div className="relative z-10 flex flex-col items-center">
        <Image
          src="/byte-logo.png"
          alt="BYTE"
          width={1075}
          height={577}
          priority
          className="h-auto w-[78vw] max-w-[28rem] sm:w-[min(85vw,460px)]"
        />
      </div>

      {/* Minimal Scroll Indicator */}
      <button
        onClick={scrollToStage}
        className="group relative z-10 mt-5 flex min-h-11 min-w-11 flex-col items-center justify-center gap-1.5 text-dim transition-colors hover:text-paper sm:mt-8 sm:gap-2"
        aria-label="Scroll to view members"
      >
        <span className="type-kicker">Meet the team</span>
        <ArrowDown className="h-3.5 w-3.5 text-dim transition-colors group-hover:text-paper" />
      </button>
    </section>
  );
}
