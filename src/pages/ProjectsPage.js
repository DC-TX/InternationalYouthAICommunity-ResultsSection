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
  const [applicantActionMessage, setApplicantActionMessage] = useState("");

  const myProjects = demoProjects.filter(project => project.isMine);

  return (
    <section className="dark-page-section min-h-screen px-6 pb-24 pt-36">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#4BFF5E]">
                Project recruitment with repository context
              </p>

              <h1 className="mt-4 text-6xl font-black leading-none tracking-[-0.055em] text-white">
                项目招募
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/58">
                招募页不只写项目标题，还要把 GitHub 仓库、README 状态、项目阶段和所需协作方向放在一起。
              </p>
            </div>

            <button
              type="button"
              onClick={() => setShowNewProject(true)}
              className="dark-primary-btn rounded-2xl px-6 py-4 text-sm"
            >
              发起招募
            </button>
          </div>
        </Reveal>

        <div className="mb-8 inline-flex rounded-2xl border border-white/10 bg-white/[0.055] p-1 backdrop-blur-xl">
          <button
            type="button"
            onClick={() => setTab("browse")}
            className={`rounded-xl px-6 py-3 text-sm font-black transition ${
              tab === "browse"
                ? "bg-[#4BFF5E] text-[#07100A]"
                : "text-white/50 hover:bg-white/10 hover:text-white"
            }`}
          >
            浏览招募
          </button>

          <button
            type="button"
            onClick={() => setTab("mine")}
            className={`rounded-xl px-6 py-3 text-sm font-black transition ${
              tab === "mine"
                ? "bg-[#4BFF5E] text-[#07100A]"
                : "text-white/50 hover:bg-white/10 hover:text-white"
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
                <h2 className="text-4xl font-black tracking-[-0.045em] text-white">
                  {project.name}
                </h2>

                <p className="mt-4 leading-7 text-white/58">{project.theme}</p>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  <Stat value={project.star} label="平台 Star" />
                  <Stat value={project.repoStars} label="Repo Star" />
                  <Stat value={project.applicants} label="报名" />
                </div>

                <div className="mt-6 rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-white/35">
                    GitHub sync
                  </p>
                  <p className="mt-2 font-mono text-sm text-white">
                    {project.githubRepo}
                  </p>
                  <p className="mt-2 text-sm text-white/55">
                    README 同步：{project.readmeSyncedAt}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => setShowApplicants(true)}
                    className="dark-primary-btn rounded-2xl px-5 py-3 text-sm"
                  >
                    查看报名表
                  </button>

                  <button
                    type="button"
                    disabled
                    title="Firebase 阶段接入真实编辑"
                    className="dark-secondary-btn rounded-2xl px-5 py-3 text-sm font-bold"
                  >
                    编辑项目（待接入）
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
          {applicantActionMessage && (
            <div className="rounded-2xl border border-[#4BFF5E]/20 bg-[#4BFF5E]/10 px-4 py-3 text-sm font-bold text-[#A4FFAD]">
              {applicantActionMessage}
            </div>
          )}

          {demoApplicants.map(applicant => (
            <div
              key={applicant.id}
              className="rounded-3xl border border-white/10 bg-white/[0.045] p-5"
            >
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-sm font-black text-[#07100A]">
                  {applicant.avatar}
                </div>

                <div className="flex-1">
                  <p className="font-black text-white">{applicant.name}</p>
                  <p className="font-mono text-xs text-white/40">
                    github.com/{applicant.github}
                  </p>
                  <p className="mt-1 text-sm text-white/55">{applicant.intro}</p>
                </div>

                <span className="tag tag-yellow">{applicant.remain}</span>

                <button
                  type="button"
                  onClick={() =>
                    setApplicantActionMessage(
                      `静态 Demo 已标记通过：${applicant.name}。Firebase 阶段会保存审核状态。`
                    )
                  }
                  className="dark-primary-btn rounded-2xl px-4 py-2 text-sm"
                >
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

          <h2 className="text-4xl font-black leading-tight tracking-[-0.045em] text-white">
            {project.name}
          </h2>

          <p className="mt-4 leading-7 text-white/58">{project.theme}</p>
        </div>

        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-sm font-black text-[#07100A]">
          {project.avatar}
        </div>
      </div>

      <div className="mt-5 rounded-3xl border border-white/10 bg-white/[0.04] p-5">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-white/35">
          linked repository
        </p>
        <p className="mt-2 font-mono text-sm text-white">{project.githubRepo}</p>
        <p className="mt-2 text-sm text-white/55">
          最后提交：{project.lastCommit}
        </p>
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

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <p className="text-sm text-white/45">
          {project.applicants} 人报名 · {project.repoStars} GitHub Stars
        </p>

        {project.isMine ? (
          <span className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm text-white/35">
            我发起的
          </span>
        ) : (
          <button
            type="button"
            onClick={onApply}
            className="dark-primary-btn rounded-2xl px-5 py-3 text-sm"
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
    <div className="rounded-3xl border border-white/10 bg-white/[0.045] p-4">
      <p className="text-3xl font-black tracking-[-0.04em] text-white">
        {value}
      </p>
      <p className="mt-1 text-xs text-white/38">{label}</p>
    </div>
  );
}

function ProjectForm({ onClose }) {
  const [form, setForm] = useState({
    name: "",
    theme: "",
    stage: "早期",
    githubUrl: "",
    tags: "",
    description: "",
    demoHtml: ""
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  function updateField(field, value) {
    setForm(prev => ({ ...prev, [field]: value }));
    setErrors(prev => ({ ...prev, [field]: "" }));
    setStatus("");
  }

  function handleSubmit() {
    const nextErrors = {};

    if (!form.name.trim()) nextErrors.name = "请输入项目名称。";
    if (!form.theme.trim()) nextErrors.theme = "请输入项目主题。";
    if (!form.githubUrl.trim()) {
      nextErrors.githubUrl = "请输入 GitHub 仓库链接。";
    } else if (!/^https:\/\/github\.com\/[^/]+\/[^/]+/.test(form.githubUrl.trim())) {
      nextErrors.githubUrl = "请输入有效的 GitHub 仓库链接。";
    }
    if (!form.tags.trim()) nextErrors.tags = "请输入至少一个项目标签。";
    if (!form.description.trim()) nextErrors.description = "请输入项目介绍。";

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("请先补全必填信息。");
      return;
    }

    setStatus("静态 Demo 已通过发布校验。Firebase 阶段会保存到数据库。");
  }

  return (
    <div className="space-y-4">
      {status && (
        <div className="rounded-2xl border border-[#4BFF5E]/20 bg-[#4BFF5E]/10 px-4 py-3 text-sm font-bold text-[#A4FFAD]">
          {status}
        </div>
      )}

      <Input
        label="项目名称"
        placeholder="输入项目名称"
        value={form.name}
        error={errors.name}
        onChange={value => updateField("name", value)}
      />
      <Input
        label="项目主题"
        placeholder="例如：具身智能、计算机视觉、RAG"
        value={form.theme}
        error={errors.theme}
        onChange={value => updateField("theme", value)}
      />

      <div className="grid gap-4 md:grid-cols-2">
        <Select
          label="项目阶段"
          value={form.stage}
          onChange={value => updateField("stage", value)}
        />
        <Input
          label="GitHub 仓库"
          placeholder="https://github.com/user/repo"
          value={form.githubUrl}
          error={errors.githubUrl}
          onChange={value => updateField("githubUrl", value)}
        />
      </div>

      <Input
        label="项目标签"
        placeholder="计算机视觉, 机器人, PyTorch"
        value={form.tags}
        error={errors.tags}
        onChange={value => updateField("tags", value)}
      />
      <Textarea
        label="项目介绍"
        placeholder="描述目标、技术路线、需要什么合作者"
        value={form.description}
        error={errors.description}
        onChange={value => updateField("description", value)}
      />
      <Textarea
        label="Demo HTML"
        placeholder="静态 Demo 阶段仅作为代码预览展示"
        value={form.demoHtml}
        onChange={value => updateField("demoHtml", value)}
      />

      <div className="flex justify-end gap-3 pt-2">
        <button
          type="button"
          onClick={onClose}
          className="dark-secondary-btn rounded-2xl px-5 py-3 text-sm font-bold"
        >
          取消
        </button>
        <button
          type="button"
          onClick={handleSubmit}
          className="dark-primary-btn rounded-2xl px-5 py-3 text-sm"
        >
          发布招募
        </button>
      </div>
    </div>
  );
}

function ApplyForm({ project, onClose }) {
  const [form, setForm] = useState({
    intro: "",
    contribution: "",
    github: ""
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  function updateField(field, value) {
    setForm(prev => ({ ...prev, [field]: value }));
    setErrors(prev => ({ ...prev, [field]: "" }));
    setStatus("");
  }

  function handleSubmit() {
    const nextErrors = {};

    if (!form.intro.trim()) nextErrors.intro = "请输入自我介绍。";
    if (!form.contribution.trim()) nextErrors.contribution = "请输入贡献方向。";
    if (!form.github.trim()) nextErrors.github = "请输入 GitHub 账号。";

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("请先补全报名信息。");
      return;
    }

    setStatus("静态 Demo 已通过报名校验。Firebase 阶段会保存报名信息。");
  }

  return (
    <div className="space-y-4">
      {status && (
        <div className="rounded-2xl border border-[#4BFF5E]/20 bg-[#4BFF5E]/10 px-4 py-3 text-sm font-bold text-[#A4FFAD]">
          {status}
        </div>
      )}

      <div className="rounded-3xl border border-white/10 bg-white/[0.045] p-5 text-sm leading-7 text-white/60">
        你的申请会进入仅项目发起者可见的报名表，最多保留 7 × 24 小时。当前申请将关联你的 GitHub 账号。
      </div>

      {project && (
        <div className="rounded-3xl border border-white/10 bg-white/[0.045] p-5">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#4BFF5E]">
            applying to
          </p>
          <p className="mt-2 font-black text-white">{project.name}</p>
          <p className="mt-2 font-mono text-xs text-white/40">
            {project.githubRepo}
          </p>
        </div>
      )}

      <Textarea
        label="自我介绍"
        placeholder="简要介绍技能和项目经历"
        value={form.intro}
        error={errors.intro}
        onChange={value => updateField("intro", value)}
      />
      <Textarea
        label="贡献方向"
        placeholder="描述你希望负责的模块"
        value={form.contribution}
        error={errors.contribution}
        onChange={value => updateField("contribution", value)}
      />
      <Input
        label="GitHub 账号"
        placeholder="your-github-handle"
        value={form.github}
        error={errors.github}
        onChange={value => updateField("github", value)}
      />

      <div className="flex justify-end gap-3 pt-2">
        <button
          type="button"
          onClick={onClose}
          className="dark-secondary-btn rounded-2xl px-5 py-3 text-sm font-bold"
        >
          取消
        </button>
        <button
          type="button"
          onClick={handleSubmit}
          className="dark-primary-btn rounded-2xl px-5 py-3 text-sm"
        >
          提交报名
        </button>
      </div>
    </div>
  );
}

function Input({ label, placeholder, value = "", onChange, error }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm text-white/50">{label}</span>
      <input
        value={value}
        placeholder={placeholder}
        onChange={event => onChange?.(event.target.value)}
        className="dark-input"
      />
      {error && <span className="mt-2 block text-xs text-red-300">{error}</span>}
    </label>
  );
}

function Select({ label, value, onChange }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm text-white/50">{label}</span>
      <select
        value={value}
        onChange={event => onChange?.(event.target.value)}
        className="dark-input"
      >
        <option>早期</option>
        <option>中期</option>
        <option>后期</option>
        <option>结项</option>
      </select>
    </label>
  );
}

function Textarea({ label, placeholder, value = "", onChange, error }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm text-white/50">{label}</span>
      <textarea
        rows={4}
        value={value}
        placeholder={placeholder}
        onChange={event => onChange?.(event.target.value)}
        className="dark-input resize-y"
      />
      {error && <span className="mt-2 block text-xs text-red-300">{error}</span>}
    </label>
  );
}
