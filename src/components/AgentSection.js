import React from "react";
import useScrollReveal from "../hooks/useScrollReveal";

export default function AgentSection() {
  useScrollReveal();

  return (
    <section id="agent" className="tech-grid bg-[#0b0b16] px-6 py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
        <div className="reveal reveal-left">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-iyaiPurple">
            AI Agent System
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            Agent 推荐系统
          </h2>

          <p className="mt-6 leading-8 text-white/60">
            未来网站会接入多个 Skill，再交给总 Agent 分析用户偏好，
            例如感兴趣的 AI 方向、技术水平、适合加入的项目和适合合作的人。
          </p>

          <p className="mt-4 leading-8 text-white/60">
            当前 Demo 中，Agent 系统暂时使用
            <span className="mx-2 font-bold text-iyaiGreen">
              随机推荐 + Star 排序
            </span>
            代替。
          </p>
        </div>

        <div className="reveal reveal-right glow-card rounded-3xl bg-white/5 p-[1px]">
          <div className="glow-card-content rounded-3xl bg-iyaiDark/90 p-8">
            <div className="mb-6 rounded-2xl bg-black/40 p-5">
              <p className="text-sm text-white/50">Skill 01</p>
              <p className="mt-2 text-xl font-bold text-iyaiGreen">
                Analyze User Preference
              </p>
            </div>

            <div className="mb-6 rounded-2xl bg-black/40 p-5">
              <p className="text-sm text-white/50">Skill 02</p>
              <p className="mt-2 text-xl font-bold text-iyaiPurple">
                Match Projects
              </p>
            </div>

            <div className="rounded-2xl bg-black/40 p-5">
              <p className="text-sm text-white/50">Main Agent</p>
              <p className="mt-2 text-xl font-bold text-white">
                Return Recommended Projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
