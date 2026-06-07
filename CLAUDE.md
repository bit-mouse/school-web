# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

University campus website — a **frontend-only static SPA** built with Vue 3 + Vite + TypeScript + Vue Router. Content is written directly in Vue components (no backend, no CMS, no SSR). The site features responsive design for mobile/tablet/desktop.

## Tech Stack & Commands

**Stack**: Vue 3 (Composition API, `<script setup>`) + Vite + TypeScript + Vue Router 4

```bash
npm run dev       # Start Vite dev server at localhost:5173
npm run build     # Type-check + production build (vue-tsc -b && vite build)
npm run preview   # Preview production build locally
```

## Source Architecture

```
src/
├── components/        # Shared reusable components
│   ├── AppHeader.vue  # Responsive header with hamburger menu
│   ├── AppFooter.vue  # Site footer with navigation links
│   ├── AppCarousel.vue # Auto-playing image carousel
│   ├── NewsCard.vue   # News list item card
│   └── NoticeCard.vue # Notice list item card
├── router/
│   └── index.ts       # 8 routes (6 pages + news/:id + notice/:id)
├── views/             # Page-level route components
│   ├── HomeView.vue   # 首页 — carousel, quick links, stats
│   ├── AboutView.vue  # 学校概况 — intro, timeline, leadership
│   ├── DepartmentsView.vue # 院系介绍 — college list + majors
│   ├── NewsView.vue / NewsDetailView.vue   # 新闻动态
│   ├── NoticesView.vue / NoticeDetailView.vue # 通知公告
│   └── ContactView.vue # 联系方式 — info cards, map, directory
├── App.vue            # Root layout (Header + router-view + Footer)
├── main.ts            # App entry point
└── style.css          # Global styles + CSS custom properties
```

### Patterns & Conventions

- **All content is static** — data defined as typed arrays/objects inside `views/` components
- **Component styles** use `<style scoped>` with CSS custom properties from `:root`
- **Responsive breakpoints** at 768px (tablet) and 480px (mobile)
- **Route params** for detail pages via `useRoute()` + `computed()` lookup
- **UI language**: Chinese (all pages use Chinese text)

## Trellis Workflow

This repo is managed by [Trellis](https://github.com/nicepkg/trellis) for AI-assisted development. The core workflow:

1. **Create a task** before any implementation work
2. **Plan** (brainstorm requirements → prd.md → curate jsonl context)
3. **Execute** (dispatch `trellis-implement` and `trellis-check` sub-agents)
4. **Finish** (spec update → commit → archive)

```bash
python3 ./.trellis/scripts/task.py create "<title>"        # create task
python3 ./.trellis/scripts/task.py start <task-dir>        # activate
python3 ./.trellis/scripts/task.py finish                  # clear active
python3 ./.trellis/scripts/task.py archive <name>          # archive completed
python3 ./.trellis/scripts/task.py current --source        # show active task
python3 ./.trellis/scripts/task.py list [--mine]           # list tasks
```

### Sub-agent Dispatch Rules

- **Always dispatch sub-agents** for implementation (`trellis-implement`) and quality checks (`trellis-check`) — do not write code in the main thread
- **Research** goes to `trellis-research` sub-agents with output in `{task_dir}/research/`
- Inline override requires explicit user phrases like "do it inline" / "你直接改"

### Spec System

`.trellis/spec/` holds coding guidelines organized by layer:

| Layer | Path | Status |
|-------|------|--------|
| Frontend | `.trellis/spec/frontend/` | Filled — component, hook, state, type, quality, directory guidelines |
| Backend | `.trellis/spec/backend/` | Empty templates — not yet populated (no backend code exists) |
| Guides | `.trellis/spec/guides/` | Pre-filled — code reuse and cross-layer thinking guides |

Sub-agents receive spec context via `implement.jsonl` / `check.jsonl` in each task directory.

## Hooks

The project uses Claude Code hooks for workflow automation — do not modify without understanding the Trellis runtime contract (see `.trellis/workflow.md`):

- **SessionStart** — injects developer identity, git context, active task info
- **UserPromptSubmit** — injects workflow-state breadcrumb (current phase + required steps)
- **PreToolUse (Agent/Task)** — injects sub-agent context (spec files, prd)
