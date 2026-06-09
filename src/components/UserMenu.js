import React, { useState } from "react";

export default function UserMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* 右上角用户按钮，目前是静态模拟 */}
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
        <div className="absolute right-0 mt-3 w-80 rounded-3xl border border-white/10 bg-[#111122] p-5 shadow-2xl backdrop-blur-xl">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-iyaiPurple text-xl font-black text-white">
              李
            </div>

            <div>
              <p className="font-bold text-white">李明远</p>
              <p className="text-sm text-white/50">@liming-ai</p>
              <p className="text-xs text-iyaiGreen">GitHub 已绑定</p>
            </div>
          </div>

          <div className="my-4 h-px bg-white/10" />

          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-2xl bg-black/30 p-3 text-center">
              <p className="text-2xl font-black text-iyaiGreen">3</p>
              <p className="text-xs text-white/50">参与项目</p>
            </div>

            <div className="rounded-2xl bg-black/30 p-3 text-center">
              <p className="text-2xl font-black text-iyaiPurple">87</p>
              <p className="text-xs text-white/50">获得 Star</p>
            </div>
          </div>

          <div className="mt-4">
            <p className="mb-2 text-xs text-white/50">技能标签</p>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-iyaiGreen/10 px-3 py-1 text-xs text-iyaiGreen">
                #计算机视觉
              </span>
              <span className="rounded-full bg-iyaiPurple/10 px-3 py-1 text-xs text-iyaiPurple">
                #PyTorch
              </span>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70">
                #Python
              </span>
            </div>
          </div>

          <div className="mt-4 rounded-2xl border border-iyaiPurple/20 bg-iyaiPurple/5 p-3">
            <p className="text-sm font-bold text-white">AI 偏好系统</p>
            <p className="mt-1 text-xs leading-5 text-white/50">
              当前为静态 Demo，未来会根据技能、浏览、报名记录生成推荐偏好。
            </p>
          </div>

          <button
            onClick={() => setOpen(false)}
            className="mt-4 w-full rounded-xl bg-iyaiGreen px-4 py-3 text-sm font-bold text-iyaiDark transition hover:scale-[1.02] hover:shadow-glowGreen"
          >
            关闭
          </button>
        </div>
      )}
    </div>
  );
}
