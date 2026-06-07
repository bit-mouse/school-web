<script setup lang="ts">
import NewsCard from '../components/NewsCard.vue'

interface NewsItem {
  id: number
  title: string
  date: string
  summary: string
  category: string
}

const newsList: NewsItem[] = [
  { id: 1, title: '君子大学2026年本科招生简章正式发布', date: '2026-05-28', summary: '君子大学2026年面向全国31个省（市、自治区）计划招收本科生5200人，涵盖文、理、工、医、法、经等学科门类。', category: '招生' },
  { id: 2, title: '我校科研团队在量子计算领域取得重大突破', date: '2026-05-25', summary: '由我校物理学院张明教授领衔的科研团队在量子纠错码研究方面取得原创性突破，相关成果发表于《Nature Physics》。', category: '科研' },
  { id: 3, title: '君子大学与麻省理工学院签署合作协议', date: '2026-05-20', summary: '两校将在人工智能、新能源材料等前沿领域开展深度合作，互派访问学者，联合培养研究生。', category: '交流' },
  { id: 4, title: '第十届君子大学科技节盛大开幕', date: '2026-05-15', summary: '为期一周的科技节活动涵盖科技讲座、创新成果展览、编程竞赛、机器人挑战赛等多个环节，吸引了全校师生参与。', category: '活动' },
  { id: 5, title: '我校学子在ACM国际编程竞赛中荣获金奖', date: '2026-05-10', summary: '由工学院计算机系三名同学组成的代表队在全球总决赛中表现优异，斩获金奖，为学校赢得荣誉。', category: '竞赛' },
  { id: 6, title: '君子大学新增三个国家级一流本科专业', date: '2026-05-05', summary: '教育部公布新一批国家级一流本科专业建设点名单，我校人工智能、数据科学与大数据技术、信息安全三个专业入选。', category: '教学' },
  { id: 7, title: '知名企业家校友回校分享创业经验', date: '2026-04-28', summary: '君子大学经济管理学院校友、知名科技企业创始人李强先生回校开展创业经验分享讲座，受到同学们热烈欢迎。', category: '校友' },
  { id: 8, title: '校园文化节之话剧展演活动圆满落幕', date: '2026-04-20', summary: '由艺术学院主办、全校师生参与的话剧展演活动历时两周，共演出8场原创话剧，丰富了校园文化生活。', category: '活动' },
  { id: 9, title: '君子大学图书馆数字资源平台全新上线', date: '2026-04-15', summary: '图书馆数字资源平台完成升级改造，新增百万册电子图书和数千种学术期刊全文数据库，为师生科研提供更强支撑。', category: '服务' },
  { id: 10, title: '我校教师荣获国家教学名师称号', date: '2026-04-08', summary: '理学院数学系王教授和工学院机械系赵教授分别获得第七届国家级教学名师荣誉，展现了学校卓越的教学水平。', category: '教学' }
]
</script>

<template>
  <div class="news">
    <!-- Banner -->
    <section class="news-banner">
      <div class="container">
        <h1 class="news-banner-title">新闻动态</h1>
        <p class="news-banner-subtitle">了解君子大学最新资讯</p>
      </div>
    </section>

    <!-- News List -->
    <section class="news-section">
      <div class="container">
        <div class="news-list">
          <NewsCard
            v-for="news in newsList"
            :key="news.id"
            v-bind="news"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.news-banner {
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-light));
  padding: var(--spacing-3xl) 0;
  text-align: center;
  color: #fff;
}

.news-banner-title {
  font-size: var(--font-size-4xl);
  font-weight: 700;
  margin-bottom: var(--spacing-sm);
}

.news-banner-subtitle {
  font-size: var(--font-size-lg);
  opacity: 0.8;
}

.news-section {
  padding: var(--spacing-2xl) 0;
}

.news-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

@media (max-width: 480px) {
  .news-banner {
    padding: var(--spacing-xl) 0;
  }
}
</style>