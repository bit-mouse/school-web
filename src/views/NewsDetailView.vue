<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const newsId = computed(() => Number(route.params.id))

interface NewsDetail {
  id: number
  title: string
  date: string
  category: string
  author: string
  content: string[]
}

const newsDetails: Record<number, NewsDetail> = {
  1: {
    id: 1,
    title: '华文大学2026年本科招生简章正式发布',
    date: '2026-05-28',
    category: '招生',
    author: '招生办',
    content: [
      '华文大学2026年本科招生简章已正式发布。根据教育部统一部署和学校发展需要，华文大学2026年面向全国31个省（市、自治区）计划招收本科生5200人，涵盖文、理、工、医、法、经、管、教、艺等九大学科门类共85个专业。',
      '今年招生政策的主要变化包括：一是新增人工智能、数据科学与大数据技术、信息安全三个国家级一流本科专业招生计划；二是加大农村和贫困地区专项招生计划力度，由去年的200人增至280人；三是进一步优化强基计划选拔机制，强化对学生综合素质和创新能力的评价。',
      '华文大学始终坚持"立德树人、追求卓越"的办学理念，以培养高素质创新型人才为目标。学校为新生提供完善的学习生活保障，包括奖学金、助学金体系、住宿条件改善、学业导师制度等。',
      '详细信息请登录华文大学招生信息网查询，或拨打招生咨询电话010-88886666。'
    ]
  },
  2: {
    id: 2,
    title: '我校科研团队在量子计算领域取得重大突破',
    date: '2026-05-25',
    category: '科研',
    author: '科研处',
    content: [
      '由华文大学理学院物理系张明教授领衔的科研团队在量子纠错码研究方面取得原创性突破，相关成果以研究长文形式发表于国际顶尖学术期刊《Nature Physics》。这是我校量子信息科学研究领域又一标志性成果。',
      '量子纠错是实现容错量子计算的关键技术瓶颈。张明教授团队提出的"自适应表面码"方案，将量子纠错的逻辑错误率降低至此前最优方案的十分之一以下，为大规模容错量子计算的实现提供了全新的技术路径。',
      '该研究历时三年，团队成员包括博士研究生8人、硕士研究生5人以及2名海外合作研究者。项目获得国家自然科学基金重点项目和国家重点研发计划的支持。',
      '张明教授表示："这一成果是团队多年努力的结晶，也为后续研究奠定了重要基础。我们将继续深入探索量子纠错的理论极限，力争在实用化量子计算方面做出更大贡献。"'
    ]
  },
  3: {
    id: 3,
    title: '华文大学与麻省理工学院签署合作协议',
    date: '2026-05-20',
    category: '交流',
    author: '国际交流处',
    content: [
      '2026年5月18日，华文大学与美国麻省理工学院（MIT）正式签署全面合作协议。华文大学校长陈志强教授与MIT分管学术的副校长代表两校签署协议。此次合作标志着华文大学国际交流合作迈上新台阶。',
      '根据协议，两校将在以下领域开展深度合作：一是人工智能与机器学习领域，联合建立"华文-MIT智能计算联合实验室"；二是新能源材料领域，共享实验平台和数据资源，联合培养博士生；三是互派访问学者项目，每年各派出10名学者赴对方学校开展为期6-12个月的学术访问。',
      '此外，两校还将在本科学生交换项目、联合举办国际学术会议、合作出版学术期刊等方面加强合作。',
      '陈志强校长在签约仪式上表示："与MIT的合作将为华文大学师生提供更广阔的国际学术平台，对提升学校国际化水平和科研实力具有重要意义。"'
    ]
  },
  4: {
    id: 4,
    title: '第十届华文大学科技节盛大开幕',
    date: '2026-05-15',
    category: '活动',
    author: '校团委',
    content: [
      '第十届华文大学科技节于5月14日在学校体育馆盛大开幕。本届科技节以"创新驱动，智领未来"为主题，为期一周，涵盖科技讲座、创新成果展览、编程竞赛、机器人挑战赛等多个环节。',
      '开幕式上，校长陈志强教授致开幕词，强调科技创新对国家发展和人才培养的重要意义。本届科技节特别邀请了多位知名科技企业家和科学家做专题讲座，包括华为首席科学家、百度人工智能研究院院长等。',
      '在创新成果展览区，来自各学院的学生团队展示了120余项科技创新作品，涉及人工智能、物联网、环保科技、医疗健康等多个领域。',
      '科技节期间还举办了第五届华文编程马拉松大赛和第三届机器人挑战赛，吸引了全校300余支队伍参赛。'
    ]
  },
  5: {
    id: 5,
    title: '我校学子在ACM国际编程竞赛中荣获金奖',
    date: '2026-05-10',
    category: '竞赛',
    author: '工学院',
    content: [
      '2026年ACM国际大学生程序设计竞赛全球总决赛于5月8日在美国落幕。由华文大学工学院计算机系三名同学组成的代表队表现优异，在全球128支参赛队伍中脱颖而出，斩获金奖。',
      '参赛队员分别是计算机科学与技术专业四年级学生王浩然、三年级学生李思涵和二年级学生陈雨桐。他们在5小时的限时比赛中，成功解决了9道高难度算法问题，展现了出色的编程能力和团队协作精神。',
      '工学院院长表示："这次成绩是学院近年来重视算法教学和编程实践训练的直接体现。我们将继续加大对竞赛训练的支持力度，培养更多具有国际竞争力的计算机人才。"',
      '华文大学ACM竞赛队伍已连续五年进入全球总决赛，此次金奖是学校在该赛事中取得的最好成绩。'
    ]
  },
  6: {
    id: 6,
    title: '华文大学新增三个国家级一流本科专业',
    date: '2026-05-05',
    category: '教学',
    author: '教务处',
    content: [
      '教育部近日公布新一批国家级一流本科专业建设点名单，华文大学新增人工智能、数据科学与大数据技术、信息安全三个专业入选，至此学校已有42个国家级一流本科专业建设点。',
      '这三个新入选专业均为近年来为适应国家战略需求而设立的新工科专业。人工智能专业依托工学院和信息科学学院联合建设，数据科学与大数据技术专业由信息科学学院牵头，信息安全专业则由工学院和理学院数学系协同建设。',
      '教务处负责人表示，学校将进一步完善这三个专业的课程体系和实践教学环节，加强师资队伍建设，深化产教融合，力争在3-5年内将这三个专业打造成国内一流的品牌专业。'
    ]
  },
  7: {
    id: 7,
    title: '知名企业家校友回校分享创业经验',
    date: '2026-04-28',
    category: '校友',
    author: '校友会',
    content: [
      '4月27日，华文大学经济管理学院2005届校友、知名科技企业创始人李强先生回校开展创业经验分享讲座。讲座在校学术报告厅举行，500余名师生参加。',
      '李强先生是华文大学杰出校友代表，毕业后先后在多家知名互联网企业任职，2015年创立自己的科技公司，目前公司估值超过50亿元。他在讲座中分享了从学生到创业者的成长历程、创业过程中的关键决策和经验教训。',
      '"在创业路上，华文大学给予我的不只是知识，更是面对挑战时的勇气和创新思维。"李强先生在讲座中这样回忆母校的影响。',
      '经济管理学院院长表示，学院将继续邀请更多优秀校友回校交流，搭建校友与在校师生之间的桥梁，促进校企合作和人才培养。'
    ]
  },
  8: {
    id: 8,
    title: '校园文化节之话剧展演活动圆满落幕',
    date: '2026-04-20',
    category: '活动',
    author: '艺术学院',
    content: [
      '由华文大学艺术学院主办、全校师生参与的话剧展演活动于4月19日圆满落幕。本次展演历时两周，共演出8场原创话剧，吸引了近万人次观看。',
      '参演话剧题材丰富，涵盖校园生活、历史故事、社会议题等多个方面。其中，文学院学生编演的《春华秋实》以华文大学建校历史为素材，获得最佳原创剧本奖；艺术学院导演系的《归途》以当代青年的成长困惑为主题，获得最佳演出奖。',
      '本次话剧展演是华文大学第28届校园文化节的重要组成部分，旨在丰富校园文化生活，提升学生艺术素养和创新能力。'
    ]
  },
  9: {
    id: 9,
    title: '华文大学图书馆数字资源平台全新上线',
    date: '2026-04-15',
    category: '服务',
    author: '图书馆',
    content: [
      '华文大学图书馆数字资源平台经过半年的升级改造，于4月14日正式上线。新版平台在界面设计、检索功能、资源覆盖等方面均有大幅提升。',
      '升级后的数字资源平台新增百万册电子图书和数千种学术期刊全文数据库，包括Springer Nature、Elsevier、Wiley等国际顶级出版商的期刊资源。平台还引入AI智能检索功能，可根据用户研究方向自动推荐相关文献。',
      '图书馆馆长表示："数字资源平台的升级是学校推进信息化建设的重要举措。我们将持续优化平台功能，为师生科研和学习提供更便捷高效的文献服务。"',
      '师生可通过校园网直接访问数字资源平台，校外访问需通过VPN连接。'
    ]
  },
  10: {
    id: 10,
    title: '我校教师荣获国家教学名师称号',
    date: '2026-04-08',
    category: '教学',
    author: '教务处',
    content: [
      '教育部近日公布第七届国家级教学名师评选结果，华文大学理学院数学系王教授和工学院机械系赵教授分别入选。这是我校教师连续第五届获得此项殊荣，体现了学校卓越的教学水平。',
      '王教授从事数学教学30余年，以启发式教学法和案例教学法著称，编写的《高等数学》教材被全国百余所高校采用。赵教授在机械工程教学领域独树一帜，将虚拟仿真技术引入课堂教学，开创了"虚实结合"的新型教学模式。',
      '两位教授表示，获得国家教学名师称号既是荣誉更是责任，将继续在教学改革和创新方面发挥引领作用，为提升全校教学质量做出贡献。'
    ]
  }
}

const newsDetail = computed(() => {
  const id = newsId.value
  return newsDetails[id] || {
    id,
    title: '新闻内容不存在',
    date: '',
    category: '',
    author: '',
    content: ['该新闻内容暂不可用，请返回新闻列表查看其他新闻。']
  }
})
</script>

<template>
  <div class="news-detail">
    <div class="container">
      <div class="news-detail-header">
        <router-link to="/news" class="back-link">&#8249; 返回新闻列表</router-link>
        <span class="news-detail-category">{{ newsDetail.category }}</span>
      </div>

      <article class="news-detail-article">
        <h1 class="news-detail-title">{{ newsDetail.title }}</h1>
        <div class="news-detail-meta">
          <span>发布时间：{{ newsDetail.date }}</span>
          <span>来源：{{ newsDetail.author }}</span>
        </div>

        <div class="news-detail-content">
          <p v-for="(paragraph, index) in newsDetail.content" :key="index">{{ paragraph }}</p>
        </div>
      </article>
    </div>
  </div>
</template>

<style scoped>
.news-detail {
  padding: var(--spacing-xl) 0;
}

.news-detail-header {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-xl);
}

.back-link {
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
}

.back-link:hover {
  color: var(--color-primary);
}

.news-detail-category {
  display: inline-block;
  background-color: var(--color-accent);
  color: #fff;
  padding: 2px 8px;
  font-size: var(--font-size-xs);
  border-radius: 2px;
}

.news-detail-article {
  max-width: 800px;
}

.news-detail-title {
  font-size: var(--font-size-2xl);
  color: var(--color-text);
  line-height: 1.4;
  margin-bottom: var(--spacing-md);
}

.news-detail-meta {
  display: flex;
  gap: var(--spacing-lg);
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
  margin-bottom: var(--spacing-xl);
  padding-bottom: var(--spacing-md);
  border-bottom: 1px solid var(--color-border);
}

.news-detail-content {
  line-height: 1.8;
}

.news-detail-content p {
  margin-bottom: var(--spacing-md);
  text-indent: 2em;
}
</style>