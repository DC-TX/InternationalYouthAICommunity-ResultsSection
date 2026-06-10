import React, { useState } from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ResultsPage from "./pages/ResultsPage";
import ProjectsPage from "./pages/ProjectsPage";
import ProfilePage from "./pages/ProfilePage";
import Footer from "./components/Footer";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div className="min-h-screen bg-iyaiBlack text-white overflow-x-hidden">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="page-fade">
        {currentPage === "home" && <HomePage setCurrentPage={setCurrentPage} />}
        {currentPage === "results" && <ResultsPage />}
        {currentPage === "projects" && <ProjectsPage />}
        {currentPage === "profile" && <ProfilePage />}
      </main>
      <Footer />
    </div>
  );
}
