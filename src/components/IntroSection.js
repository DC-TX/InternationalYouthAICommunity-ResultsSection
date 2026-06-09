import React from "react";
import useScrollReveal from "../hooks/useScrollReveal";

const introItems = [
  {
    title: "项目匹配",
    text: "像游戏组队一样发布 AI 项目招募，寻找合作者、联合发起人和感兴趣的成员。"
  },
  {
    title: "成果展示",
    text: "优秀项目会进入成果展示区，根据 Star 数和推荐机制进行排序展示。"
  },
  {
    title: "GitHub 联动",
    text: "项目可以绑定 GitHub 仓库，未来将自动读取 README 与项目信息。"
  }
];

export default function IntroSection() {
  useScrollReveal();

  return (
    <section className="bg-iyaiBlack px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="reveal reveal-up mb-14 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-iyaiGreen">
            About Community
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            一个属于少年 AI 创作者的舞台
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-white/60">
            这里不仅能展示成果，也能让早期项目找到伙伴，让想法真正被做出来。
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {introItems.map((item, index) => (
            <div
              key={item.title}
              className={`reveal ${
                index % 2 === 0 ? "reveal-left" : "reveal-right"
              } glow-card rounded-3xl bg-white/5 p-[1px] transition hover:-translate-y-2`}
            >
              <div className="glow-card-content h-full rounded-3xl bg-iyaiDark/80 p-8">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-iyaiGreen text-xl font-black text-iyaiDark">
                  {index + 1}
                </div>

                <h3 className="text-2xl font-bold text-white">{item.title}</h3>

                <p className="mt-4 leading-7 text-white/60">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
