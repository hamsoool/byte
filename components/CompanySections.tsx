"use client";

import { useRef } from "react";
import {
  motion,
  MotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowDownRight, Mail } from "lucide-react";
import members from "@/data/members";

const capabilities = [
  {
    title: "WEB APPLICATIONS",
    description:
      "Responsive React interfaces shaped around real user flows and maintainable components.",
    tools: "REACT / TYPESCRIPT",
  },
  {
    title: "BACKEND SYSTEMS",
    description:
      "Node.js services and application logic that keep the product dependable behind the screen.",
    tools: "NODE.JS / APIs",
  },
  {
    title: "DATA FOUNDATIONS",
    description:
      "Practical SQL schemas and data access patterns built to support the application clearly.",
    tools: "SQL / DATA",
  },
  {
    title: "DELIVERY WORKFLOW",
    description:
      "Version-controlled development with a shared codebase and a clear path from change to release.",
    tools: "GIT / COLLABORATION",
  },
];

const process = [
  {
    label: "UNDERSTAND",
    copy: "Define the problem, the people using the product, and what a useful outcome looks like.",
  },
  {
    label: "STRUCTURE",
    copy: "Turn the brief into a practical system, from data and application logic to interface flow.",
  },
  {
    label: "BUILD",
    copy: "Develop the product across the stack with frequent working checkpoints.",
  },
  {
    label: "REFINE",
    copy: "Test the details, resolve rough edges, and prepare the work for a confident handoff.",
  },
];

function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const topLineX = useTransform(scrollYProgress, [0, 0.45, 1], [-140, 0, 90]);
  const bottomLineX = useTransform(scrollYProgress, [0, 0.45, 1], [140, 0, -90]);
  const contentY = useTransform(scrollYProgress, [0.08, 0.42], [90, 0]);
  const contentOpacity = useTransform(
    scrollYProgress,
    [0.08, 0.28, 0.82, 1],
    [0, 1, 1, 0.25]
  );

  return (
    <section
      ref={sectionRef}
      id="about"
      aria-labelledby="about-title"
      className="relative flex min-h-dvh items-center overflow-hidden border-y border-line bg-paper text-ink sm:min-h-[115vh]"
    >
      <div aria-hidden="true" className="absolute inset-x-0 top-[11%] select-none">
        <motion.p
          style={{ x: topLineX }}
          className="whitespace-nowrap font-display text-[clamp(4rem,14vw,12rem)] font-bold leading-none text-ink/[0.055]"
        >
          SMALL TEAM / SMALL TEAM /
        </motion.p>
        <motion.p
          style={{ x: bottomLineX }}
          className="mt-2 whitespace-nowrap text-right font-display text-[clamp(4rem,14vw,12rem)] font-bold leading-none text-ink/[0.055]"
        >
          FULL STACK / FULL STACK /
        </motion.p>
      </div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative mx-auto grid w-full max-w-[90rem] gap-10 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:py-32"
      >
        <div>
          <p className="font-mono text-xs tracking-[0.18em] text-ink/60">ABOUT BYTE</p>
          <h2
            id="about-title"
            className="mt-4 font-display text-[clamp(2rem,10vw,3.25rem)] font-bold leading-[0.92] tracking-[-0.055em] sm:mt-5 sm:text-[clamp(2.6rem,7vw,6.5rem)] sm:leading-[0.88]"
          >
            THREE MINDS.
            <br />
            ONE BUILD.
          </h2>
        </div>

        <div className="border-t border-ink/20 pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
          <p className="max-w-2xl text-lg leading-relaxed sm:text-xl lg:text-2xl">
            BYTE is a three-person technology studio building web products
            across the full stack, from the first data model to the interface
            people use.
          </p>
          <p className="mt-6 max-w-xl font-mono text-xs leading-6 text-ink/65 sm:text-sm sm:leading-7">
            Being Your Technology Experts means direct collaboration with the
            people doing the work. No handoff maze, just one team thinking
            through the system together.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

function CapabilitiesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const headingX = useTransform(scrollYProgress, [0, 0.3], [-70, 0]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.22], [0, 1]);
  const listX = useTransform(scrollYProgress, [0.06, 0.38], [100, 0]);
  const listOpacity = useTransform(scrollYProgress, [0.06, 0.28], [0, 1]);
  const ruleScale = useTransform(scrollYProgress, [0.08, 0.72], [0, 1]);

  return (
    <section
      ref={sectionRef}
      id="capabilities"
      aria-labelledby="capabilities-title"
      className="relative min-h-dvh overflow-hidden border-b border-line bg-ink px-5 py-20 sm:px-8 sm:py-28 lg:py-36"
    >
      <motion.div
        aria-hidden="true"
        style={{ scaleX: ruleScale, transformOrigin: "left" }}
        className="absolute left-0 right-0 top-0 h-px bg-acid"
      />

      <div className="mx-auto grid max-w-[90rem] gap-12 sm:gap-16 lg:grid-cols-[0.72fr_1.28fr]">
        <motion.div style={{ x: headingX, opacity: headingOpacity }}>
          <p className="font-mono text-xs tracking-[0.18em] text-dim">CAPABILITIES</p>
          <h2
            id="capabilities-title"
            className="mt-4 font-display text-[clamp(2.15rem,11vw,3.4rem)] font-bold leading-[0.92] tracking-[-0.05em] sm:mt-5 sm:text-[clamp(2.8rem,6vw,5.5rem)] sm:leading-[0.9]"
          >
            WHAT WE
            <br />
            BUILD.
          </h2>
          <p className="mt-6 max-w-sm text-sm leading-6 text-dim sm:mt-8 sm:text-base sm:leading-7">
            A focused technical range for taking a web product from structure
            to working interface.
          </p>
        </motion.div>

        <motion.div style={{ x: listX, opacity: listOpacity }}>
          {capabilities.map((capability) => (
            <article
              key={capability.title}
              className="group grid gap-3 border-t border-line py-6 sm:grid-cols-[1fr_1.15fr] sm:gap-8 sm:py-7"
            >
              <div>
                <h3 className="font-display text-lg font-semibold tracking-[-0.03em] text-paper sm:text-xl">
                  {capability.title}
                </h3>
                <p className="mt-2 font-mono text-[10px] tracking-[0.12em] text-acid">
                  {capability.tools}
                </p>
              </div>
              <p className="max-w-lg text-sm leading-6 text-dim transition-colors group-hover:text-paper/80 sm:text-base sm:leading-7">
                {capability.description}
              </p>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProcessStep({
  item,
  index,
  progress,
}: {
  item: (typeof process)[number];
  index: number;
  progress: MotionValue<number>;
}) {
  const start = 0.12 + index * 0.13;
  const opacity = useTransform(progress, [start, start + 0.11], [0.18, 1]);
  const x = useTransform(progress, [start, start + 0.11], [36, 0]);

  return (
    <motion.li
      style={{ opacity, x }}
      className="grid gap-3 border-t border-ink/20 py-6 sm:grid-cols-[4rem_0.75fr_1.25fr] sm:items-start sm:gap-8"
    >
      <span className="font-mono text-xs text-ink/45">
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="font-display text-lg font-semibold tracking-[-0.03em] sm:text-xl">
        {item.label}
      </h3>
      <p className="max-w-lg text-sm leading-6 text-ink/65 sm:text-base sm:leading-7">
        {item.copy}
      </p>
    </motion.li>
  );
}

function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const titleY = useTransform(scrollYProgress, [0, 0.3], [80, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.22], [0, 1]);
  const progressScale = useTransform(scrollYProgress, [0.08, 0.72], [0, 1]);

  return (
    <section
      ref={sectionRef}
      id="process"
      aria-labelledby="process-title"
      className="relative min-h-dvh overflow-hidden bg-paper px-5 py-20 text-ink sm:px-8 sm:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-[90rem]">
        <motion.div style={{ y: titleY, opacity: titleOpacity }} className="mb-12 sm:mb-20">
          <p className="font-mono text-xs tracking-[0.18em] text-ink/55">HOW WE WORK</p>
          <h2
            id="process-title"
            className="mt-4 max-w-4xl font-display text-[clamp(2rem,10.5vw,3.4rem)] font-bold leading-[0.94] tracking-[-0.05em] sm:mt-5 sm:text-[clamp(2.7rem,7vw,6.5rem)] sm:leading-[0.9]"
          >
            CLEAR FROM BRIEF TO BUILD.
          </h2>
        </motion.div>

        <div className="relative">
          <motion.div
            aria-hidden="true"
            style={{ scaleY: progressScale, transformOrigin: "top" }}
            className="absolute bottom-0 left-0 top-0 hidden w-px bg-acid lg:block"
          />
          <ol className="lg:pl-10">
            {process.map((item, index) => (
              <ProcessStep
                key={item.label}
                item={item}
                index={index}
                progress={scrollYProgress}
              />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"],
  });
  const wordScale = useTransform(scrollYProgress, [0, 0.62], [0.72, 1]);
  const wordOpacity = useTransform(scrollYProgress, [0, 0.42], [0, 0.055]);
  const contentY = useTransform(scrollYProgress, [0.04, 0.58], [100, 0]);
  const beamWidth = useTransform(scrollYProgress, [0.1, 0.8], ["18%", "72%"]);

  return (
    <section
      ref={sectionRef}
      id="contact"
      aria-labelledby="contact-title"
      className="relative border-t border-line bg-ink md:min-h-[165vh]"
    >
      <div className="relative flex min-h-dvh items-center overflow-hidden px-5 py-20 sm:px-8 sm:py-24 md:sticky md:top-0 md:h-dvh md:min-h-0">
        <motion.div
          aria-hidden="true"
          style={{ width: beamWidth }}
          className="absolute left-1/2 top-0 h-px -translate-x-1/2 bg-acid shadow-[0_0_36px_6px_rgba(216,242,78,0.25)]"
        />
        <motion.p
          aria-hidden="true"
          style={{ scale: wordScale, opacity: wordOpacity }}
          className="pointer-events-none absolute inset-0 flex select-none items-center justify-center whitespace-nowrap font-display text-[clamp(8rem,28vw,28rem)] font-bold tracking-[-0.09em] text-paper"
        >
          BYTE
        </motion.p>

        <motion.div
          style={{ y: contentY }}
          className="relative mx-auto w-full max-w-[90rem]"
        >
          <p className="font-mono text-xs tracking-[0.18em] text-acid">START A CONVERSATION</p>
          <h2
            id="contact-title"
          className="mt-4 max-w-5xl font-display text-[clamp(2.1rem,11vw,3.5rem)] font-bold leading-[0.92] tracking-[-0.055em] sm:mt-6 sm:text-[clamp(2.8rem,8vw,7.5rem)] sm:leading-[0.88]"
          >
            HAVE A PROBLEM
            <br />
            WORTH BUILDING?
          </h2>
          <div className="mt-10 grid gap-7 border-t border-line pt-7 sm:mt-14 sm:gap-8 sm:pt-8 lg:grid-cols-[1fr_2fr]">
            <p className="max-w-sm text-sm leading-6 text-dim sm:text-base sm:leading-7">
              Tell any member of the team what you are working through. The
              conversation starts directly with a developer.
            </p>
            <div className="grid border-y border-line sm:grid-cols-3 sm:gap-px sm:border-0 sm:bg-line">
              {members.map((member) => (
                <a
                  key={member.id}
                  href={member.link}
                  className="group flex min-h-16 items-center gap-4 border-b border-line bg-ink py-4 transition-colors last:border-b-0 hover:bg-paper hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-acid sm:min-h-28 sm:flex-col sm:items-stretch sm:justify-between sm:border-0 sm:p-5"
                >
                  <Mail className="h-4 w-4 text-acid" />
                  <span className="flex min-w-0 flex-1 items-end justify-between gap-4 sm:mt-8 sm:flex-none">
                    <span className="min-w-0">
                      <span className="block font-display text-sm font-semibold">
                        {member.name.split(" ")[0]}
                      </span>
                      <span className="mt-1 block truncate font-mono text-[10px] tracking-wide text-dim">
                        {member.link.replace("mailto:", "")}
                      </span>
                    </span>
                    <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
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
