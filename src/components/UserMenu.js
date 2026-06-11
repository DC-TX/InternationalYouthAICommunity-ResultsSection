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
        className="flex items-center gap-3 rounded-md border border-line bg-white px-2.5 py-2 transition hover:bg-paper"
      >
        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-github text-xs font-bold text-white">
          李
        </div>

        <div className="hidden text-left md:block">
          <p className="text-xs font-semibold text-ink">李明远</p>
          <p className="font-mono text-[11px] text-mute">@liming-ai</p>
        </div>
      </button>

      {open && (
        <div className="absolute right-0 top-full pt-3">
          <div className="w-52 rounded-xl border border-line bg-white p-2 shadow-soft">
            <button
              type="button"
              onClick={goProfile}
              className="block w-full rounded-md px-3 py-2 text-left text-sm text-ink hover:bg-paper"
            >
              我的主页
            </button>

            <button
              type="button"
              onClick={logout}
              className="block w-full rounded-md px-3 py-2 text-left text-sm text-[#9F2F2D] hover:bg-paleRed"
            >
              登出
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
