import React from "react";
import { demoProjects, demoUser } from "../data/projects";
import AuroraBackground from "../components/effects/AuroraBackground";
import CursorGlow from "../components/effects/CursorGlow";
import SplitText from "../components/effects/SplitText";
import ShinyText from "../components/effects/ShinyText";
import RotatingText from "../components/effects/RotatingText";
import DecryptText from "../components/effects/DecryptText";
import AnimatedContent from "../components/effects/AnimatedContent";
import PremiumCard from "../components/effects/PremiumCard";

export default function HomePage({ setCurrentPage }) {
  const topProjects = [...demoProjects]
    .sort((a, b) => b.repoStars - a.repoStars)
    .slice(0, 3);

  return (
    <section className="relative min-h-screen overflow-hidden bg-premiumBg text-premiumText">
      <CursorGlow />
      <AuroraBackground />

      <div className="premium-grid absolute inset-0 opacity-35" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(7,10,18,0.42)_42%,#070A12_88%)]" />

      <div className="relative z-10 px-6 pb-28 pt-40">
        <div className="mx-auto max-w-7xl">
          <div className="grid min-h-[74vh] gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <AnimatedContent variant="fade-up">
                <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl">
                  <span className="h-2 w-2 rounded-full bg-neonGreen shadow-glowGreen" />
                  <span className="text-sm font-semibold text-white/75">
                    <DecryptText text="GITHUB-FIRST AI PROJECT COMMUNITY" />
                  </span>
                </div>
              </AnimatedContent>

              <h1 className="max-w-5xl text-6xl font-black leading-[0.92] tracking-[-0.06em] text-white md:text-8xl">
                <SplitText text="把少年 AI 项目" />
                <br />
                <span className="inline-flex flex-wrap items-baseline gap-x-4">
                  <ShinyText>从招募推进到</ShinyText>
                  <RotatingText
                    words={["GitHub", "README", "Demo", "成果展示"]}
                    interval={1500}
                  />
                </span>
              </h1>

              <AnimatedContent variant="fade-up" delay={160}>
                <p className="mt-8 max-w-2xl text-lg leading-9 text-white/62">
                  平台围绕三个核心动作重新设计：
                  <span className="text-white">项目招募</span>、
                  <span className="text-white">成果展示</span>、
                  <span className="text-white">GitHub 深度耦合</span>。
                  每个项目不再只是标题，而是绑定仓库、README、Repo Star、最后提交和 Demo。
                </p>
              </AnimatedContent>

              <AnimatedContent variant="fade-up" delay={260}>
                <div className="mt-10 flex flex-wrap gap-4">
                  <button
                    type="button"
                    onClick={() => setCurrentPage("results")}
                    className="rounded-2xl bg-neonGreen px-7 py-4 text-sm font-black text-[#07100A] shadow-glowGreen transition hover:scale-[1.03]"
                  >
                    探索成果展示
                  </button>

                  <button
                    type="button"
                    onClick={() => setCurrentPage("projects")}
                    className="rounded-2xl border border-white/14 bg-white/7 px-7 py-4 text-sm font-black text-white backdrop-blur-xl transition hover:bg-white/12"
                  >
                    发起项目招募
                  </button>
                </div>
              </AnimatedContent>

              <AnimatedContent variant="fade-up" delay={340}>
                <div className="mt-12 grid max-w-2xl grid-cols-3 gap-3">
                  <Metric value={demoUser.projectsCount} label="我的项目" />
                  <Metric value={demoUser.totalStars} label="收到 Star" />
                  <Metric value={demoUser.repositoriesSynced} label="同步仓库" />
                </div>
              </AnimatedContent>
            </div>

            <AnimatedContent variant="zoom" delay={180}>
              <PremiumCard className="gradient-border p-0">
                <div className="border-b border-white/10 bg-white/5 px-6 py-4">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                      <span className="h-3 w-3 rounded-full bg-red-400/70" />
                      <span className="h-3 w-3 rounded-full bg-gold/80" />
                      <span className="h-3 w-3 rounded-full bg-neonGreen/80" />
                    </div>

                    <span className="font-mono text-xs text-white/45">
                      github sync / live preview
                    </span>
                  </div>
                </div>

                <div className="p-7">
                  <div className="mb-7">
                    <p className="text-sm text-white/45">Live Community Demo</p>
                    <h2 className="mt-2 text-4xl font-black tracking-[-0.04em] text-white">
                      Project Match
                    </h2>
                  </div>

                  <div className="space-y-4">
                    {topProjects.map((project, index) => (
                      <RepositoryPreview
                        key={project.id}
                        project={project}
                        index={index}
                      />
                    ))}
                  </div>

                  <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-sm font-semibold text-white/62">
                        推荐逻辑
                      </span>
                      <span className="tag tag-green">
                        Agent + Star + GitHub
                      </span>
                    </div>

                    <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/8">
                      <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-neonGreen via-electricCyan to-violet" />
                    </div>
                  </div>
                </div>
              </PremiumCard>
            </AnimatedContent>
          </div>
        </div>
      </div>

      <ProjectFocusSection setCurrentPage={setCurrentPage} />
    </section>
  );
}

function Metric({ value, label }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.055] p-4 backdrop-blur-xl">
      <div className="text-3xl font-black tracking-[-0.04em] text-white">
        {value}
      </div>
      <div className="mt-1 text-xs text-white/45">{label}</div>
    </div>
  );
}

function RepositoryPreview({ project, index }) {
  const colors = ["tag-green", "tag-blue", "tag-purple"];

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.055] p-4 transition hover:border-white/20 hover:bg-white/[0.085]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className={`tag ${colors[index % colors.length]}`}>
            {project.stage}
          </span>
          <h3 className="mt-3 text-lg font-black text-white">{project.name}</h3>
          <p className="mt-1 font-mono text-xs text-white/42">
            {project.githubRepo}
          </p>
        </div>

        <div className="text-right">
          <p className="text-2xl font-black text-neonGreen">
            {project.repoStars}
          </p>
          <p className="text-xs text-white/38">repo stars</p>
        </div>
      </div>

      <div className="mt-4 tech-line" />

      <p className="mt-4 text-sm leading-6 text-white/50">
        {project.lastCommit}
      </p>
    </div>
  );
}

function ProjectFocusSection({ setCurrentPage }) {
  const cards = [
    {
      title: "成果展示",
      label: "RESULTS",
      text: "展示 README 摘要、GitHub Repo、Repo Star、最后提交与 Demo 预览，让老师一眼看到项目不是空壳。",
      variant: "slide-left",
      action: "进入成果展示",
      page: "results"
    },
    {
      title: "项目招募",
      label: "RECRUIT",
      text: "招募逻辑接近 GitHub Issue：项目阶段、所需技能、仓库状态、报名表和 7×24 小时有效期。",
      variant: "fade-up",
      action: "查看招募",
      page: "projects"
    },
    {
      title: "GitHub 耦合",
      label: "GITHUB",
      text: "用户绑定 GitHub，项目绑定仓库。后续可由 API 自动同步 README、Star、提交记录和贡献信息。",
      variant: "slide-right",
      action: "查看主页",
      page: "profile"
    }
  ];

  return (
    <div className="relative z-10 border-t border-white/10 bg-[#050812]/72 px-6 py-28 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl">
        <AnimatedContent variant="fade-up">
          <div className="mb-14 max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-neonGreen">
              Product Focus
            </p>
            <h2 className="mt-4 text-5xl font-black tracking-[-0.055em] text-white md:text-6xl">
              三个页面围绕一个核心：
              <ShinyText>把 AI 项目真正做出来</ShinyText>
            </h2>
          </div>
        </AnimatedContent>

        <div className="grid gap-6 lg:grid-cols-3">
          {cards.map((card, index) => (
            <AnimatedContent
              key={card.title}
              variant={card.variant}
              delay={index * 120}
            >
              <PremiumCard className="h-full p-7">
                <div className="mb-16 flex items-center justify-between">
                  <span className="tag tag-blue">{card.label}</span>
                  <span className="font-mono text-xs text-white/28">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-4xl font-black tracking-[-0.045em] text-white">
                  {card.title}
                </h3>

                <p className="mt-5 min-h-[116px] leading-8 text-white/55">
                  {card.text}
                </p>

                <button
                  type="button"
                  onClick={() => setCurrentPage(card.page)}
                  className="mt-8 rounded-2xl border border-white/12 bg-white/7 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/12"
                >
                  {card.action}
                </button>
              </PremiumCard>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </div>
  );
}
