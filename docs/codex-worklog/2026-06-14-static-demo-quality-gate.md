# Static Demo Quality Gate / 静态 Demo 质量门禁

## What I Changed / 我改了什么

- Updated the user menu so it can open by click/tap instead of relying only on hover.
- 将用户菜单改为支持点击/触摸打开，不再只依赖 hover。

- Updated the shared modal so it supports Escape-to-close and dialog semantics.
- 更新通用弹窗，支持 Escape 键关闭，并补充 dialog 语义。

- Replaced raw Demo HTML rendering with an escaped code preview.
- 将原始 Demo HTML 直接渲染改为安全的代码预览。

- Added validation and static submit feedback to project publishing and application forms.
- 为项目发布和报名表单添加校验与静态提交反馈。

- Disabled the unimplemented project edit button and added static feedback for application approval.
- 禁用尚未实现的项目编辑按钮，并为报名审核按钮添加静态反馈。

- Added profile save feedback so users understand that the current phase only updates local page state.
- 为个人主页保存按钮添加反馈，说明当前阶段只更新页面状态。

- Added responsive CSS safeguards for the fixed navbar, dock navigation, large headings, buttons, and modals.
- 为固定导航、Dock 导航、大标题、按钮和弹窗添加移动端兜底样式。

## Why / 为什么这么做

This phase is intentionally limited to static demo quality. The goal is to remove obvious visual, interaction, and safety blockers before Firebase work starts.

本阶段刻意限制在静态 Demo 质量修复内，目标是在接入 Firebase 前先移除明显的视觉、交互和安全阻断点。

## Deferred / 暂不处理

- Firebase Auth and Firestore are still the next phase.
- Firebase Auth 和 Firestore 仍然属于下一阶段。

- GitHub API auto-sync remains out of scope for the first launch version.
- GitHub API 自动同步仍不属于第一版上线范围。

- The current static form submissions do not create persistent records.
- 当前静态表单提交不会创建持久化记录。
