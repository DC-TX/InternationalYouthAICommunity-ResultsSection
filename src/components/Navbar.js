import React from "react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <nav className="mx-auto mt-4 flex w-[92%] max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-black/60 px-6 py-4 backdrop-blur-xl">
        {/* Logo 区域 */}
        <a href="#home" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-iyaiGreen text-lg font-black text-iyaiDark shadow-glowGreen">
            AI
          </div>

          <div>
            <p className="text-sm font-bold tracking-widest text-white">
              IYAI COMMUNITY
            </p>
            <p className="text-xs text-white/50">International Youth AI</p>
          </div>
        </a>

        {/* 导航链接 */}
        <div className="hidden items-center gap-8 md:flex">
          <a className="text-sm text-white/80 hover:text-iyaiGreen" href="#home">
            首页
          </a>
          <a className="text-sm text-white/80 hover:text-iyaiGreen" href="#projects">
            项目招募
          </a>
          <a className="text-sm text-white/80 hover:text-iyaiGreen" href="#results">
            成果展示
          </a>
          <a className="text-sm text-white/80 hover:text-iyaiGreen" href="#agent">
            Agent
          </a>
        </div>

        {/* 登录按钮，Demo 里先不做真实登录 */}
        <button className="rounded-xl bg-iyaiGreen px-5 py-2 text-sm font-bold text-iyaiDark transition hover:scale-105 hover:shadow-glowGreen">
          登录 / 注册
        </button>
      </nav>
    </header>
  );
}
