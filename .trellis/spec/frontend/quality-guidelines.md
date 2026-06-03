# Quality Guidelines

> Code quality standards for frontend development.

---

## Forbidden Patterns

- Hardcoded colors/spacing instead of CSS custom properties
- `<style>` without `scoped` — leaks styles globally
- `any` type — always use concrete types
- Unused imports or asset files — remove immediately
- Lorem ipsum or placeholder text — all content must be realistic Chinese text

---

## Required Patterns

- `<script setup lang="ts">` for all Vue components
- `<style scoped>` for all component styles
- CSS custom properties for colors, spacing, shadows (defined in `:root` in `style.css`)
- Responsive media queries at 768px and 480px breakpoints
- Page banner section with centered title

---

## Testing Requirements

- `npm run build` must pass (runs `vue-tsc` + `vite build`)
- No TypeScript errors
- No unused files in `src/assets/` or `public/`

---

## Code Review Checklist

- [ ] Build passes (`npm run build`)
- [ ] TypeScript passes (`vue-tsc`)
- [ ] No `any` types
- [ ] CSS uses custom properties, not hardcoded values
- [ ] Responsive breakpoints present
- [ ] Content is realistic (not placeholder text)
- [ ] No unused imports/assets
- [ ] Scoped styles on all components