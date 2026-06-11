import React from "react";
import AnimatedText from "../components/ui/AnimatedText";
import Reveal from "../components/ui/Reveal";
import SpotlightCard from "../components/ui/SpotlightCard";
import QuietGrid from "../components/ui/QuietGrid";
import { demoProjects, demoUser } from "../data/projects";

export default function HomePage({ setCurrentPage }) {
  const topProjects = [...demoProjects].sort((a, b) => b.star - a.star).slice(0, 3);

  return (
    <>
      <QuietGrid className="px-6 pb-24 pt-40">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <Reveal>
                <div className="mb-6 inline-flex rounded-md border border-line bg-white px-3 py-1 font-mono text-xs uppercase tracking-[0.16em] text-mute">
                  GitHub coupled youth AI project platform
                </div>
              </Reveal>

              <h1 className="max-w-5xl font-serif text-6xl leading-[0.96] tracking-[-0.045em] text-ink md:text-8xl">
                <AnimatedText text="把少年 AI 项目从招募推进到开源成果" />
              </h1>

              <Reveal delay={120}>
                <p className="mt-8 max-w-2xl text-lg leading-8 text-mute">
                  平台围绕三个核心动作设计：发起项目招募、展示项目成果、绑定 GitHub 仓库并同步 README、Star 和提交状态。
                </p>
              </Reveal>

              <Reveal delay={180}>
                <div className="mt-10 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => setCurrentPage("projects")}
                    className="rounded-md bg-ink px-6 py-3 text-sm font-semibold text-white active:scale-[0.98]"
                  >
                    查看项目招募
                  </button>

                  <button
                    type="button"
                    onClick={() => setCurrentPage("results")}
                    className="rounded-md border border-line bg-white px-6 py-3 text-sm font-semibold text-ink hover:bg-bone active:scale-[0.98]"
                  >
                    浏览成果展示
                  </button>
                </div>
              </Reveal>
            </div>

            <Reveal delay={240}>
              <SpotlightCard className="p-0">
                <div className="border-b border-line bg-bone px-5 py-3">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-line" />
                    <span className="h-2.5 w-2.5 rounded-full bg-line" />
                    <span className="h-2.5 w-2.5 rounded-full bg-line" />
                    <span className="ml-3 font-mono text-xs text-mute">
                      github sync preview
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.16em] text-mute">
                        Bound account
                      </p>
                      <p className="mt-1 text-xl font-semibold text-ink">
                        @{demoUser.githubAccount}
                      </p>
                    </div>

                    <div className="rounded-md border border-line bg-paleGreen px-3 py-2 text-xs text-[#346538]">
                      GitHub 已绑定
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <Metric value={demoUser.projectsCount} label="我的项目" />
                    <Metric value={demoUser.totalStars} label="收到 Star" />
                    <Metric value={demoUser.repositoriesSynced} label="同步仓库" />
                  </div>

                  <div className="mt-6 space-y-3">
                    {topProjects.map(project => (
                      <div
                        key={project.id}
                        className="rounded-lg border border-line bg-white p-4"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="text-sm font-semibold text-ink">
                              {project.name}
                            </p>
                            <p className="mt-1 font-mono text-xs text-mute">
                              {project.githubRepo}
                            </p>
                          </div>
                          <span className="tag tag-yellow">
                            {project.repoStars} repo stars
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>
          </div>
        </div>
      </QuietGrid>

      <section className="border-y border-line bg-white px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          <FeatureCard
            index="01"
            title="项目招募"
            text="发布项目阶段、所需技能、GitHub 仓库和 Demo 需求，让合作从项目上下文开始。"
          />
          <FeatureCard
            index="02"
            title="成果展示"
            text="成果卡片展示 README 摘要、仓库 Star、最后提交和 Demo 预览，避免只展示空标题。"
          />
          <FeatureCard
            index="03"
            title="GitHub 耦合"
            text="用户账号绑定 GitHub，项目绑定仓库，后续由 API 同步 README、仓库状态和贡献记录。"
          />
        </div>
      </section>
    </>
  );
}

function Metric({ value, label }) {
  return (
    <div className="rounded-lg border border-line bg-bone p-4 text-center">
      <div className="font-serif text-3xl tracking-[-0.04em] text-ink">
        {value}
      </div>
      <div className="mt-1 text-xs text-mute">{label}</div>
    </div>
  );
}

function FeatureCard({ index, title, text }) {
  return (
    <Reveal>
      <SpotlightCard className="h-full p-8">
        <p className="font-mono text-xs text-mute">{index}</p>
        <h2 className="mt-10 font-serif text-4xl tracking-[-0.04em] text-ink">
          {title}
        </h2>
        <p className="mt-5 leading-7 text-mute">{text}</p>
      </SpotlightCard>
    </Reveal>
  );
}
