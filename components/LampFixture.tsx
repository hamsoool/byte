"use client";

import DustCanvas from "./DustCanvas";

interface LampFixtureProps {
  id: string;
  name: string;
  isActive: boolean;
  intensity: number; // 0 to 1
  onClick: () => void;
  cordHeightVh?: number;
}

export default function LampFixture({
  id,
  name,
  isActive,
  intensity,
  onClick,
  cordHeightVh = 18,
}: LampFixtureProps) {
  const beamOpacity = Math.max(0, Math.min(1, intensity));
  const filamentScale = isActive ? 1 + intensity * 0.15 : 0.85;

  return (
    <div
      className="relative flex flex-col items-center justify-start pointer-events-auto group cursor-pointer"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      aria-label={`Spotlight for ${name}. Click to illuminate.`}
    >
      {/* Electrical braided cord from ceiling */}
      <div
        className="w-px bg-gradient-to-b from-transparent via-line to-line transition-colors duration-500 group-hover:bg-dim"
        style={{
          height: `${cordHeightVh}vh`,
          boxShadow: isActive ? "0 0 8px rgba(216,242,78,0.2)" : "none",
        }}
      />

      {/* Brass strain relief collar */}
      <div className="h-2 w-2 rounded-xs bg-[#4a473b] border border-[#2a2924]" />

      {/* Industrial Lamp Shade */}
      <div className="relative z-20 flex flex-col items-center">
        <div
          className="relative transition-all duration-300 group-hover:brightness-125"
          style={{
            width: 72,
            height: 32,
            clipPath: "polygon(24% 0%, 76% 0%, 100% 100%, 0% 100%)",
            background: isActive
              ? "linear-gradient(180deg, #242420 0%, #161614 60%, #38372e 100%)"
              : "#1a1a18",
            borderTop: "1px solid #3a3932",
            boxShadow: isActive
              ? "0 4px 20px rgba(216,242,78,0.25)"
              : "0 4px 12px rgba(0,0,0,0.6)",
          }}
        >
          {/* Inner reflector rim */}
          <div
            className="absolute inset-x-0 bottom-0 h-1 transition-opacity duration-300"
            style={{
              background: "var(--acid)",
              opacity: isActive ? 0.9 : 0.15,
              filter: isActive ? "blur(1px)" : "none",
            }}
          />
        </div>

        {/* Exposed Bulb & Filament */}
        <div
          className="relative -mt-1 flex items-center justify-center rounded-full transition-all duration-300"
          style={{
            width: 20,
            height: 14,
            background: isActive ? "var(--paper)" : "#222220",
            boxShadow: isActive
              ? "0 0 16px 6px rgba(216,242,78,0.8), 0 0 32px 12px rgba(216,242,78,0.3)"
              : "none",
            transform: `scale(${filamentScale})`,
          }}
        >
          {/* Filament core */}
          <div
            className="h-1.5 w-2 rounded-full transition-all duration-300"
            style={{
              background: isActive ? "#ffffff" : "#383730",
              filter: isActive ? "drop-shadow(0 0 4px #ffffff)" : "none",
            }}
          />
        </div>
      </div>

      {/* Volumetric Light Cone Container */}
      <div
        className="pointer-events-none absolute top-full left-1/2 flex -translate-x-1/2 flex-col items-center overflow-visible"
        style={{
          width: "min(92vw, 560px)",
          height: "75vh",
          opacity: beamOpacity,
          transition: "opacity 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {/* Conical Light Beam */}
        <div
          className="volumetric-cone relative h-full w-full"
          style={{
            transformOrigin: "top center",
            filter: "blur(1.5px)",
          }}
        />

        {/* Floating dust particles within the beam */}
        <DustCanvas intensity={beamOpacity} beamWidth={260} />

        {/* Floor bounce spotlight puddle */}
        <div
          aria-hidden="true"
          className="floor-spotlight absolute bottom-0 left-1/2 h-36 w-[120%] -translate-x-1/2 rounded-full filter blur-xl"
          style={{
            opacity: beamOpacity * 0.85,
            transform: "translateX(-50%) rotateX(65deg)",
          }}
        />
      </div>
    </div>
  );
}
