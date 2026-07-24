# 🏠 房找人 — 部署说明

## 这是什么

「房找人」是一个**纯静态网页应用**，包含客户端 APP 和 GP 管理后台，无需任何服务器、数据库或后端。三个 HTML 文件 + 浏览器 = 完整运行。

## 文件说明

```
dist/
├── index.html    ← 入口页面（桌面/手机自适应）
├── app.html      ← 客户端 APP（手机端优化）
├── admin.html    ← GP 管理后台（桌面端优化）
└── README.md     ← 本文件
```

## 部署方式（任选一种）

### 方式一：GitHub Pages（免费，推荐）

1. 把这 3 个文件上传到 GitHub 仓库
2. Settings → Pages → 选择 main 分支 → Save
3. 几分钟后获得 `https://你的用户名.github.io/仓库名/` 地址
4. 把地址发给任何人，直接打开

### 方式二：Netlify（免费，拖拽即部署）

1. 打开 [netlify.com](https://netlify.com)
2. 把 `dist` 文件夹直接拖到页面中
3. 自动部署，获得 `https://xxx.netlify.app` 地址
4. 可以绑定自定义域名

### 方式三：Vercel（免费）

```bash
npx vercel ./dist --prod
```

### 方式四：任何静态文件服务器

```bash
# Python
python3 -m http.server 8080 --directory ./dist

# Node.js
npx serve ./dist

# Nginx / Apache
# 把 dist 目录内容复制到 web 根目录即可
```

### 方式五：阿里云OSS / 腾讯云COS

1. 创建存储桶，开启静态网站托管
2. 上传 3 个文件
3. 绑定域名，配置 CDN

## 手机端体验

- **微信内打开**：直接发链接，微信内置浏览器完美适配
- **添加到桌面**：Safari 点击「分享 → 添加到主屏幕」，像原生 APP
- **扫码打开**：用任何二维码生成器把链接转成二维码

## 零依赖

- ❌ 不需要 Node.js
- ❌ 不需要 npm install
- ❌ 不需要数据库
- ❌ 不需要后端 API
- ✅ 只需要一个能托管静态文件的地方
