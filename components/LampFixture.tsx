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
      data-lamp-id={id}
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
        className="w-0.5 transition-colors duration-500"
        style={{
          height: `${cordHeightVh}vh`,
          background:
            "repeating-linear-gradient(90deg, #171714 0 1px, #3a3830 1px 2px)",
          boxShadow: isActive ? "0 0 8px rgba(216,242,78,0.2)" : "none",
        }}
      />

      {/* Brass strain relief collar */}
      <div className="relative z-30 h-2.5 w-3 rounded-t-sm border-x border-t border-[#49473d] bg-gradient-to-r from-[#201f1b] via-[#5a5648] to-[#1a1916] shadow-[0_2px_4px_rgba(0,0,0,0.8)]" />

      {/* Industrial Lamp Shade */}
      <div className={`relative z-20 flex flex-col items-center ${isActive ? "lamp-igniting" : ""}`}>
        <div className="relative z-10 -mb-px h-2 w-7 rounded-t-[45%] border border-[#3b3a33] bg-gradient-to-r from-[#141412] via-[#3b3931] to-[#11110f]" />
        <div
          className="relative transition-[filter] duration-300 group-hover:brightness-125"
          style={{
            width: 78,
            height: 35,
            clipPath: "polygon(27% 0%, 73% 0%, 100% 92%, 96% 100%, 4% 100%, 0% 92%)",
            background: isActive
              ? "linear-gradient(105deg, #0e0e0d 0%, #2e2d27 28%, #464437 48%, #22221e 68%, #090908 100%)"
              : "linear-gradient(105deg, #0c0c0b 0%, #25241f 42%, #171714 65%, #080808 100%)",
            boxShadow: isActive
              ? "inset 8px 0 12px rgba(255,255,255,0.025), inset -10px 0 14px rgba(0,0,0,0.7), 0 5px 22px rgba(216,242,78,0.22)"
              : "inset 8px 0 12px rgba(255,255,255,0.018), inset -10px 0 14px rgba(0,0,0,0.75), 0 5px 14px rgba(0,0,0,0.75)",
          }}
        >
          <div className="absolute left-[23%] top-1 h-px w-[38%] rotate-[-8deg] bg-white/10" />

          {/* Inner reflector rim */}
          <div
            className="absolute inset-x-[3px] bottom-0 h-[5px] transition-opacity duration-300"
            style={{
              background: isActive
                ? "linear-gradient(180deg, #686c32 0%, #e8f57a 70%, #575a2a 100%)"
                : "linear-gradient(180deg, #24241f 0%, #38372e 70%, #181816 100%)",
              opacity: isActive ? 0.95 : 0.55,
              boxShadow: isActive
                ? "0 2px 7px rgba(216,242,78,0.75)"
                : "0 2px 4px rgba(0,0,0,0.8)",
            }}
          />
        </div>

        {/* Exposed Bulb & Filament */}
        <div
          className="relative -mt-1.5 flex items-center justify-center overflow-hidden rounded-[45%_45%_55%_55%] border transition-all duration-300"
          style={{
            width: 21,
            height: 16,
            borderColor: isActive ? "rgba(255,255,225,0.75)" : "#2d2c27",
            background: isActive
              ? "radial-gradient(circle at 42% 35%, #ffffff 0%, #fffbd2 28%, #d8f24e 72%, #667023 100%)"
              : "radial-gradient(circle at 42% 35%, #34332e 0%, #1d1d1a 68%, #111110 100%)",
            boxShadow: isActive
              ? "0 0 13px 5px rgba(231,247,126,0.9), 0 0 34px 13px rgba(216,242,78,0.34)"
              : "inset 0 -3px 5px rgba(0,0,0,0.65)",
            transform: `scale(${filamentScale})`,
          }}
        >
          <span className="absolute left-1 top-0.5 h-1.5 w-1 rounded-full bg-white/60 blur-[0.5px]" />
          {/* Filament core */}
          <div
            className="h-1 w-2 rounded-full transition-all duration-300"
            style={{
              background: isActive ? "#ffffff" : "#383730",
              filter: isActive ? "drop-shadow(0 0 4px #ffffff)" : "none",
            }}
          />
        </div>
      </div>

      {/* Volumetric Light Cone Container */}
      <div
        className={`pointer-events-none absolute top-full left-1/2 flex -translate-x-1/2 flex-col items-center overflow-visible ${isActive ? "lamp-igniting" : ""}`}
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
            transform: "rotateX(65deg)",
          }}
        />
      </div>
    </div>
  );
}
