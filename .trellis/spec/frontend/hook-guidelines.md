# Hook Guidelines

> How composables are used in this project.

---

## Overview

This project uses Vue 3 Composition API with `<script setup>`. Custom composables follow the `use` prefix convention.

---

## Composable Patterns

- Use `useRoute()` from vue-router for reading route params in detail pages
- Use `useRouter()` for programmatic navigation
- Use `computed()` for derived data (e.g., looking up an item by route param ID)
- Use `ref()` / `reactive()` for local component state

---

## Data Access

This is a static site — all data is defined as typed arrays/objects inside page components. No data fetching composables needed.

```typescript
// Pattern: static data defined in component
const newsItems: NewsItem[] = [
  { id: 1, title: '...', date: '...', ... },
  // ...
]

// Pattern: lookup by route param
const route = useRoute()
const currentItem = computed(() =>
  items.find(item => item.id === Number(route.params.id))
)
```

---

## Naming Conventions

- Composables: `useCamelCase` (e.g., `useRoute`, `useRouter`)
- Vue API: `ref`, `reactive`, `computed`, `onMounted` — no aliasing

---

## Common Mistakes

- Don't create composables for one-time-use logic — inline in the component
- Don't destructure reactive objects from `reactive()` — loses reactivity; use `ref()` instead or access properties directly
