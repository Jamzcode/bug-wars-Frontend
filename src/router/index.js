import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import GameLobbyView from '@/views/GameLobbyView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/lobby',
      name: 'lobby',
      component: GameLobbyView,
    }
  ]
})

export default router
