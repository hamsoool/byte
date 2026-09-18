"use client";

import { ArrowDownRight, Mail } from "lucide-react";
import { companyEmail } from "@/data/members";

const capabilities = [
  {
    title: "Web applications",
    description:
      "Responsive React interfaces shaped around real user flows and maintainable components.",
    tools: "REACT / TYPESCRIPT",
  },
  {
    title: "Backend systems",
    description:
      "Node.js services and application logic that keep the product dependable behind the screen.",
    tools: "NODE.JS / APIs",
  },
  {
    title: "Data foundations",
    description:
      "Practical SQL schemas and data access patterns built to support the application clearly.",
    tools: "SQL / DATA",
  },
  {
    title: "Delivery workflow",
    description:
      "Version-controlled development with a shared codebase and a clear path from change to release.",
    tools: "GIT / COLLABORATION",
  },
];

const process = [
  {
    label: "Understand",
    copy: "Define the problem, the people using the product, and what a useful outcome looks like.",
  },
  {
    label: "Structure",
    copy: "Turn the brief into a practical system, from data and application logic to interface flow.",
  },
  {
    label: "Build",
    copy: "Develop the product across the stack with frequent working checkpoints.",
  },
  {
    label: "Refine",
    copy: "Test the details, resolve rough edges, and prepare the work for a confident handoff.",
  },
];

function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="relative flex min-h-dvh items-center overflow-hidden border-y border-line bg-paper text-ink sm:min-h-[115vh]"
    >
      <div aria-hidden="true" className="absolute inset-x-0 top-[11%] select-none">
        <p
          className="whitespace-nowrap font-display text-[clamp(4rem,14vw,12rem)] font-bold leading-none text-ink/[0.055]"
        >
          SMALL TEAM / SMALL TEAM /
        </p>
        <p
          className="mt-2 whitespace-nowrap text-right font-display text-[clamp(4rem,14vw,12rem)] font-bold leading-none text-ink/[0.055]"
        >
          FULL STACK / FULL STACK /
        </p>
      </div>

      <div className="relative mx-auto grid w-full max-w-[90rem] gap-10 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:py-32">
        <div>
          <p className="type-kicker text-ink/65">About BYTE</p>
          <h2
            id="about-title"
            className="type-display-lg mt-4 sm:mt-5"
          >
            Three minds.
            <br />
            One build.
          </h2>
        </div>

        <div className="border-t border-ink/20 pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
          <p className="type-lead max-w-2xl">
            BYTE is a three-person technology studio building web products
            across the full stack, from the first data model to the interface
            people use.
          </p>
          <p className="type-body mt-6 max-w-xl text-ink/70">
            Being Your Technology Experts means direct collaboration with the
            people doing the work. No handoff maze, just one team thinking
            through the system together.
          </p>
        </div>
      </div>
    </section>
  );
}

function CapabilitiesSection() {
  return (
    <section
      id="capabilities"
      aria-labelledby="capabilities-title"
      className="relative min-h-dvh overflow-hidden border-b border-line bg-ink px-5 py-20 sm:px-8 sm:py-28 lg:py-36"
    >
      <div aria-hidden="true" className="absolute left-0 right-0 top-0 h-px bg-acid" />

      <div className="mx-auto grid max-w-[90rem] gap-12 sm:gap-16 lg:grid-cols-[0.72fr_1.28fr]">
        <div>
          <p className="type-kicker text-dim">Capabilities</p>
          <h2
            id="capabilities-title"
            className="type-display-lg mt-4 sm:mt-5"
          >
            What we
            <br />
            build.
          </h2>
          <p className="type-body mt-6 max-w-sm text-dim sm:mt-8">
            A focused technical range for taking a web product from structure
            to working interface.
          </p>
        </div>

        <div>
          {capabilities.map((capability) => (
            <article
              key={capability.title}
              className="group grid gap-3 border-t border-line py-6 sm:grid-cols-[1fr_1.15fr] sm:gap-8 sm:py-7"
            >
              <div>
                <h3 className="type-title text-paper">
                  {capability.title}
                </h3>
                <p className="type-kicker mt-2 text-acid">
                  {capability.tools}
                </p>
              </div>
              <p className="type-body max-w-lg text-dim transition-colors group-hover:text-paper/80">
                {capability.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessStep({
  item,
  index,
}: {
  item: (typeof process)[number];
  index: number;
}) {
  return (
    <li className="grid gap-3 border-t border-ink/20 py-6 sm:grid-cols-[4rem_0.75fr_1.25fr] sm:items-start sm:gap-8">
      <span className="font-mono text-xs text-ink/45">
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="type-title">
        {item.label}
      </h3>
      <p className="type-body max-w-lg text-ink/70">
        {item.copy}
      </p>
    </li>
  );
}

function ProcessSection() {
  return (
    <section
      id="process"
      aria-labelledby="process-title"
      className="relative min-h-dvh overflow-hidden bg-paper px-5 py-20 text-ink sm:px-8 sm:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-[90rem]">
        <div className="mb-12 sm:mb-20">
          <p className="type-kicker text-ink/65">How we work</p>
          <h2
            id="process-title"
            className="type-display-lg mt-4 max-w-4xl sm:mt-5"
          >
            Clear from brief to build.
          </h2>
        </div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-0 top-0 hidden w-px bg-acid lg:block"
          />
          <ol className="lg:pl-10">
            {process.map((item, index) => (
              <ProcessStep
                key={item.label}
                item={item}
                index={index}
              />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative border-t border-line bg-ink md:min-h-[165vh]"
    >
      <div className="relative flex min-h-dvh items-center overflow-hidden px-5 py-20 sm:px-8 sm:py-24 md:sticky md:top-0 md:h-dvh md:min-h-0">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-acid shadow-[0_0_36px_6px_rgba(216,242,78,0.25)]"
        />
        <p
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 flex select-none items-center justify-center whitespace-nowrap font-display text-[clamp(8rem,28vw,28rem)] font-bold tracking-[-0.075em] text-paper/[0.055]"
        >
          BYTE
        </p>

        <div className="relative mx-auto w-full max-w-[90rem]">
          <p className="type-kicker text-acid">Start a conversation</p>
          <h2
            id="contact-title"
            className="type-display-xl mt-4 max-w-5xl sm:mt-6"
          >
            Have a problem
            <br />
            worth building?
          </h2>
          <div className="mt-10 grid gap-7 border-t border-line pt-7 sm:mt-14 sm:gap-8 sm:pt-8 lg:grid-cols-[1fr_2fr]">
            <p className="type-body max-w-sm text-dim">
              Tell any member of the team what you are working through. The
              conversation starts directly with a developer.
            </p>
            <a
              href={`mailto:${companyEmail}`}
              className="group flex min-h-24 items-center justify-between gap-5 border-y border-line bg-ink py-5 text-paper transition-colors hover:bg-paper hover:text-ink sm:min-h-32 sm:px-6"
            >
              <span className="flex min-w-0 items-center gap-4">
                <Mail className="h-5 w-5 shrink-0 text-acid group-hover:text-ink" />
                <span className="min-w-0">
                  <span className="type-title block">Email BYTE</span>
                  <span className="type-meta mt-1 block break-all text-dim group-hover:text-ink/70">
                    {companyEmail}
                  </span>
                </span>
              </span>
              <ArrowDownRight className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function CompanySections() {
  return (
    <>
      <AboutSection />
      <CapabilitiesSection />
      <ProcessSection />
      <ContactSection />
    </>
  );
}
