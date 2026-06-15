# Firebase Launch Implementation Worklog

## 中文记录

### 做了什么

- 新增 Firebase 基础配置：`src/lib/firebase.js`。
- 新增登录上下文：`src/context/AuthContext.js`，支持 GitHub 登录、退出、用户资料创建和资料更新。
- 新增 Firestore 数据服务：`src/services/projectsService.js`，覆盖项目列表、项目发布、项目报名、报名审核、项目 Star。
- 新增 React hooks：`src/hooks/useProjects.js` 和 `src/hooks/useUserStars.js`。
- 页面接入真实数据流：
  - 首页读取项目列表和当前用户资料。
  - 成果页读取项目列表，登录后可写入 Star。
  - 项目页支持发布项目、提交报名、查看并通过报名。
  - 个人主页支持读取和保存当前登录用户资料。
- 新增 `firestore.rules`，限制用户资料、项目、报名和 Star 的读写权限。
- 新增 `.env.example`，方便在 Netlify 或本地配置 Firebase 环境变量。

### 怎么做的

- 保留当前 React 页面结构和视觉样式，只在数据层和事件处理层接入 Firebase。
- 当 Firebase 环境变量缺失时，应用继续使用静态 demo 数据，避免当前可访问页面直接失效。
- 当 Firebase 配置完整时，AuthContext 提供登录状态，Firestore service 负责数据库读写。
- Demo HTML 预览继续以文本代码形式展示，没有恢复危险 HTML 渲染。

### 你需要配置什么

- 在 Firebase Console 创建 Web App。
- 开启 Authentication 的 GitHub Provider，并填入 GitHub OAuth App 的 Client ID / Client Secret。
- 开启 Firestore Database。
- 将 `firestore.rules` 发布到 Firebase。
- 在 Netlify 环境变量中配置：
  - `REACT_APP_FIREBASE_API_KEY`
  - `REACT_APP_FIREBASE_AUTH_DOMAIN`
  - `REACT_APP_FIREBASE_PROJECT_ID`
  - `REACT_APP_FIREBASE_STORAGE_BUCKET`
  - `REACT_APP_FIREBASE_MESSAGING_SENDER_ID`
  - `REACT_APP_FIREBASE_APP_ID`
  - `REACT_APP_FIREBASE_MEASUREMENT_ID`

### 验证状态

- 已用 Node 对核心新增/修改 JS 文件做语法检查。
- 本机 PATH 没有可用 `npm`，所以本地暂时无法执行 `npm run build`。

## English Record

### What changed

- Added Firebase bootstrap in `src/lib/firebase.js`.
- Added `AuthContext` for GitHub sign-in, sign-out, profile creation, and profile updates.
- Added Firestore services for projects, applications, approvals, and stars.
- Added `useProjects` and `useUserStars` hooks.
- Connected the app pages to the data layer:
  - Home reads projects and user profile data.
  - Results reads projects and writes stars after sign-in.
  - Projects can create project posts, submit applications, and approve applications.
  - Profile can read and save the current user's profile.
- Added Firestore security rules.
- Added `.env.example` for Firebase configuration.

### Implementation approach

- Kept the existing React layout and visual structure intact.
- Added a Firebase-backed data layer with static demo fallback when Firebase env vars are missing.
- Kept demo HTML preview safe by displaying code text instead of rendering raw HTML.

### Required setup

- Create a Firebase Web App.
- Enable Firebase Authentication with the GitHub provider.
- Enable Firestore Database.
- Publish `firestore.rules`.
- Add the `REACT_APP_FIREBASE_*` variables in Netlify before deploying.

### Verification status

- Core JS files passed Node syntax checks.
- `npm run build` could not be executed locally because `npm` is not available in PATH on this machine.
