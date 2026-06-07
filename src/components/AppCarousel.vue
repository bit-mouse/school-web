<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Slide {
  id: number
  title: string
  subtitle: string
  color: string
}

const slides: Slide[] = [
  { id: 1, title: '博学笃行 厚德载物', subtitle: '君子大学2026年招生工作进行中', color: '#1a3a5c' },
  { id: 2, title: '科技创新 引领未来', subtitle: '我校科研团队取得重大突破', color: '#2a5a3c' },
  { id: 3, title: '国际交流 开放办学', subtitle: '与世界一流大学深度合作', color: '#5a2a3c' },
  { id: 4, title: '立德树人 追求卓越', subtitle: '培养高素质创新型人才', color: '#3c2a5a' }
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
          <div class="carousel-content container">
            <h2 class="carousel-title">{{ slides[currentIndex].title }}</h2>
            <p class="carousel-subtitle">{{ slides[currentIndex].subtitle }}</p>
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

.carousel-content {
  color: #fff;
  text-align: center;
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
}

@media (max-width: 480px) {
  .carousel-slides {
    height: 200px;
  }

  .carousel-title {
    font-size: var(--font-size-xl);
  }
}
</style>
