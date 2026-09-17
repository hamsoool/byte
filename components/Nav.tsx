"use client";

import { motion, useScroll } from "framer-motion";

const navigation = [
  { label: "Team", href: "#spotlight-stage", mobile: true },
  { label: "Studio", href: "#about", mobile: false },
  { label: "Capabilities", href: "#capabilities", mobile: false },
  { label: "Process", href: "#process", mobile: false },
  { label: "Contact", href: "#contact", mobile: true },
];

export default function Nav() {
  const { scrollYProgress } = useScroll();

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex min-h-14 items-center justify-between border-b border-line/30 bg-ink/90 px-4 backdrop-blur-md sm:min-h-16 sm:px-8">
      {/* Brand */}
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="flex min-h-11 items-center font-display text-sm tracking-widest text-paper transition-colors hover:text-acid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-acid"
      >
        BYTE.
      </a>

      <nav aria-label="Main navigation" className="flex items-center gap-1 sm:gap-4 md:gap-6">
        {navigation.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={`${item.mobile ? "flex" : "hidden md:flex"} min-h-11 items-center px-2 font-mono text-[10px] tracking-wider text-dim transition-colors hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-acid sm:text-xs`}
          >
            {item.label}
          </a>
        ))}
      </nav>

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
