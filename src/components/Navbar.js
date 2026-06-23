import React from "react";
import UserMenu from "./UserMenu";
import DockNav from "./homeEffects/DockNav";

export default function Navbar({ currentPage, setCurrentPage }) {
  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 pt-4">
      <nav className="academy-navbar mx-auto flex max-w-7xl items-center justify-between">
        <button
          type="button"
          onClick={() => setCurrentPage("home")}
          className="academy-brand-lockup"
        >
          <div className="academy-logo-mark">AI</div>

          <div>
            <p>IYAI</p>
            <span>International Youth AI Community</span>
          </div>
        </button>

        <DockNav currentPage={currentPage} setCurrentPage={setCurrentPage} />

        <UserMenu setCurrentPage={setCurrentPage} />
      </nav>
    </header>
  );
}
