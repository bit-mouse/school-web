# Component Guidelines

> How components are built in this project.

---

## Component Structure

Standard Vue 3 SFC with `<script setup lang="ts">`:

```vue
<script setup lang="ts">
// imports
// props definition
// computed / reactive state
</script>

<template>
  <!-- HTML template -->
</template>

<style scoped>
/* Component-scoped styles */
</style>
```

---

## Props Conventions

- Define props with `defineProps<T>()` using TypeScript interface
- Use `withDefaults()` for props with default values
- Keep props minimal — pass only what the component needs

```typescript
interface Props {
  id: number
  title: string
  date: string
  summary?: string
}

const props = withDefaults(defineProps<Props>(), {
  summary: ''
})
```

---

## Styling Patterns

- **Global styles**: `src/style.css` — CSS custom properties (`:root`), reset, typography, utility classes
- **Component styles**: `<style scoped>` per component — keeps styles isolated
- **Responsive**: Media queries at 768px (tablet) and 480px (mobile) breakpoints
- **Theming**: Use CSS custom properties from `:root` for colors, spacing, shadows — do not hardcode values

```css
/* Good — uses CSS variable */
color: var(--primary-color);

/* Bad — hardcoded */
color: #1a3a5c;
```

---

## Page Component Pattern

All page views follow a consistent structure:

1. **Banner section** — Page title with background color, centered heading
2. **Content section** — Main content in a max-width container
3. **Responsive layout** — Flexbox/grid that adapts at breakpoints

---

## Detail Page Pattern

Detail pages (NewsDetailView, NoticeDetailView, DepartmentDetailView) follow a consistent pattern:

1. Use `useRoute()` to get `:id` param
2. Use `computed()` to look up item from in-component data array
3. Show banner with item-specific color/theme
4. Show content sections in cards
5. Include "← 返回列表" back link at bottom

```typescript
const route = useRoute()
const item = computed(() =>
  items.find(i => i.id === Number(route.params.id))
)
```

---

## Clickable Card Pattern

List page cards that link to detail pages use `<router-link>` wrapping:

```vue
<router-link :to="`/departments/${dept.id}`" class="dept-card card">
  <!-- card content -->
</router-link>
```

Must reset link styles to prevent breaking card appearance:

```css
.dept-card {
  display: block;
  color: inherit;
  text-decoration: none;
}
```

---

## Common Mistakes

- Don't use `<style>` without `scoped` — will leak styles globally
- Don't hardcode colors/spacing — use CSS custom properties
- Don't put page-level data in a global store — keep it in the page component
