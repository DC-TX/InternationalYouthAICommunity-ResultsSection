import React from "react";
import UserMenu from "./UserMenu";
import DockNav from "./homeEffects/DockNav";

export default function Navbar({ currentPage, setCurrentPage }) {
  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 pt-4">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-3xl border border-white/10 bg-[#050713]/70 px-5 py-3 shadow-[0_24px_90px_rgba(0,0,0,0.38)] backdrop-blur-2xl">
        <button
          type="button"
          onClick={() => setCurrentPage("home")}
          className="flex items-center gap-3 text-left"
        >
          <div className="home-logo-mark">AI</div>

          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-white">
              IYAI
            </p>
            <p className="hidden text-xs text-white/45 sm:block">
              International Youth AI Community
            </p>
          </div>
        </button>

        <DockNav currentPage={currentPage} setCurrentPage={setCurrentPage} />

        <UserMenu setCurrentPage={setCurrentPage} />
      </nav>
    </header>
  );
}
