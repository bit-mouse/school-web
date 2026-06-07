# 新增学院详情页

## Goal

为现有院系列表页的每个学院增加独立详情页，点击学院卡片后可查看该学院的详细信息，包含联系方式、师资力量、科研方向、学院领导等完整信息。

## Requirements

* 新增路由 `/departments/:id`，指向 `DepartmentDetailView.vue`
* 院系列表页的学院卡片添加可点击跳转（router-link）
* 详情页包含以下信息区域：
  * 学院标题区 — 学院名称 + 主题色 banner
  * 详细简介 — 现有 intro 延展为更详细的描述
  * 专业列表 — 展示本科专业
  * 联系方式 — 电话、邮箱、办公地址
  * 师资力量 — 教授/副教授人数，师资亮点
  * 科研方向 — 主要研究领域列表
  * 学院领导 — 院长/党委书记姓名
* 详情页底部有"返回院系列表"链接
* 数据仍为静态内容，扩展 `Department` 接口以支持新字段

## Data Fields (扩展 Department 接口)

```typescript
interface Department {
  id: number
  name: string
  intro: string        // 现有一句话简介
  description: string  // 新增 — 详细描述
  majors: string[]     // 现有专业列表
  contact: {           // 新增
    phone: string
    email: string
    address: string
  }
  faculty: string      // 新增 — 师资概况
  researchAreas: string[] // 新增 — 科研方向
  leader: {            // 新增
    dean: string
    partySecretary: string
  }
  color: string        // 现有主题色
}
```

## Technical Approach

* 复用 NewsDetailView 的模式：`useRoute()` 获取 `:id` 参数，`computed()` 查找对应学院
* 将 departments 数据从 DepartmentsView.vue 抽取到详情页可访问的位置（或两处各自维护相同数据）

## Out of Scope

* 搜索/筛选功能
* 后端 API / CMS
