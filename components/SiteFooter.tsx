import { companyEmail } from "@/data/members";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-line bg-ink px-5 py-12 text-left sm:px-10 sm:py-16">
      <div className="mx-auto flex max-w-[90rem] flex-col gap-9 md:flex-row md:items-start md:justify-between md:gap-10">
        <div className="flex flex-col items-start gap-2">
          <p className="font-display text-2xl text-paper">BYTE.</p>
          <p className="type-meta text-dim">
            Being Your Technology Experts
          </p>
        </div>

        <div className="type-meta flex flex-col items-start gap-1 text-dim">
          <p className="text-paper">Get in touch</p>
          <a
            href={`mailto:${companyEmail}`}
            className="flex min-h-11 items-center transition-colors hover:text-acid"
          >
            {companyEmail}
          </a>
        </div>

        <div className="type-meta flex flex-col items-start gap-1 text-dim">
          <p>© {year} BYTE</p>
        </div>
      </div>
    </footer>
  );
}
