# State Management

> How state is managed in this project.

---

## Overview

This is a static display site — no global state management library is used. All data lives in page components as local state.

---

## State Categories

- **URL state**: Route params (`/news/:id`, `/notice/:id`) — managed by Vue Router
- **Local component state**: `ref()` and `reactive()` for UI toggles (e.g., mobile menu open/close, carousel index)
- **Static content data**: Typed arrays/objects defined directly in page components

---

## When to Use Global State

Currently: never. All data is page-local. If a future feature needs shared state (e.g., user auth, global notifications), consider Pinia.

---

## Server State

Not applicable — this is a pure static site with no API calls.

---

## Common Mistakes

- Don't add a state management library (Pinia, Vuex) for data that's only used in one page
- Don't store static content in a global store — it belongs in the page component where it's rendered