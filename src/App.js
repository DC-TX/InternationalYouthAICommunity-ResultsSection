import React, { useState } from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ResultsPage from "./pages/ResultsPage";
import ProjectsPage from "./pages/ProjectsPage";
import Footer from "./components/Footer";

export default function App() {
  // 当前页面：home / results / projects
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div className="min-h-screen bg-iyaiBlack text-white overflow-x-hidden">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <main className="page-fade">
        {currentPage === "home" && <HomePage setCurrentPage={setCurrentPage} />}
        {currentPage === "results" && <ResultsPage />}
        {currentPage === "projects" && <ProjectsPage />}
      </main>

      <Footer />
    </div>
  );
}
