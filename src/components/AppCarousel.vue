<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Slide {
  id: number
  title: string
  subtitle: string
  color: string
  accent: string
}

const slides: Slide[] = [
  { id: 1, title: '博学笃行 厚德载物', subtitle: '君子大学2026年招生工作进行中', color: '#1a3a5c', accent: '#2a5a8c' },
  { id: 2, title: '科技创新 引领未来', subtitle: '我校科研团队取得重大突破', color: '#2a5a3c', accent: '#4a8a5c' },
  { id: 3, title: '国际交流 开放办学', subtitle: '与世界一流大学深度合作', color: '#5a2a3c', accent: '#8a4a6c' },
  { id: 4, title: '立德树人 追求卓越', subtitle: '培养高素质创新型人才', color: '#3c2a5a', accent: '#6b4a8b' }
]

const currentIndex = ref(0)
let timer: ReturnType<typeof setInterval> | null = null

function next() {
  currentIndex.value = (currentIndex.value + 1) % slides.length
}

function prev() {
  currentIndex.value = (currentIndex.value - 1 + slides.length) % slides.length
}

function goTo(index: number) {
  currentIndex.value = index
}

function startAutoPlay() {
  timer = setInterval(next, 4000)
}

function stopAutoPlay() {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
}

onMounted(() => {
  startAutoPlay()
})

onUnmounted(() => {
  stopAutoPlay()
})
</script>

<template>
  <div
    class="carousel"
    @mouseenter="stopAutoPlay"
    @mouseleave="startAutoPlay"
  >
    <div class="carousel-slides">
      <transition name="fade" mode="out-in">
        <div
          :key="currentIndex"
          class="carousel-slide"
          :style="{ backgroundColor: slides[currentIndex].color }"
        >
          <!-- Decorative elements -->
          <div class="carousel-deco-circle carousel-deco-circle--1"></div>
          <div class="carousel-deco-circle carousel-deco-circle--2"></div>
          <div class="carousel-deco-line carousel-deco-line--1"></div>
          <div class="carousel-deco-line carousel-deco-line--2"></div>

          <div class="carousel-content container">
            <h2 class="carousel-title">{{ slides[currentIndex].title }}</h2>
            <p class="carousel-subtitle">{{ slides[currentIndex].subtitle }}</p>
            <span class="carousel-accent-line" :style="{ backgroundColor: slides[currentIndex].accent }"></span>
          </div>
        </div>
      </transition>
    </div>

    <button class="carousel-btn carousel-btn--prev" @click="prev">
      <span>&#8249;</span>
    </button>
    <button class="carousel-btn carousel-btn--next" @click="next">
      <span>&#8250;</span>
    </button>

    <div class="carousel-dots">
      <button
        v-for="(slide, index) in slides"
        :key="slide.id"
        class="carousel-dot"
        :class="{ 'carousel-dot--active': currentIndex === index }"
        @click="goTo(index)"
      ></button>
    </div>
  </div>
</template>

<style scoped>
.carousel {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.carousel-slides {
  position: relative;
  height: 400px;
}

.carousel-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}

/* Decorative shapes */
.carousel-deco-circle {
  position: absolute;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.08);
}

.carousel-deco-circle--1 {
  width: 300px;
  height: 300px;
  top: -80px;
  right: -60px;
}

.carousel-deco-circle--2 {
  width: 200px;
  height: 200px;
  bottom: -50px;
  left: 5%;
  border-width: 1px;
}

.carousel-deco-line {
  position: absolute;
  height: 1px;
  background: rgba(255, 255, 255, 0.06);
}

.carousel-deco-line--1 {
  width: 60%;
  top: 30%;
  right: -10%;
  transform: rotate(-15deg);
}

.carousel-deco-line--2 {
  width: 40%;
  bottom: 25%;
  left: -5%;
  transform: rotate(8deg);
}

.carousel-content {
  color: #fff;
  text-align: center;
  position: relative;
  z-index: 2;
}

.carousel-title {
  font-size: var(--font-size-4xl);
  font-weight: 700;
  letter-spacing: 4px;
  margin-bottom: var(--spacing-md);
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.carousel-subtitle {
  font-size: var(--font-size-xl);
  opacity: 0.9;
  letter-spacing: 1px;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  margin-bottom: var(--spacing-md);
}

.carousel-accent-line {
  display: inline-block;
  width: 60px;
  height: 3px;
  border-radius: 2px;
}

.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.3);
  color: #fff;
  border: none;
  width: 44px;
  height: 44px;
  font-size: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);
  border-radius: 50%;
  z-index: 2;
}

.carousel-btn:hover {
  background-color: rgba(0, 0, 0, 0.5);
}

.carousel-btn--prev {
  left: var(--spacing-md);
}

.carousel-btn--next {
  right: var(--spacing-md);
}

.carousel-dots {
  position: absolute;
  bottom: var(--spacing-md);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: var(--spacing-sm);
  z-index: 2;
}

.carousel-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
  cursor: pointer;
  transition: var(--transition);
  padding: 0;
}

.carousel-dot--active {
  background-color: #fff;
  transform: scale(1.2);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .carousel-slides {
    height: 240px;
  }

  .carousel-title {
    font-size: var(--font-size-2xl);
    letter-spacing: 2px;
  }

  .carousel-subtitle {
    font-size: var(--font-size-sm);
  }

  .carousel-btn {
    width: 36px;
    height: 36px;
    font-size: 18px;
  }

  .carousel-deco-circle--1 {
    width: 180px;
    height: 180px;
  }

  .carousel-deco-circle--2 {
    width: 120px;
    height: 120px;
  }
}

@media (max-width: 480px) {
  .carousel-slides {
    height: 200px;
  }

  .carousel-title {
    font-size: var(--font-size-xl);
  }

  .carousel-deco-circle--1 {
    width: 120px;
    height: 120px;
    top: -40px;
    right: -30px;
  }

  .carousel-deco-circle--2 {
    width: 80px;
    height: 80px;
  }
}
</style>