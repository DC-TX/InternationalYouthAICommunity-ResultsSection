import React, { useMemo, useState } from "react";
import Modal from "../components/Modal";
import Reveal from "../components/ui/Reveal";
import SpotlightCard from "../components/ui/SpotlightCard";
import { demoProjects } from "../data/projects";

export default function ResultsPage() {
  const [sortMode, setSortMode] = useState("star");
  const [projects, setProjects] = useState(demoProjects);
  const [selectedProject, setSelectedProject] = useState(null);
  const [demoProject, setDemoProject] = useState(null);

  const sortedProjects = useMemo(() => {
    const list = [...projects];

    if (sortMode === "star") list.sort((a, b) => b.star - a.star);
    if (sortMode === "repo") list.sort((a, b) => b.repoStars - a.repoStars);
    if (sortMode === "ai") list.sort((a, b) => b.aiScore - a.aiScore);
    if (sortMode === "new") list.sort((a, b) => b.id - a.id);

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
    <section className="dark-page-section min-h-screen px-6 pb-24 pt-36">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#4BFF5E]">
                Results linked with GitHub repositories
              </p>

              <h1 className="mt-4 text-6xl font-black leading-none tracking-[-0.055em] text-white">
                成果展示
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/58">
                每个成果不只展示项目名，还展示 GitHub 仓库、README 摘要、仓库 Star、最后提交和同步状态。
              </p>
            </div>

            <div className="dark-page-panel rounded-3xl p-5">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-white/35">
                current mode
              </p>
              <p className="mt-2 text-sm font-bold text-white">
                静态 Demo · 预留 GitHub API 接入
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mb-8 flex flex-wrap gap-3">
          {[
            { key: "star", label: "平台 Star" },
            { key: "repo", label: "GitHub Star" },
            { key: "ai", label: "Agent 推荐" },
            { key: "new", label: "最新项目" }
          ].map(item => (
            <button
              key={item.key}
              type="button"
              onClick={() => setSortMode(item.key)}
              className={`rounded-2xl px-5 py-3 text-sm font-black transition ${
                sortMode === item.key
                  ? "bg-[#4BFF5E] text-[#07100A] shadow-[0_0_38px_rgba(75,255,94,0.28)]"
                  : "border border-white/10 bg-white/[0.055] text-white/55 hover:bg-white/10 hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {sortedProjects.map((project, index) => (
            <Reveal key={project.id} delay={index * 60}>
              <SpotlightCard className="h-full p-6">
                <ProjectHeader project={project} />

                <div className="mt-6 rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <p className="font-mono text-xs uppercase tracking-[0.16em] text-white/35">
                      README 摘要
                    </p>
                    <span className="text-xs text-white/35">
                      synced {project.readmeSyncedAt}
                    </span>
                  </div>

                  <p className="text-sm leading-7 text-white/68">
                    {project.readme}
                  </p>
                </div>

                <div className="mt-5 grid grid-cols-3 gap-3">
                  <MiniMetric label="平台 Star" value={project.star} />
                  <MiniMetric label="Repo Star" value={project.repoStars} />
                  <MiniMetric label="AI Score" value={project.aiScore} />
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tag}
                      className={`tag ${
                        ["tag-blue", "tag-green", "tag-purple", "tag-yellow"][
                          tagIndex % 4
                        ]
                      }`}
                    >
                      {tag.replace("#", "")}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="dark-primary-btn rounded-2xl px-5 py-3 text-sm"
                  >
                    查看详情
                  </button>

                  {project.demoHtml && (
                    <button
                      type="button"
                      onClick={() => setDemoProject(project)}
                      className="dark-secondary-btn rounded-2xl px-5 py-3 text-sm font-bold"
                    >
                      Demo 预览
                    </button>
                  )}

                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="dark-secondary-btn rounded-2xl px-5 py-3 text-sm font-bold"
                    >
                      打开 GitHub
                    </a>
                  ) : (
                    <span className="rounded-2xl border border-white/10 bg-white/[0.035] px-5 py-3 text-sm text-white/30">
                      未绑定仓库
                    </span>
                  )}

                  <button
                    type="button"
                    onClick={() => toggleStar(project.id)}
                    className={`rounded-2xl px-5 py-3 text-sm font-black transition ${
                      project.starred
                        ? "bg-[#4BFF5E] text-[#07100A]"
                        : "border border-white/10 bg-white/[0.055] text-white/65 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {project.starred ? "已 Star" : "Star"}
                  </button>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>

      <Modal
        open={Boolean(selectedProject)}
        title={selectedProject?.name}
        onClose={() => setSelectedProject(null)}
      >
        {selectedProject && <ProjectDetail project={selectedProject} />}
      </Modal>

      <Modal
        open={Boolean(demoProject)}
        title={`${demoProject?.name} Demo`}
        onClose={() => setDemoProject(null)}
      >
        {demoProject && (
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.16em] text-white/35">
              HTML preview code
            </p>
            <pre className="max-h-[420px] overflow-auto whitespace-pre-wrap break-words rounded-3xl border border-white/10 bg-black/35 p-5 font-mono text-sm leading-7 text-white/70">
              {demoProject.demoHtml}
            </pre>
          </div>
        )}
      </Modal>
    </section>
  );
}

function ProjectHeader({ project }) {
  return (
    <div>
      <div className="flex items-start justify-between gap-5">
        <div>
          <div className="mb-3 flex flex-wrap gap-2">
            <span className="tag tag-green">{project.stage}</span>
            <span className="tag tag-blue">{project.repoHealth}</span>
          </div>

          <h2 className="text-4xl font-black leading-tight tracking-[-0.045em] text-white">
            {project.name}
          </h2>

          <p className="mt-3 leading-7 text-white/55">{project.theme}</p>
        </div>

        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-sm font-black text-[#07100A]">
          {project.avatar}
        </div>
      </div>

      <div className="mt-5 rounded-3xl border border-white/10 bg-white/[0.04] p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-white/35">
              GitHub repository
            </p>
            <p className="mt-2 font-mono text-sm text-white">
              {project.githubRepo}
            </p>
          </div>

          <div className="text-left md:text-right">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-white/35">
              last commit
            </p>
            <p className="mt-2 text-sm text-white/65">{project.lastCommit}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MiniMetric({ label, value }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.045] p-4">
      <p className="text-3xl font-black tracking-[-0.04em] text-white">
        {value}
      </p>
      <p className="mt-1 text-xs text-white/38">{label}</p>
    </div>
  );
}

function ProjectDetail({ project }) {
  return (
    <div>
      <div className="mb-5 grid gap-3 md:grid-cols-3">
        <MiniMetric label="平台 Star" value={project.star} />
        <MiniMetric label="GitHub Star" value={project.repoStars} />
        <MiniMetric label="报名人数" value={project.applicants} />
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/[0.045] p-5">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#4BFF5E]">
          README from GitHub
        </p>
        <p className="mt-4 leading-8 text-white/70">{project.readme}</p>
      </div>

      <div className="mt-5 rounded-3xl border border-white/10 bg-white/[0.045] p-5">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#4BFF5E]">
          repository status
        </p>

        <div className="mt-4 space-y-2 text-sm text-white/65">
          <p>仓库：{project.githubRepo}</p>
          <p>分支：{project.githubBranch}</p>
          <p>同步：{project.readmeSyncedAt}</p>
          <p>最后提交：{project.lastCommit}</p>
        </div>
      </div>
    </div>
  );
}
