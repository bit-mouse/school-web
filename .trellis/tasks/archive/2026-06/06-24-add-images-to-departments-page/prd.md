# Add images to Departments page

## Goal

在院系介绍（DepartmentsView）的卡片列表中添加图片，使页面更生动、视觉效果更好。

## What I already know

- `DepartmentsView.vue` 使用卡片网格展示 10 个学院
- 每个卡片有彩色 header（纯色背景 + 院系名称）+ 正文（简介 + 专业列表）
- 项目目前没有任何图片资源（`src/assets/` 为空，`public/` 只有 favicon）
- 项目是纯前端静态 SPA，无后端/CMS/SSR
- 卡片目前通过 `dept.color` 字段设置纯色背景

## Assumptions (temporary)

- 用户希望每个院系卡片有差异化的图片，而非统一的默认图
- 图片应该与院系学科特征相关

## Decision

已选择的方案：使用 picsum.photos 在线图片（固定 ID），替换卡片顶部纯色 header 为图片背景 + 院系名称叠加。

理由：
- 无需将二进制图片纳入仓库，避免 repo 膨胀
- 图片通过 CDN 加载，性能好
- 固定 ID 确保每次访问图片一致
- 不涉及版权问题

## Requirements

- [x] 每个院系卡片用图片替换纯色 header
- [ ] 院系名称叠加显示在图片上
- [ ] 响应式布局正常（桌面/平板/手机）
- [ ] 保持现有文字内容完整

## Acceptance Criteria

- [ ] 10 个院系各有不同的展示图片
- [ ] 卡片图片在不同屏幕尺寸下正确裁剪/缩放
- [ ] 文字叠加层清晰可读
- [ ] TypeScript 类型检查通过
- [ ] 构建成功 (vue-tsc && vite build)

## Out of Scope

- 不上传真实摄影图片到仓库
- 不依赖后端 API
- 不改动路由或其他视图组件
- 不改动卡片正文内容

## Technical Approach

1. 给 `Department` 接口添加 `image` 字段，存储 picsum 图片 ID
2. 修改 `.dept-header` 从纯色背景改为 `background-image` + 渐变叠加层
3. 院系名称文字保留在 header 中，使用白色 + text-shadow 保证可读性
4. 每张图片使用 `object-fit: cover` 确保裁剪适配

## Implementation Plan

1. 修改 `DepartmentsView.vue` — 添加 image 字段、更新模板和样式
2. 构建验证

## Technical Notes

- `DepartmentsView.vue` 是唯一需要修改的文件
- 图片 URL 格式：`https://picsum.photos/id/{id}/{width}/{height}`
- 每个 department 分配不同的 picsum photo ID
- 使用 `linear-gradient` 叠加在背景图片上，确保文字可读
