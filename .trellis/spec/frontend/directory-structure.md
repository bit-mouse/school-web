# Directory Structure

> How frontend code is organized in this project.

---

## Directory Layout

```
src/
├── assets/            # Static assets (images, fonts)
├── components/        # Shared reusable components
│   ├── AppHeader.vue  # Site header with responsive nav
│   ├── AppFooter.vue  # Site footer
│   ├── AppCarousel.vue # Image carousel
│   ├── NewsCard.vue   # News list item card
│   └── NoticeCard.vue # Notice list item card
├── router/
│   └── index.ts       # 9 routes (6 pages + news/:id + notice/:id + departments/:id)
├── views/             # Page-level components (one per route)
│   ├── HomeView.vue
│   ├── AboutView.vue
│   ├── DepartmentsView.vue
│   ├── DepartmentDetailView.vue
│   ├── NewsView.vue
│   ├── NewsDetailView.vue
│   ├── NoticesView.vue
│   ├── NoticeDetailView.vue
│   └── ContactView.vue
├── App.vue            # Root layout (Header + router-view + Footer)
├── main.ts            # App entry point
└── style.css          # Global styles and CSS custom properties
```

---

## Module Organization

- **views/** — One `.vue` file per route. Page components contain their own data and layout logic.
- **components/** — Shared UI components used across multiple pages. Prefixed with `App` for layout components (AppHeader, AppFooter).
- **router/** — Single `index.ts` file with all route definitions. Routes use lazy-loaded views.

---

## Naming Conventions

- Views: `PascalCaseView.vue` (e.g., `HomeView.vue`, `NewsDetailView.vue`)
- Components: `PascalCase.vue` (e.g., `AppHeader.vue`, `NewsCard.vue`)
- Layout components: `App` prefix (AppHeader, AppFooter, AppCarousel)
- CSS custom properties: `--kebab-case` in `:root` (e.g., `--primary-color`, `--max-width`)

---

## Examples

- Well-organized page: `src/views/HomeView.vue` — imports shared components, defines page-specific data, uses banner section pattern
- Shared component: `src/components/NewsCard.vue` — accepts props, self-contained styling with scoped CSS
