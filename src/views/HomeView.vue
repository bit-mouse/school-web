<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
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
  { value: 70, suffix: '+', label: '年办学历史' },
  { value: 20, suffix: '', label: '学院/系' },
  { value: 35000, suffix: '+', label: '在校师生' },
  { value: 85, suffix: '', label: '本科专业' }
]

const animatedStats = ref(stats.map(() => 0))
let statsAnimated = false
let statsObserver: IntersectionObserver | null = null
const statsRef = ref<HTMLElement | null>(null)

function animateStats() {
  if (statsAnimated) return
  statsAnimated = true
  const duration = 1500
  const startTime = performance.now()

  function update(currentTime: number) {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3)

    animatedStats.value = stats.map(stat => {
      return Math.round(stat.value * eased)
    })

    if (progress < 1) {
      requestAnimationFrame(update)
    }
  }

  requestAnimationFrame(update)
}

onMounted(() => {
  if (statsRef.value) {
    statsObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animateStats()
      }
    }, { threshold: 0.3 })
    statsObserver.observe(statsRef.value)
  }
})

onUnmounted(() => {
  if (statsObserver) {
    statsObserver.disconnect()
    statsObserver = null
  }
})

const admissions = [
  { icon: '招', title: '招生简章', desc: '2026年面向全国招收本科生5200人，涵盖九大学科门类85个专业', color: '#1a3a5c' },
  { icon: '培', title: '拔尖培养', desc: '强基计划、基础学科拔尖学生培养计划，打造学术精英', color: '#2a5a3c' },
  { icon: '奖', title: '奖学金', desc: '国家奖学金、校长奖学金及各类专项奖学金，覆盖率达45%', color: '#b8860b' },
  { icon: '际', title: '国际交流', desc: '与全球50余所知名高校建立合作关系，每年派出交换生500余人', color: '#5a2a3c' }
]

const campusLife = [
  { title: '学术讲座', desc: '年均举办高水平学术讲座200余场，邀请国内外知名学者来校交流', gradient: 'linear-gradient(135deg, #1a3a5c, #2a5a8c)' },
  { title: '体育赛事', desc: '校运动会、院长杯篮球赛、校园马拉松等丰富多彩的体育活动', gradient: 'linear-gradient(135deg, #2a5a3c, #4a8a5c)' },
  { title: '社团活动', desc: '120余个学生社团，涵盖学术、文艺、公益、体育等多个领域', gradient: 'linear-gradient(135deg, #b8860b, #d4a017)' },
  { title: '志愿服务', desc: '支教、社区服务、国际志愿者项目，年参与志愿服务超5万人次', gradient: 'linear-gradient(135deg, #5a2a3c, #8a4a6c)' },
  { title: '艺术展演', desc: '话剧节、音乐会、美术展览，校园文化生活丰富多彩', gradient: 'linear-gradient(135deg, #3c2a5a, #6b4a8b)' },
  { title: '国际交流', desc: '国际文化节、海外游学、国际学术会议，开阔国际视野', gradient: 'linear-gradient(135deg, #4a6b8b, #6a8bab)' }
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
    <section class="stats" ref="statsRef">
      <div class="container">
        <div class="stats-grid">
          <div v-for="(stat, index) in stats" :key="stat.label" class="stat-item">
            <span class="stat-value">{{ animatedStats[index] }}{{ stat.suffix }}</span>
            <span class="stat-label">{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Admissions -->
    <section class="admissions-section">
      <div class="container">
        <h2 class="section-title">招生信息</h2>
        <div class="admissions-grid">
          <div v-for="item in admissions" :key="item.title" class="admission-card card">
            <span class="admission-icon" :style="{ backgroundColor: item.color }">{{ item.icon }}</span>
            <h3 class="admission-title">{{ item.title }}</h3>
            <p class="admission-desc">{{ item.desc }}</p>
          </div>
        </div>
        <div class="admissions-more">
          <router-link to="/about" class="btn">查看详情</router-link>
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

    <!-- Campus Life -->
    <section class="campus-section">
      <div class="container">
        <h2 class="section-title">校园风采</h2>
        <div class="campus-grid">
          <div v-for="item in campusLife" :key="item.title" class="campus-card card">
            <div class="campus-card-header" :style="{ background: item.gradient }">
              <h3 class="campus-card-title">{{ item.title }}</h3>
            </div>
            <p class="campus-card-desc">{{ item.desc }}</p>
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

/* Admissions */
.admissions-section {
  padding: var(--spacing-2xl) 0;
  background-color: var(--color-bg-light);
}

.admissions-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-xl);
}

.admission-card {
  text-align: center;
  padding: var(--spacing-xl);
}

.admission-icon {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: var(--font-size-xl);
  font-weight: 700;
  margin-bottom: var(--spacing-md);
}

.admission-title {
  font-size: var(--font-size-lg);
  color: var(--color-text);
  margin-bottom: var(--spacing-sm);
}

.admission-desc {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  line-height: 1.6;
}

.admissions-more {
  text-align: center;
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

/* Campus Life */
.campus-section {
  padding: var(--spacing-2xl) 0;
  background-color: var(--color-bg-light);
}

.campus-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
}

.campus-card {
  overflow: hidden;
  padding: 0;
}

.campus-card-header {
  padding: var(--spacing-lg);
  text-align: center;
}

.campus-card-title {
  font-size: var(--font-size-xl);
  font-weight: 600;
  color: #fff;
  letter-spacing: 1px;
}

.campus-card-desc {
  padding: var(--spacing-lg);
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  line-height: 1.6;
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

  .admissions-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .campus-grid {
    grid-template-columns: repeat(2, 1fr);
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

  .admissions-grid {
    grid-template-columns: 1fr;
  }

  .campus-grid {
    grid-template-columns: 1fr;
  }
}
</style>
