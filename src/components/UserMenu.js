import React, { useState } from "react";

export default function UserMenu({ setCurrentPage }) {
  const [open, setOpen] = useState(false);

  function goProfile() {
    if (typeof setCurrentPage === "function") {
      setCurrentPage("profile");
      setOpen(false);
    } else {
      console.error("setCurrentPage is not a function. 请检查 App.js 和 Navbar.js 的 props 传递。");
    }
  }

  function handleLogout() {
    alert("登出操作：当前是静态 Demo，暂未接入真实登录系统。");
    setOpen(false);
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* 右上角用户原型 */}
      <button
        type="button"
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
        <div className="absolute right-0 top-full z-[80] pt-3">
          <div className="w-48 rounded-2xl border border-white/10 bg-[#111122] p-2 shadow-2xl backdrop-blur-xl">
            <button
              type="button"
              onClick={goProfile}
              className="block w-full rounded-xl px-4 py-3 text-left text-sm font-bold text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              我的主页
            </button>

            <button
              type="button"
              onClick={handleLogout}
              className="block w-full rounded-xl px-4 py-3 text-left text-sm font-bold text-red-400 transition hover:bg-red-500/10 hover:text-red-300"
            >
              登出
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
