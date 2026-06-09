import React from "react";
import Hero from "../components/Hero";
import IntroSection from "../components/IntroSection";
import AgentSection from "../components/AgentSection";

export default function HomePage() {
  return (
    <>
      {/* 首页保持原来的设计，不改 */}
      <Hero />
      <IntroSection />
      <AgentSection />
    </>
  );
}
