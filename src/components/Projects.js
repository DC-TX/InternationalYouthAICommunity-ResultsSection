import React, { useMemo } from "react";
import useScrollReveal from "../hooks/useScrollReveal";
import { demoProjects } from "../data/projects";

/**
 * 随机打乱数组
 * 当前版本用于替代 Agent 个性化推荐
 */
function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

export default function Projects() {
  useScrollReveal();

  /**
   * 随机推荐逻辑：
   * 1. 先随机打乱所有项目
   * 2. 取前 3 个作为项目招募推荐
   *
   * 注意：
   * useMemo 确保组件本次渲染时结果固定，不会每秒跳动。
   */
  const randomProjects = useMemo(() => {
    return shuffleArray(demoProjects).slice(0, 3);
  }, []);

  return (
    <section id="projects" className="tech-grid bg-[#0b0b16] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="reveal reveal-left mb-12">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-iyaiPurple">
            Project Match
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-5xl">项目招募</h2>

          <p className="mt-5 max-w-2xl text-white/60">
            用户可以发布项目招募，其他成员可以申请加入。当前 Demo 使用随机推荐逻辑。
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {randomProjects.map((project, index) => (
            <article
              key={project.id}
              className={`reveal ${
                index % 2 === 0 ? "reveal-left" : "reveal-right"
              } glow-card rounded-3xl bg-white/5 p-[1px] transition hover:-translate-y-2`}
            >
              <div className="glow-card-content flex h-full flex-col rounded-3xl bg-iyaiDark/90 p-7">
                <div className="mb-5 flex items-center justify-between">
                  <span className="rounded-full bg-iyaiGreen/10 px-3 py-1 text-sm text-iyaiGreen">
                    {project.stage}
                  </span>

                  <span className="text-sm text-white/60">⭐ {project.star}</span>
                </div>

                <h3 className="text-2xl font-bold text-white">{project.name}</h3>

                <p className="mt-3 text-sm text-iyaiPurple">{project.theme}</p>

                <p className="mt-4 flex-1 leading-7 text-white/60">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex gap-3">
                  <button className="flex-1 rounded-xl bg-iyaiGreen px-4 py-3 text-sm font-bold text-iyaiDark transition hover:scale-105 hover:shadow-glowGreen">
                    申请加入
                  </button>

                  <button className="flex-1 rounded-xl border border-white/15 px-4 py-3 text-sm font-bold text-white transition hover:border-iyaiPurple hover:text-iyaiPurple">
                    查看详情
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="reveal reveal-up mt-12 rounded-3xl border border-iyaiGreen/20 bg-iyaiGreen/5 p-6 text-white/70">
          <span className="font-bold text-iyaiGreen">Demo 说明：</span>
          真实版本中，项目招募需要包含项目名称、主题、阶段、标签、Demo、GitHub 仓库、联合发起人等字段。
        </div>
      </div>
    </section>
  );
}
