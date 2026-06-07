<script setup lang="ts">
interface Department {
  id: number
  name: string
  intro: string
  majors: string[]
  color: string
}

const departments: Department[] = [
  {
    id: 1,
    name: '文学院',
    intro: '君子大学文学院是学校历史最悠久的学院之一，拥有中国语言文学一级学科博士学位授权点，在古典文学、现当代文学、语言学等领域具有深厚的学术积淀。',
    majors: ['汉语言文学', '汉语言', '古典文献学', '应用语言学', '比较文学与世界文学'],
    color: '#1a3a5c'
  },
  {
    id: 2,
    name: '理学院',
    intro: '理学院涵盖数学、物理、化学三大基础学科，拥有多个国家重点实验室，在基础科学研究方面成果丰硕，培养了大批杰出科学家。',
    majors: ['数学与应用数学', '信息与计算科学', '物理学', '应用物理学', '化学', '应用化学'],
    color: '#2a5a3c'
  },
  {
    id: 3,
    name: '工学院',
    intro: '工学院是学校规模最大的学院，设有机械、电子、计算机、土木等多个工程学科，与众多知名企业建立产学研合作关系，毕业生就业率连续多年位居前列。',
    majors: ['机械工程', '电气工程及其自动化', '计算机科学与技术', '软件工程', '土木工程', '材料科学与工程'],
    color: '#5a2a3c'
  },
  {
    id: 4,
    name: '医学院',
    intro: '医学院依托学校综合学科优势，致力于培养高素质医学人才，拥有附属医院3所，在临床医学、基础医学、公共卫生等领域享有盛誉。',
    majors: ['临床医学', '基础医学', '预防医学', '药学', '护理学'],
    color: '#3c2a5a'
  },
  {
    id: 5,
    name: '法学院',
    intro: '法学院是国内法学教育的重要基地，拥有法学一级学科博士学位授权点，在宪法与行政法、民商法、国际法等领域具有突出优势。',
    majors: ['法学', '政治学与行政学', '国际政治', '社会学'],
    color: '#5a5a1a'
  },
  {
    id: 6,
    name: '经济管理学院',
    intro: '经济管理学院融合经济学与管理学两大学科，在宏观经济研究、企业管理、金融工程等领域具有较强影响力，MBA项目排名全国前列。',
    majors: ['经济学', '金融学', '国际经济与贸易', '工商管理', '会计学', '市场营销'],
    color: '#1a5a5a'
  },
  {
    id: 7,
    name: '教育学院',
    intro: '教育学院致力于教育科学研究与教育人才培养，在教育政策研究、课程与教学论、高等教育管理等领域处于国内领先水平。',
    majors: ['教育学', '教育技术学', '学前教育', '特殊教育', '心理学'],
    color: '#8b4a6b'
  },
  {
    id: 8,
    name: '艺术学院',
    intro: '艺术学院汇聚了美术、音乐、设计等艺术学科，注重艺术创作与理论研究相结合，培养具有创新精神和实践能力的艺术人才。',
    majors: ['美术学', '视觉传达设计', '环境设计', '音乐表演', '舞蹈学'],
    color: '#4a6b8b'
  },
  {
    id: 9,
    name: '外国语学院',
    intro: '外国语学院设有英语、日语、法语、德语等多个语种专业，注重语言能力与跨文化交际能力的培养，与多所海外高校建立交换生项目。',
    majors: ['英语', '日语', '法语', '德语', '翻译', '商务英语'],
    color: '#6b4a8b'
  },
  {
    id: 10,
    name: '信息科学学院',
    intro: '信息科学学院聚焦人工智能、大数据、网络安全等前沿领域，与多家科技企业深度合作，致力于培养新一代信息技术人才。',
    majors: ['人工智能', '数据科学与大数据技术', '信息安全', '物联网工程', '电子信息工程'],
    color: '#4a8b6b'
  }
]
</script>

<template>
  <div class="departments">
    <!-- Banner -->
    <section class="departments-banner">
      <div class="container">
        <h1 class="departments-banner-title">院系介绍</h1>
        <p class="departments-banner-subtitle">君子大学设有20个学院（系），涵盖九大学科门类</p>
      </div>
    </section>

    <!-- Department List -->
    <section class="departments-section">
      <div class="container">
        <div class="departments-grid">
          <div v-for="dept in departments" :key="dept.id" class="dept-card card">
            <div class="dept-header" :style="{ backgroundColor: dept.color }">
              <h3 class="dept-name">{{ dept.name }}</h3>
            </div>
            <div class="dept-body">
              <p class="dept-intro">{{ dept.intro }}</p>
              <div class="dept-majors">
                <h4 class="dept-majors-title">本科专业：</h4>
                <div class="dept-majors-list">
                  <span v-for="major in dept.majors" :key="major" class="dept-major-tag">{{ major }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.departments-banner {
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-light));
  padding: var(--spacing-3xl) 0;
  text-align: center;
  color: #fff;
}

.departments-banner-title {
  font-size: var(--font-size-4xl);
  font-weight: 700;
  margin-bottom: var(--spacing-sm);
}

.departments-banner-subtitle {
  font-size: var(--font-size-lg);
  opacity: 0.8;
}

.departments-section {
  padding: var(--spacing-2xl) 0;
}

.departments-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg);
}

.dept-card {
  overflow: hidden;
  padding: 0;
}

.dept-header {
  padding: var(--spacing-md) var(--spacing-lg);
  color: #fff;
}

.dept-name {
  font-size: var(--font-size-xl);
  font-weight: 600;
}

.dept-body {
  padding: var(--spacing-lg);
}

.dept-intro {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  line-height: 1.6;
  margin-bottom: var(--spacing-md);
}

.dept-majors-title {
  font-size: var(--font-size-sm);
  color: var(--color-text);
  margin-bottom: var(--spacing-sm);
}

.dept-majors-list {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
}

.dept-major-tag {
  display: inline-block;
  background-color: var(--color-bg-light);
  border: 1px solid var(--color-border);
  padding: 2px 8px;
  font-size: var(--font-size-xs);
  color: var(--color-text-light);
  border-radius: 2px;
}

@media (max-width: 768px) {
  .departments-grid {
    grid-template-columns: 1fr;
  }
}
</style>