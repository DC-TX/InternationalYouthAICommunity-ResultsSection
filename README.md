# International Youth AI Community 项目交接文档

## 1. 项目概况

项目名称：**International Youth AI Community（国际少年 AI 社区）**

项目定位：
本项目是一个面向青少年 AI 创作者的社区型网站 Demo，核心目标是让用户可以在平台中展示 AI 项目成果、发布项目招募、寻找合作者，并在未来通过 GitHub 和 Agent 推荐系统实现更智能的项目匹配。

当前版本是一个 **纯前端静态 Demo**，暂未接入真实数据库、真实登录系统、GitHub API 和后端服务。项目主要用于展示网站的产品结构、页面设计、交互逻辑和未来功能方向。

当前部署方式：
项目通过 GitHub 仓库连接 Netlify 进行静态部署。

当前技术栈：

```txt
React
JavaScript
Tailwind CSS
CSS Animation
Netlify
GitHub
```

---

## 2. 项目核心功能

### 2.1 首页

首页用于展示平台整体定位和视觉风格。

当前首页重点包括：

* 国际少年 AI 社区主标题
* 平台介绍文案
* 成果展示入口
* 项目招募入口
* GitHub 绑定和项目同步概念展示
* 项目推荐预览卡片
* 高级深色科技风背景
* 动态视觉效果

首页正在加入或已经规划加入的视觉效果：

* Blur Text 标题动画
* Floating Lines 背景动画
* Gradual Blur 渐进模糊
* Click Spark 鼠标点击火花
* Crosshair 鼠标准星
* Dock 页面切换导航
* 深色玻璃拟态卡片

---

### 2.2 成果展示页面

成果展示页面用于展示社区内优秀 AI 项目。

当前页面包含：

* 项目成果卡片
* 项目名称
* 项目主题
* 项目作者
* 项目阶段
* 项目标签
* 平台 Star 数
* GitHub Repo Star 数
* GitHub 仓库名
* GitHub 仓库链接
* README 摘要
* 最后提交信息
* README 同步时间
* Demo 预览
* 项目详情弹窗
* Star 点击模拟
* 排序功能

当前排序方式：

```txt
平台 Star 排序
GitHub Star 排序
Agent 推荐分排序
最新项目排序
```

说明：
当前所有数据均为静态模拟数据，未来可通过数据库和 GitHub API 获取真实项目数据。

---

### 2.3 项目招募页面

项目招募页面用于模拟用户发布项目招募、浏览项目招募和申请加入项目。

当前页面包含：

* 浏览项目招募
* 我发起的项目
* 发起项目招募弹窗
* 报名加入弹窗
* 报名表弹窗
* 项目阶段展示
* 项目标签展示
* GitHub 仓库信息展示
* 项目报名人数展示
* 项目 Star 数展示

项目招募字段包括：

```txt
项目名称
项目主题
项目阶段
项目标签
GitHub 仓库
Demo HTML
项目介绍
```

报名字段包括：

```txt
自我介绍
贡献方向
GitHub 账号
联系方式
```

报名规则说明：

```txt
报名信息进入仅项目发起者可见的报名表
报名信息最多保留 7 × 24 小时
```

当前报名逻辑是静态模拟，暂未真实保存数据。

---

### 2.4 用户主页

用户主页设计方向类似 GitHub 个人主页，用于展示用户账号信息和 GitHub 绑定状态。

当前用户字段包括：

```txt
头像
用户名
用户 handle
用户 ID
GitHub 绑定账户
我的项目
收到的 Star
同步仓库数量
```

当前用户主页包含：

* 用户头像
* 用户名
* 用户 ID
* GitHub 绑定账户
* 我的项目列表
* 收到 Star 数
* 仓库同步数量
* 修改个人信息表单

说明：
当前用户数据为前端静态模拟数据，修改信息只在当前页面状态中生效，刷新后不会保存。

---

### 2.5 右上角用户菜单

所有页面顶部右侧都有用户头像和用户名区域。

当前交互：

* 鼠标悬浮头像区域时显示下拉菜单
* 菜单包含：

  * 我的主页
  * 登出

说明：

```txt
我的主页：跳转到用户主页页面
登出：当前为静态 Demo，仅弹出提示，暂未接入真实登录系统
```

---

## 3. 当前项目目录结构

```txt
/
├─ public/
│  └─ index.html
│
├─ src/
│  ├─ index.js
│  ├─ index.css
│  ├─ App.js
│  │
│  ├─ components/
│  │  ├─ Navbar.js
│  │  ├─ UserMenu.js
│  │  ├─ Modal.js
│  │  ├─ Footer.js
│  │  │
│  │  ├─ ui/
│  │  │  ├─ AnimatedText.js
│  │  │  ├─ QuietGrid.js
│  │  │  ├─ Reveal.js
│  │  │  └─ SpotlightCard.js
│  │  │
│  │  ├─ homeEffects/
│  │  │  ├─ BlurText.js
│  │  │  ├─ FloatingLines.js
│  │  │  ├─ GradualBlur.js
│  │  │  ├─ ClickSpark.js
│  │  │  ├─ CrosshairCursor.js
│  │  │  ├─ PremiumHomeCard.js
│  │  │  └─ DockNav.js
│  │  │
│  │  └─ effects/
│  │     ├─ AnimatedContent.js
│  │     ├─ AuroraBackground.js
│  │     ├─ CursorGlow.js
│  │     ├─ DecryptText.js
│  │     ├─ PremiumCard.js
│  │     ├─ RotatingText.js
│  │     ├─ ShinyText.js
│  │     └─ SplitText.js
│  │
│  ├─ pages/
│  │  ├─ HomePage.js
│  │  ├─ ResultsPage.js
│  │  ├─ ProjectsPage.js
│  │  └─ ProfilePage.js
│  │
│  ├─ data/
│  │  └─ projects.js
│  │
│  └─ hooks/
│     └─ useScrollReveal.js
│
├─ package.json
├─ tailwind.config.js
├─ postcss.config.js
├─ netlify.toml
└─ README.md
```

---

## 4. 主要程序文件说明

### 4.1 `src/App.js`

项目主入口组件。

作用：

* 管理当前页面状态
* 控制首页、成果展示、项目招募、个人主页之间的切换
* 渲染顶部导航栏和底部 Footer
* 支持通过页面状态切换不同子页面

当前页面状态包括：

```txt
home
results
projects
profile
```

---

### 4.2 `src/index.js`

React 应用入口文件。

作用：

* 挂载 React 应用到 `public/index.html` 中的 `root`
* 引入全局样式 `index.css`
* 渲染 `App.js`

---

### 4.3 `src/index.css`

全局 CSS 文件。

作用：

* 引入 Tailwind CSS
* 定义全局背景、字体、颜色
* 定义首页动画效果
* 定义深色高级风页面样式
* 定义卡片 hover 聚光效果
* 定义按钮、输入框、标签等通用样式

重要样式包括：

```txt
home-stage
blur-text
floating-lines
gradual-blur
click-spark
crosshair
home-premium-card
dock-nav
dark-page-section
dark-primary-btn
dark-secondary-btn
dark-input
spotlight-card
```

---

### 4.4 `src/components/Navbar.js`

顶部导航栏组件。

作用：

* 显示网站 Logo
* 显示页面切换 Dock
* 显示右上角用户菜单
* 负责调用 `setCurrentPage` 切换页面

包含页面：

```txt
首页
项目招募
成果展示
```

用户主页通过右上角用户菜单进入。

---

### 4.5 `src/components/UserMenu.js`

右上角用户菜单组件。

作用：

* 显示用户头像
* 显示用户名和 handle
* 鼠标悬浮时显示下拉菜单
* 点击“我的主页”切换到个人主页
* 点击“登出”显示静态 Demo 提示

当前为静态用户系统，未接入真实登录。

---

### 4.6 `src/components/Modal.js`

通用弹窗组件。

作用：

* 用于项目详情弹窗
* 用于 Demo 预览弹窗
* 用于发起项目招募弹窗
* 用于报名申请弹窗
* 用于申请报名表弹窗

当前样式为深色玻璃风。

---

### 4.7 `src/components/Footer.js`

页面底部组件。

作用：

* 显示项目名称
* 显示项目技术栈或 Demo 说明
* 所有页面底部通用

---

## 5. `components/ui/` 文件说明

### 5.1 `Reveal.js`

滚动入场动画组件。

作用：

* 当元素进入视口时添加 `active` 类
* 触发 CSS 中的 reveal 动画
* 用于成果展示、项目招募、个人主页等页面的区块入场

---

### 5.2 `SpotlightCard.js`

卡片聚光效果组件。

作用：

* 鼠标移动时计算鼠标相对于卡片的位置
* 通过 CSS 变量控制卡片内部 spotlight 聚光位置
* 用于成果展示、项目招募、个人主页的主要卡片

---

### 5.3 `AnimatedText.js`

旧版文本动画组件。

作用：

* 按词分割文字
* 让文字逐个出现

目前主要作为保留组件，部分旧页面可能仍然引用。

---

### 5.4 `QuietGrid.js`

旧版极简背景组件。

作用：

* 提供细网格背景
* 当前首页已改为更高级的 Floating Lines 背景，此组件可保留备用

---

## 6. `components/homeEffects/` 文件说明

该目录是当前新版首页主要使用的动画组件目录。

### 6.1 `BlurText.js`

实现 Blur Text 效果。

作用：

* 将文字按词拆分
* 每个词以模糊、位移、淡入方式进入
* 用于首页主标题和副标题

当前用于：

```txt
国际少年 AI 社区
连接全球少年 AI 创作者，让每一个项目都能找到合作者、展示舞台与成长方向。
```

---

### 6.2 `FloatingLines.js`

实现 Floating Lines 背景动画。

作用：

* 自动生成多条竖向浮动线条
* 线条从页面底部向上移动
* 用作首页动态背景

---

### 6.3 `GradualBlur.js`

实现渐进模糊遮罩。

作用：

* 在首页顶部和底部添加渐进 blur
* 增强页面层次感
* 防止边缘内容过于生硬

---

### 6.4 `ClickSpark.js`

实现点击火花效果。

作用：

* 用户点击页面时，在鼠标点击位置生成短暂火花粒子
* 提升交互感

---

### 6.5 `CrosshairCursor.js`

实现鼠标准星效果。

作用：

* 鼠标移动时显示横线、竖线和中心点
* 增强科技感和交互感
* 在移动端会隐藏

---

### 6.6 `PremiumHomeCard.js`

首页高级卡片组件。

作用：

* 实现玻璃拟态卡片
* 支持鼠标 hover 聚光
* 用于首页右侧 Project Match 卡片和下方产品重点卡片

---

### 6.7 `DockNav.js`

顶部 Dock 导航组件。

作用：

* 替代普通导航按钮
* 鼠标悬浮时导航项放大、上浮
* 用于顶部页面切换

---

## 7. `components/effects/` 文件说明

该目录中包含早期尝试的动画组件。

当前状态：
部分组件已经被 `homeEffects/` 替代，暂时保留作为备用或后续参考。

包含：

```txt
AnimatedContent.js
AuroraBackground.js
CursorGlow.js
DecryptText.js
PremiumCard.js
RotatingText.js
ShinyText.js
SplitText.js
```

建议后续整理时：

* 确认哪些组件还在被引用
* 未被引用的组件可以删除
* 最终保留一套统一的动画组件目录，避免混乱

---

## 8. 页面文件说明

### 8.1 `src/pages/HomePage.js`

首页页面。

作用：

* 展示平台定位
* 展示主标题和副标题
* 展示成果展示、项目招募入口
* 展示 GitHub 同步预览
* 展示首页产品重点卡片

当前主要视觉效果：

```txt
Blur Text
Floating Lines
Gradual Blur
Click Spark
Crosshair
Dock Navigation
Premium Card
```

首页目前是整个项目视觉重点。

---

### 8.2 `src/pages/ResultsPage.js`

成果展示页面。

作用：

* 展示项目成果卡片
* 展示项目 GitHub 仓库信息
* 展示 README 摘要
* 展示 Star 数
* 展示最后提交记录
* 支持排序
* 支持项目详情弹窗
* 支持 Demo 预览弹窗

当前为静态数据。

---

### 8.3 `src/pages/ProjectsPage.js`

项目招募页面。

作用：

* 浏览所有项目招募
* 查看我发起的项目
* 发起新项目招募
* 报名加入项目
* 查看报名表

当前为静态数据和静态弹窗交互，暂未接数据库。

---

### 8.4 `src/pages/ProfilePage.js`

用户主页页面。

作用：

* 展示用户基础信息
* 展示 GitHub 绑定状态
* 展示我的项目
* 展示收到 Star
* 展示同步仓库数量
* 提供修改个人信息表单

当前修改只在前端状态中生效，刷新页面后不会保存。

---

## 9. 数据文件说明

### `src/data/projects.js`

静态 Demo 数据文件。

作用：

* 存储模拟用户数据
* 存储模拟项目数据
* 存储模拟报名用户数据

当前包含：

```txt
demoUser
demoProjects
demoApplicants
```

### `demoUser`

模拟当前登录用户。

字段包括：

```txt
id
username
handle
avatar
githubAccount
githubBound
githubProfile
totalStars
projectsCount
repositoriesSynced
```

### `demoProjects`

模拟项目列表。

字段包括：

```txt
id
name
theme
author
avatar
stage
tags
star
repoStars
aiScore
applicants
isMine
githubUrl
githubRepo
githubBranch
readmeSyncedAt
lastCommit
repoHealth
demoHtml
readme
```

### `demoApplicants`

模拟报名用户列表。

字段包括：

```txt
id
name
avatar
intro
github
remain
```

未来接入后端时，这个文件可以被 API 请求替代。

---

## 10. 当前项目进度

### 已完成

```txt
首页基础结构
首页高级视觉改造
顶部导航栏
Dock 页面切换
右上角用户菜单
成果展示页面
项目招募页面
个人主页页面
通用 Modal 弹窗
静态项目数据
静态用户数据
静态报名数据
Star 点击模拟
项目排序模拟
GitHub 仓库信息展示
README 摘要展示
Demo HTML 预览
Netlify 静态部署配置
```

---

### 正在完善中

```txt
页面整体深色高级风统一
成果展示、项目招募、个人主页与首页风格对齐
动画组件目录整理
旧组件清理
Netlify 构建错误排查
```

---

### 尚未完成

```txt
真实用户注册
真实用户登录
真实登出
数据库存储
GitHub OAuth 绑定
GitHub API 读取 README
GitHub API 读取 Repo Star
GitHub API 读取 Commit 信息
项目真实发布
报名信息真实保存
报名信息 7×24 小时自动过期
Agent 推荐系统
真实个性化推荐
图片上传和数据库存储
移动端完整适配
```

---

## 11. 当前已知问题

### 11.1 组件目录较乱

当前同时存在：

```txt
components/ui/
components/effects/
components/homeEffects/
```

建议后续统一整理。

推荐最终保留：

```txt
components/ui/
components/homeEffects/
```

`components/effects/` 中未使用的旧组件可以后续删除。

---

### 11.2 部分旧组件可能仍在仓库中

旧版首页相关组件可能仍然存在：

```txt
Hero.js
IntroSection.js
AgentSection.js
Projects.js
Results.js
```

如果 `HomePage.js` 已经不再引用这些组件，它们可以暂时保留，但后续建议删除，避免混淆。

---

### 11.3 部署时容易缺文件

最近出现过 Netlify build 报错：

```txt
Can't resolve './homeEffects/DockNav'
Can't resolve '../components/ui/SpotlightCard'
```

原因是代码中引用了组件，但 GitHub 仓库中缺少对应文件。

后续修改时需要注意：

```txt
文件路径必须存在
文件名大小写必须一致
Netlify 是 Linux 环境，大小写错误会导致构建失败
```

---

### 11.4 页面切换不是完整路由系统

当前页面切换依赖 React state：

```txt
currentPage
setCurrentPage
```

不是 React Router。

优点：

```txt
简单
适合当前静态 Demo
```

缺点：

```txt
URL 路由能力较弱
刷新特定子页面需要额外 hash 支持
后续大型项目建议接入 React Router
```

---

## 12. 部署说明

当前推荐 Netlify 配置：

```txt
Build command: npm run build
Publish directory: build
```

建议仓库根目录包含：

```txt
netlify.toml
```

内容：

```toml
[build]
  command = "npm run build"
  publish = "build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

重新部署时建议选择：

```txt
Deploy project without cache
```

这样可以避免旧缓存导致样式或构建结果不更新。

---

## 13. 后续开发建议

### 13.1 优先事项

```txt
1. 确保 Netlify build 成功
2. 检查所有 import 文件路径
3. 统一成果展示、项目招募、个人主页样式
4. 删除未使用旧组件
5. 完成移动端适配
```

---

### 13.2 下一阶段功能开发

建议下一阶段按顺序开发：

```txt
1. 引入 React Router
2. 设计真实用户数据结构
3. 接入 Supabase / Firebase / MongoDB 等数据库
4. 接入 GitHub OAuth
5. 接入 GitHub API
6. 实现项目发布和报名保存
7. 实现报名 7×24 小时自动过期
8. 接入 Agent 推荐逻辑
```

---

### 13.3 数据库设计方向

未来数据库建议至少包含：

```txt
users
projects
applications
stars
github_repos
agent_preferences
```

### users

```txt
id
username
avatar
github_account
github_profile
created_at
updated_at
```

### projects

```txt
id
name
theme
stage
tags
description
github_repo
github_url
demo_html
owner_id
star_count
repo_star_count
readme_cache
last_commit
created_at
updated_at
```

### applications

```txt
id
project_id
user_id
intro
contribution
contact
github_account
expires_at
created_at
status
```

### stars

```txt
id
project_id
user_id
created_at
```

---

## 14. 项目总结

当前项目已经完成了 International Youth AI Community 的前端 Demo 雏形。

目前重点已经从单纯首页展示，逐步扩展为完整的社区型产品结构：

```txt
首页展示平台定位
成果展示承载项目输出
项目招募承载项目协作
用户主页承载 GitHub 身份与个人项目记录
```

项目当前最大特点是围绕 GitHub 进行设计：

```txt
用户绑定 GitHub
项目绑定 GitHub 仓库
成果展示读取 README 和 Repo Star
项目招募显示仓库上下文
用户主页展示项目和 Star 数据
```

当前版本虽然仍然是静态 Demo，但已经具备清晰的产品结构、页面体系、交互原型和后续扩展方向。
