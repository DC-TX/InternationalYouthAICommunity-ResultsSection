import React from "react";

export default function Footer() {
  return (
    <footer className="academy-footer px-6 py-20">
      <div className="academy-footer-main">
        <div className="academy-footer-brand">
          <div className="academy-footer-logo">
            <span className="academy-footer-logo-mark">AI</span>
            <strong>少年人工智能学院</strong>
          </div>
          <p>
            北京中关村学院 · 少年人工智能学院（海淀）。培养未来 AI 领军人才，连接少年创作者、真实项目与协作社区。
          </p>
        </div>

        <div className="academy-footer-column">
          <h3>联系</h3>
          <div className="academy-footer-list">
            <span>公众号 北京少年人工智能学院</span>
            <a href="mailto:aiyouth@bza.edu.cn">aiyouth@bza.edu.cn</a>
          </div>
        </div>

        <div className="academy-footer-column">
          <h3>导航</h3>
          <div className="academy-footer-list">
            <a href="/">首页</a>
            <a href="#projects">支持系统</a>
            <a href="#profile">关于我们</a>
            <a href="#results">培养方案</a>
            <a href="#results">新闻动态</a>
          </div>
        </div>
      </div>

      <div className="academy-footer-bottom">
        <span>© 2026 北京中关村学院 · 少年人工智能学院（海淀）</span>
        <span>京ICP备 00000000 号 · 本站由 闫家栋、李之翀 开发</span>
      </div>
    </footer>
  );
}
