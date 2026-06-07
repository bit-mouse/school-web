<script setup lang="ts">
import NoticeCard from '../components/NoticeCard.vue'

interface NoticeItem {
  id: number
  title: string
  date: string
  department: string
}

const noticesList: NoticeItem[] = [
  { id: 1, title: '关于2026年暑假放假安排的通知', date: '2026-06-01', department: '校办公室' },
  { id: 2, title: '2026年度国家自然科学基金项目申报通知', date: '2026-05-30', department: '科研处' },
  { id: 3, title: '关于开展校园安全大检查的通知', date: '2026-05-28', department: '保卫处' },
  { id: 4, title: '关于2026年职称评审工作的通知', date: '2026-05-25', department: '人事处' },
  { id: 5, title: '2026年秋季学期选课通知', date: '2026-05-22', department: '教务处' },
  { id: 6, title: '关于举办君子大学建校七十周年纪念活动的通知', date: '2026-05-18', department: '校办公室' },
  { id: 7, title: '关于调整校园停车管理规定的通知', date: '2026-05-15', department: '后勤处' },
  { id: 8, title: '2026年度大学生创新创业项目申报通知', date: '2026-05-10', department: '教务处' },
  { id: 9, title: '关于开展2026年度教职工体检的通知', date: '2026-05-05', department: '人事处' },
  { id: 10, title: '关于图书馆暑期开放时间调整的通知', date: '2026-05-01', department: '图书馆' }
]
</script>

<template>
  <div class="notices">
    <!-- Banner -->
    <section class="notices-banner">
      <div class="container">
        <h1 class="notices-banner-title">通知公告</h1>
        <p class="notices-banner-subtitle">君子大学校内公告信息</p>
      </div>
    </section>

    <!-- Notice List -->
    <section class="notices-section">
      <div class="container">
        <div class="notices-list-box">
          <NoticeCard
            v-for="notice in noticesList"
            :key="notice.id"
            v-bind="notice"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.notices-banner {
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-light));
  padding: var(--spacing-3xl) 0;
  text-align: center;
  color: #fff;
}

.notices-banner-title {
  font-size: var(--font-size-4xl);
  font-weight: 700;
  margin-bottom: var(--spacing-sm);
}

.notices-banner-subtitle {
  font-size: var(--font-size-lg);
  opacity: 0.8;
}

.notices-section {
  padding: var(--spacing-2xl) 0;
}

.notices-list-box {
  background: var(--color-bg);
  border: 1px solid var(--color-border-light);
  border-radius: var(--border-radius);
  overflow: hidden;
}
</style>