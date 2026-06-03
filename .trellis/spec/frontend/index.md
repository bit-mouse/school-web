# Frontend Development Guidelines

> Best practices for frontend development in this project.

---

## Overview

Vue 3 + Vite + TypeScript + Vue Router. Static display site for a Chinese university — no backend, no CMS, all content in components.

---

## Guidelines Index

| Guide | Description | Status |
|-------|-------------|--------|
| [Directory Structure](./directory-structure.md) | Module organization and file layout | Filled |
| [Component Guidelines](./component-guidelines.md) | Component patterns, props, composition | Filled |
| [Hook Guidelines](./hook-guidelines.md) | Composables, data access patterns | Filled |
| [State Management](./state-management.md) | Local state, URL state — no global store | Filled |
| [Quality Guidelines](./quality-guidelines.md) | Code standards, forbidden patterns, review checklist | Filled |
| [Type Safety](./type-safety.md) | TypeScript conventions, inline types | Filled |

---

## Design Decisions

### Decision: Vue 3 + Vite over Next.js or React

**Context**: Needed a frontend framework for a static display site.
**Decision**: Vue 3 + Vite + TypeScript — simpler setup, no SSR complexity needed, good Chinese ecosystem docs.
**Consequences**: SPA only (no SSR/SSG); future SEO needs would require migrating to Vite SSG plugin or Nuxt.

### Decision: Static content in components vs. separate data files

**Context**: Where to put page content data.
**Decision**: Keep data typed arrays/objects directly inside page components.
**Consequences**: Simple and self-contained; harder to update content without touching component code; future CMS integration would require data extraction.

---

**Language**: All documentation written in **English**. UI content in **Chinese**.