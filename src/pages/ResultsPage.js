import React, { useMemo, useState } from "react";
import Modal from "../components/Modal";
import { demoProjects } from "../data/projects";

export default function ResultsPage() {
  const [sortMode, setSortMode] = useState("star");
  const [projects, setProjects] = useState(demoProjects);
  const [selectedProject, setSelectedProject] = useState(null);
  const [demoProject, setDemoProject] = useState(null);

  const sortedProjects = useMemo(() => {
    const list = [...projects];

    if (sortMode === "star") {
      list.sort((a, b) => b.star - a.star);
    }

    if (sortMode === "ai") {
      list.sort((a, b) => b.aiScore - a.aiScore);
    }

    if (sortMode === "new") {
      list.sort((a, b) => b.id - a.id);
    }

    return list;
  }, [projects, sortMode]);

  function toggleStar(projectId) {
    setProjects(prev =>
      prev.map(project =>
        project.id === projectId
          ? {
              ...project,
              starred: !project.starred,
              star: project.starred ? project.star - 1 : project.star + 1
            }
          : project
      )
    );
  }

  return (
    <section className="min-h-screen bg-iyaiBlack px-6 pb-24 pt-36">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-iyaiGreen">
              Results Section
            </p>
            <h1 className="mt-4 text-5xl font-black text-white">成果展示</h1>
            <p className="mt-4 max-w-2xl text-white/60">
              当前根据 Star 数、随机 AI 推荐分和最新项目排序。未来接入 Agent 后会改成个性化推荐。
            </p>
          </div>

          <div className="rounded-2xl border border-iyaiGreen/20 bg-iyaiGreen/10 px-4 py-3 text-sm text-iyaiGreen">
            AI 随机推荐 Demo
          </div>
        </div>

        <div className="mb-8 flex flex-wrap gap-3">
          {[
            { key: "star", label: "⭐ Star 数" },
            { key: "ai", label: "AI 推荐" },
            { key: "new", label: "最新" }
          ].map(item => (
            <button
              key={item.key}
              onClick={() => setSortMode(item.key)}
              className={`rounded-xl px-5 py-3 text-sm font-bold transition ${
                sortMode === item.key
                  ? "bg-iyaiGreen text-iyaiDark shadow-glowGreen"
                  : "border border-white/10 text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {sortedProjects.map(project => (
            <article
              key={project.id}
              className="glow-card rounded-3xl bg-white/5 p-[1px] transition hover:-translate-y-2"
            >
              <div className="glow-card-content h-full rounded-3xl bg-[#111122] p-7">
                <div className="mb-6 flex h-44 items-center justify-center rounded-2xl bg-gradient-to-br from-iyaiGreen/20 to-iyaiPurple/20">
                  <span className="text-5xl font-black text-white/20">AI</span>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-black text-white">
                      {project.name}
                    </h2>
                    <p className="mt-2 text-sm text-white/50">
                      {project.author} · {project.stage} · AI Score {project.aiScore}
                    </p>
                  </div>

                  <button
                    onClick={() => toggleStar(project.id)}
                    className={`rounded-xl px-4 py-2 text-sm font-black transition ${
                      project.starred
                        ? "bg-iyaiGreen text-iyaiDark"
                        : "border border-white/10 text-white hover:border-iyaiGreen hover:text-iyaiGreen"
                    }`}
                  >
                    ⭐ {project.star}
                  </button>
                </div>

                <p className="mt-4 text-sm leading-7 text-white/60">
                  {project.theme}
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

                <div className="mt-5 rounded-2xl bg-black/30 p-4 text-sm leading-7 text-white/60">
                  <p className="mb-1 text-xs font-bold text-iyaiGreen">
                    README 摘要
                  </p>
                  {project.readme.slice(0, 110)}...
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="rounded-xl bg-iyaiPurple px-5 py-3 text-sm font-bold text-white transition hover:scale-105 hover:shadow-glowPurple"
                  >
                    查看详情
                  </button>

                  {project.demoHtml && (
                    <button
                      onClick={() => setDemoProject(project)}
                      className="rounded-xl border border-white/10 px-5 py-3 text-sm font-bold text-white transition hover:border-iyaiGreen hover:text-iyaiGreen"
                    >
                      查看 Demo
                    </button>
                  )}

                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-xl border border-white/10 px-5 py-3 text-sm font-bold text-white/70 transition hover:border-iyaiGreen hover:text-iyaiGreen"
                    >
                      GitHub
                    </a>
                  ) : (
                    <span className="rounded-xl border border-white/10 px-5 py-3 text-sm text-white/30">
                      暂无 GitHub
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Modal
        open={Boolean(selectedProject)}
        title={selectedProject?.name}
        onClose={() => setSelectedProject(null)}
      >
        {selectedProject && (
          <div>
            <div className="mb-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-iyaiGreen/10 px-3 py-1 text-sm text-iyaiGreen">
                {selectedProject.stage}
              </span>
              <span className="rounded-full bg-iyaiPurple/10 px-3 py-1 text-sm text-iyaiPurple">
                ⭐ {selectedProject.star}
              </span>
            </div>

            <p className="text-sm leading-8 text-white/70">
              {selectedProject.readme}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {selectedProject.tags.map(tag => (
                <span key={tag} className="rounded-full bg-white/10 px-3 py-1 text-xs">
                  {tag}
                </span>
              ))}
            </div>

            <button className="mt-6 rounded-xl bg-iyaiGreen px-5 py-3 text-sm font-bold text-iyaiDark">
              报名加入
            </button>
          </div>
        )}
      </Modal>

      <Modal
        open={Boolean(demoProject)}
        title={`${demoProject?.name} — Demo`}
        onClose={() => setDemoProject(null)}
      >
        {demoProject && (
          <div className="rounded-2xl bg-black p-4">
            <div className="mb-3 text-xs text-white/40">HTML Demo 预览</div>
            <div dangerouslySetInnerHTML={{ __html: demoProject.demoHtml }} />
          </div>
        )}
      </Modal>
    </section>
  );
}
