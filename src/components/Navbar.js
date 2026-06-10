import React from "react";
import UserMenu from "./UserMenu";

export default function Navbar({ currentPage, setCurrentPage }) {
  const navItems = [
    { key: "home", label: "首页" },
    { key: "projects", label: "项目招募" },
    { key: "results", label: "成果展示" }
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <nav className="mx-auto mt-4 flex w-[92%] max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-black/60 px-6 py-4 backdrop-blur-xl">
        {/* 左侧 Logo */}
        <button
          type="button"
          onClick={() => setCurrentPage("home")}
          className="flex items-center gap-3 text-left"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-iyaiGreen text-lg font-black text-iyaiDark shadow-glowGreen">
            AI
          </div>

          <div>
            <p className="text-sm font-bold tracking-widest text-white">
              IYAI COMMUNITY
            </p>
            <p className="text-xs text-white/50">International Youth AI</p>
          </div>
        </button>

        {/* 中间导航 */}
        <div className="hidden items-center gap-3 md:flex">
          {navItems.map(item => (
            <button
              type="button"
              key={item.key}
              onClick={() => setCurrentPage(item.key)}
              className={`rounded-xl px-4 py-2 text-sm font-bold transition ${
                currentPage === item.key
                  ? "bg-iyaiGreen text-iyaiDark shadow-glowGreen"
                  : "text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* 右上角用户系统 */}
        <UserMenu setCurrentPage={setCurrentPage} />
      </nav>
    </header>
  );
}
