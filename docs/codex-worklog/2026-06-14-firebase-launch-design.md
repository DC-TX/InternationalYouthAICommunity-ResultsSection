# Firebase Launch Design / Firebase 上线设计

## Goal / 目标

Turn the current International Youth AI Community static React demo into a first usable production-ready Firebase application while preserving the existing visual direction.

在保留当前视觉方向的前提下，把 International Youth AI Community 的静态 React Demo 改造成第一版可实际使用、可上线的 Firebase 应用。

The first release must let users sign in with GitHub, publish projects, browse projects, apply to projects, star projects, and view/update their profile with persistent data.

第一版必须支持用户通过 GitHub 登录、发布项目、浏览项目、报名项目、收藏/点赞项目，并且能够查看和修改自己的个人主页，所有核心数据需要持久化保存。

## Assumptions / 假设

- The existing React and Tailwind UI remains the base. We will not redesign the product from scratch.
- 现有 React 和 Tailwind UI 作为基础，不从零重做视觉设计。

- Firebase is the backend for the first production release.
- Firebase 作为第一版上线应用的后端。

- Authentication uses Firebase Auth with the GitHub provider.
- 登录系统使用 Firebase Auth 的 GitHub Provider。

- Firestore stores users, projects, applications, and stars.
- Firestore 保存用户、项目、报名和 Star 数据。

- The first release does not call the GitHub API automatically.
- 第一版不自动调用 GitHub API。

- GitHub repository fields are user-entered metadata: repository URL, repository name, branch, README summary, and optional demo content.
- GitHub 仓库字段先作为用户填写的元数据保存，包括仓库 URL、仓库名、分支、README 摘要和可选 Demo 内容。

- The current static demo data can remain as seed/demo fallback only if needed during migration, but production screens should read from Firestore.
- 当前静态 Demo 数据可以作为迁移阶段的种子或兜底数据，但生产页面应读取 Firestore。

## Non-Goals / 非目标

- No GitHub API README syncing in this phase.
- 本阶段不做 GitHub API README 同步。

- No GitHub repo star syncing in this phase.
- 本阶段不做 GitHub 仓库 Star 同步。

- No GitHub last-commit syncing in this phase.
- 本阶段不做 GitHub 最后提交记录同步。

- No Cloud Functions unless Firestore security rules or client-side transactions are not enough.
- 除非 Firestore 安全规则或客户端事务无法满足需求，否则不引入 Cloud Functions。

- No broad component directory cleanup unless a touched file directly needs it.
- 不做大范围组件目录清理，除非被修改的文件直接需要。

- No full visual redesign.
- 不做完整视觉重设计。

## Success Criteria / 成功标准

### Static Demo Quality Gate / 静态 Demo 质量门禁

- The app builds successfully for Netlify.
- 应用能够成功完成 Netlify 构建。

- Home, Results, Projects, and Profile screens render without broken imports or console errors.
- 首页、成果展示、项目招募、个人主页没有断裂 import 或控制台错误。

- Main navigation works on desktop and mobile.
- 主导航在桌面端和移动端都可用。

- User menu works on click/tap, not only hover.
- 用户菜单支持点击/触摸打开，不只依赖 hover。

- Modals can be closed with the close button, backdrop, and Escape key.
- 弹窗可以通过关闭按钮、背景遮罩和 Escape 键关闭。

- Forms show validation and submit feedback.
- 表单有校验和提交反馈。

- Buttons that are not implemented are either implemented or clearly disabled/removed.
- 未实现的按钮要么实现，要么明确禁用或移除。

- Mobile layout has no obvious text overlap or clipped primary actions.
- 移动端布局没有明显文字重叠或主要按钮被裁切的问题。

- Demo HTML preview is made safe for production or removed from first release.
- Demo HTML 预览需要变成生产安全版本，或者从第一版中移除。

### Firebase Launch / Firebase 上线

- Signed-out users can browse public projects but must sign in before publishing, applying, starring, or editing profile.
- 未登录用户可以浏览公开项目，但发布、报名、Star、编辑个人资料前必须登录。

- Users can sign in with GitHub through Firebase Auth.
- 用户可以通过 Firebase Auth 的 GitHub 登录。

- On first sign-in, the app creates a user profile document.
- 用户首次登录时，应用会创建用户资料文档。

- Users can update their display profile fields.
- 用户可以更新自己的展示资料。

- Users can publish project recruitment posts.
- 用户可以发布项目招募。

- Users can apply to projects they do not own.
- 用户可以报名加入非自己创建的项目。

- Project owners can view applications for their own projects.
- 项目发起者可以查看自己项目的报名表。

- Users can star/unstar projects once.
- 用户可以对项目 Star/取消 Star，且同一用户对同一项目只能 Star 一次。

- Project cards and profile stats reflect Firestore data.
- 项目卡片和个人主页统计数据来自 Firestore。

- Firestore rules prevent users from editing other users' profiles, modifying projects they do not own, or viewing applications for projects they do not own.
- Firestore 安全规则要阻止用户编辑他人资料、修改不属于自己的项目、查看不属于自己项目的报名信息。

## Architecture / 架构

The app remains a client-rendered React application deployed through Netlify. Firebase client SDK provides Auth and Firestore access. The React pages stop importing static arrays directly and instead read data through a small Firebase data layer.

应用继续保持客户端渲染的 React 架构，并通过 Netlify 部署。Firebase 客户端 SDK 提供登录和 Firestore 数据访问。React 页面不再直接导入静态数组，而是通过一个小型 Firebase 数据层读取数据。

Keep the first implementation simple:

第一版实现保持简单：

- `src/lib/firebase.js` initializes Firebase.
- `src/lib/firebase.js` 负责初始化 Firebase。

- `src/services/` contains focused Firestore functions.
- `src/services/` 放置职责清晰的 Firestore 数据函数。

- `src/context/AuthContext.js` exposes the current Firebase user and profile.
- `src/context/AuthContext.js` 暴露当前 Firebase 用户和用户资料。

- Existing pages keep their visual structure and call service functions for data.
- 现有页面保留视觉结构，通过 service 函数读取和写入数据。

## Data Model / 数据模型

### users/{uid}

```txt
uid
displayName
handle
avatarText
githubAccount
githubProfile
photoURL
email
createdAt
updatedAt
```

### projects/{projectId}

```txt
id
name
theme
stage
tags
description
ownerId
ownerName
ownerAvatar
githubUrl
githubRepo
githubBranch
readme
demoHtml
starCount
applicationCount
repoStarsManual
aiScoreManual
repoHealth
createdAt
updatedAt
```

`repoStarsManual` and `aiScoreManual` are optional display fields for the first release. They are not synced from GitHub.

`repoStarsManual` 和 `aiScoreManual` 是第一版可选展示字段，不从 GitHub 自动同步。

### applications/{applicationId}

```txt
id
projectId
projectOwnerId
applicantId
applicantName
applicantGithub
intro
contribution
contact
status
expiresAt
createdAt
```

### stars/{projectId_uid}

```txt
id
projectId
userId
createdAt
```

The document ID combines project and user IDs so the same user cannot star the same project twice.

文档 ID 由项目 ID 和用户 ID 组合，避免同一用户重复 Star 同一项目。

## Page Behavior / 页面行为

### Home / 首页

Home remains mostly presentation-focused. It reads the top projects from Firestore and links users into Results and Projects.

首页主要保持展示定位，从 Firestore 读取热门项目，并引导用户进入成果展示和项目招募页面。

### Results / 成果展示

Results reads projects from Firestore and supports sorting by platform stars, manual repo stars, manual AI score, and newest. Star/unstar requires login.

成果展示页从 Firestore 读取项目，支持按平台 Star、手动填写的 Repo Star、手动 AI 评分和最新项目排序。Star/取消 Star 需要登录。

Project detail modal reads the selected project document. Demo preview is either sanitized or shown as escaped/preformatted content for the first release.

项目详情弹窗读取被选中的项目文档。第一版中，Demo 预览要么经过安全处理，要么以转义/预格式化文本展示。

### Projects / 项目招募

Browse tab reads public projects. Publish opens a validated form and writes a project owned by the current user. Apply opens a validated form and writes an application document.

浏览 Tab 读取公开项目。发布项目会打开带校验的表单，并写入当前用户拥有的项目文档。报名会打开带校验的表单，并写入报名文档。

My Projects tab reads projects where `ownerId === currentUser.uid`. Owners can view applications for their own projects.

“我发起的”Tab 读取 `ownerId === currentUser.uid` 的项目。项目发起者可以查看自己项目的报名信息。

### Profile / 个人主页

Profile reads the current user's `users/{uid}` document. Edits persist to Firestore. The profile page also reads projects owned by the current user and computes stats from project data.

个人主页读取当前用户的 `users/{uid}` 文档。资料修改会保存到 Firestore。个人主页同时读取当前用户创建的项目，并根据项目数据计算统计信息。

### Navigation / 导航

The existing hash-based navigation can remain for the first release. It is simple and compatible with the Netlify redirect already in `netlify.toml`.

第一版可以保留当前基于 hash 的导航方式。它足够简单，并且兼容 `netlify.toml` 中已有的重定向配置。

## Security Rules Direction / 安全规则方向

Firestore rules should enforce:

Firestore 规则需要保证：

- Anyone can read public project documents.
- 任何人都可以读取公开项目文档。

- Only authenticated users can create projects.
- 只有登录用户可以创建项目。

- Only project owners can update their projects.
- 只有项目所有者可以更新自己的项目。

- Only authenticated users can create applications.
- 只有登录用户可以创建报名。

- Only project owners can read applications for their projects.
- 只有项目所有者可以读取自己项目的报名。

- Only users can read/write their own profile documents.
- 用户只能读写自己的个人资料文档。

- Only authenticated users can create/delete their own star documents.
- 只有登录用户可以创建或删除自己的 Star 文档。

## Testing And Verification / 测试与验证

Use a staged verification loop:

使用分阶段验证流程：

1. Build verification: `npm run build`.
1. 构建验证：`npm run build`。

2. Static UI smoke test: open each page, verify no broken imports or console errors.
2. 静态 UI 冒烟测试：打开每个页面，确认没有断裂 import 或控制台错误。

3. Mobile smoke test: check Home, Results, Projects, Profile at a phone-width viewport.
3. 移动端冒烟测试：用手机宽度检查首页、成果展示、项目招募和个人主页。

4. Firebase emulator or test project verification:
4. Firebase Emulator 或测试项目验证：

```txt
sign in with GitHub
create profile
publish project
apply to a project
star/unstar project
owner views applications
```

```txt
通过 GitHub 登录
创建用户资料
发布项目
报名项目
Star/取消 Star 项目
项目发起者查看报名
```

5. Firestore rules verification for allowed and denied access paths.
5. 验证 Firestore 规则中允许和禁止的访问路径。

## Risks / 风险

- The local machine currently does not expose `npm` in PATH, so build verification may need Node/npm setup or Netlify/GitHub verification.
- 当前本机没有在 PATH 中暴露 `npm`，所以构建验证可能需要先配置 Node/npm，或通过 Netlify/GitHub 侧验证。

- GitHub OAuth configuration requires Firebase console setup by the project owner.
- GitHub OAuth 配置需要项目所有者在 Firebase 控制台中设置。

- Firestore rules must be written before treating the app as production-ready.
- Firestore 安全规则必须完成后，才能把应用视为生产可上线状态。

- Rendering raw demo HTML is not safe for production unless sanitized. The first implementation should avoid unsafe HTML by default.
- 原始 Demo HTML 直接渲染在生产环境不安全，除非做安全处理。第一版默认应避免不安全 HTML。

## Recommended Implementation Order / 推荐实施顺序

1. Fix static UX blockers and build issues.
1. 修复静态 Demo 的 UX 阻断问题和构建问题。

2. Add Firebase configuration and AuthContext.
2. 添加 Firebase 配置和 AuthContext。

3. Add Firestore service functions and seed/migration path.
3. 添加 Firestore service 函数和种子/迁移路径。

4. Convert Results page to Firestore reads and star writes.
4. 将成果展示页改为读取 Firestore，并写入 Star 数据。

5. Convert Projects page publish/apply/owner applications flows.
5. 将项目招募页改为真实发布、报名和项目所有者查看报名流程。

6. Convert Profile page profile persistence and owned project stats.
6. 将个人主页改为资料持久化，并显示用户拥有项目的统计。

7. Add Firestore rules and deployment documentation.
7. 添加 Firestore 安全规则和部署说明。

8. Verify build, desktop/mobile smoke tests, and Firebase workflows.
8. 验证构建、桌面/移动端冒烟测试和 Firebase 工作流。
