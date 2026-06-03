<script setup lang="ts">
const timeline = [
  { year: '1952', event: '华文大学创建，初名北京华文学院，设文、理、工三科' },
  { year: '1960', event: '成为全国重点大学，新增医学、法学学科' },
  { year: '1978', event: '恢复高考后首批招收研究生，开启学位教育' },
  { year: '1985', event: '更名为华文大学，确立综合性大学发展定位' },
  { year: '1995', event: '进入"211工程"重点建设高校行列' },
  { year: '2001', event: '进入"985工程"优势学科创新平台' },
  { year: '2017', event: '入选国家"双一流"建设高校A类名单' },
  { year: '2023', event: '建校七十周年，在校生规模突破3.5万人' }
]

const leaders = [
  { name: '李明远', title: '党委书记', intro: '教授、博士生导师，长期从事高等教育管理与党建研究' },
  { name: '陈志强', title: '校长', intro: '教授、博士生导师，中国科学院院士，从事量子物理研究' },
  { name: '王建国', title: '常务副校长', intro: '教授、博士生导师，负责学校日常行政管理工作' },
  { name: '张秀英', title: '党委副书记', intro: '教授，分管宣传、统战及学生思想政治工作' },
  { name: '刘德明', title: '副校长', intro: '教授、博士生导师，分管教学与学科建设工作' },
  { name: '赵慧敏', title: '副校长', intro: '教授、博士生导师，分管科研与对外交流工作' }
]

const scenerySpots = [
  { name: '钟楼广场', color: '#1a3a5c' },
  { name: '翠湖春晓', color: '#2a5a3c' },
  { name: '银杏大道', color: '#b8860b' },
  { name: '图书馆', color: '#5a2a3c' },
  { name: '体育馆', color: '#3c2a5a' },
  { name: '樱花大道', color: '#8b4a6b' }
]
</script>

<template>
  <div class="about">
    <!-- Banner -->
    <section class="about-banner">
      <div class="container">
        <h1 class="about-banner-title">学校概况</h1>
        <p class="about-banner-subtitle">了解华文大学的历史与发展</p>
      </div>
    </section>

    <!-- Introduction -->
    <section class="about-section">
      <div class="container">
        <h2 class="section-title">学校简介</h2>
        <div class="about-intro">
          <p>
            华文大学是教育部直属全国重点大学，国家"双一流"建设高校A类名单入选高校，
            "211工程"和"985工程"重点建设高校。学校坐落于北京市海淀区，校园占地3200余亩，
            环境优美，设施先进，是求学治学的理想之地。
          </p>
          <p>
            学校创建于1952年，经过七十余年的建设与发展，已成为一所拥有文、理、工、医、法、经、
            管、教、艺等九大学科门类的综合性研究型大学。现有20个学院（系），85个本科专业，
            42个一级学科硕士学位授权点，28个一级学科博士学位授权点，25个博士后科研流动站。
          </p>
          <p>
            学校现有教职工4200余人，其中专任教师2800余人，包括中国科学院院士3人、中国工程院
            院士2人、长江学者特聘教授28人、国家杰出青年科学基金获得者35人。全日制在校学生
            35000余人，其中本科生18000余人，研究生17000余人。
          </p>
        </div>
      </div>
    </section>

    <!-- History Timeline -->
    <section class="about-section about-section--alt">
      <div class="container">
        <h2 class="section-title">历史沿革</h2>
        <div class="timeline">
          <div v-for="item in timeline" :key="item.year" class="timeline-item">
            <div class="timeline-year">{{ item.year }}</div>
            <div class="timeline-content">
              <p>{{ item.event }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Campus Scenery -->
    <section class="about-section">
      <div class="container">
        <h2 class="section-title">校园风光</h2>
        <div class="scenery-grid">
          <div
            v-for="spot in scenerySpots"
            :key="spot.name"
            class="scenery-item"
            :style="{ backgroundColor: spot.color }"
          >
            <span class="scenery-name">{{ spot.name }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Leadership -->
    <section class="about-section about-section--alt">
      <div class="container">
        <h2 class="section-title">现任领导</h2>
        <div class="leaders-grid">
          <div v-for="leader in leaders" :key="leader.name" class="leader-card card">
            <div class="leader-avatar">{{ leader.name[0] }}</div>
            <h3 class="leader-name">{{ leader.name }}</h3>
            <span class="leader-title">{{ leader.title }}</span>
            <p class="leader-intro">{{ leader.intro }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about-banner {
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-light));
  padding: var(--spacing-3xl) 0;
  text-align: center;
  color: #fff;
}

.about-banner-title {
  font-size: var(--font-size-4xl);
  font-weight: 700;
  margin-bottom: var(--spacing-sm);
}

.about-banner-subtitle {
  font-size: var(--font-size-lg);
  opacity: 0.8;
}

.about-section {
  padding: var(--spacing-2xl) 0;
}

.about-section--alt {
  background-color: var(--color-bg-light);
}

.about-intro {
  max-width: 900px;
  line-height: 1.8;
}

.about-intro p {
  margin-bottom: var(--spacing-md);
  text-indent: 2em;
}

/* Timeline */
.timeline {
  max-width: 800px;
  position: relative;
  padding-left: var(--spacing-2xl);
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background-color: var(--color-accent);
}

.timeline-item {
  position: relative;
  padding-bottom: var(--spacing-lg);
  padding-left: var(--spacing-lg);
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: -29px;
  top: 4px;
  width: 12px;
  height: 12px;
  background-color: var(--color-primary);
  border-radius: 50%;
  border: 2px solid var(--color-accent);
}

.timeline-year {
  font-size: var(--font-size-lg);
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: var(--spacing-xs);
}

.timeline-content p {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  line-height: 1.6;
}

/* Scenery */
.scenery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-md);
}

.scenery-item {
  height: 180px;
  border-radius: var(--border-radius);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: var(--spacing-md);
  position: relative;
  overflow: hidden;
}

.scenery-item::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.4), transparent);
}

.scenery-name {
  position: relative;
  z-index: 1;
  color: #fff;
  font-size: var(--font-size-lg);
  font-weight: 600;
  letter-spacing: 1px;
}

/* Leaders */
.leaders-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
}

.leader-card {
  text-align: center;
  padding: var(--spacing-xl);
}

.leader-avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: var(--color-primary);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-2xl);
  font-weight: 700;
  margin: 0 auto var(--spacing-md);
}

.leader-name {
  font-size: var(--font-size-lg);
  color: var(--color-text);
  margin-bottom: var(--spacing-xs);
}

.leader-title {
  display: inline-block;
  background-color: var(--color-accent);
  color: #fff;
  padding: 2px 10px;
  font-size: var(--font-size-xs);
  border-radius: 2px;
  margin-bottom: var(--spacing-sm);
}

.leader-intro {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .scenery-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .leaders-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .scenery-grid {
    grid-template-columns: 1fr;
  }

  .leaders-grid {
    grid-template-columns: 1fr;
  }

  .timeline {
    padding-left: var(--spacing-lg);
  }

  .timeline-item {
    padding-left: var(--spacing-md);
  }
}
</style>