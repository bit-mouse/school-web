<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const deptId = computed(() => Number(route.params.id))

interface Department {
  id: number
  name: string
  intro: string
  description: string
  majors: string[]
  contact: {
    phone: string
    email: string
    address: string
  }
  faculty: string
  researchAreas: string[]
  leader: {
    dean: string
    partySecretary: string
  }
  color: string
}

const departments: Department[] = [
  {
    id: 1,
    name: '文学院',
    intro: '君子大学文学院是学校历史最悠久的学院之一，拥有中国语言文学一级学科博士学位授权点，在古典文学、现当代文学、语言学等领域具有深厚的学术积淀。',
    description: '文学院是君子大学建校之初即设立的核心学院之一，历经七十余年发展，已成为国内中国语言文学学科教学与研究的重要基地。学院下设中国古代文学、中国现当代文学、汉语言文字学、语言学及应用语言学、比较文学与世界文学五个二级学科方向，拥有中国语言文学一级学科博士授权点和博士后流动站。学院师资力量雄厚，现有专任教师60余人，其中国家级人才计划入选者8人，享受国务院特殊津贴专家6人。近年来，学院承担国家级科研项目30余项，在《中国社会科学》《文学评论》等权威期刊发表论文百余篇，获省部级以上科研奖励10余项。',
    majors: ['汉语言文学', '汉语言', '古典文献学', '应用语言学', '比较文学与世界文学'],
    contact: {
      phone: '010-88886601',
      email: 'wenxueyuan@junzi.edu.cn',
      address: '君子大学主校区文科楼A座三层'
    },
    faculty: '现有专任教师62人，其中教授22人、副教授26人、讲师14人。拥有国家级教学名师2人、长江学者特聘教授1人、国家"万人计划"哲学社会科学领军人才2人。博士研究生导师18人，硕士研究生导师40人。',
    researchAreas: ['中国古代文学与文献学', '中国现当代文学与文化研究', '汉语言文字学与汉语史', '语言学理论与应用语言学', '比较文学与世界文学', '文艺美学与文化批评'],
    leader: {
      dean: '陈明远 教授',
      partySecretary: '张立华 副教授'
    },
    color: '#1a3a5c'
  },
  {
    id: 2,
    name: '理学院',
    intro: '理学院涵盖数学、物理、化学三大基础学科，拥有多个国家重点实验室，在基础科学研究方面成果丰硕，培养了大批杰出科学家。',
    description: '理学院是君子大学基础科学研究与教学的核心力量，下设数学系、物理系和化学系，涵盖数学、物理学、化学三大一级学科。学院拥有数学与应用数学、信息与计算科学、物理学、应用物理学、化学、应用化学六个本科专业，以及数学、物理学、化学三个一级学科博士学位授权点。学院建有国家重点实验室1个、教育部重点实验室2个、省级重点实验室3个。近年来，学院科研团队在量子计算、催化化学、偏微分方程等前沿领域取得一系列重要突破，在Nature、Science及其子刊发表论文20余篇。',
    majors: ['数学与应用数学', '信息与计算科学', '物理学', '应用物理学', '化学', '应用化学'],
    contact: {
      phone: '010-88886602',
      email: 'lixueyuan@junzi.edu.cn',
      address: '君子大学主校区理科楼B座二层'
    },
    faculty: '现有专任教师85人，其中教授35人、副教授30人、讲师20人。拥有中国科学院院士1人、长江学者特聘教授3人、国家杰出青年科学基金获得者5人、国家优秀青年科学基金获得者4人。博士研究生导师28人，硕士研究生导师52人。',
    researchAreas: ['基础数学与数学物理', '计算数学与科学工程计算', '量子物理与量子信息', '凝聚态物理', '催化化学与绿色化学', '功能材料化学'],
    leader: {
      dean: '刘建国 教授',
      partySecretary: '王淑华 教授'
    },
    color: '#2a5a3c'
  },
  {
    id: 3,
    name: '工学院',
    intro: '工学院是学校规模最大的学院，设有机械、电子、计算机、土木等多个工程学科，与众多知名企业建立产学研合作关系，毕业生就业率连续多年位居前列。',
    description: '工学院是君子大学规模最大、学生人数最多的学院，下设机械工程系、电气工程系、计算机科学与技术系、土木工程系和材料科学与工程系。学院以培养高素质工程技术人才为目标，注重理论与实践并重，建有国家级工程实践教育中心2个、省级实验教学示范中心3个。学院与华为、中兴、中国建筑、中国中车等30余家知名企业建立了稳定的产学研合作关系，共建联合实验室10个。学院毕业生就业率连续五年保持在98%以上，其中超过40%的毕业生进入世界500强企业工作。',
    majors: ['机械工程', '电气工程及其自动化', '计算机科学与技术', '软件工程', '土木工程', '材料科学与工程'],
    contact: {
      phone: '010-88886603',
      email: 'gongxueyuan@junzi.edu.cn',
      address: '君子大学主校区工科楼C座五层'
    },
    faculty: '现有专任教师120人，其中教授42人、副教授48人、讲师30人。拥有中国工程院院士1人（双聘）、长江学者特聘教授2人、国家杰出青年科学基金获得者3人。博士研究生导师35人，硕士研究生导师75人。',
    researchAreas: ['智能制造与机器人技术', '电力系统与新能源技术', '人工智能与大数据处理', '软件工程与形式化方法', '结构工程与防灾减灾', '先进复合材料与成型技术'],
    leader: {
      dean: '赵伟民 教授',
      partySecretary: '李志强 教授'
    },
    color: '#5a2a3c'
  },
  {
    id: 4,
    name: '医学院',
    intro: '医学院依托学校综合学科优势，致力于培养高素质医学人才，拥有附属医院3所，在临床医学、基础医学、公共卫生等领域享有盛誉。',
    description: '医学院是君子大学重点建设的学院之一，依托学校多学科综合优势，致力于培养具有国际视野的高素质医学人才。学院设有临床医学系、基础医学系、公共卫生系、药学系和护理学系，拥有3所附属医院（均为三级甲等医院）和8所教学医院。学院拥有临床医学、基础医学、公共卫生与预防医学三个一级学科博士学位授权点。学院科研实力雄厚，建有国家级临床医学研究中心1个、教育部重点实验室1个。近年来，学院在肿瘤精准治疗、神经退行性疾病、新药研发等领域取得重要突破，获国家科技进步二等奖2项。',
    majors: ['临床医学', '基础医学', '预防医学', '药学', '护理学'],
    contact: {
      phone: '010-88886604',
      email: 'yixueyuan@junzi.edu.cn',
      address: '君子大学医学部楼D座'
    },
    faculty: '现有专任教师90人（不含附属医院临床教师），其中教授30人、副教授38人、讲师22人。拥有国家杰出青年科学基金获得者3人、国家优秀青年科学基金获得者4人。附属医院拥有高级职称临床教师200余人，其中国内知名医学专家30余人。',
    researchAreas: ['肿瘤精准医学', '神经科学与神经退行性疾病', '心血管疾病基础与临床', '新药发现与药物递送系统', '流行病学与公共卫生政策', '再生医学与组织工程'],
    leader: {
      dean: '孙志刚 教授',
      partySecretary: '刘晓梅 教授'
    },
    color: '#3c2a5a'
  },
  {
    id: 5,
    name: '法学院',
    intro: '法学院是国内法学教育的重要基地，拥有法学一级学科博士学位授权点，在宪法与行政法、民商法、国际法等领域具有突出优势。',
    description: '法学院是君子大学最具影响力的学院之一，在国内法学界享有盛誉。学院下设法律学系、政治学系和社会学系，拥有法学一级学科博士学位授权点和法学博士后流动站。学院建有国家级法学人才培养模式创新实验区1个、省级人文社科重点研究基地2个。学院在宪法与行政法学、民商法学、国际法学三个方向上形成鲜明特色，先后承担国家社科基金重大项目8项，在《法学研究》《中国法学》等顶级法学刊物发表论文200余篇。学院与最高人民法院、最高人民检察院以及多家知名律师事务所建立了稳定的合作关系。',
    majors: ['法学', '政治学与行政学', '国际政治', '社会学'],
    contact: {
      phone: '010-88886605',
      email: 'faxueyuan@junzi.edu.cn',
      address: '君子大学主校区文科楼E座五层'
    },
    faculty: '现有专任教师55人，其中教授20人、副教授22人、讲师13人。拥有国家"万人计划"哲学社会科学领军人才2人、全国杰出青年法学家3人、教育部新世纪优秀人才5人。博士研究生导师15人，硕士研究生导师30人。',
    researchAreas: ['宪法学与行政法学', '民商法学与知识产权法', '国际法学与国际经济法', '刑法学与犯罪学', '法理学与法律史学', '社会政策与社会治理'],
    leader: {
      dean: '周国平 教授',
      partySecretary: '杨素芳 副教授'
    },
    color: '#5a5a1a'
  },
  {
    id: 6,
    name: '经济管理学院',
    intro: '经济管理学院融合经济学与管理学两大学科，在宏观经济研究、企业管理、金融工程等领域具有较强影响力，MBA项目排名全国前列。',
    description: '经济管理学院是君子大学规模最大的学院之一，融合经济学与管理学两大学科群，下设经济学系、金融学系、国际经济与贸易系、工商管理系、会计学系和市场营销系。学院拥有理论经济学、应用经济学、工商管理三个一级学科博士学位授权点。学院建有省级人文社科重点研究基地3个，与国内外知名企业和金融机构共建联合研究中心6个。学院MBA项目已通过AMBA国际认证，在全国MBA教育评估中连续多年位居前20名。学院与哈佛大学商学院、沃顿商学院等国际顶尖商学院建立了学生交换和联合培养项目。',
    majors: ['经济学', '金融学', '国际经济与贸易', '工商管理', '会计学', '市场营销'],
    contact: {
      phone: '010-88886606',
      email: 'jingguan@junzi.edu.cn',
      address: '君子大学主校区经管楼F座'
    },
    faculty: '现有专任教师78人，其中教授28人、副教授32人、讲师18人。拥有长江学者特聘教授1人、国家杰出青年科学基金获得者1人、国家"万人计划"哲学社会科学领军人才3人。博士研究生导师22人，硕士研究生讲师45人。',
    researchAreas: ['宏观经济运行与政策分析', '金融工程与风险管理', '国际贸易与跨国经营', '企业战略与组织行为', '财务会计与审计', '数字营销与消费行为'],
    leader: {
      dean: '黄志刚 教授',
      partySecretary: '陈秀英 教授'
    },
    color: '#1a5a5a'
  },
  {
    id: 7,
    name: '教育学院',
    intro: '教育学院致力于教育科学研究与教育人才培养，在教育政策研究、课程与教学论、高等教育管理等领域处于国内领先水平。',
    description: '教育学院是君子大学发展最快的学院之一，致力于教育科学研究和教育人才培养。学院下设教育学系、教育技术学系、学前教育系、特殊教育系和心理学系，拥有教育学一级学科博士学位授权点和心理学一级学科硕士学位授权点。学院建有教育部人文社科重点研究基地1个、省级教育研究智库2个。学院先后承担国家和省部级科研项目100余项，在教育政策研究、课程与教学论、高等教育管理、教育技术等领域形成了鲜明的研究特色，相关成果被教育部和省级教育行政部门采纳30余项。',
    majors: ['教育学', '教育技术学', '学前教育', '特殊教育', '心理学'],
    contact: {
      phone: '010-88886607',
      email: 'jiaoyu@junzi.edu.cn',
      address: '君子大学主校区文科楼G座二层'
    },
    faculty: '现有专任教师48人，其中教授16人、副教授20人、讲师12人。拥有国家"万人计划"教学名师1人、教育部新世纪优秀人才4人。博士研究生导师10人，硕士研究生讲师30人。',
    researchAreas: ['教育政策与教育法学', '课程与教学论', '高等教育管理与评价', '教育技术与学习科学', '学前与特殊教育', '认知与发展心理学'],
    leader: {
      dean: '林建国 教授',
      partySecretary: '吴晓红 副教授'
    },
    color: '#8b4a6b'
  },
  {
    id: 8,
    name: '艺术学院',
    intro: '艺术学院汇聚了美术、音乐、设计等艺术学科，注重艺术创作与理论研究相结合，培养具有创新精神和实践能力的艺术人才。',
    description: '艺术学院是君子大学最具活力的学院之一，汇聚了美术、音乐、设计等艺术学科，下设美术系、设计系、音乐系和舞蹈系。学院注重艺术创作与理论研究相结合，坚持"厚基础、宽口径、重创新"的人才培养理念。学院建有省级艺术实验教学示范中心1个、艺术创作研究中心3个。学院师生在全国美展、中国音乐金钟奖、中国舞蹈荷花奖等国家级艺术赛事中屡获佳绩，近三年获得国家级奖励20余项。学院与中央美术学院、中国音乐学院等知名艺术院校建立了交流合作关系，与多家文化创意企业建立了实践教学基地。',
    majors: ['美术学', '视觉传达设计', '环境设计', '音乐表演', '舞蹈学'],
    contact: {
      phone: '010-88886608',
      email: 'yishu@junzi.edu.cn',
      address: '君子大学艺术校区H座'
    },
    faculty: '现有专任教师45人，其中教授12人、副教授18人、讲师15人。拥有中国美术家协会会员6人、中国音乐家协会会员5人、中国舞蹈家协会会员3人。硕士研究生产导师25人。',
    researchAreas: ['中国画创作与理论研究', '视觉传达与数字媒体设计', '环境设计与公共艺术', '声乐表演与音乐教育', '中国民族民间舞蹈', '艺术史论与文化创意产业'],
    leader: {
      dean: '徐志刚 教授',
      partySecretary: '高雅琴 副教授'
    },
    color: '#4a6b8b'
  },
  {
    id: 9,
    name: '外国语学院',
    intro: '外国语学院设有英语、日语、法语、德语等多个语种专业，注重语言能力与跨文化交际能力的培养，与多所海外高校建立交换生项目。',
    description: '外国语学院是君子大学国际化办学的重要窗口，下设英语系、日语系、法语系、德语系和翻译系，同时承担全校公共外语教学任务。学院拥有外国语言文学一级学科硕士学位授权点和翻译硕士（MTI）专业学位授权点。学院建有省级外语实验教学示范中心1个、区域与国别研究中心2个。学院与英国剑桥大学、日本东京大学、法国索邦大学、德国海德堡大学等20余所海外知名高校建立了稳定的交换生项目和联合培养项目，每年派出学生100余人次赴海外学习交流。学院建有同声传译实验室和外语自主学习平台，为学生提供优良的语言学习环境。',
    majors: ['英语', '日语', '法语', '德语', '翻译', '商务英语'],
    contact: {
      phone: '010-88886609',
      email: 'waiyu@junzi.edu.cn',
      address: '君子大学主校区文科楼I座四层'
    },
    faculty: '现有专任教师60人，其中教授15人、副教授25人、讲师20人。拥有外籍教师8人。具有海外留学或工作背景的教师占比超过80%。硕士研究生产导师20人。',
    researchAreas: ['英语语言学与应用语言学', '英美文学与比较文学', '日语语言文学与日本文化', '法语语言文学与法国文化', '翻译理论与实践', '跨文化交际与区域国别研究'],
    leader: {
      dean: '高志远 教授',
      partySecretary: '王丽萍 副教授'
    },
    color: '#6b4a8b'
  },
  {
    id: 10,
    name: '信息科学学院',
    intro: '信息科学学院聚焦人工智能、大数据、网络安全等前沿领域，与多家科技企业深度合作，致力于培养新一代信息技术人才。',
    description: '信息科学学院是君子大学为适应信息技术发展潮流而设立的新兴学院，聚焦人工智能、大数据、网络安全、物联网等前沿领域。学院下设人工智能系、数据科学系、信息安全系和物联网工程系，拥有计算机科学与技术一级学科博士学位授权点（共建）、电子信息专业硕士学位授权点。学院建有省级重点实验室2个、省级工程技术研究中心1个。学院与百度、阿里巴巴、腾讯、华为等头部科技企业建立了深度产教融合关系，共建联合实验室和人才培养基地。学院学生在国际大学生程序设计竞赛、全国大学生信息安全竞赛、中国大学生计算机设计大赛等高水平赛事中屡获佳绩。',
    majors: ['人工智能', '数据科学与大数据技术', '信息安全', '物联网工程', '电子信息工程'],
    contact: {
      phone: '010-88886610',
      email: 'xinxikexue@junzi.edu.cn',
      address: '君子大学主校区工科楼J座六层'
    },
    faculty: '现有专任教师50人，其中教授16人、副教授20人、讲师14人。拥有长江学者特聘教授1人、国家杰出青年科学基金获得者1人、国家优秀青年科学基金获得者2人。博士研究生导师12人，硕士研究生讲师30人。',
    researchAreas: ['机器学习与深度学习', '大数据分析与数据挖掘', '网络空间安全与密码学', '物联网与边缘计算', '计算机视觉与自然语言处理', '云计算与分布式系统'],
    leader: {
      dean: '马志强 教授',
      partySecretary: '张秀兰 副教授'
    },
    color: '#4a8b6b'
  }
]

const department = computed(() => {
  const id = deptId.value
  return departments.find(d => d.id === id) || null
})
</script>

<template>
  <div class="dept-detail">
    <!-- Not Found -->
    <div v-if="!department" class="container">
      <div class="not-found">
        <h1>学院内容不存在</h1>
        <p>该学院信息暂不可用，请返回院系列表查看其他学院。</p>
        <router-link to="/departments" class="back-link">&#8249; 返回院系列表</router-link>
      </div>
    </div>

    <!-- Detail Content -->
    <template v-if="department">
      <!-- Banner -->
      <section class="dept-banner" :style="{ backgroundColor: department.color }">
        <div class="container">
          <h1 class="dept-banner-title">{{ department.name }}</h1>
          <p class="dept-banner-intro">{{ department.intro }}</p>
        </div>
      </section>

      <!-- Content -->
      <section class="dept-section">
        <div class="container">
          <div class="dept-content">
            <!-- 详细简介 -->
            <div class="dept-card card">
              <h2 class="dept-card-title">学院简介</h2>
              <p class="dept-card-text">{{ department.description }}</p>
            </div>

            <!-- 专业列表 -->
            <div class="dept-card card">
              <h2 class="dept-card-title">本科专业</h2>
              <div class="dept-majors-list">
                <span v-for="major in department.majors" :key="major" class="dept-major-tag">{{ major }}</span>
              </div>
            </div>

            <div class="dept-card-row">
              <!-- 联系方式 -->
              <div class="dept-card card dept-card-half">
                <h2 class="dept-card-title">联系方式</h2>
                <ul class="dept-info-list">
                  <li><span class="dept-info-label">电话：</span>{{ department.contact.phone }}</li>
                  <li><span class="dept-info-label">邮箱：</span>{{ department.contact.email }}</li>
                  <li><span class="dept-info-label">地址：</span>{{ department.contact.address }}</li>
                </ul>
              </div>

              <!-- 学院领导 -->
              <div class="dept-card card dept-card-half">
                <h2 class="dept-card-title">学院领导</h2>
                <ul class="dept-info-list">
                  <li><span class="dept-info-label">院长：</span>{{ department.leader.dean }}</li>
                  <li><span class="dept-info-label">党委书记：</span>{{ department.leader.partySecretary }}</li>
                </ul>
              </div>
            </div>

            <!-- 师资力量 -->
            <div class="dept-card card">
              <h2 class="dept-card-title">师资力量</h2>
              <p class="dept-card-text">{{ department.faculty }}</p>
            </div>

            <!-- 科研方向 -->
            <div class="dept-card card">
              <h2 class="dept-card-title">科研方向</h2>
              <div class="dept-research-list">
                <span v-for="(area, index) in department.researchAreas" :key="index" class="dept-research-item">{{ index + 1 }}. {{ area }}</span>
              </div>
            </div>
          </div>

          <!-- Back Link -->
          <div class="dept-back">
            <router-link to="/departments" class="back-link">&#8249; 返回院系列表</router-link>
          </div>
        </div>
      </section>
    </template>
  </div>
</template>

<style scoped>
/* Banner */
.dept-banner {
  padding: var(--spacing-3xl) 0;
  text-align: center;
  color: #fff;
}

.dept-banner-title {
  font-size: var(--font-size-4xl);
  font-weight: 700;
  margin-bottom: var(--spacing-md);
}

.dept-banner-intro {
  font-size: var(--font-size-lg);
  opacity: 0.9;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Content Section */
.dept-section {
  padding: var(--spacing-2xl) 0;
}

.dept-content {
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

/* Cards */
.dept-card {
  padding: var(--spacing-xl);
}

.dept-card-title {
  font-size: var(--font-size-xl);
  color: var(--color-text);
  font-weight: 600;
  margin-bottom: var(--spacing-md);
  padding-bottom: var(--spacing-sm);
  border-bottom: 2px solid var(--color-accent);
  display: inline-block;
}

.dept-card-text {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  line-height: 1.8;
}

/* Row for side-by-side cards */
.dept-card-row {
  display: flex;
  gap: var(--spacing-lg);
}

.dept-card-half {
  flex: 1;
}

/* Majors */
.dept-majors-list {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
}

.dept-major-tag {
  display: inline-block;
  background-color: var(--color-bg-light);
  border: 1px solid var(--color-border);
  padding: 4px 12px;
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  border-radius: 2px;
}

/* Info List */
.dept-info-list {
  list-style: none;
}

.dept-info-list li {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  padding: var(--spacing-sm) 0;
  border-bottom: 1px solid var(--color-border-light);
  line-height: 1.6;
}

.dept-info-list li:last-child {
  border-bottom: none;
}

.dept-info-label {
  font-weight: 600;
  color: var(--color-text);
}

/* Research */
.dept-research-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.dept-research-item {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  line-height: 1.6;
  padding: var(--spacing-xs) 0;
}

/* Back Link */
.dept-back {
  margin-top: var(--spacing-xl);
  text-align: center;
}

.back-link {
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
}

.back-link:hover {
  color: var(--color-primary);
}

/* Not Found */
.not-found {
  padding: var(--spacing-3xl) 0;
  text-align: center;
}

.not-found h1 {
  font-size: var(--font-size-2xl);
  color: var(--color-text);
  margin-bottom: var(--spacing-md);
}

.not-found p {
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
  margin-bottom: var(--spacing-lg);
}

/* Responsive */
@media (max-width: 768px) {
  .dept-banner {
    padding: var(--spacing-2xl) 0;
  }

  .dept-banner-title {
    font-size: var(--font-size-2xl);
  }

  .dept-card-row {
    flex-direction: column;
  }

  .dept-card {
    padding: var(--spacing-lg);
  }
}

@media (max-width: 480px) {
  .dept-banner-title {
    font-size: var(--font-size-xl);
  }

  .dept-banner-intro {
    font-size: var(--font-size-base);
  }

  .dept-card-title {
    font-size: var(--font-size-lg);
  }

  .dept-majors-list {
    gap: var(--spacing-xs);
  }
}
</style>
