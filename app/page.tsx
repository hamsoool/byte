"use client";

import { MotionConfig } from "framer-motion";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import StageExperience from "@/components/StageExperience";
import SiteFooter from "@/components/SiteFooter";
import GrainOverlay from "@/components/GrainOverlay";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import members from "@/data/members";

export default function Home() {
  return (
    <MotionConfig reducedMotion="never">
      <SmoothScrollProvider>
        <GrainOverlay />
        <Nav totalMembers={members.length} />
        <main className="relative bg-ink">
          <Hero />
          <StageExperience members={members} />
        </main>
        <SiteFooter />
      </SmoothScrollProvider>
    </MotionConfig>
  );
}
