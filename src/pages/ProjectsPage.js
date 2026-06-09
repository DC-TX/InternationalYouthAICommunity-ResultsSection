import React, { useState } from "react";
import Modal from "../components/Modal";
import { demoApplicants, demoProjects } from "../data/projects";

export default function ProjectsPage() {
  const [tab, setTab] = useState("browse");
  const [applyProject, setApplyProject] = useState(null);
  const [showNewProject, setShowNewProject] = useState(false);
  const [showApplicants, setShowApplicants] = useState(false);

  const myProjects = demoProjects.filter(project => project.isMine);

  return (
    <section className="min-h-screen bg-[#0b0b16] px-6 pb-24 pt-36">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-iyaiPurple">
              Project Match
            </p>
            <h1 className="mt-4 text-5xl font-black text-white">项目招募</h1>
            <p className="mt-4 max-w-2xl text-white/60">
              像游戏组队一样发起项目招募，寻找联合发起人、开发者、研究伙伴和 Demo 共创者。
            </p>
          </div>

          <button
            onClick={() => setShowNewProject(true)}
            className="rounded-xl bg-iyaiGreen px-6 py-3 text-sm font-bold text-iyaiDark transition hover:scale-105 hover:shadow-glowGreen"
          >
            + 发起招募
          </button>
        </div>

        <div className="mb-8 flex w-fit overflow-hidden rounded-2xl border border-white/10">
          <button
            onClick={() => setTab("browse")}
            className={`px-6 py-3 text-sm font-bold ${
              tab === "browse"
                ? "bg-iyaiGreen text-iyaiDark"
                : "text-white/60 hover:bg-white/10"
            }`}
          >
            浏览招募
          </button>

          <button
            onClick={() => setTab("mine")}
            className={`px-6 py-3 text-sm font-bold ${
              tab === "mine"
                ? "bg-iyaiGreen text-iyaiDark"
                : "text-white/60 hover:bg-white/10"
            }`}
          >
            我发起的
          </button>
        </div>

        {tab === "browse" && (
          <div className="grid gap-8 md:grid-cols-2">
            {demoProjects.map(project => (
              <article
                key={project.id}
                className="glow-card rounded-3xl bg-white/5 p-[1px] transition hover:-translate-y-2"
              >
                <div className="glow-card-content rounded-3xl bg-iyaiDark/90 p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-iyaiPurple text-lg font-black">
                        {project.avatar}
                      </div>

                      <div>
                        <h2 className="text-2xl font-black text-white">
                          {project.name}
                        </h2>
                        <p className="mt-1 text-sm text-white/50">
                          发起人：{project.author}
                        </p>
                      </div>
                    </div>

                    <span className="rounded-full bg-iyaiGreen/10 px-3 py-1 text-sm text-iyaiGreen">
                      {project.stage}
                    </span>
                  </div>

                  <p className="mt-5 leading-7 text-white/60">
                    {project.theme}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="rounded-full bg-black/30 px-3 py-1 text-xs text-white/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-between gap-4">
                    <div className="text-sm text-white/50">
                      ⭐ {project.star} · {project.applicants} 人已报名
                    </div>

                    {project.isMine ? (
                      <span className="rounded-xl border border-white/10 px-4 py-2 text-sm text-white/40">
                        我发起的
                      </span>
                    ) : (
                      <button
                        onClick={() => setApplyProject(project)}
                        className="rounded-xl bg-iyaiPurple px-5 py-3 text-sm font-bold text-white transition hover:scale-105 hover:shadow-glowPurple"
                      >
                        报名加入
                      </button>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {tab === "mine" && (
          <div className="grid gap-8 md:grid-cols-2">
            {myProjects.map(project => (
              <article
                key={project.id}
                className="glow-card rounded-3xl bg-white/5 p-[1px]"
              >
                <div className="glow-card-content rounded-3xl bg-[#111122] p-7">
                  <h2 className="text-2xl font-black text-white">{project.name}</h2>

                  <p className="mt-3 text-white/60">{project.theme}</p>

                  <div className="mt-5 grid grid-cols-3 gap-3">
                    <div className="rounded-2xl bg-black/30 p-4 text-center">
                      <p className="text-2xl font-black text-iyaiGreen">
                        {project.star}
                      </p>
                      <p className="text-xs text-white/40">Star</p>
                    </div>

                    <div className="rounded-2xl bg-black/30 p-4 text-center">
                      <p className="text-2xl font-black text-iyaiPurple">
                        {project.applicants}
                      </p>
                      <p className="text-xs text-white/40">报名</p>
                    </div>

                    <div className="rounded-2xl bg-black/30 p-4 text-center">
                      <p className="text-2xl font-black text-white">
                        {project.stage}
                      </p>
                      <p className="text-xs text-white/40">阶段</p>
                    </div>
                  </div>

                  <div className="mt-6 flex gap-3">
                    <button
                      onClick={() => setShowApplicants(true)}
                      className="rounded-xl bg-iyaiGreen px-5 py-3 text-sm font-bold text-iyaiDark"
                    >
                      查看报名表
                    </button>

                    <button className="rounded-xl border border-white/10 px-5 py-3 text-sm font-bold text-white/70">
                      编辑项目
                    </button>
                  </div>
                </div>
              </article>
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
        <ApplyForm onClose={() => setApplyProject(null)} />
      </Modal>

      <Modal
        open={showApplicants}
        title="申请报名表（仅发起人可见）"
        onClose={() => setShowApplicants(false)}
      >
        <div className="space-y-4">
          {demoApplicants.map(applicant => (
            <div
              key={applicant.id}
              className="flex flex-wrap items-center gap-4 rounded-2xl border border-white/10 bg-black/30 p-4"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-iyaiPurple font-black">
                {applicant.avatar}
              </div>

              <div className="flex-1">
                <p className="font-bold text-white">{applicant.name}</p>
                <p className="text-sm text-white/50">{applicant.intro}</p>
              </div>

              <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/50">
                {applicant.remain}
              </span>

              <button className="rounded-xl bg-iyaiGreen px-4 py-2 text-sm font-bold text-iyaiDark">
                通过
              </button>
            </div>
          ))}
        </div>
      </Modal>
    </section>
  );
}

function ProjectForm({ onClose }) {
  return (
    <div className="space-y-4">
      <Input label="项目名称 *" placeholder="输入项目名称" />
      <Input label="项目主题 *" placeholder="如：具身智能、计算机视觉..." />

      <div className="grid gap-4 md:grid-cols-2">
        <Select label="项目阶段 *" />
        <Input label="GitHub 仓库" placeholder="https://github.com/..." />
      </div>

      <Input label="项目标签" placeholder="#计算机视觉, #具身智能, #PyTorch" />

      <Textarea label="项目介绍" placeholder="简要描述项目目标、技术方案、所需技能..." />

      <Textarea
        label="Demo 展示 HTML"
        placeholder="粘贴 HTML 代码，后期可用于项目页内预览"
      />

      <div className="flex justify-end gap-3 pt-2">
        <button
          onClick={onClose}
          className="rounded-xl border border-white/10 px-5 py-3 text-sm text-white/70"
        >
          取消
        </button>

        <button
          onClick={onClose}
          className="rounded-xl bg-iyaiGreen px-5 py-3 text-sm font-bold text-iyaiDark"
        >
          发布招募
        </button>
      </div>
    </div>
  );
}

function ApplyForm({ onClose }) {
  return (
    <div className="space-y-4">
      <p className="rounded-2xl bg-iyaiGreen/10 p-4 text-sm text-white/70">
        你的申请会进入仅项目发起者可见的报名表，最多保留 7 × 24 小时。
      </p>

      <Textarea label="自我介绍 *" placeholder="简要介绍自己的技能、经历..." />
      <Textarea label="你能贡献什么？*" placeholder="描述你的具体贡献方向..." />
      <Input label="联系方式" placeholder="微信 / 邮箱 / GitHub" />

      <div className="flex justify-end gap-3 pt-2">
        <button
          onClick={onClose}
          className="rounded-xl border border-white/10 px-5 py-3 text-sm text-white/70"
        >
          取消
        </button>

        <button
          onClick={onClose}
          className="rounded-xl bg-iyaiGreen px-5 py-3 text-sm font-bold text-iyaiDark"
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
      <span className="mb-2 block text-sm text-white/60">{label}</span>
      <input
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-iyaiGreen"
      />
    </label>
  );
}

function Select({ label }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm text-white/60">{label}</span>
      <select className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none focus:border-iyaiGreen">
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
      <span className="mb-2 block text-sm text-white/60">{label}</span>
      <textarea
        placeholder={placeholder}
        rows={4}
        className="w-full resize-y rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-iyaiGreen"
      />
    </label>
  );
}
