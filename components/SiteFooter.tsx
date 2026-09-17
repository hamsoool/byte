import members from "@/data/members";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-line bg-ink px-6 py-16 text-center sm:px-10 sm:text-left">
      <div className="mx-auto flex max-w-5xl flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-col items-center gap-2 sm:items-start">
          <p className="font-display text-2xl text-paper">BYTE.</p>
          <p className="font-mono text-xs tracking-wide text-dim">
            Being Your Technology Experts
          </p>
        </div>

        <div className="flex flex-col items-center gap-2 font-mono text-xs tracking-wide text-dim sm:items-start">
          <p className="text-paper">Get in touch</p>
          {members.map((m) => (
            <a
              key={m.id}
              href={m.link}
              className="transition-colors hover:text-acid"
            >
              {m.link.replace("mailto:", "")}
            </a>
          ))}
        </div>

        <div className="flex flex-col items-center gap-1 font-mono text-[11px] tracking-wide text-dim sm:items-start">
          <p>© {year} BYTE</p>
        </div>
      </div>
    </footer>
  );
}
