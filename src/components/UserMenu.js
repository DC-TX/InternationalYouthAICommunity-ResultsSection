import React, { useState } from "react";

export default function UserMenu({ setCurrentPage }) {
  const [open, setOpen] = useState(false);

  function goProfile() {
    if (typeof setCurrentPage === "function") {
      setCurrentPage("profile");
      setOpen(false);
    }
  }

  function logout() {
    alert("当前为静态 Demo，暂未接入真实登出系统。");
    setOpen(false);
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="打开用户菜单"
        onClick={() => setOpen(prev => !prev)}
        className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] px-3 py-2 transition hover:bg-white/[0.1]"
      >
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-xs font-black text-[#050713]">
          李
        </div>

        <div className="hidden text-left md:block">
          <p className="text-xs font-bold text-white">李明远</p>
          <p className="font-mono text-[11px] text-white/40">@liming-ai</p>
        </div>
      </button>

      {open && (
        <div className="absolute right-0 top-full pt-3">
          <div
            role="menu"
            className="w-52 rounded-2xl border border-white/10 bg-[#080D1D]/95 p-2 shadow-[0_24px_90px_rgba(0,0,0,0.42)] backdrop-blur-xl"
          >
            <button
              type="button"
              role="menuitem"
              onClick={goProfile}
              className="block w-full rounded-xl px-3 py-2 text-left text-sm text-white/80 hover:bg-white/10 hover:text-white"
            >
              我的主页
            </button>

            <button
              type="button"
              role="menuitem"
              onClick={logout}
              className="block w-full rounded-xl px-3 py-2 text-left text-sm text-red-400 hover:bg-red-500/10 hover:text-red-300"
            >
              登出
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
