<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const noticeId = computed(() => Number(route.params.id))

interface NoticeDetail {
  id: number
  title: string
  date: string
  department: string
  content: string[]
}

const noticeDetails: Record<number, NoticeDetail> = {
  1: {
    id: 1,
    title: '关于2026年暑假放假安排的通知',
    date: '2026-06-01',
    department: '校办公室',
    content: [
      '各学院、各部门：',
      '根据学校教学计划安排，现将2026年暑假放假时间及相关事项通知如下：',
      '一、放假时间：2026年7月10日至8月25日，共46天。教职工7月10日起放假，8月26日正常上班。学生7月10日起放假，8月27日返校注册，8月28日正式上课。',
      '二、暑假期间，各学院、各部门应安排好值班工作，确保学校正常运转。值班人员名单请于7月5日前报送校办公室。',
      '三、暑假期间校园安全保卫工作由保卫处统一安排，各楼宇实行定时开放管理。图书馆暑期开放时间另行通知。',
      '四、请各单位做好放假前的安全检查工作，确保门窗锁好、电器关闭、贵重物品妥善保管。',
      '特此通知。'
    ]
  },
  2: {
    id: 2,
    title: '2026年度国家自然科学基金项目申报通知',
    date: '2026-05-30',
    department: '科研处',
    content: [
      '各位教师：',
      '根据国家自然科学基金委员会2026年度项目申报工作安排，现将我校申报工作有关事项通知如下：',
      '一、申报类型：面上项目、青年科学基金项目、地区科学基金项目、重点项目等。',
      '二、申报时间：2026年6月1日至9月15日。请各位教师提前准备申报材料，确保按时提交。',
      '三、申报方式：通过国家自然科学基金委员会在线申报系统提交电子版申请书，同时将纸质版报送科研处。',
      '四、科研处将于6月5日和6月20日分别举办两场申报辅导讲座，邀请校内资深评审专家进行指导。请有意申报的教师积极参加。',
      '五、各学院科研秘书负责本学院申报材料的初审和汇总工作，请于9月10日前将汇总表报送科研处。',
      '联系人：科研处项目管理科 张老师，电话：010-88886667'
    ]
  },
  3: {
    id: 3,
    title: '关于开展校园安全大检查的通知',
    date: '2026-05-28',
    department: '保卫处',
    content: [
      '各学院、各部门：',
      '为确保校园安全稳定，根据上级部门要求和学校安全工作部署，决定在全校范围内开展安全大检查。现将有关事项通知如下：',
      '一、检查时间：2026年6月1日至6月15日。',
      '二、检查范围：全校所有教学楼、实验室、宿舍楼、食堂、图书馆、体育馆等场所。',
      '三、检查内容：消防安全、用电安全、实验室危化品管理、食品安全、建筑安全等。',
      '四、检查方式：由保卫处牵头，联合后勤处、教务处、学生处等部门组成检查组，逐楼逐层进行检查。',
      '五、请各单位在检查前自行开展安全隐患排查，发现问题及时整改。对检查中发现的安全隐患，将下发整改通知书，限期整改。',
      '安全工作事关全校师生生命财产安全，请各单位高度重视，积极配合检查工作。'
    ]
  },
  4: {
    id: 4,
    title: '关于2026年职称评审工作的通知',
    date: '2026-05-25',
    department: '人事处',
    content: [
      '各位教师：',
      '根据学校职称评审工作安排，现将2026年度职称评审工作有关事项通知如下：',
      '一、评审范围：2026年在岗且符合申报条件的教师均可申报。',
      '二、申报级别：教授、副教授、讲师。',
      '三、申报时间：2026年6月1日至7月15日。',
      '四、申报材料：包括个人简历、教学科研成果清单、代表性论文著作、教学评价等。具体材料要求详见人事处网站。',
      '五、评审程序：学院初审、学校复审、校外专家评审、校职称评审委员会终审。',
      '六、评审结果预计于10月底公布。',
      '联系人：人事处职称管理科 刘老师，电话：010-88886668'
    ]
  },
  5: {
    id: 5,
    title: '2026年秋季学期选课通知',
    date: '2026-05-22',
    department: '教务处',
    content: [
      '各位同学：',
      '2026年秋季学期选课工作即将开始，现将有关事项通知如下：',
      '一、选课时间：第一轮选课2026年8月28日至9月3日；第二轮选课2026年9月4日至9月10日。',
      '二、选课方式：通过教务管理系统在线选课。',
      '三、选课规则：每学期选修学分上限为25学分（含必修课），下限为15学分。通识选修课每人每学期最多选修3门。',
      '四、请同学们提前查看课程目录和培养方案，合理规划选课。选课期间如遇问题，请联系所在学院教务办公室。',
      '五、选课结束后，请及时确认个人课表，如有遗漏或错误，在补退选阶段进行调整。'
    ]
  },
  6: {
    id: 6,
    title: '关于举办君子大学建校七十周年纪念活动的通知',
    date: '2026-05-18',
    department: '校办公室',
    content: [
      '全校师生、校友：',
      '2026年是君子大学建校七十周年。为纪念这一重要历史时刻，学校决定举办系列纪念活动，现将有关事项通知如下：',
      '一、纪念大会：2026年10月15日上午9:00在学校体育馆举行建校七十周年纪念大会。',
      '二、学术论坛：10月15日至17日举办"君子论坛——面向未来的高等教育"国际学术研讨会。',
      '三、校史展览：9月1日至10月31日在校史馆举办"七十年君子路"主题展览。',
      '四、校友返校日：10月16日为校友返校日，各学院将举办校友座谈会和联谊活动。',
      '五、文艺晚会：10月15日晚在学校大礼堂举办建校七十周年文艺晚会。',
      '欢迎全校师生和广大校友积极参与各项纪念活动。校友返校请提前在校友会网站登记报名。'
    ]
  },
  7: {
    id: 7,
    title: '关于调整校园停车管理规定的通知',
    date: '2026-05-15',
    department: '后勤处',
    content: [
      '全校师生：',
      '为改善校园交通秩序，保障师生出行安全，经学校研究决定，对校园停车管理规定进行调整，现将有关事项通知如下：',
      '一、自2026年6月1日起，校园内实行分区停车管理。教学区禁止机动车停放，教职工车辆统一停放至教职工停车场，访客车辆停放至访客停车场。',
      '二、教职工停车证办理：请于5月25日前到后勤处服务窗口办理新年度停车证，费用为每年200元。',
      '三、校园内限速20公里/小时，禁止鸣笛。电动车、自行车须停放在指定区域。',
      '四、违规停车将按新规处理：首次违规警告，第二次违规罚款50元，第三次违规取消停车资格。',
      '请全校师生自觉遵守新的停车管理规定，共同维护良好的校园交通环境。'
    ]
  },
  8: {
    id: 8,
    title: '2026年度大学生创新创业项目申报通知',
    date: '2026-05-10',
    department: '教务处',
    content: [
      '各位同学：',
      '为推进创新创业教育，培养学生的创新意识和创业能力，现启动2026年度大学生创新创业训练计划项目申报工作。',
      '一、项目类型：创新训练项目、创业训练项目、创业实践项目三类。',
      '二、申报对象：全日制在校本科生，以团队形式申报，每团队3-5人，需指定1名指导教师。',
      '三、申报时间：2026年5月15日至6月30日。',
      '四、资助额度：创新训练项目每项资助5000-10000元，创业训练项目每项资助10000-20000元，创业实践项目每项资助20000-50000元。',
      '五、项目周期：一般为1年，最长不超过2年。',
      '六、申报方式：通过教务管理系统在线提交项目申请书，同时将纸质版报送教务处创新创业教育中心。',
      '联系人：教务处创新创业教育中心 孙老师，电话：010-88886669'
    ]
  },
  9: {
    id: 9,
    title: '关于开展2026年度教职工体检的通知',
    date: '2026-05-05',
    department: '人事处',
    content: [
      '各位教职工：',
      '为保障教职工身体健康，学校决定开展2026年度教职工体检工作，现将有关事项通知如下：',
      '一、体检时间：2026年6月1日至6月30日（工作日）。',
      '二、体检地点：君子大学校医院及合作医院（北京市第三人民医院）。',
      '三、体检对象：全校在职教职工（含合同制员工）。',
      '四、体检项目：常规检查（血常规、尿常规、肝功能、肾功能、血脂、血糖等）、心电图、胸部X光、腹部B超、甲状腺功能检查等。40岁以上教职工增加肿瘤标志物筛查。',
      '五、预约方式：通过校医院在线预约系统选择体检日期和地点。',
      '六、体检费用由学校统一承担，教职工无需自付。',
      '请各位教职工合理安排时间，按时参加体检。'
    ]
  },
  10: {
    id: 10,
    title: '关于图书馆暑期开放时间调整的通知',
    date: '2026-05-01',
    department: '图书馆',
    content: [
      '各位师生：',
      '暑假期间图书馆开放时间将作如下调整：',
      '一、开放时间：7月10日至8月25日期间，主馆开放时间为每日8:30-17:00（周一至周五），周末及节假日闭馆。分馆暑期闭馆。',
      '二、自习室：主馆一楼自习室暑期全天开放（8:30-21:00），供在校师生使用。',
      '三、数字资源：图书馆数字资源平台暑期正常开放，师生可通过校园网或VPN访问。',
      '四、借还书：暑期借书期限延长至秋季学期开学后两周内归还，不计算超期罚款。',
      '五、8月26日起恢复正常开放时间。',
      '如有疑问，请联系图书馆服务台，电话：010-88886670'
    ]
  },
  11: {
    id: 11,
    title: '关于2026年秋季学期教学安排的通知',
    date: '2026-04-28',
    department: '教务处',
    content: [
      '各学院、各位教师：',
      '2026年秋季学期教学安排工作即将启动，现将有关事项通知如下：',
      '一、教学任务安排：各学院请于5月15日前将下学期教学任务分配表报送教务处，确保每位教师的授课任务明确。',
      '二、课程大纲更新：各课程负责人请于5月30日前完成课程教学大纲的修订工作，特别是新增专业和调整培养方案的课程。',
      '三、教室安排：教务处将于6月10日前完成下学期教室分配工作，如有特殊需求请提前告知。',
      '四、新开课程审核：拟新开设的课程须经学院教学委员会初审、教务处终审后方可纳入教学计划。新开课程申请截止日期为5月20日。',
      '联系人：教务处教学管理科 周老师，电话：010-88886672'
    ]
  },
  12: {
    id: 12,
    title: '关于校园道路及管网改造施工的通知',
    date: '2026-04-22',
    department: '后勤处',
    content: [
      '全校师生：',
      '为改善校园基础设施条件，学校决定对部分道路和地下管网进行改造施工，现将有关事项通知如下：',
      '一、施工时间：2026年5月10日至7月31日。',
      '二、施工范围：主校区东侧道路（教学楼至食堂路段）及地下给排水管网、西侧道路（图书馆至体育馆路段）及供电管网。',
      '三、施工期间上述路段实行半幅通行，请师生注意安全，按照现场指示标志绕行。预计6月15日完成东侧施工、7月20日完成西侧施工。',
      '四、施工期间可能影响部分区域的供水和供电，后勤处将提前24小时发布临时停水停电通知。',
      '五、施工单位将采取降噪和降尘措施，尽量减少对师生正常学习和生活的影响。',
      '施工期间如有问题，请联系后勤处工程管理科，电话：010-88886673'
    ]
  },
  13: {
    id: 13,
    title: '关于加强实验室安全管理工作的提醒',
    date: '2026-04-15',
    department: '保卫处',
    content: [
      '各学院、各实验室：',
      '近期国内高校实验室安全事故时有发生，为切实保障我校实验室安全运行，现就加强实验室安全管理工作提醒如下：',
      '一、严格落实实验室安全责任制。各学院须明确每间实验室的安全责任人，建立安全台账，定期检查并及时消除安全隐患。',
      '二、危险化学品管理。严格实行危化品"五双"管理制度（双人保管、双人领用、双人使用、双锁、双账），确保危化品储存和使用全程可追溯。',
      '三、实验室准入制度。所有进入实验室的人员须通过安全培训考核，获得实验室准入资格后方可开展实验操作。',
      '四、应急处置。各实验室须配备必要的消防器材和应急物资，制定应急预案并定期演练。发生安全事故须第一时间报告保卫处和主管部门。',
      '五、保卫处将于4月20日起对各学院实验室进行专项安全抽查，请各单位提前做好自查自纠工作。'
    ]
  },
  14: {
    id: 14,
    title: '关于图书馆新增电子资源试用的通知',
    date: '2026-04-08',
    department: '图书馆',
    content: [
      '各位师生：',
      '为满足教学科研需求，图书馆新增一批电子资源试用，现将有关事项通知如下：',
      '一、试用资源：ACM Digital Library（计算机学会数字图书馆）、APS Physics（美国物理学会期刊全文）、JSTOR Arts & Sciences Collection（人文社科期刊合集）、中国知网博硕士论文全文数据库。',
      '二、试用时间：2026年4月10日至7月10日，共3个月。',
      '三、访问方式：校内IP范围内直接访问，校外通过VPN连接访问。访问入口为图书馆数字资源平台"试用资源"栏目。',
      '四、试用期间欢迎广大师生积极使用，并将使用体验和建议反馈至图书馆资源建设部，以便决定是否正式采购。',
      '五、试用资源使用期间如遇技术问题，请联系图书馆技术服务部，电话：010-88886675。'
    ]
  },
  15: {
    id: 15,
    title: '关于校园网络系统升级维护的通知',
    date: '2026-04-01',
    department: '信息中心',
    content: [
      '全校师生：',
      '为提升校园网络服务质量和安全保障能力，信息中心将于近期对校园网络系统进行升级维护，现将有关事项通知如下：',
      '一、升级时间：2026年4月15日（周六）0:00至4月16日（周日）24:00。',
      '二、升级内容：核心交换机固件升级、无线网络控制器更新、网络安全防护系统升级、统一认证系统优化。',
      '三、影响范围：升级期间校园有线和无线网络将出现间歇性中断，教务系统、一卡通系统、邮件系统等可能暂时无法访问。',
      '四、应急预案：信息中心已制定详细的应急预案，如升级过程中出现重大故障，将在2小时内回滚至原系统版本，确保周一正常上课。',
      '五、升级完成后，校园网络带宽将由10G提升至40G，无线网络覆盖范围将进一步扩大，网络安全防护能力显著增强。',
      '如有疑问，请联系信息中心服务台，电话：010-88886676'
    ]
  }
}

const allNoticeIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

const noticeDetail = computed(() => {
  const id = noticeId.value
  return noticeDetails[id] || {
    id,
    title: '通知内容不存在',
    date: '',
    department: '',
    content: ['该通知内容暂不可用，请返回通知列表查看其他通知。']
  }
})

const prevNotice = computed(() => {
  const currentIndex = allNoticeIds.indexOf(noticeId.value)
  if (currentIndex > 0) {
    const prevId = allNoticeIds[currentIndex - 1]
    return { id: prevId, title: noticeDetails[prevId]?.title || '' }
  }
  return null
})

const nextNotice = computed(() => {
  const currentIndex = allNoticeIds.indexOf(noticeId.value)
  if (currentIndex < allNoticeIds.length - 1) {
    const nextId = allNoticeIds[currentIndex + 1]
    return { id: nextId, title: noticeDetails[nextId]?.title || '' }
  }
  return null
})
</script>

<template>
  <div class="notice-detail">
    <div class="container">
      <div class="notice-detail-header">
        <router-link to="/notices" class="back-link">&#8249; 返回通知列表</router-link>
        <span class="notice-detail-dept">{{ noticeDetail.department }}</span>
      </div>

      <article class="notice-detail-article">
        <h1 class="notice-detail-title">{{ noticeDetail.title }}</h1>
        <div class="notice-detail-meta">
          <span>发布时间：{{ noticeDetail.date }}</span>
          <span>发布部门：{{ noticeDetail.department }}</span>
        </div>

        <div class="notice-detail-content">
          <p v-for="(paragraph, index) in noticeDetail.content" :key="index">{{ paragraph }}</p>
        </div>
      </article>

      <!-- Prev/Next Navigation -->
      <div class="notice-nav">
        <router-link v-if="prevNotice" :to="`/notices/${prevNotice.id}`" class="notice-nav-link notice-nav-prev">
          <span class="notice-nav-label">上一篇</span>
          <span class="notice-nav-title">{{ prevNotice.title }}</span>
        </router-link>
        <span v-else class="notice-nav-link notice-nav-prev notice-nav-disabled">上一篇：已是第一篇</span>

        <router-link v-if="nextNotice" :to="`/notices/${nextNotice.id}`" class="notice-nav-link notice-nav-next">
          <span class="notice-nav-label">下一篇</span>
          <span class="notice-nav-title">{{ nextNotice.title }}</span>
        </router-link>
        <span v-else class="notice-nav-link notice-nav-next notice-nav-disabled">下一篇：已是最后一篇</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.notice-detail {
  padding: var(--spacing-xl) 0;
}

.notice-detail-header {
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

.notice-detail-dept {
  display: inline-block;
  background-color: var(--color-primary);
  color: #fff;
  padding: 2px 8px;
  font-size: var(--font-size-xs);
  border-radius: 2px;
}

.notice-detail-article {
  max-width: 800px;
}

.notice-detail-title {
  font-size: var(--font-size-2xl);
  color: var(--color-text);
  line-height: 1.4;
  margin-bottom: var(--spacing-md);
}

.notice-detail-meta {
  display: flex;
  gap: var(--spacing-lg);
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
  margin-bottom: var(--spacing-xl);
  padding-bottom: var(--spacing-md);
  border-bottom: 1px solid var(--color-border);
}

.notice-detail-content {
  line-height: 1.8;
}

.notice-detail-content p {
  margin-bottom: var(--spacing-md);
}

/* Prev/Next Navigation */
.notice-nav {
  display: flex;
  justify-content: space-between;
  gap: var(--spacing-lg);
  margin-top: var(--spacing-2xl);
  padding-top: var(--spacing-lg);
  border-top: 1px solid var(--color-border);
  max-width: 800px;
}

.notice-nav-link {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
  max-width: 45%;
}

.notice-nav-label {
  font-size: var(--font-size-xs);
  color: var(--color-text-muted);
}

.notice-nav-title {
  font-size: var(--font-size-sm);
  color: var(--color-primary);
  line-height: 1.4;
}

.notice-nav-link:hover .notice-nav-title {
  color: var(--color-primary-light);
}

.notice-nav-disabled {
  color: var(--color-text-muted);
  cursor: default;
}

.notice-nav-disabled .notice-nav-label,
.notice-nav-disabled .notice-nav-title {
  color: var(--color-text-muted);
}

@media (max-width: 480px) {
  .notice-nav {
    flex-direction: column;
    gap: var(--spacing-md);
  }

  .notice-nav-link {
    max-width: 100%;
  }
}
</style>