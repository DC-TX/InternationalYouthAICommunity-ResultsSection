import React, { useState } from "react";
import Reveal from "../components/ui/Reveal";
import SpotlightCard from "../components/ui/SpotlightCard";
import { demoProjects, demoUser } from "../data/projects";

export default function ProfilePage() {
  const [user, setUser] = useState(demoUser);
  const myProjects = demoProjects.filter(project => project.isMine);

  function updateUser(field, value) {
    setUser(prev => ({ ...prev, [field]: value }));
  }

  return (
    <section className="min-h-screen px-6 pb-24 pt-36">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-10">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-mute">
              GitHub style user profile
            </p>
            <h1 className="mt-4 font-serif text-6xl tracking-[-0.045em] text-ink">
              我的主页
            </h1>
            <p className="mt-5 max-w-2xl leading-8 text-mute">
              用户主页用于展示账号信息、GitHub 绑定、我的项目、收到的 Star 和仓库同步情况。
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-[360px_1fr]">
          <Reveal>
            <SpotlightCard className="p-6">
              <div className="flex items-start gap-5">
                <div className="flex h-20 w-20 items-center justify-center rounded-md bg-github text-3xl font-bold text-white">
                  {user.avatar}
                </div>

                <div>
                  <p className="text-2xl font-semibold text-ink">{user.username}</p>
                  <p className="font-mono text-sm text-mute">@{user.handle}</p>
                  <p className="mt-2 text-sm text-mute">用户 ID：{user.id}</p>
                </div>
              </div>

              <div className="mt-6 rounded-lg border border-line bg-bone p-4">
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-mute">
                  GitHub account
                </p>
                <p className="mt-2 font-mono text-sm text-ink">
                  github.com/{user.githubAccount}
                </p>
                <span className="mt-3 inline-flex tag tag-green">已绑定</span>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                <SmallStat value={user.projectsCount} label="项目" />
                <SmallStat value={user.totalStars} label="Star" />
                <SmallStat value={user.repositoriesSynced} label="仓库" />
              </div>
            </SpotlightCard>
          </Reveal>

          <div className="space-y-6">
            <Reveal delay={80}>
              <SpotlightCard className="p-6">
                <h2 className="font-serif text-4xl tracking-[-0.04em] text-ink">
                  修改个人信息
                </h2>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <Input
                    label="头像文字"
                    value={user.avatar}
                    maxLength={1}
                    onChange={value => updateUser("avatar", value)}
                  />
                  <Input
                    label="用户名"
                    value={user.username}
                    onChange={value => updateUser("username", value)}
                  />
                  <Input
                    label="用户 handle"
                    value={user.handle}
                    onChange={value => updateUser("handle", value)}
                  />
                  <Input
                    label="GitHub 绑定账户"
                    value={user.githubAccount}
                    onChange={value => updateUser("githubAccount", value)}
                  />
                </div>

                <button
                  type="button"
                  className="mt-6 rounded-md bg-ink px-5 py-2 text-sm font-semibold text-white"
                >
                  保存修改
                </button>
              </SpotlightCard>
            </Reveal>

            <Reveal delay={140}>
              <SpotlightCard className="p-6">
                <h2 className="font-serif text-4xl tracking-[-0.04em] text-ink">
                  我的项目
                </h2>

                <div className="mt-6 space-y-4">
                  {myProjects.map(project => (
                    <div
                      key={project.id}
                      className="rounded-lg border border-line bg-bone p-5"
                    >
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div>
                          <p className="text-lg font-semibold text-ink">
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

                      <p className="mt-4 leading-7 text-mute">{project.theme}</p>

                      <div className="mt-4 grid gap-3 md:grid-cols-3">
                        <SmallStat value={project.star} label="平台 Star" />
                        <SmallStat value={project.applicants} label="报名" />
                        <SmallStat value={project.readmeSyncedAt} label="README" />
                      </div>
                    </div>
                  ))}
                </div>
              </SpotlightCard>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function SmallStat({ value, label }) {
  return (
    <div className="rounded-lg border border-line bg-white p-3">
      <p className="font-serif text-2xl tracking-[-0.04em] text-ink">{value}</p>
      <p className="mt-1 text-xs text-mute">{label}</p>
    </div>
  );
}

function Input({ label, value, onChange, maxLength }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm text-mute">{label}</span>
      <input
        value={value}
        maxLength={maxLength}
        onChange={event => onChange(event.target.value)}
        className="w-full rounded-md border border-line bg-bone px-4 py-3 text-sm text-ink outline-none focus:border-ink"
      />
    </label>
  );
}
