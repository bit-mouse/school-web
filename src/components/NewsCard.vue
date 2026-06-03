<script setup lang="ts">
defineProps<{
  id: number
  title: string
  date: string
  summary: string
  category: string
}>()
</script>

<template>
  <router-link :to="`/news/${id}`" class="news-card card">
    <div class="news-card-image">
      <div class="news-card-placeholder">{{ category }}</div>
    </div>
    <div class="news-card-content">
      <span class="news-card-category">{{ category }}</span>
      <h3 class="news-card-title">{{ title }}</h3>
      <p class="news-card-summary">{{ summary }}</p>
      <span class="news-card-date">{{ date }}</span>
    </div>
  </router-link>
</template>

<style scoped>
.news-card {
  display: flex;
  gap: var(--spacing-lg);
  padding: var(--spacing-lg);
  color: var(--color-text);
  cursor: pointer;
}

.news-card:hover {
  color: var(--color-text);
}

.news-card-image {
  width: 180px;
  height: 120px;
  flex-shrink: 0;
  border-radius: var(--border-radius);
  overflow: hidden;
}

.news-card-placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, var(--color-primary-light), var(--color-primary));
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-lg);
  font-weight: 600;
}

.news-card-content {
  flex: 1;
  min-width: 0;
}

.news-card-category {
  display: inline-block;
  background-color: var(--color-accent);
  color: #fff;
  padding: 2px 8px;
  font-size: var(--font-size-xs);
  border-radius: 2px;
  margin-bottom: var(--spacing-sm);
}

.news-card-title {
  font-size: var(--font-size-lg);
  color: var(--color-text);
  margin-bottom: var(--spacing-sm);
  line-height: 1.4;
  transition: var(--transition);
}

.news-card:hover .news-card-title {
  color: var(--color-primary);
}

.news-card-summary {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  line-height: 1.6;
  margin-bottom: var(--spacing-sm);
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.news-card-date {
  font-size: var(--font-size-xs);
  color: var(--color-text-muted);
}

@media (max-width: 768px) {
  .news-card {
    flex-direction: column;
    gap: var(--spacing-sm);
  }

  .news-card-image {
    width: 100%;
    height: 160px;
  }
}
</style>