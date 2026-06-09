import { useEffect } from "react";

/**
 * 滚动入场动画 Hook
 *
 * 原理：
 * 1. 页面中带有 .reveal 类的元素默认隐藏
 * 2. 当元素进入视口时，自动添加 .active 类
 * 3. CSS 根据 .active 触发动画
 */
export default function useScrollReveal() {
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");

            // 动画只触发一次，触发后停止观察该元素
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.18
      }
    );

    revealElements.forEach(element => observer.observe(element));

    return () => observer.disconnect();
  }, []);
}
