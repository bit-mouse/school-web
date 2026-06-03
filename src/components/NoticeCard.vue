<script setup lang="ts">
defineProps<{
  id: number
  title: string
  date: string
  department: string
}>()
</script>

<template>
  <router-link :to="`/notices/${id}`" class="notice-card">
    <div class="notice-card-date-block">
      <span class="notice-card-day">{{ date.split('-')[2] }}</span>
      <span class="notice-card-month">{{ date.split('-')[1] }}月</span>
    </div>
    <div class="notice-card-content">
      <h3 class="notice-card-title">{{ title }}</h3>
      <span class="notice-card-department">{{ department }}</span>
    </div>
    <span class="notice-card-arrow">&#8250;</span>
  </router-link>
</template>

<style scoped>
.notice-card {
  display: flex;
  align-items: center;
  gap: var(--spacing-lg);
  padding: var(--spacing-md) var(--spacing-lg);
  border-bottom: 1px solid var(--color-border-light);
  color: var(--color-text);
  transition: var(--transition);
}

.notice-card:hover {
  background-color: var(--color-bg-light);
  color: var(--color-text);
}

.notice-card-date-block {
  width: 60px;
  text-align: center;
  flex-shrink: 0;
  border-right: 2px solid var(--color-accent);
  padding-right: var(--spacing-sm);
}

.notice-card-day {
  display: block;
  font-size: var(--font-size-2xl);
  font-weight: 700;
  color: var(--color-primary);
  line-height: 1;
}

.notice-card-month {
  display: block;
  font-size: var(--font-size-xs);
  color: var(--color-text-muted);
}

.notice-card-content {
  flex: 1;
  min-width: 0;
}

.notice-card-title {
  font-size: var(--font-size-base);
  color: var(--color-text);
  margin-bottom: var(--spacing-xs);
  transition: var(--transition);
}

.notice-card:hover .notice-card-title {
  color: var(--color-primary);
}

.notice-card-department {
  font-size: var(--font-size-xs);
  color: var(--color-text-muted);
}

.notice-card-arrow {
  font-size: var(--font-size-xl);
  color: var(--color-text-muted);
  flex-shrink: 0;
}

@media (max-width: 480px) {
  .notice-card {
    gap: var(--spacing-md);
    padding: var(--spacing-sm) var(--spacing-md);
  }

  .notice-card-date-block {
    width: 50px;
  }
}
</style>