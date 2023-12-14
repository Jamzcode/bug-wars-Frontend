import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/',
      name: 'Home',
      component: HomeView,
      meta: {
        requiresAuth: true //Will set to false for now, but can set to true later on once login is implemented
      }
    }
  ]
})

export default router
