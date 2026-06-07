<script setup lang="ts">
import AppCarousel from '../components/AppCarousel.vue'
import NewsCard from '../components/NewsCard.vue'
import NoticeCard from '../components/NoticeCard.vue'

const quickLinks = [
  { icon: '校', label: '学校概况', path: '/about', color: '#1a3a5c' },
  { icon: '院', label: '院系介绍', path: '/departments', color: '#2a5a3c' },
  { icon: '闻', label: '新闻动态', path: '/news', color: '#5a2a3c' },
  { icon: '告', label: '通知公告', path: '/notices', color: '#3c2a5a' },
  { icon: '联', label: '联系方式', path: '/contact', color: '#5a5a1a' }
]

const recentNews = [
  { id: 1, title: '君子大学2026年本科招生简章正式发布', date: '2026-05-28', summary: '君子大学2026年面向全国31个省（市、自治区）计划招收本科生5200人，涵盖文、理、工、医、法、经等学科门类。', category: '招生' },
  { id: 2, title: '我校科研团队在量子计算领域取得重大突破', date: '2026-05-25', summary: '由我校物理学院张明教授领衔的科研团队在量子纠错码研究方面取得原创性突破，相关成果发表于《Nature Physics》。', category: '科研' },
  { id: 3, title: '君子大学与麻省理工学院签署合作协议', date: '2026-05-20', summary: '两校将在人工智能、新能源材料等前沿领域开展深度合作，互派访问学者，联合培养研究生。', category: '交流' }
]

const recentNotices = [
  { id: 1, title: '关于2026年暑假放假安排的通知', date: '2026-06-01', department: '校办公室' },
  { id: 2, title: '2026年度国家自然科学基金项目申报通知', date: '2026-05-30', department: '科研处' },
  { id: 3, title: '关于开展校园安全大检查的通知', date: '2026-05-28', department: '保卫处' }
]

const stats = [
  { value: '70+', label: '年办学历史' },
  { value: '20', label: '学院/系' },
  { value: '35000+', label: '在校师生' },
  { value: '85', label: '本科专业' }
]
</script>

<template>
  <div class="home">
    <!-- Hero Carousel -->
    <AppCarousel />

    <!-- Quick Links -->
    <section class="quick-links">
      <div class="container">
        <div class="quick-links-grid">
          <router-link
            v-for="link in quickLinks"
            :key="link.path"
            :to="link.path"
            class="quick-link-item"
          >
            <span class="quick-link-icon" :style="{ backgroundColor: link.color }">{{ link.icon }}</span>
            <span class="quick-link-label">{{ link.label }}</span>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section class="stats">
      <div class="container">
        <div class="stats-grid">
          <div v-for="stat in stats" :key="stat.label" class="stat-item">
            <span class="stat-value">{{ stat.value }}</span>
            <span class="stat-label">{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Recent News & Notices -->
    <section class="recent-section">
      <div class="container">
        <div class="recent-grid">
          <div class="recent-news">
            <div class="recent-header">
              <h2 class="section-title">新闻动态</h2>
              <router-link to="/news" class="more-link">更多 &raquo;</router-link>
            </div>
            <div class="recent-news-list">
              <NewsCard
                v-for="news in recentNews"
                :key="news.id"
                v-bind="news"
              />
            </div>
          </div>

          <div class="recent-notices">
            <div class="recent-header">
              <h2 class="section-title">通知公告</h2>
              <router-link to="/notices" class="more-link">更多 &raquo;</router-link>
            </div>
            <div class="recent-notice-list">
              <NoticeCard
                v-for="notice in recentNotices"
                :key="notice.id"
                v-bind="notice"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.quick-links {
  background-color: var(--color-bg);
  padding: var(--spacing-xl) 0;
  border-bottom: 1px solid var(--color-border-light);
}

.quick-links-grid {
  display: flex;
  justify-content: center;
  gap: var(--spacing-xl);
}

.quick-link-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-md);
  transition: var(--transition);
}

.quick-link-item:hover {
  transform: translateY(-4px);
}

.quick-link-icon {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: var(--font-size-xl);
  font-weight: 700;
}

.quick-link-label {
  font-size: var(--font-size-sm);
  color: var(--color-text);
  font-weight: 500;
}

/* Stats */
.stats {
  background-color: var(--color-primary);
  padding: var(--spacing-2xl) 0;
}

.stats-grid {
  display: flex;
  justify-content: center;
  gap: var(--spacing-3xl);
}

.stat-item {
  text-align: center;
  color: #fff;
}

.stat-value {
  display: block;
  font-size: var(--font-size-4xl);
  font-weight: 700;
  line-height: 1.2;
}

.stat-label {
  display: block;
  font-size: var(--font-size-sm);
  opacity: 0.8;
  margin-top: var(--spacing-xs);
}

/* Recent Section */
.recent-section {
  padding: var(--spacing-2xl) 0;
}

.recent-grid {
  display: flex;
  gap: var(--spacing-2xl);
}

.recent-news {
  flex: 2;
  min-width: 0;
}

.recent-notices {
  flex: 1;
  min-width: 0;
}

.recent-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--spacing-lg);
}

.more-link {
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
  white-space: nowrap;
}

.more-link:hover {
  color: var(--color-primary);
}

.recent-news-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.recent-notice-list {
  background: var(--color-bg);
  border: 1px solid var(--color-border-light);
  border-radius: var(--border-radius);
  overflow: hidden;
}

@media (max-width: 768px) {
  .quick-links-grid {
    flex-wrap: wrap;
    gap: var(--spacing-md);
  }

  .quick-link-item {
    padding: var(--spacing-sm);
  }

  .stats-grid {
    flex-wrap: wrap;
    gap: var(--spacing-xl);
  }

  .stat-item {
    flex: 0 0 45%;
  }

  .recent-grid {
    flex-direction: column;
    gap: var(--spacing-xl);
  }
}

@media (max-width: 480px) {
  .quick-links-grid {
    gap: var(--spacing-sm);
  }

  .stats-grid {
    gap: var(--spacing-md);
  }

  .stat-value {
    font-size: var(--font-size-3xl);
  }
}
</style>