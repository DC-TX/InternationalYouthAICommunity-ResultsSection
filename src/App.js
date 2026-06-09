import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import IntroSection from "./components/IntroSection";
import Projects from "./components/Projects";
import Results from "./components/Results";
import AgentSection from "./components/AgentSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-iyaiBlack text-white overflow-x-hidden">
      <Navbar />

      <main>
        <Hero />
        <IntroSection />
        <Projects />
        <Results />
        <AgentSection />
      </main>

      <Footer />
    </div>
  );
}
