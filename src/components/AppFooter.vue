<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container footer-inner">
      <div class="footer-main">
        <div class="footer-info">
          <div class="footer-logo">
            <span class="footer-logo-icon">君</span>
            <span class="footer-logo-name">君子大学</span>
          </div>
          <p class="footer-desc">
            君子大学创建于1952年，是一所具有深厚历史底蕴和优良学术传统的综合性大学，
            致力于培养高素质创新型人才，服务国家和社会发展。
          </p>
        </div>

        <div class="footer-links">
          <div class="footer-link-group">
            <h4 class="footer-link-title">快速导航</h4>
            <router-link to="/" class="footer-link">首页</router-link>
            <router-link to="/about" class="footer-link">学校概况</router-link>
            <router-link to="/departments" class="footer-link">院系介绍</router-link>
            <router-link to="/news" class="footer-link">新闻动态</router-link>
          </div>
          <div class="footer-link-group">
            <h4 class="footer-link-title">更多信息</h4>
            <router-link to="/notices" class="footer-link">通知公告</router-link>
            <router-link to="/contact" class="footer-link">联系方式</router-link>
          </div>
          <div class="footer-link-group">
            <h4 class="footer-link-title">联系方式</h4>
            <p class="footer-link">地址：北京市海淀区君子路1号</p>
            <p class="footer-link">电话：010-88886666</p>
            <p class="footer-link">邮箱：info@junzi.edu.cn</p>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p>Copyright &copy; {{ currentYear }} 君子大学 版权所有</p>
        <p>京ICP备12345678号-1</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--color-primary-dark);
  color: rgba(255, 255, 255, 0.85);
  padding: var(--spacing-2xl) 0 0;
  margin-top: auto;
}

.footer-inner {
  display: flex;
  flex-direction: column;
}

.footer-main {
  display: flex;
  gap: var(--spacing-2xl);
  padding-bottom: var(--spacing-xl);
}

.footer-info {
  flex: 1;
  min-width: 0;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-md);
}

.footer-logo-icon {
  width: 36px;
  height: 36px;
  background-color: var(--color-accent);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-lg);
  font-weight: 700;
  color: #fff;
}

.footer-logo-name {
  font-size: var(--font-size-xl);
  font-weight: 600;
  color: #fff;
  letter-spacing: 2px;
}

.footer-desc {
  font-size: var(--font-size-sm);
  line-height: 1.8;
  opacity: 0.7;
}

.footer-links {
  display: flex;
  gap: var(--spacing-2xl);
  flex: 2;
}

.footer-link-group {
  flex: 1;
}

.footer-link-title {
  font-size: var(--font-size-base);
  color: #fff;
  margin-bottom: var(--spacing-md);
  font-weight: 600;
}

.footer-link {
  display: block;
  color: rgba(255, 255, 255, 0.7);
  font-size: var(--font-size-sm);
  padding: var(--spacing-xs) 0;
  transition: var(--transition);
}

a.footer-link:hover {
  color: #fff;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: var(--spacing-md) 0;
  display: flex;
  justify-content: space-between;
  font-size: var(--font-size-xs);
  opacity: 0.6;
}

@media (max-width: 768px) {
  .footer-main {
    flex-direction: column;
    gap: var(--spacing-xl);
  }

  .footer-links {
    flex-direction: column;
    gap: var(--spacing-lg);
  }

  .footer-bottom {
    flex-direction: column;
    gap: var(--spacing-xs);
    text-align: center;
  }
}
</style>