# 🎨 AI 你画我猜网页游戏

一个基于Next.js的在线你画我猜游戏，玩家可以在画布上作画，AI系统负责猜测画的是什么内容。

## ✨ 功能特性

- 🎨 **交互式画布**：支持鼠标绘画，可调整画笔大小和颜色
- 🤖 **AI实时猜测**：集成DeepSeek API进行图像识别
- 🎯 **响应式设计**：适配桌面和移动设备
- 🎮 **直观界面**：简洁美观的游戏界面
- 🔧 **开发友好**：支持模拟模式，无需API密钥即可测试

## 🚀 快速开始

### 环境要求
- Node.js 18+ 
- npm 或 yarn

### 安装步骤

1. **安装依赖**
```bash
npm install
```

2. **配置环境变量**
复制 `.env.example` 为 `.env.local` 并填入你的DeepSeek API密钥：
```bash
cp .env.example .env.local
```
编辑 `.env.local` 文件：
```env
DEEPSEEK_API_KEY=your_deepseek_api_key_here
```

3. **启动开发服务器**
```bash
npm run dev
```

4. **打开浏览器**
访问 [http://localhost:3000](http://localhost:3000)

## 🔧 技术栈

- **前端框架**: Next.js 14 (App Router)
- **开发语言**: TypeScript
- **样式**: Tailwind CSS
- **AI集成**: DeepSeek API
- **构建工具**: Vite (通过Next.js)

## 🎮 游戏玩法

1. **选择工具**：在左侧工具栏调整画笔大小和颜色
2. **开始绘画**：在画布上绘制你想要表达的内容
3. **AI猜测**：点击"让AI猜猜"按钮，AI会分析你的画作
4. **查看结果**：AI会给出猜测结果，看看是否猜中！

## 🔌 API配置

### DeepSeek API
游戏使用DeepSeek的视觉模型进行图像识别。你需要：

1. 访问 [DeepSeek平台](https://platform.deepseek.com/)
2. 注册账号并获取API密钥
3. 将API密钥填入 `.env.local` 文件

### 模拟模式
如果没有配置API密钥，游戏会自动进入模拟模式，使用预定义的猜测列表。

## 📁 项目结构

```
practice/
├── app/
│   ├── api/
│   │   └── guess/          # AI猜测API端点
│   ├── components/         # React组件
│   │   ├── Canvas.tsx     # 画布组件
│   │   ├── DrawingTools.tsx # 绘画工具
│   │   └── AIGuess.tsx    # AI猜测界面
│   ├── layout.tsx         # 根布局
│   ├── page.tsx           # 主页面
│   └── globals.css        # 全局样式
├── public/                # 静态资源
├── .env.example          # 环境变量示例
├── package.json          # 依赖配置
└── README.md            # 项目说明
```

## 🛠️ 开发指南

### 添加新功能
1. 在 `app/components/` 目录下创建新组件
2. 在 `app/page.tsx` 中集成组件
3. 如需新API端点，在 `app/api/` 下创建

### 样式定制
- 使用Tailwind CSS类名进行样式设计
- 全局样式在 `app/globals.css` 中定义
- 组件特定样式使用内联或CSS模块

### 测试
```bash
# 开发服务器
npm run dev

# 生产构建
npm run build

# 启动生产服务器
npm start
```

## 🤝 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📄 许可证

本项目采用 MIT 许可证

## 🙏 致谢

- [Next.js](https://nextjs.org/) - React框架
- [DeepSeek](https://www.deepseek.com/) - AI模型提供商
- [Tailwind CSS](https://tailwindcss.com/) - 样式框架

## 📞 支持

如有问题或建议，请提交Issue

---

**快乐绘画，让AI猜猜你的创意！** 🎨🤖
