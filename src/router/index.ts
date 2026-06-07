import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/departments',
    name: 'Departments',
    component: () => import('../views/DepartmentsView.vue')
  },
  {
    path: '/departments/:id',
    name: 'DepartmentDetail',
    component: () => import('../views/DepartmentDetailView.vue')
  },
  {
    path: '/news',
    name: 'News',
    component: () => import('../views/NewsView.vue')
  },
  {
    path: '/news/:id',
    name: 'NewsDetail',
    component: () => import('../views/NewsDetailView.vue')
  },
  {
    path: '/notices',
    name: 'Notices',
    component: () => import('../views/NoticesView.vue')
  },
  {
    path: '/notices/:id',
    name: 'NoticeDetail',
    component: () => import('../views/NoticeDetailView.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/ContactView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
