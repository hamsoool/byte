import members from "@/data/members";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-line bg-ink px-5 py-12 text-left sm:px-10 sm:py-16">
      <div className="mx-auto flex max-w-[90rem] flex-col gap-9 md:flex-row md:items-start md:justify-between md:gap-10">
        <div className="flex flex-col items-start gap-2">
          <p className="font-display text-2xl text-paper">BYTE.</p>
          <p className="font-mono text-xs tracking-wide text-dim">
            Being Your Technology Experts
          </p>
        </div>

        <div className="flex flex-col items-start gap-1 font-mono text-xs tracking-wide text-dim">
          <p className="text-paper">Get in touch</p>
          {members.map((m) => (
            <a
              key={m.id}
              href={m.link}
              className="flex min-h-11 items-center transition-colors hover:text-acid"
            >
              {m.link.replace("mailto:", "")}
            </a>
          ))}
        </div>

        <div className="flex flex-col items-start gap-1 font-mono text-[11px] tracking-wide text-dim">
          <p>© {year} BYTE</p>
        </div>
      </div>
    </footer>
  );
}
