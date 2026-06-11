// 当前为静态 Demo 数据。
// 后续接入数据库后，项目、用户、封面图、报名表、GitHub 同步状态都由后端返回。

export const demoUser = {
  id: 1,
  username: "李明远",
  handle: "liming-ai",
  avatar: "李",
  githubAccount: "liming-ai",
  githubBound: true,
  githubProfile: "https://github.com/liming-ai",
  totalStars: 241,
  projectsCount: 3,
  repositoriesSynced: 4
};

export const demoProjects = [
  {
    id: 1,
    name: "强化学习游戏 AI 对战平台",
    theme: "使用 PPO 训练游戏智能体，并开放可视化对战 Demo。",
    author: "李明远",
    avatar: "李",
    stage: "后期",
    tags: ["#强化学习", "#Python", "#游戏AI"],
    star: 142,
    repoStars: 318,
    aiScore: 95,
    applicants: 3,
    isMine: true,
    githubUrl: "https://github.com/demo/rl-game-ai",
    githubRepo: "demo/rl-game-ai",
    githubBranch: "main",
    readmeSyncedAt: "2 小时前",
    lastCommit: "fix: improve PPO reward shaping",
    repoHealth: "active",
    demoHtml:
      "<div style='font-family:monospace;border:1px solid #eaeaea;padding:16px;background:#fbfbfa;color:#151515'>Episode 1000<br/>Win Rate: 87.3%<br/>Avg Reward: +24.6<br/>Training: ███████████░░░ 72%</div>",
    readme:
      "本项目基于 PPO 算法，实现多智能体对战游戏 AI。目前支持五子棋、贪吃蛇等经典游戏。核心算法已经完成，正在优化多智能体通信协议。"
  },
  {
    id: 2,
    name: "多模态情感识别系统",
    theme: "融合表情、语音、文本三路信号进行情感识别。",
    author: "陈思远",
    avatar: "陈",
    stage: "中期",
    tags: ["#计算机视觉", "#NLP", "#情感分析"],
    star: 98,
    repoStars: 126,
    aiScore: 88,
    applicants: 1,
    isMine: false,
    githubUrl: "https://github.com/demo/multimodal-emotion",
    githubRepo: "demo/multimodal-emotion",
    githubBranch: "dev",
    readmeSyncedAt: "昨天",
    lastCommit: "add audio feature extractor",
    repoHealth: "building",
    demoHtml: "",
    readme:
      "融合面部表情、语音音调、文本语义三路信号，实现高精度情感识别。当前需要熟悉音频处理或前端展示的小伙伴加入。"
  },
  {
    id: 3,
    name: "具身智能机器人控制",
    theme: "构建基础机器人控制 Demo，用于抓取、避障和视觉对齐。",
    author: "王子轩",
    avatar: "王",
    stage: "早期",
    tags: ["#具身智能", "#ROS", "#机器人"],
    star: 67,
    repoStars: 43,
    aiScore: 82,
    applicants: 0,
    isMine: false,
    githubUrl: "",
    githubRepo: "未绑定",
    githubBranch: "-",
    readmeSyncedAt: "未同步",
    lastCommit: "waiting for repository binding",
    repoHealth: "unbound",
    demoHtml: "",
    readme:
      "项目目标是构建一个简单机器人控制 Demo，使用摄像头和传感器完成基础抓取与避障任务。"
  },
  {
    id: 4,
    name: "AI 作曲与旋律生成",
    theme: "基于 Transformer 生成短旋律，支持风格控制。",
    author: "张晓雨",
    avatar: "张",
    stage: "结项",
    tags: ["#生成式AI", "#音乐", "#Transformer"],
    star: 203,
    repoStars: 423,
    aiScore: 91,
    applicants: 0,
    isMine: false,
    githubUrl: "https://github.com/demo/ai-composer",
    githubRepo: "demo/ai-composer",
    githubBranch: "main",
    readmeSyncedAt: "3 天前",
    lastCommit: "release workshop demo",
    repoHealth: "released",
    demoHtml:
      "<div style='font-family:sans-serif;border:1px solid #eaeaea;padding:16px;background:#fbfbfa;color:#151515'><strong>AI 旋律生成器</strong><br/><br/>melody generation running...</div>",
    readme:
      "基于 Transformer 的旋律生成模型，支持指定风格生成 8-32 小节旋律。项目已完成基础版本。"
  },
  {
    id: 5,
    name: "校园智能问答 Bot",
    theme: "面向校园资料、活动通知和常见问题的 RAG 问答系统。",
    author: "林可",
    avatar: "林",
    stage: "中期",
    tags: ["#大语言模型", "#RAG", "#校园应用"],
    star: 76,
    repoStars: 89,
    aiScore: 86,
    applicants: 2,
    isMine: false,
    githubUrl: "https://github.com/demo/campus-bot",
    githubRepo: "demo/campus-bot",
    githubBranch: "main",
    readmeSyncedAt: "6 小时前",
    lastCommit: "update retrieval pipeline",
    repoHealth: "active",
    demoHtml: "",
    readme:
      "通过接入学校资料、活动信息和常见问题，制作一个校园智能问答机器人。当前重点是资料检索和回答准确率优化。"
  }
];

export const demoApplicants = [
  {
    id: 1,
    name: "陈思远",
    avatar: "陈",
    intro: "擅长 PyTorch、计算机视觉，有两段项目经历",
    github: "chensiyuan-ai",
    remain: "5h 剩余"
  },
  {
    id: 2,
    name: "张晓雨",
    avatar: "张",
    intro: "熟悉 React、数据可视化和前端交互",
    github: "zhangxy-lab",
    remain: "23h 剩余"
  },
  {
    id: 3,
    name: "王子轩",
    avatar: "王",
    intro: "NLP 方向，熟悉 Transformer 架构",
    github: "wangzx-nlp",
    remain: "48h 剩余"
  }
];
