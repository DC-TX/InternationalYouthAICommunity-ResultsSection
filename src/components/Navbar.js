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
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-xl border border-line bg-bone/90 px-4 py-3 backdrop-blur-md">
        <button
          type="button"
          onClick={() => setCurrentPage("home")}
          className="flex items-center gap-3 text-left"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-md border border-line bg-white font-serif text-lg font-bold text-ink">
            AI
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ink">
              IYAI
            </p>
            <p className="hidden text-xs text-mute sm:block">
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
              className={`rounded-md px-4 py-2 text-sm transition ${
                currentPage === item.key
                  ? "bg-ink text-white"
                  : "text-mute hover:bg-white hover:text-ink"
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
