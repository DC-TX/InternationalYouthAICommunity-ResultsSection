import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ResultsPage from "./pages/ResultsPage";
import ProjectsPage from "./pages/ProjectsPage";
import ProfilePage from "./pages/ProfilePage";

const VALID_PAGES = ["home", "results", "projects", "profile"];

// 根据 URL hash 获取当前页面
function getPageFromHash() {
  const hash = window.location.hash.replace("#", "");

  if (VALID_PAGES.includes(hash)) {
    return hash;
  }

  return "home";
}

export default function App() {
  const [currentPage, setCurrentPage] = useState(getPageFromHash);

  // 统一页面跳转函数：
  // 1. 更新 React 状态
  // 2. 同步更新浏览器地址栏 hash
  function navigateToPage(page) {
    if (!VALID_PAGES.includes(page)) {
      page = "home";
    }

    setCurrentPage(page);

    if (page === "home") {
      window.history.pushState(null, "", "/");
    } else {
      window.history.pushState(null, "", `#${page}`);
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  // 支持用户直接访问 /#results、/#projects、/#profile
  // 也支持浏览器前进/后退
  useEffect(() => {
    function handleHashChange() {
      setCurrentPage(getPageFromHash());
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-premiumBg text-premiumText">
      <div className="relative z-10">
        <Navbar
          currentPage={currentPage}
          setCurrentPage={navigateToPage}
        />

        <main className="page-fade">
          {currentPage === "home" && (
            <HomePage setCurrentPage={navigateToPage} />
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
