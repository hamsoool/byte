// Fixed full-viewport film-grain texture. Pure SVG turbulence, no image
// asset, no runtime cost beyond one static filter — sits above everything
// at low opacity to keep the black stage from looking flat and digital.
export default function GrainOverlay() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[60] h-full w-full opacity-[0.05] mix-blend-overlay"
    >
      <filter id="byte-grain">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.85"
          numOctaves={3}
          stitchTiles="stitch"
        />
      </filter>
      <rect width="100%" height="100%" filter="url(#byte-grain)" />
    </svg>
  );
}
