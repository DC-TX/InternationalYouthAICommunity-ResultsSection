import React from "react";
import { demoUser } from "../data/projects";
import { useAuth } from "../context/AuthContext";
import useProjects from "../hooks/useProjects";

export default function HomePage({ setCurrentPage }) {
  const { profile } = useAuth();
  const { projects } = useProjects();
  const dashboardUser = profile || demoUser;
  const featuredProjects = [...projects]
    .sort((a, b) => b.repoStars - a.repoStars)
    .slice(0, 3);

  return (
    <section className="academy-home">
      <div className="academy-intro-sky" aria-hidden="true" />
      <div className="academy-orbit" aria-hidden="true">
        <span className="academy-orbit-ring academy-orbit-ring-a" />
        <span className="academy-orbit-ring academy-orbit-ring-b" />
        <span className="academy-orbit-dot academy-orbit-dot-a" />
        <span className="academy-orbit-dot academy-orbit-dot-b" />
      </div>

      <div className="academy-hero-wrap">
        <div className="academy-hero-copy">
          <p className="academy-kicker title-rise">International Youth AI Community</p>

          <h1 className="academy-hero-title">
            <span className="title-rise title-delay-1">少年 AI 创作者</span>
            <span className="title-rise title-delay-2">从项目走向世界</span>
          </h1>

          <p className="academy-hero-text title-rise title-delay-3">
            连接全球少年 AI 项目、GitHub 仓库、成果展示和项目招募，让每一次创作都有被看见、协作和成长的路径。
          </p>

          <div className="academy-hero-actions title-rise title-delay-4">
            <button
              type="button"
              onClick={() => setCurrentPage("projects")}
              className="academy-btn academy-btn-primary"
            >
              发起项目招募
            </button>
            <button
              type="button"
              onClick={() => setCurrentPage("results")}
              className="academy-btn academy-btn-secondary"
            >
              查看成果展示
            </button>
          </div>
        </div>

        <div className="academy-hero-board title-rise title-delay-3">
          <div className="academy-board-header">
            <span>AI PROJECT BOARD</span>
            <strong>Live Community</strong>
          </div>

          <div className="academy-board-grid">
            <Metric value={dashboardUser.projectsCount || 0} label="我的项目" tone="blue" />
            <Metric value={dashboardUser.totalStars || 0} label="收到 Star" tone="coral" />
            <Metric value={dashboardUser.repositoriesSynced || 0} label="同步仓库" tone="teal" />
          </div>

          <div className="academy-feature-list">
            {featuredProjects.map((project, index) => (
              <ProjectStrip key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>

      <section className="academy-section academy-section-tight">
        <div className="academy-section-heading">
          <p className="academy-kicker">Product Focus</p>
          <h2>一个社区，三条项目成长路径</h2>
        </div>

        <div className="academy-path-grid">
          <PathCard
            index="01"
            title="成果展示"
            text="用 README 摘要、GitHub 仓库、Star、提交信息和 Demo 预览展示项目成果。"
            action="进入成果"
            onClick={() => setCurrentPage("results")}
          />
          <PathCard
            index="02"
            title="项目招募"
            text="围绕项目阶段、技能标签、GitHub 仓库和报名表组织协作，而不是只发布标题。"
            action="进入招募"
            onClick={() => setCurrentPage("projects")}
          />
          <PathCard
            index="03"
            title="个人主页"
            text="记录 GitHub 身份、个人项目、收到的 Star 和仓库同步数据，形成可信创作者档案。"
            action="查看主页"
            onClick={() => setCurrentPage("profile")}
          />
        </div>
      </section>
    </section>
  );
}

function Metric({ value, label, tone }) {
  return (
    <div className={`academy-metric academy-metric-${tone}`}>
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}

function ProjectStrip({ project, index }) {
  return (
    <article className="academy-project-strip">
      <div>
        <span className="academy-strip-index">0{index + 1}</span>
        <h3>{project.name}</h3>
        <p>{project.githubRepo}</p>
      </div>
      <div className="academy-strip-score">
        <strong>{project.repoStars}</strong>
        <span>Repo Stars</span>
      </div>
    </article>
  );
}

function PathCard({ index, title, text, action, onClick }) {
  return (
    <article className="academy-path-card">
      <span>{index}</span>
      <h3>{title}</h3>
      <p>{text}</p>
      <button type="button" onClick={onClick} className="academy-link-btn">
        {action}
      </button>
    </article>
  );
}
