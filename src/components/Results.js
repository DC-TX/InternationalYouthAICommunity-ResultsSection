import React, { useMemo } from "react";
import useScrollReveal from "../hooks/useScrollReveal";
import { demoProjects } from "../data/projects";

/**
 * 成果展示排序逻辑：
 * 1. 按 Star 数从高到低排序
 * 2. Star 数相同则随机微调
 */
function getResultProjects(projects) {
  return [...projects]
    .sort((a, b) => {
      if (b.star !== a.star) {
        return b.star - a.star;
      }

      return Math.random() - 0.5;
    })
    .slice(0, 4);
}

export default function Results() {
  useScrollReveal();

  const resultProjects = useMemo(() => {
    return getResultProjects(demoProjects);
  }, []);

  return (
    <section id="results" className="bg-iyaiBlack px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="reveal reveal-right mb-12 text-right">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-iyaiGreen">
            Results Section
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-5xl">成果展示</h2>

          <p className="ml-auto mt-5 max-w-2xl text-white/60">
            展示高 Star 项目与社区优秀成果。未来会结合 Agent 推荐和 GitHub README 抓取。
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {resultProjects.map((project, index) => (
            <article
              key={project.id}
              className={`reveal ${
                index % 2 === 0 ? "reveal-left" : "reveal-right"
              } glow-card rounded-3xl bg-white/5 p-[1px] transition hover:-translate-y-2`}
            >
              <div className="glow-card-content rounded-3xl bg-[#111122] p-7">
                {/* 项目封面占位图 */}
                <div className="mb-6 flex h-44 items-center justify-center rounded-2xl bg-gradient-to-br from-iyaiGreen/20 to-iyaiPurple/20">
                  <span className="text-5xl font-black text-white/20">AI</span>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {project.name}
                    </h3>

                    <p className="mt-2 text-sm text-white/50">
                      {project.stage} · {project.theme}
                    </p>
                  </div>

                  <div className="rounded-xl bg-iyaiGreen px-4 py-2 font-black text-iyaiDark">
                    ⭐ {project.star}
                  </div>
                </div>

                <p className="mt-5 leading-7 text-white/60">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={project.demoUrl}
                    className="rounded-xl bg-iyaiPurple px-5 py-3 text-sm font-bold text-white transition hover:scale-105 hover:shadow-glowPurple"
                  >
                    查看 Demo
                  </a>

                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-xl border border-white/15 px-5 py-3 text-sm font-bold text-white transition hover:border-iyaiGreen hover:text-iyaiGreen"
                    >
                      GitHub 仓库
                    </a>
                  ) : (
                    <button className="rounded-xl border border-white/10 px-5 py-3 text-sm font-bold text-white/30">
                      暂无 GitHub
                    </button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
