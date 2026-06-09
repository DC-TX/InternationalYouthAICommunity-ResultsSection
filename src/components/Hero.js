import React from "react";

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-gradient tech-grid relative flex min-h-screen items-center overflow-hidden px-6 pt-28"
    >
      {/* 背景装饰线 */}
      <div className="absolute left-[-120px] top-[20%] h-72 w-72 rounded-full border border-iyaiGreen/30" />
      <div className="absolute right-[-160px] bottom-[8%] h-96 w-96 rounded-full border border-iyaiPurple/30" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 md:grid-cols-2">
        {/* 左侧文案 */}
        <div className="reveal reveal-left active">
          <p className="mb-4 inline-flex rounded-full border border-iyaiGreen/40 bg-iyaiGreen/10 px-4 py-2 text-sm text-iyaiGreen">
            Global Youth AI Project Community
          </p>

          <h1 className="max-w-3xl text-5xl font-black leading-tight text-white md:text-7xl">
            国际少年
            <span className="block text-iyaiGreen">AI 社区</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
            连接全球少年 AI 创作者，让每一个项目都能找到合作者、展示舞台与成长方向。
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#results"
              className="rounded-xl bg-iyaiGreen px-7 py-3 font-bold text-iyaiDark transition hover:scale-105 hover:shadow-glowGreen"
            >
              探索成果
            </a>

            <a
              href="#projects"
              className="rounded-xl bg-iyaiPurple px-7 py-3 font-bold text-white transition hover:scale-105 hover:shadow-glowPurple"
            >
              发起项目招募
            </a>
          </div>
        </div>

        {/* 右侧视觉卡片 */}
        <div className="reveal reveal-right active">
          <div className="float-slow relative rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
            <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-iyaiGreen/30 blur-3xl" />
            <div className="absolute -bottom-8 -left-8 h-28 w-28 rounded-full bg-iyaiPurple/30 blur-3xl" />

            <div className="relative rounded-[1.5rem] bg-iyaiDark/90 p-8">
              <p className="text-sm text-white/50">Live Community Demo</p>

              <h2 className="mt-3 text-3xl font-black text-white">
                Project Match
              </h2>

              <div className="mt-6 space-y-4">
                <div className="rounded-xl bg-black/40 p-4">
                  <p className="text-sm text-iyaiGreen">#计算机视觉</p>
                  <p className="mt-1 font-bold">AI 视觉识别助手</p>
                </div>

                <div className="rounded-xl bg-black/40 p-4">
                  <p className="text-sm text-iyaiPurple">#具身智能</p>
                  <p className="mt-1 font-bold">机器人手臂控制系统</p>
                </div>

                <div className="rounded-xl bg-black/40 p-4">
                  <p className="text-sm text-iyaiGreen">#大语言模型</p>
                  <p className="mt-1 font-bold">校园智能问答 Bot</p>
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-iyaiGreen/30 bg-iyaiGreen/10 p-4 text-sm text-white/70">
                当前 Demo 推荐逻辑：随机推荐 + Star 排序
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
