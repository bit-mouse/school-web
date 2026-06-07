<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const mobileMenuOpen = ref(false)

const navItems = [
  { path: '/', label: '首页' },
  { path: '/about', label: '学校概况' },
  { path: '/departments', label: '院系介绍' },
  { path: '/news', label: '新闻动态' },
  { path: '/notices', label: '通知公告' },
  { path: '/contact', label: '联系方式' }
]

function navigate(path: string) {
  router.push(path)
  mobileMenuOpen.value = false
}

function toggleMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>

<template>
  <header class="header">
    <div class="container header-inner">
      <div class="logo" @click="navigate('/')">
        <span class="logo-icon">华</span>
        <div class="logo-text">
          <span class="logo-name">君子大学</span>
          <span class="logo-en">Huawen University</span>
        </div>
      </div>

      <nav class="nav-desktop">
        <router-link
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="nav-link"
          active-class="nav-link--active"
        >
          {{ item.label }}
        </router-link>
      </nav>

      <button class="menu-toggle" @click="toggleMenu" :class="{ 'menu-toggle--open': mobileMenuOpen }">
        <span class="menu-bar"></span>
        <span class="menu-bar"></span>
        <span class="menu-bar"></span>
      </button>
    </div>

    <transition name="slide">
      <nav v-if="mobileMenuOpen" class="nav-mobile">
        <router-link
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="nav-mobile-link"
          active-class="nav-mobile-link--active"
          @click="mobileMenuOpen = false"
        >
          {{ item.label }}
        </router-link>
      </nav>
    </transition>
  </header>
</template>

<style scoped>
.header {
  background-color: var(--color-primary);
  color: #fff;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: var(--shadow-md);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--header-height);
}

.logo {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  cursor: pointer;
  flex-shrink: 0;
}

.logo-icon {
  width: 40px;
  height: 40px;
  background-color: var(--color-accent);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-xl);
  font-weight: 700;
  color: #fff;
}

.logo-text {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
}

.logo-name {
  font-size: var(--font-size-lg);
  font-weight: 600;
  letter-spacing: 2px;
}

.logo-en {
  font-size: var(--font-size-xs);
  opacity: 0.8;
  letter-spacing: 0.5px;
}

.nav-desktop {
  display: flex;
  gap: var(--spacing-xs);
}

.nav-link {
  color: rgba(255, 255, 255, 0.85);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--border-radius);
  font-size: var(--font-size-sm);
  transition: var(--transition);
  white-space: nowrap;
}

.nav-link:hover {
  color: #fff;
  background-color: rgba(255, 255, 255, 0.1);
}

.nav-link--active {
  color: #fff;
  background-color: rgba(255, 255, 255, 0.15);
}

.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 32px;
  height: 32px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.menu-bar {
  width: 100%;
  height: 2px;
  background-color: #fff;
  border-radius: 1px;
  transition: var(--transition);
}

.menu-toggle--open .menu-bar:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.menu-toggle--open .menu-bar:nth-child(2) {
  opacity: 0;
}

.menu-toggle--open .menu-bar:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

.nav-mobile {
  display: none;
  flex-direction: column;
  background-color: var(--color-primary-dark);
  padding: var(--spacing-sm) 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.nav-mobile-link {
  color: rgba(255, 255, 255, 0.85);
  padding: var(--spacing-md) var(--spacing-lg);
  font-size: var(--font-size-base);
  transition: var(--transition);
}

.nav-mobile-link:hover {
  color: #fff;
  background-color: rgba(255, 255, 255, 0.08);
}

.nav-mobile-link--active {
  color: #fff;
  background-color: rgba(255, 255, 255, 0.12);
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

@media (max-width: 768px) {
  .nav-desktop {
    display: none;
  }

  .menu-toggle {
    display: flex;
  }

  .nav-mobile {
    display: flex;
  }

  .logo-en {
    display: none;
  }
}
</style>
