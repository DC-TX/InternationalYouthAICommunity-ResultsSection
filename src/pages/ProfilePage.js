import React, { useState } from "react";
import { demoProjects } from "../data/projects";

export default function ProfilePage() {
  const [userInfo, setUserInfo] = useState({
    avatar: "李",
    username: "李明远",
    userId: 1,
    github: "liming-ai",
    projects: demoProjects.filter(p => p.isMine),
    starReceived: 142
  });

  const handleChange = (field, value) => {
    setUserInfo(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="min-h-screen bg-iyaiBlack px-6 pt-36 pb-24">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-4xl font-black text-white">我的主页</h1>

        <div className="grid gap-8 md:grid-cols-3">
          {/* 头像及基本信息 */}
          <div className="col-span-1 rounded-3xl bg-[#111122] p-6">
            <div className="flex flex-col items-center gap-4">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-iyaiPurple text-4xl font-black text-white">
                {userInfo.avatar}
              </div>
              <input
                type="text"
                value={userInfo.avatar}
                maxLength={1}
                className="w-16 rounded-xl border border-white/10 bg-black/30 px-4 py-2 text-center text-xl font-black text-white outline-none"
                onChange={e => handleChange("avatar", e.target.value)}
              />
              <input
                type="text"
                value={userInfo.username}
                className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-2 text-center text-sm font-bold text-white outline-none"
                onChange={e => handleChange("username", e.target.value)}
              />
              <p className="text-xs text-white/50">用户 ID: {userInfo.userId}</p>
              <p className="text-xs text-white/50">GitHub: {userInfo.github}</p>
            </div>
          </div>

          {/* 用户统计 */}
          <div className="col-span-2 grid gap-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-2xl bg-black/30 p-4 text-center">
                <p className="text-2xl font-black text-iyaiGreen">
                  {userInfo.projects.length}
                </p>
                <p className="text-xs text-white/50">我的项目</p>
              </div>
              <div className="rounded-2xl bg-black/30 p-4 text-center">
                <p className="text-2xl font-black text-iyaiPurple">
                  {userInfo.starReceived}
                </p>
                <p className="text-xs text-white/50">收到 Star</p>
              </div>
            </div>

            {/* 我的项目列表 */}
            <div className="space-y-4">
              <h2 className="text-xl font-black text-white">我的项目</h2>
              {userInfo.projects.map(p => (
                <div
                  key={p.id}
                  className="rounded-2xl border border-white/10 bg-[#111122] p-4"
                >
                  <p className="text-lg font-bold text-white">{p.name}</p>
                  <p className="text-xs text-white/50">{p.theme}</p>
                  <p className="mt-1 text-xs text-white/50">
                    Stage: {p.stage} · ⭐ {p.star}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
