# Type Safety

> Type safety patterns in this project.

---

## Type System

TypeScript with strict mode via `vue-tsc`. Build command `npm run build` runs `vue-tsc -b && vite build`.

---

## Type Organization

- **In-component types**: Define interfaces directly in the `<script setup>` block for data used only by that component
- No separate `types/` directory needed currently — all types are local to their component

```typescript
// Pattern: define interface inline in page component
interface NewsItem {
  id: number
  title: string
  date: string
  category: string
  summary: string
  content: string
  image: string
}

const newsItems: NewsItem[] = [...]
```

---

## Validation

No runtime validation library needed — this is a static site with hardcoded data. Types serve as the contract.

---

## Common Patterns

- Use `defineProps<T>()` with TypeScript interface for component props
- Use `computed()` for type-safe derived values
- Use `Number(route.params.id)` to convert string route params to numbers

---

## Forbidden Patterns

- **Don't use `any`** — always provide a concrete type
- **Don't use type assertions (`as`)** unless absolutely necessary — prefer type narrowing
- **Don't skip `vue-tsc` check** — it catches template type errors that `tsc` alone misses