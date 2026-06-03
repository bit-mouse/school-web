<script setup lang="ts">
const contactInfo = [
  { label: '学校地址', value: '北京市海淀区华文路1号 邮编：100080', icon: '地' },
  { label: '联系电话', value: '010-88886666（总机）', icon: '电' },
  { label: '传真号码', value: '010-88886667', icon: '传' },
  { label: '电子邮箱', value: 'info@huawen.edu.cn', icon: '邮' },
  { label: '招生咨询', value: '010-88886668（招生办）', icon: '招' },
  { label: '官方网站', value: 'www.huawen.edu.cn', icon: '网' }
]

const offices = [
  { name: '校办公室', phone: '010-88886601', location: '行政楼201室' },
  { name: '教务处', phone: '010-88886602', location: '行政楼301室' },
  { name: '科研处', phone: '010-88886603', location: '行政楼401室' },
  { name: '学生处', phone: '010-88886604', location: '行政楼501室' },
  { name: '人事处', phone: '010-88886605', location: '行政楼601室' },
  { name: '财务处', phone: '010-88886606', location: '行政楼701室' },
  { name: '国际交流处', phone: '010-88886607', location: '行政楼801室' },
  { name: '保卫处', phone: '010-88886608', location: '保卫楼101室' },
  { name: '后勤处', phone: '010-88886609', location: '后勤楼101室' },
  { name: '图书馆', phone: '010-88886610', location: '图书馆一楼服务台' }
]
</script>

<template>
  <div class="contact">
    <!-- Banner -->
    <section class="contact-banner">
      <div class="container">
        <h1 class="contact-banner-title">联系方式</h1>
        <p class="contact-banner-subtitle">欢迎与我们取得联系</p>
      </div>
    </section>

    <!-- Contact Info -->
    <section class="contact-section">
      <div class="container">
        <div class="contact-grid">
          <!-- Info Cards -->
          <div class="contact-info-section">
            <h2 class="section-title">基本信息</h2>
            <div class="contact-info-list">
              <div v-for="item in contactInfo" :key="item.label" class="contact-info-item">
                <span class="contact-info-icon">{{ item.icon }}</span>
                <div class="contact-info-content">
                  <span class="contact-info-label">{{ item.label }}</span>
                  <span class="contact-info-value">{{ item.value }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Map Placeholder -->
          <div class="contact-map-section">
            <h2 class="section-title">校园位置</h2>
            <div class="contact-map-placeholder">
              <div class="map-placeholder-content">
                <span class="map-placeholder-icon">&#9679;</span>
                <span class="map-placeholder-text">北京市海淀区华文路1号</span>
                <span class="map-placeholder-note">地图区域（示例展示）</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Office Directory -->
    <section class="contact-section contact-section--alt">
      <div class="container">
        <h2 class="section-title">各部门联系方式</h2>
        <div class="offices-grid">
          <div v-for="office in offices" :key="office.name" class="office-card card">
            <h3 class="office-name">{{ office.name }}</h3>
            <p class="office-phone">{{ office.phone }}</p>
            <p class="office-location">{{ office.location }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Feedback -->
    <section class="contact-section">
      <div class="container">
        <h2 class="section-title">意见反馈</h2>
        <div class="feedback-card card">
          <p class="feedback-intro">
            如您对学校有任何建议或意见，可通过以下方式联系我们：
          </p>
          <div class="feedback-channels">
            <div class="feedback-channel">
              <span class="feedback-channel-label">意见邮箱</span>
              <span class="feedback-channel-value">feedback@huawen.edu.cn</span>
            </div>
            <div class="feedback-channel">
              <span class="feedback-channel-label">信访电话</span>
              <span class="feedback-channel-value">010-88886611</span>
            </div>
            <div class="feedback-channel">
              <span class="feedback-channel-label">信访地址</span>
              <span class="feedback-channel-value">行政楼一楼信访接待室</span>
            </div>
          </div>
          <p class="feedback-note">
            注：本网站为纯静态展示型网站，不提供在线提交功能。请通过上述邮箱或电话提交您的意见。
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.contact-banner {
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-light));
  padding: var(--spacing-3xl) 0;
  text-align: center;
  color: #fff;
}

.contact-banner-title {
  font-size: var(--font-size-4xl);
  font-weight: 700;
  margin-bottom: var(--spacing-sm);
}

.contact-banner-subtitle {
  font-size: var(--font-size-lg);
  opacity: 0.8;
}

.contact-section {
  padding: var(--spacing-2xl) 0;
}

.contact-section--alt {
  background-color: var(--color-bg-light);
}

.contact-grid {
  display: flex;
  gap: var(--spacing-2xl);
}

.contact-info-section {
  flex: 1;
}

.contact-info-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.contact-info-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-md);
  background-color: var(--color-bg-light);
  border-radius: var(--border-radius);
}

.contact-info-icon {
  width: 40px;
  height: 40px;
  background-color: var(--color-primary);
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-sm);
  font-weight: 700;
  flex-shrink: 0;
}

.contact-info-content {
  flex: 1;
}

.contact-info-label {
  font-size: var(--font-size-xs);
  color: var(--color-text-muted);
  display: block;
}

.contact-info-value {
  font-size: var(--font-size-base);
  color: var(--color-text);
  font-weight: 500;
}

.contact-map-section {
  flex: 1;
}

.contact-map-placeholder {
  height: 300px;
  background-color: var(--color-bg-light);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  display: flex;
  align-items: center;
  justify-content: center;
}

.map-placeholder-content {
  text-align: center;
  color: var(--color-text-muted);
}

.map-placeholder-icon {
  font-size: 24px;
  color: var(--color-primary);
  display: block;
  margin-bottom: var(--spacing-sm);
}

.map-placeholder-text {
  font-size: var(--font-size-lg);
  color: var(--color-text);
  display: block;
  margin-bottom: var(--spacing-xs);
}

.map-placeholder-note {
  font-size: var(--font-size-xs);
  display: block;
}

/* Offices */
.offices-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-md);
}

.office-card {
  padding: var(--spacing-md);
}

.office-name {
  font-size: var(--font-size-base);
  color: var(--color-primary);
  margin-bottom: var(--spacing-sm);
}

.office-phone {
  font-size: var(--font-size-sm);
  color: var(--color-text);
  margin-bottom: var(--spacing-xs);
}

.office-location {
  font-size: var(--font-size-xs);
  color: var(--color-text-muted);
}

/* Feedback */
.feedback-card {
  max-width: 600px;
}

.feedback-intro {
  margin-bottom: var(--spacing-lg);
  line-height: 1.6;
}

.feedback-channels {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-lg);
}

.feedback-channel {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
}

.feedback-channel-label {
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
  min-width: 80px;
}

.feedback-channel-value {
  font-size: var(--font-size-base);
  color: var(--color-text);
  font-weight: 500;
}

.feedback-note {
  font-size: var(--font-size-xs);
  color: var(--color-text-muted);
  background-color: var(--color-bg-light);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--border-radius);
}

@media (max-width: 768px) {
  .contact-grid {
    flex-direction: column;
  }

  .offices-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .offices-grid {
    grid-template-columns: 1fr;
  }
}
</style>