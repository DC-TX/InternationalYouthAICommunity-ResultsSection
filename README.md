# International Youth AI Community Results Section

International Youth AI Community 的成果展示与项目招募应用。当前版本已经从静态 Demo 升级为接入 Firebase 的可上线 Web 应用，支持 GitHub 登录、项目发布、项目报名、报名表查看、项目 Star 和个人资料展示。

## Current Status

当前阶段重点：

- React 前端应用已经完成主要页面与交互。
- Netlify 用于线上部署。
- Firebase Authentication 用于 GitHub 登录。
- Cloud Firestore 用于保存用户、项目、报名和 Star 数据。
- 项目招募页支持创建项目、申请加入项目、查看自己项目收到的报名。
- 已修复报名表查询触发 Firestore composite index 的问题。

## Tech Stack

```txt
React
JavaScript
Tailwind CSS
Firebase Authentication
Cloud Firestore
Netlify
GitHub OAuth
```

## Main Features

### Home

首页用于展示 International Youth AI Community 的平台定位、视觉风格和核心入口。

包含：

- 平台介绍
- 成果展示入口
- 项目招募入口
- GitHub 项目同步概念展示
- 深色科技风视觉效果
- 顶部 Dock 导航

### Results

成果展示页用于展示社区项目。

包含：

- 项目卡片
- 项目名称、主题、阶段、标签
- 平台 Star
- GitHub 仓库信息
- README 摘要
- Demo 预览
- 项目详情弹窗
- 排序入口

### Projects

项目招募页是当前 Firebase 化的核心页面。

包含：

- 浏览项目招募
- 我发起的项目
- 发布新项目
- 申请加入项目
- 查看项目报名表
- 修改报名状态
- 项目 Star

报名表查询已经调整为只按 `projectOwnerId` 筛选，再在前端按 `createdAt` 排序，避免 Firestore 要求额外创建复合索引。

### Profile

个人主页用于展示当前登录用户的信息和项目数据。

包含：

- 用户头像与名称
- GitHub 账号信息
- 我创建的项目
- 收到的 Star
- 同步仓库数量
- 个人资料编辑

## Firebase

当前使用的 Firebase 能力：

- Authentication: GitHub provider
- Firestore: application data

### Environment Variables

Netlify 需要配置以下环境变量：

```txt
REACT_APP_FIREBASE_API_KEY
REACT_APP_FIREBASE_AUTH_DOMAIN
REACT_APP_FIREBASE_PROJECT_ID
REACT_APP_FIREBASE_STORAGE_BUCKET
REACT_APP_FIREBASE_MESSAGING_SENDER_ID
REACT_APP_FIREBASE_APP_ID
REACT_APP_FIREBASE_MEASUREMENT_ID
```

本地开发可参考：

```txt
.env.example
```

### Firestore Collections

```txt
users
projects
applications
stars
```

#### users

用于保存登录用户资料和统计数据。

```txt
uid
username
avatar
githubAccount
githubProfile
projectsCount
repositoriesSynced
createdAt
updatedAt
```

#### projects

用于保存用户发布的项目招募和成果展示数据。

```txt
name
theme
description
stage
tags
githubUrl
githubRepo
githubBranch
demoHtml
readme
ownerId
ownerName
ownerAvatar
starCount
repoStarsManual
aiScoreManual
applicationCount
repoHealth
readmeSyncedAt
lastCommit
createdAt
updatedAt
```

#### applications

用于保存用户对项目的报名申请。

```txt
projectId
projectName
projectOwnerId
applicantId
applicantName
applicantAvatar
github
intro
contribution
status
createdAt
updatedAt
```

#### stars

用于保存用户对项目的 Star 关系。

```txt
projectId
userId
createdAt
```

## Important Files

```txt
src/lib/firebase.js
src/context/AuthContext.js
src/services/projectsService.js
src/hooks/useProjects.js
src/hooks/useUserStars.js
src/components/UserMenu.js
src/pages/HomePage.js
src/pages/ResultsPage.js
src/pages/ProjectsPage.js
src/pages/ProfilePage.js
firestore.rules
.env.example
netlify.toml
```

## Deployment

Netlify build settings:

```txt
Build command: npm run build
Publish directory: build
```

Repository root should include:

```txt
netlify.toml
```

Recommended manual deploy option:

```txt
Deploy project without cache
```

This helps avoid old Netlify cache causing stale CSS or stale build output.

## Recent Fixes

### Firestore Index Fix

Problem:

Opening the application list for a project created by the current user triggered:

```txt
The query requires an index.
```

Cause:

The previous Firestore query combined:

```txt
where("projectOwnerId", "==", ownerId)
orderBy("createdAt", "desc")
```

Firestore requires a composite index for that query shape.

Fix:

The query now only filters by `projectOwnerId`, then sorts the returned application records on the client by `createdAt`.

Related worklog:

```txt
docs/codex-worklog/2026-06-18-firestore-index-fix.md
```

## Known Notes

- GitHub login requires Firebase Authentication GitHub provider and the GitHub OAuth callback URL to be configured correctly.
- Netlify environment variables must be present before production deploy.
- GitHub API data sync is still manual or placeholder based in some UI sections.
- README / repo stars / commit metadata are not yet fully synced from the GitHub API.
- Local verification in this Codex workspace can run JavaScript syntax checks with the bundled Node runtime, but `npm` is not available in PATH in the current environment.

## Next Steps

Recommended next development order:

```txt
1. Verify Netlify production deploy after Firebase changes
2. Test GitHub login on production domain
3. Test create project -> apply -> owner views application list
4. Add GitHub API integration for README, repo stars, and commit metadata
5. Add image upload or project cover support
6. Add application expiration logic if 7 x 24 hour retention is still required
7. Improve mobile layout polish
8. Add route support with React Router if deep links are needed
```

## Worklogs

Codex implementation notes are stored in:

```txt
docs/codex-worklog/
```

Current records:

```txt
2026-06-14-static-demo-quality-gate.md
2026-06-14-firebase-launch-implementation.md
2026-06-18-firestore-index-fix.md
```
