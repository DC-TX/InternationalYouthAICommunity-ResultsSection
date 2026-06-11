import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ResultsPage from "./pages/ResultsPage";
import ProjectsPage from "./pages/ProjectsPage";
import ProfilePage from "./pages/ProfilePage";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-paper text-ink">
      <div className="ambient" />

      <div className="relative z-10">
        <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

        <main className="page-fade">
          {currentPage === "home" && (
            <HomePage setCurrentPage={setCurrentPage} />
          )}
          {currentPage === "results" && <ResultsPage />}
          {currentPage === "projects" && <ProjectsPage />}
          {currentPage === "profile" && <ProfilePage />}
        </main>

        <Footer />
      </div>
    </div>
  );
}
