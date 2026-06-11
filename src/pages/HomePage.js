import React from "react";
import { demoProjects, demoUser } from "../data/projects";
import BlurText from "../components/homeEffects/BlurText";
import FloatingLines from "../components/homeEffects/FloatingLines";
import GradualBlur from "../components/homeEffects/GradualBlur";
import ClickSpark from "../components/homeEffects/ClickSpark";
import CrosshairCursor from "../components/homeEffects/CrosshairCursor";
import PremiumHomeCard from "../components/homeEffects/PremiumHomeCard";

export default function HomePage({ setCurrentPage }) {
  const topProjects = [...demoProjects]
    .sort((a, b) => b.repoStars - a.repoStars)
    .slice(0, 3);

  return (
    <section className="home-stage">
      <FloatingLines />
      <GradualBlur />
      <ClickSpark />
      <CrosshairCursor />

      <div className="home-orb home-orb-green" />
      <div className="home-orb home-orb-cyan" />
      <div className="home-orb home-orb-violet" />

      <div className="relative z-10 px-6 pb-28 pt-40">
        <div className="mx-auto max-w-7xl">
          <div className="grid min-h-[76vh] gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 backdrop-blur-xl">
                <span className="h-2 w-2 rounded-full bg-[#4BFF5E] shadow-[0_0_28px_rgba(75,255,94,0.75)]" />
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-white/62">
                  GitHub-first AI project community
                </span>
              </div>

              <h1 className="max-w-5xl text-6xl font-black leading-[0.92] tracking-[-0.065em] text-white md:text-8xl">
                <BlurText text="国际少年" />
                <br />
                <BlurText text="AI 社区" delay={160} />
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-9 text-white/68">
                <BlurText
                  text="连接全球少年 AI 创作者，让每一个项目都能找到合作者、展示舞台与成长方向。"
                  delay={420}
                />
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() => setCurrentPage("results")}
                  className="home-primary-btn"
                >
                  探索成果
                </button>

                <button
                  type="button"
                  onClick={() => setCurrentPage("projects")}
                  className="home-secondary-btn"
                >
                  发起项目招募
                </button>
              </div>

              <div className="mt-12 grid max-w-2xl grid-cols-3 gap-3">
                <HomeMetric value={demoUser.projectsCount} label="我的项目" />
                <HomeMetric value={demoUser.totalStars} label="收到 Star" />
                <HomeMetric value={demoUser.repositoriesSynced} label="同步仓库" />
              </div>
            </div>

            <PremiumHomeCard className="gradient-frame p-0">
              <div className="border-b border-white/10 bg-white/[0.045] px-6 py-4">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400/80" />
                    <span className="h-3 w-3 rounded-full bg-yellow-300/80" />
                    <span className="h-3 w-3 rounded-full bg-[#4BFF5E]/80" />
                  </div>

                  <span className="font-mono text-xs text-white/42">
                    github sync / live preview
                  </span>
                </div>
              </div>

              <div className="p-7">
                <p className="text-sm text-white/42">Live Community Demo</p>

                <h2 className="mt-2 text-4xl font-black tracking-[-0.04em] text-white">
                  Project Match
                </h2>

                <div className="mt-8 space-y-4">
                  {topProjects.map(project => (
                    <RepositoryCard key={project.id} project={project} />
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm font-semibold text-white/62">
                      推荐逻辑
                    </span>

                    <span className="rounded-full border border-[#4BFF5E]/25 bg-[#4BFF5E]/10 px-3 py-1 text-xs font-bold text-[#A4FFAD]">
                      Agent + Star + GitHub
                    </span>
                  </div>

                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/8">
                    <div className="home-progress-bar" />
                  </div>
                </div>
              </div>
            </PremiumHomeCard>
          </div>
        </div>
      </div>

      <HomeFocusSection setCurrentPage={setCurrentPage} />
    </section>
  );
}

function HomeMetric({ value, label }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.055] p-4 backdrop-blur-xl">
      <div className="text-3xl font-black tracking-[-0.04em] text-white">
        {value}
      </div>
      <div className="mt-1 text-xs text-white/45">{label}</div>
    </div>
  );
}

function RepositoryCard({ project }) {
  return (
    <div className="home-repo-card">
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="rounded-full border border-[#35E7FF]/20 bg-[#35E7FF]/10 px-3 py-1 text-xs font-bold text-[#8FF3FF]">
            {project.stage}
          </span>

          <h3 className="mt-3 text-lg font-black text-white">{project.name}</h3>

          <p className="mt-1 font-mono text-xs text-white/42">
            {project.githubRepo}
          </p>
        </div>

        <div className="text-right">
          <p className="text-2xl font-black text-[#4BFF5E]">
            {project.repoStars}
          </p>
          <p className="text-xs text-white/38">repo stars</p>
        </div>
      </div>

      <div className="my-4 h-px bg-gradient-to-r from-transparent via-[#4BFF5E]/55 to-transparent" />

      <p className="text-sm leading-6 text-white/50">{project.lastCommit}</p>
    </div>
  );
}

function HomeFocusSection({ setCurrentPage }) {
  const cards = [
    {
      title: "成果展示",
      text: "展示 README 摘要、GitHub Repo、Repo Star、最后提交与 Demo 预览，让项目成果更可信。",
      page: "results"
    },
    {
      title: "项目招募",
      text: "围绕项目阶段、技能标签、GitHub 仓库和报名表进行协作，而不是只发布一个标题。",
      page: "projects"
    },
    {
      title: "GitHub 耦合",
      text: "用户绑定 GitHub，项目绑定仓库，未来同步 README、Star、提交记录和贡献信息。",
      page: "profile"
    }
  ];

  return (
    <div className="relative z-10 border-t border-white/10 bg-[#050713]/72 px-6 py-28 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#4BFF5E]">
            Product Focus
          </p>

          <h2 className="mt-4 text-5xl font-black tracking-[-0.055em] text-white md:text-6xl">
            三个页面围绕一个核心：把 AI 项目真正做出来
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {cards.map((card, index) => (
            <PremiumHomeCard key={card.title} className="home-focus-card p-7">
              <div className="mb-16 flex items-center justify-between">
                <span className="rounded-full border border-white/10 bg-white/8 px-3 py-1 text-xs font-bold text-white/55">
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
                进入页面
              </button>
            </PremiumHomeCard>
          ))}
        </div>
      </div>
    </div>
  );
}
