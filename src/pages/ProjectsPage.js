import React, { useState } from "react";
import Modal from "../components/Modal";
import Reveal from "../components/ui/Reveal";
import SpotlightCard from "../components/ui/SpotlightCard";
import { demoApplicants, demoProjects } from "../data/projects";

export default function ProjectsPage() {
  const [tab, setTab] = useState("browse");
  const [applyProject, setApplyProject] = useState(null);
  const [showNewProject, setShowNewProject] = useState(false);
  const [showApplicants, setShowApplicants] = useState(false);

  const myProjects = demoProjects.filter(project => project.isMine);

  return (
    <section className="min-h-screen px-6 pb-24 pt-36">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-mute">
                Project recruitment with repository context
              </p>
              <h1 className="mt-4 font-serif text-6xl leading-none tracking-[-0.045em] text-ink">
                项目招募
              </h1>
              <p className="mt-5 max-w-2xl leading-8 text-mute">
                招募页不只写项目标题，还要把 GitHub 仓库、README 状态、项目阶段和所需协作方向放在一起。
              </p>
            </div>

            <button
              type="button"
              onClick={() => setShowNewProject(true)}
              className="rounded-md bg-ink px-6 py-3 text-sm font-semibold text-white active:scale-[0.98]"
            >
              发起招募
            </button>
          </div>
        </Reveal>

        <div className="mb-8 inline-flex rounded-lg border border-line bg-white p-1">
          <button
            type="button"
            onClick={() => setTab("browse")}
            className={`rounded-md px-5 py-2 text-sm ${
              tab === "browse" ? "bg-ink text-white" : "text-mute hover:text-ink"
            }`}
          >
            浏览招募
          </button>

          <button
            type="button"
            onClick={() => setTab("mine")}
            className={`rounded-md px-5 py-2 text-sm ${
              tab === "mine" ? "bg-ink text-white" : "text-mute hover:text-ink"
            }`}
          >
            我发起的
          </button>
        </div>

        {tab === "browse" && (
          <div className="grid gap-6 lg:grid-cols-2">
            {demoProjects.map((project, index) => (
              <Reveal key={project.id} delay={index * 60}>
                <SpotlightCard className="h-full p-6">
                  <RecruitCard
                    project={project}
                    onApply={() => setApplyProject(project)}
                  />
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        )}

        {tab === "mine" && (
          <div className="grid gap-6 lg:grid-cols-2">
            {myProjects.map(project => (
              <SpotlightCard key={project.id} className="p-6">
                <h2 className="font-serif text-4xl tracking-[-0.04em] text-ink">
                  {project.name}
                </h2>

                <p className="mt-4 leading-7 text-mute">{project.theme}</p>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  <Stat value={project.star} label="平台 Star" />
                  <Stat value={project.repoStars} label="Repo Star" />
                  <Stat value={project.applicants} label="报名" />
                </div>

                <div className="mt-6 rounded-lg border border-line bg-bone p-4">
                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-mute">
                    GitHub sync
                  </p>
                  <p className="mt-2 font-mono text-sm text-ink">
                    {project.githubRepo}
                  </p>
                  <p className="mt-2 text-sm text-mute">
                    README 同步：{project.readmeSyncedAt}
                  </p>
                </div>

                <div className="mt-6 flex gap-3">
                  <button
                    type="button"
                    onClick={() => setShowApplicants(true)}
                    className="rounded-md bg-ink px-4 py-2 text-sm font-semibold text-white"
                  >
                    查看报名表
                  </button>

                  <button
                    type="button"
                    className="rounded-md border border-line bg-white px-4 py-2 text-sm text-ink hover:bg-bone"
                  >
                    编辑项目
                  </button>
                </div>
              </SpotlightCard>
            ))}
          </div>
        )}
      </div>

      <Modal
        open={showNewProject}
        title="发起项目招募"
        onClose={() => setShowNewProject(false)}
      >
        <ProjectForm onClose={() => setShowNewProject(false)} />
      </Modal>

      <Modal
        open={Boolean(applyProject)}
        title={`报名申请：${applyProject?.name}`}
        onClose={() => setApplyProject(null)}
      >
        <ApplyForm project={applyProject} onClose={() => setApplyProject(null)} />
      </Modal>

      <Modal
        open={showApplicants}
        title="申请报名表"
        onClose={() => setShowApplicants(false)}
      >
        <div className="space-y-3">
          {demoApplicants.map(applicant => (
            <div
              key={applicant.id}
              className="rounded-lg border border-line bg-bone p-4"
            >
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-github text-sm font-bold text-white">
                  {applicant.avatar}
                </div>

                <div className="flex-1">
                  <p className="font-semibold text-ink">{applicant.name}</p>
                  <p className="font-mono text-xs text-mute">
                    github.com/{applicant.github}
                  </p>
                  <p className="mt-1 text-sm text-mute">{applicant.intro}</p>
                </div>

                <span className="tag tag-yellow">{applicant.remain}</span>

                <button className="rounded-md bg-ink px-4 py-2 text-sm text-white">
                  通过
                </button>
              </div>
            </div>
          ))}
        </div>
      </Modal>
    </section>
  );
}

function RecruitCard({ project, onApply }) {
  return (
    <div>
      <div className="flex items-start justify-between gap-5">
        <div>
          <div className="mb-3 flex flex-wrap gap-2">
            <span className="tag tag-green">{project.stage}</span>
            <span className="tag tag-blue">{project.repoHealth}</span>
          </div>

          <h2 className="font-serif text-4xl leading-tight tracking-[-0.04em] text-ink">
            {project.name}
          </h2>

          <p className="mt-4 leading-7 text-mute">{project.theme}</p>
        </div>

        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-github text-sm font-bold text-white">
          {project.avatar}
        </div>
      </div>

      <div className="mt-5 rounded-lg border border-line bg-bone p-4">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-mute">
          linked repository
        </p>
        <p className="mt-1 font-mono text-sm text-ink">{project.githubRepo}</p>
        <p className="mt-2 text-sm text-mute">最后提交：{project.lastCommit}</p>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag, index) => (
          <span
            key={tag}
            className={`tag ${["tag-blue", "tag-green", "tag-purple"][index % 3]}`}
          >
            {tag.replace("#", "")}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between gap-4">
        <p className="text-sm text-mute">
          {project.applicants} 人报名 · {project.repoStars} GitHub Stars
        </p>

        {project.isMine ? (
          <span className="rounded-md border border-line bg-white px-4 py-2 text-sm text-mute">
            我发起的
          </span>
        ) : (
          <button
            type="button"
            onClick={onApply}
            className="rounded-md bg-ink px-4 py-2 text-sm font-semibold text-white"
          >
            报名加入
          </button>
        )}
      </div>
    </div>
  );
}

function Stat({ value, label }) {
  return (
    <div className="rounded-lg border border-line bg-white p-4">
      <p className="font-serif text-3xl tracking-[-0.04em]">{value}</p>
      <p className="mt-1 text-xs text-mute">{label}</p>
    </div>
  );
}

function ProjectForm({ onClose }) {
  return (
    <div className="space-y-4">
      <Input label="项目名称" placeholder="输入项目名称" />
      <Input label="项目主题" placeholder="例如：具身智能、计算机视觉、RAG" />

      <div className="grid gap-4 md:grid-cols-2">
        <Select label="项目阶段" />
        <Input label="GitHub 仓库" placeholder="https://github.com/user/repo" />
      </div>

      <Input label="项目标签" placeholder="计算机视觉, 机器人, PyTorch" />
      <Textarea label="项目介绍" placeholder="描述目标、技术路线、需要什么合作者" />
      <Textarea label="Demo HTML" placeholder="静态 Demo 阶段可粘贴 HTML 预览代码" />

      <div className="flex justify-end gap-3 pt-2">
        <button
          type="button"
          onClick={onClose}
          className="rounded-md border border-line px-5 py-2 text-sm text-ink"
        >
          取消
        </button>
        <button
          type="button"
          onClick={onClose}
          className="rounded-md bg-ink px-5 py-2 text-sm text-white"
        >
          发布招募
        </button>
      </div>
    </div>
  );
}

function ApplyForm({ project, onClose }) {
  return (
    <div className="space-y-4">
      <div className="rounded-lg border border-line bg-bone p-4 text-sm leading-7 text-mute">
        你的申请会进入仅项目发起者可见的报名表，最多保留 7 × 24 小时。当前申请将关联你的 GitHub 账号。
      </div>

      {project && (
        <div className="rounded-lg border border-line bg-white p-4">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-mute">
            applying to
          </p>
          <p className="mt-1 font-semibold text-ink">{project.name}</p>
          <p className="mt-1 font-mono text-xs text-mute">{project.githubRepo}</p>
        </div>
      )}

      <Textarea label="自我介绍" placeholder="简要介绍技能和项目经历" />
      <Textarea label="贡献方向" placeholder="描述你希望负责的模块" />
      <Input label="GitHub 账号" placeholder="your-github-handle" />

      <div className="flex justify-end gap-3 pt-2">
        <button
          type="button"
          onClick={onClose}
          className="rounded-md border border-line px-5 py-2 text-sm text-ink"
        >
          取消
        </button>
        <button
          type="button"
          onClick={onClose}
          className="rounded-md bg-ink px-5 py-2 text-sm text-white"
        >
          提交报名
        </button>
      </div>
    </div>
  );
}

function Input({ label, placeholder }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm text-mute">{label}</span>
      <input
        placeholder={placeholder}
        className="w-full rounded-md border border-line bg-bone px-4 py-3 text-sm text-ink outline-none focus:border-ink"
      />
    </label>
  );
}

function Select({ label }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm text-mute">{label}</span>
      <select className="w-full rounded-md border border-line bg-bone px-4 py-3 text-sm text-ink outline-none focus:border-ink">
        <option>早期</option>
        <option>中期</option>
        <option>后期</option>
        <option>结项</option>
      </select>
    </label>
  );
}

function Textarea({ label, placeholder }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm text-mute">{label}</span>
      <textarea
        rows={4}
        placeholder={placeholder}
        className="w-full resize-y rounded-md border border-line bg-bone px-4 py-3 text-sm text-ink outline-none focus:border-ink"
      />
    </label>
  );
}
