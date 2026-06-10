import React, { useState } from "react";

export default function UserMenu({ setCurrentPage }) {
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    alert("登出操作（静态 Demo）");
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2 transition hover:bg-white/10"
      >
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-iyaiPurple text-sm font-black text-white">
          李
        </div>
        <div className="hidden text-left md:block">
          <p className="text-sm font-bold text-white">李明远</p>
          <p className="text-xs text-white/40">@liming-ai</p>
        </div>
      </button>

      {open && (
        <div className="absolute right-0 mt-3 w-56 rounded-3xl border border-white/10 bg-[#111122] p-4 shadow-2xl backdrop-blur-xl z-50">
          <button
            onClick={() => { setCurrentPage("profile"); setOpen(false); }}
            className="block w-full text-left rounded-lg px-3 py-2 text-white/80 hover:bg-white/10 hover:text-white"
          >
            我的主页
          </button>
          <button
            onClick={handleLogout}
            className="block w-full text-left rounded-lg px-3 py-2 text-red-500 hover:bg-white/10 hover:text-red-600"
          >
            登出
          </button>
        </div>
      )}
    </div>
  );
}
