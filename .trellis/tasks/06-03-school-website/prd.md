# 校园网站开发

## Goal

开发一个高校校园网站（基础展示型），为大学提供信息展示和对外形象窗口，包含首页、学校概况、院系介绍、新闻动态、通知公告、联系方式等核心页面。

## What I already know

* 项目使用 Trellis 管理开发流程
* 目前仓库中无任何应用代码，需要从零搭建

## Assumptions (temporary)

* 面向高校/大学
* 纯静态展示页面，无后台 CMS，内容写在代码中
* 技术栈：Vue 3 + Vite + TypeScript
* 响应式设计，适配手机/平板/桌面

## Requirements

* 首页 — 学校形象展示、快捷导航、轮播/公告
* 学校概况 — 学校简介、历史沿革、校园风光、领导团队
* 院系介绍 — 各学院/系的基本信息、专业列表
* 新闻动态 — 校园新闻列表、新闻详情页
* 通知公告 — 校内公告列表、公告详情页
* 联系方式 — 学校地址、电话、地图、反馈渠道
* 响应式设计 — 适配手机/平板/桌面

## Acceptance Criteria

* [ ] 首页可正常加载，轮播图和导航可交互
* [ ] 所有页面可正常访问，内容展示完整
* [ ] 移动端/平板/桌面三端布局正常
* [ ] 新闻/公告列表页可展示多条数据
* [ ] 新闻/公告详情页可展示单条内容

## Definition of Done

* Tests added/updated (unit/integration where appropriate)
* Lint / typecheck / CI green
* Docs/notes updated if behavior changes
* Rollout/rollback considered if risky

## Out of Scope

* 后台 CMS / 内容管理系统
* 用户登录/权限系统
* 招生就业模块
* 科研展示模块
* 校友系统
* 在线咨询
* 数据统计看板
* SEO meta 信息配置
* 内容数据抽离为独立 JSON 文件

## Technical Approach

* **框架**: Vue 3 + Vite + TypeScript
* **路由**: Vue Router（6 个主页面 + 新闻/公告详情子路由）
* **样式**: CSS 响应式设计（媒体查询适配三端）
* **内容**: 直接写在 Vue 组件中，纯静态
* **项目结构**: 标准 Vite + Vue 3 SPA 项目结构

## Technical Notes

* 仓库目前为空，需从零搭建项目结构
* 技术栈：Vue 3 + Vite + TypeScript，纯前端项目，无后端服务