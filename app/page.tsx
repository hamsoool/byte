"use client";

import { MotionConfig } from "framer-motion";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import StageExperience from "@/components/StageExperience";
import CompanySections from "@/components/CompanySections";
import SiteFooter from "@/components/SiteFooter";
import GrainOverlay from "@/components/GrainOverlay";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import members from "@/data/members";

export default function Home() {
  return (
    <MotionConfig reducedMotion="user">
      <SmoothScrollProvider>
        <GrainOverlay />
        <Nav />
        <main className="relative bg-ink">
          <Hero />
          <StageExperience members={members} />
          <CompanySections />
        </main>
        <SiteFooter />
      </SmoothScrollProvider>
    </MotionConfig>
  );
}
