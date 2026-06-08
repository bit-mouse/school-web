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
    title: '君子大学2026年本科招生简章正式发布',
    date: '2026-05-28',
    category: '招生',
    author: '招生办',
    content: [
      '君子大学2026年本科招生简章已正式发布。根据教育部统一部署和学校发展需要，君子大学2026年面向全国31个省（市、自治区）计划招收本科生5200人，涵盖文、理、工、医、法、经、管、教、艺等九大学科门类共85个专业。',
      '今年招生政策的主要变化包括：一是新增人工智能、数据科学与大数据技术、信息安全三个国家级一流本科专业招生计划；二是加大农村和贫困地区专项招生计划力度，由去年的200人增至280人；三是进一步优化强基计划选拔机制，强化对学生综合素质和创新能力的评价。',
      '君子大学始终坚持"立德树人、追求卓越"的办学理念，以培养高素质创新型人才为目标。学校为新生提供完善的学习生活保障，包括奖学金、助学金体系、住宿条件改善、学业导师制度等。',
      '详细信息请登录君子大学招生信息网查询，或拨打招生咨询电话010-88886666。'
    ]
  },
  2: {
    id: 2,
    title: '我校科研团队在量子计算领域取得重大突破',
    date: '2026-05-25',
    category: '科研',
    author: '科研处',
    content: [
      '由君子大学理学院物理系张明教授领衔的科研团队在量子纠错码研究方面取得原创性突破，相关成果以研究长文形式发表于国际顶尖学术期刊《Nature Physics》。这是我校量子信息科学研究领域又一标志性成果。',
      '量子纠错是实现容错量子计算的关键技术瓶颈。张明教授团队提出的"自适应表面码"方案，将量子纠错的逻辑错误率降低至此前最优方案的十分之一以下，为大规模容错量子计算的实现提供了全新的技术路径。',
      '该研究历时三年，团队成员包括博士研究生8人、硕士研究生5人以及2名海外合作研究者。项目获得国家自然科学基金重点项目和国家重点研发计划的支持。',
      '张明教授表示："这一成果是团队多年努力的结晶，也为后续研究奠定了重要基础。我们将继续深入探索量子纠错的理论极限，力争在实用化量子计算方面做出更大贡献。"'
    ]
  },
  3: {
    id: 3,
    title: '君子大学与麻省理工学院签署合作协议',
    date: '2026-05-20',
    category: '交流',
    author: '国际交流处',
    content: [
      '2026年5月18日，君子大学与美国麻省理工学院（MIT）正式签署全面合作协议。君子大学校长陈志强教授与MIT分管学术的副校长代表两校签署协议。此次合作标志着君子大学国际交流合作迈上新台阶。',
      '根据协议，两校将在以下领域开展深度合作：一是人工智能与机器学习领域，联合建立"君子-MIT智能计算联合实验室"；二是新能源材料领域，共享实验平台和数据资源，联合培养博士生；三是互派访问学者项目，每年各派出10名学者赴对方学校开展为期6-12个月的学术访问。',
      '此外，两校还将在本科学生交换项目、联合举办国际学术会议、合作出版学术期刊等方面加强合作。',
      '陈志强校长在签约仪式上表示："与MIT的合作将为君子大学师生提供更广阔的国际学术平台，对提升学校国际化水平和科研实力具有重要意义。"'
    ]
  },
  4: {
    id: 4,
    title: '第十届君子大学科技节盛大开幕',
    date: '2026-05-15',
    category: '活动',
    author: '校团委',
    content: [
      '第十届君子大学科技节于5月14日在学校体育馆盛大开幕。本届科技节以"创新驱动，智领未来"为主题，为期一周，涵盖科技讲座、创新成果展览、编程竞赛、机器人挑战赛等多个环节。',
      '开幕式上，校长陈志强教授致开幕词，强调科技创新对国家发展和人才培养的重要意义。本届科技节特别邀请了多位知名科技企业家和科学家做专题讲座，包括华为首席科学家、百度人工智能研究院院长等。',
      '在创新成果展览区，来自各学院的学生团队展示了120余项科技创新作品，涉及人工智能、物联网、环保科技、医疗健康等多个领域。',
      '科技节期间还举办了第五届君子编程马拉松大赛和第三届机器人挑战赛，吸引了全校300余支队伍参赛。'
    ]
  },
  5: {
    id: 5,
    title: '我校学子在ACM国际编程竞赛中荣获金奖',
    date: '2026-05-10',
    category: '竞赛',
    author: '工学院',
    content: [
      '2026年ACM国际大学生程序设计竞赛全球总决赛于5月8日在美国落幕。由君子大学工学院计算机系三名同学组成的代表队表现优异，在全球128支参赛队伍中脱颖而出，斩获金奖。',
      '参赛队员分别是计算机科学与技术专业四年级学生王浩然、三年级学生李思涵和二年级学生陈雨桐。他们在5小时的限时比赛中，成功解决了9道高难度算法问题，展现了出色的编程能力和团队协作精神。',
      '工学院院长表示："这次成绩是学院近年来重视算法教学和编程实践训练的直接体现。我们将继续加大对竞赛训练的支持力度，培养更多具有国际竞争力的计算机人才。"',
      '君子大学ACM竞赛队伍已连续五年进入全球总决赛，此次金奖是学校在该赛事中取得的最好成绩。'
    ]
  },
  6: {
    id: 6,
    title: '君子大学新增三个国家级一流本科专业',
    date: '2026-05-05',
    category: '教学',
    author: '教务处',
    content: [
      '教育部近日公布新一批国家级一流本科专业建设点名单，君子大学新增人工智能、数据科学与大数据技术、信息安全三个专业入选，至此学校已有42个国家级一流本科专业建设点。',
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
      '4月27日，君子大学经济管理学院2005届校友、知名科技企业创始人李强先生回校开展创业经验分享讲座。讲座在校学术报告厅举行，500余名师生参加。',
      '李强先生是君子大学杰出校友代表，毕业后先后在多家知名互联网企业任职，2015年创立自己的科技公司，目前公司估值超过50亿元。他在讲座中分享了从学生到创业者的成长历程、创业过程中的关键决策和经验教训。',
      '"在创业路上，君子大学给予我的不只是知识，更是面对挑战时的勇气和创新思维。"李强先生在讲座中这样回忆母校的影响。',
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
      '由君子大学艺术学院主办、全校师生参与的话剧展演活动于4月19日圆满落幕。本次展演历时两周，共演出8场原创话剧，吸引了近万人次观看。',
      '参演话剧题材丰富，涵盖校园生活、历史故事、社会议题等多个方面。其中，文学院学生编演的《春华秋实》以君子大学建校历史为素材，获得最佳原创剧本奖；艺术学院导演系的《归途》以当代青年的成长困惑为主题，获得最佳演出奖。',
      '本次话剧展演是君子大学第28届校园文化节的重要组成部分，旨在丰富校园文化生活，提升学生艺术素养和创新能力。'
    ]
  },
  9: {
    id: 9,
    title: '君子大学图书馆数字资源平台全新上线',
    date: '2026-04-15',
    category: '服务',
    author: '图书馆',
    content: [
      '君子大学图书馆数字资源平台经过半年的升级改造，于4月14日正式上线。新版平台在界面设计、检索功能、资源覆盖等方面均有大幅提升。',
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
      '教育部近日公布第七届国家级教学名师评选结果，君子大学理学院数学系王教授和工学院机械系赵教授分别入选。这是我校教师连续第五届获得此项殊荣，体现了学校卓越的教学水平。',
      '王教授从事数学教学30余年，以启发式教学法和案例教学法著称，编写的《高等数学》教材被全国百余所高校采用。赵教授在机械工程教学领域独树一帜，将虚拟仿真技术引入课堂教学，开创了"虚实结合"的新型教学模式。',
      '两位教授表示，获得国家教学名师称号既是荣誉更是责任，将继续在教学改革和创新方面发挥引领作用，为提升全校教学质量做出贡献。'
    ]
  },
  11: {
    id: 11,
    title: '君子大学新校区二期建设全面启动',
    date: '2026-04-01',
    category: '校园建设',
    author: '基建处',
    content: [
      '君子大学新校区二期建设工程于3月30日正式启动。二期工程总投资约8亿元，建设内容包括三栋教学楼、一栋实验楼和学生活动中心，总建筑面积约6万平方米。',
      '新校区二期建设是学校"十四五"发展规划的重点项目，旨在进一步改善办学条件，满足日益增长的办学需求。三栋教学楼将分别用于工学院、信息科学学院和医学院的教学活动，实验楼将配备先进的科研仪器设备，学生活动中心将集文体活动、社团活动、学术交流等功能于一体。',
      '基建处负责人表示，二期工程预计2028年投入使用，届时新校区将形成完整的教学科研和生活服务体系，为师生提供更加优质的学习和工作环境。',
      '一期工程已于2024年完工并投入使用，包括两栋教学楼、图书馆分馆和学生宿舍，目前运行良好。'
    ]
  },
  12: {
    id: 12,
    title: '我校成功举办第十二届国际学术会议',
    date: '2026-03-25',
    category: '学术会议',
    author: '国际交流处',
    content: [
      '3月22日至24日，君子大学第十二届国际学术会议在校学术报告厅成功举办。本次会议以"人工智能与社会发展"为主题，来自全球20余个国家的300余名学者齐聚君子大学，围绕人工智能技术发展及其对社会的影响展开深入研讨。',
      '会议设置了6个专题论坛，涵盖人工智能伦理、智能医疗、智慧教育、智能制造、数据治理和人工智能法律规制等前沿议题。来自哈佛大学、牛津大学、东京大学等世界一流大学的知名学者做了主题演讲。',
      '校长陈志强教授在开幕式致辞中表示："君子大学始终致力于推动国际学术交流与合作，本届会议的成功举办进一步彰显了学校在国际学术舞台上的影响力。"',
      '会议期间还举办了青年学者论坛和产学研对接会，为青年学者和企业代表提供了交流合作的平台。'
    ]
  },
  13: {
    id: 13,
    title: '君子大学学子在全国数学建模竞赛中斩获一等奖',
    date: '2026-03-18',
    category: '竞赛',
    author: '理学院',
    content: [
      '2026年全国大学生数学建模竞赛结果近日公布，君子大学参赛队伍表现优异。由理学院和信息科学学院联合组队的5支参赛队伍全部获奖，其中2支队伍获一等奖，3支队伍获二等奖。',
      '获一等奖的两支队伍分别来自数学与应用数学专业和计算机科学与技术专业，他们在72小时的限时比赛中，针对"城市交通流量优化"和"新能源电力系统调度"两个实际问题，建立了创新的数学模型并提出了有效的解决方案。',
      '理学院院长刘建国教授表示："数学建模竞赛是检验学生综合运用数学知识解决实际问题能力的重要平台。我校连续多年在该赛事中取得优异成绩，充分体现了学校在基础学科教学和应用能力培养方面的实力。"',
      '学校将继续加大对数学建模竞赛的支持力度，组建专门的竞赛指导团队，为参赛学生提供系统化的培训和指导。'
    ]
  },
  14: {
    id: 14,
    title: '我校三位教授入选国家高层次人才特殊支持计划',
    date: '2026-03-10',
    category: '教师荣誉',
    author: '人事处',
    content: [
      '近日，第三批国家"万人计划"科技创新领军人才名单公布，君子大学三位教授入选。工学院赵伟民教授、医学院孙志刚教授、信息科学学院马志强教授分别凭借在智能制造、精准医学和人工智能领域的突出贡献获此殊荣。',
      '赵伟民教授长期从事智能制造与机器人技术研究，主持国家重点研发计划项目3项，获国家科技进步二等奖1项。孙志刚教授在肿瘤精准治疗领域取得系列重要突破，相关成果发表于《Lancet》和《NEJM》。马志强教授在深度学习与计算机视觉领域具有国际影响力，发表高水平论文100余篇。',
      '人事处负责人表示，学校高度重视高层次人才队伍建设，近年来通过实施"君子学者计划"等人才引进和培养项目，已累计引进和培养国家级人才计划入选者30余人。',
      '三位教授的入选进一步提升了学校在相关学科领域的学术影响力，也为学校"双一流"建设注入了新的动力。'
    ]
  },
  15: {
    id: 15,
    title: '君子大学志愿服务团队荣获全国优秀志愿服务集体',
    date: '2026-03-02',
    category: '社会服务',
    author: '校团委',
    content: [
      '近日，中央文明办公布2025年度全国优秀志愿服务集体名单，君子大学"君子行"志愿服务团队连续三年获评全国优秀志愿服务集体，累计服务时长超过10万小时。',
      '"君子行"志愿服务团队成立于2010年，目前拥有注册志愿者2000余人，涵盖教育支教、环境保护、医疗援助、社区服务等多个领域。团队在西部地区建立了8个支教点，累计派出支教志愿者500余人次；在环保领域，团队组织了"绿色校园"和"守护翠湖"等品牌项目。',
      '校团委负责人表示："君子行志愿服务团队是君子大学践行社会责任的重要载体，也是培养学生社会责任感和实践能力的重要平台。我们将继续支持志愿服务工作，让更多同学参与其中。"',
      '团队负责人、文学院四年级学生张晓丽说："志愿服务让我深刻理解了‘博学笃行、厚德载物’的校训精神，每一次服务都是一次成长。"'
    ]
  }
}

const allNewsIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

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

const prevNews = computed(() => {
  const currentIndex = allNewsIds.indexOf(newsId.value)
  if (currentIndex > 0) {
    const prevId = allNewsIds[currentIndex - 1]
    return { id: prevId, title: newsDetails[prevId]?.title || '' }
  }
  return null
})

const nextNews = computed(() => {
  const currentIndex = allNewsIds.indexOf(newsId.value)
  if (currentIndex < allNewsIds.length - 1) {
    const nextId = allNewsIds[currentIndex + 1]
    return { id: nextId, title: newsDetails[nextId]?.title || '' }
  }
  return null
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

      <!-- Prev/Next Navigation -->
      <div class="news-nav">
        <router-link v-if="prevNews" :to="`/news/${prevNews.id}`" class="news-nav-link news-nav-prev">
          <span class="news-nav-label">上一篇</span>
          <span class="news-nav-title">{{ prevNews.title }}</span>
        </router-link>
        <span v-else class="news-nav-link news-nav-prev news-nav-disabled">上一篇：已是第一篇</span>

        <router-link v-if="nextNews" :to="`/news/${nextNews.id}`" class="news-nav-link news-nav-next">
          <span class="news-nav-label">下一篇</span>
          <span class="news-nav-title">{{ nextNews.title }}</span>
        </router-link>
        <span v-else class="news-nav-link news-nav-next news-nav-disabled">下一篇：已是最后一篇</span>
      </div>
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

/* Prev/Next Navigation */
.news-nav {
  display: flex;
  justify-content: space-between;
  gap: var(--spacing-lg);
  margin-top: var(--spacing-2xl);
  padding-top: var(--spacing-lg);
  border-top: 1px solid var(--color-border);
  max-width: 800px;
}

.news-nav-link {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
  max-width: 45%;
}

.news-nav-label {
  font-size: var(--font-size-xs);
  color: var(--color-text-muted);
}

.news-nav-title {
  font-size: var(--font-size-sm);
  color: var(--color-primary);
  line-height: 1.4;
}

.news-nav-link:hover .news-nav-title {
  color: var(--color-primary-light);
}

.news-nav-disabled {
  color: var(--color-text-muted);
  cursor: default;
}

.news-nav-disabled .news-nav-label,
.news-nav-disabled .news-nav-title {
  color: var(--color-text-muted);
}

@media (max-width: 480px) {
  .news-nav {
    flex-direction: column;
    gap: var(--spacing-md);
  }

  .news-nav-link {
    max-width: 100%;
  }
}
</style>