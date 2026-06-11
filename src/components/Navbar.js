import React from "react";
import UserMenu from "./UserMenu";

export default function Navbar({ currentPage, setCurrentPage }) {
  const navItems = [
    { key: "home", label: "首页" },
    { key: "projects", label: "项目招募" },
    { key: "results", label: "成果展示" }
  ];

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 pt-4">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-[#080C16]/75 px-5 py-3 shadow-soft backdrop-blur-2xl">
        <button
          type="button"
          onClick={() => setCurrentPage("home")}
          className="flex items-center gap-3 text-left"
        >
          <div className="gradient-border flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 font-serif text-lg font-black text-white">
            AI
          </div>

          <div>
            <p className="text-xs font-black uppercase tracking-[0.26em] text-white">
              IYAI
            </p>
            <p className="hidden text-xs text-white/45 sm:block">
              International Youth AI Community
            </p>
          </div>
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map(item => (
            <button
              key={item.key}
              type="button"
              onClick={() => setCurrentPage(item.key)}
              className={`rounded-xl px-5 py-2 text-sm font-bold transition ${
                currentPage === item.key
                  ? "bg-white text-[#070A12]"
                  : "text-white/55 hover:bg-white/10 hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <UserMenu setCurrentPage={setCurrentPage} />
      </nav>
    </header>
  );
}
