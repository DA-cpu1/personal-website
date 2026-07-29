# Personal Website

陈锶达的个人网站，基于 Astro 5 与 Astro Theme Pure 构建。

当前仓库已经移除上游模板作者的文章、头像、二维码、活动、项目案例和外部服务配置，只保留博客、笔记、搜索、双语路由、RSS、SEO 与主题切换等通用能力。

## 本地开发

环境要求：

- Node.js 18+
- Bun

```shell
bun install
bun dev
```

默认开发地址为 `http://localhost:4321`。

## 常用命令

```shell
bun run check
bun run build
bun preview
bun new
bun format
bun lint
```

## 写博客

中文文章放在：

```text
src/content/blog/
  20260729 - example-post/
    post.mdx
```

文章示例：

```mdx
---
title: '文章标题'
description: '文章摘要'
publishDate: 2026-07-29 20:00:00
tags: ['学习']
draft: true
comment: false
---

正文从这里开始。
```

本地写作时使用 `draft: true`；准备发布时改为 `false`，运行检查后提交到 GitHub。

## 首次上线前

1. 在 `astro.config.ts` 中把 `https://example.com` 替换为正式域名。
2. 在 `src/site.config.ts` 中确认标题、简介、导航和社交链接。
3. 决定是否配置 Waline 评论、Vercel Analytics 和 Speed Insights。
4. 运行 `bun run check` 与 `bun run build`。

## 来源与许可

项目基于：

- [Astro](https://astro.build/)
- [Astro Theme Pure](https://github.com/cworld1/astro-theme-pure)
- [joyehuang/blog](https://github.com/joyehuang/blog)

代码沿用仓库中的 Apache 2.0 许可证。第三方依赖与字体遵循各自许可证。
