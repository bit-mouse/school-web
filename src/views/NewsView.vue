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
  { id: 10, title: '我校教师荣获国家教学名师称号', date: '2026-04-08', summary: '理学院数学系王教授和工学院机械系赵教授分别获得第七届国家级教学名师荣誉，展现了学校卓越的教学水平。', category: '教学' },
  { id: 11, title: '君子大学新校区二期建设全面启动', date: '2026-04-01', summary: '新校区二期工程包括三栋教学楼、一栋实验楼和学生活动中心，预计2028年投入使用，将极大改善办学条件。', category: '校园建设' },
  { id: 12, title: '我校成功举办第十二届国际学术会议', date: '2026-03-25', summary: '来自全球20余个国家的300余名学者齐聚君子大学，围绕"人工智能与社会发展"主题展开深入研讨。', category: '学术会议' },
  { id: 13, title: '君子大学学子在全国数学建模竞赛中斩获一等奖', date: '2026-03-18', summary: '由理学院和信息科学学院联合组队的5支参赛队伍在全国大学生数学建模竞赛中全部获奖，其中2支队伍获一等奖。', category: '竞赛' },
  { id: 14, title: '我校三位教授入选国家高层次人才特殊支持计划', date: '2026-03-10', summary: '工学院赵伟民教授、医学院孙志刚教授、信息科学学院马志强教授入选第三批国家"万人计划"科技创新领军人才。', category: '教师荣誉' },
  { id: 15, title: '君子大学志愿服务团队荣获全国优秀志愿服务集体', date: '2026-03-02', summary: '我校"君子行"志愿服务团队连续三年获评全国优秀志愿服务集体，累计服务时长超过10万小时，覆盖教育、环保、医疗等领域。', category: '社会服务' }
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
  position: relative;
  overflow: hidden;
}

.news-banner::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -20%;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
}

.news-banner::after {
  content: '';
  position: absolute;
  bottom: -30%;
  left: -10%;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.03);
}

.news-banner-title {
  font-size: var(--font-size-4xl);
  font-weight: 700;
  margin-bottom: var(--spacing-sm);
  position: relative;
  z-index: 1;
}

.news-banner-subtitle {
  font-size: var(--font-size-lg);
  opacity: 0.8;
  position: relative;
  z-index: 1;
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