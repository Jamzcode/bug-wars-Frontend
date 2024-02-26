import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import GameLobbyView from '@/views/GameLobbyView.vue'
import CreditsView from '@/views/CreditsView.vue'
import ScriptEditorView from '@/views/ScriptEditorView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: { transition: 'slide-left' }
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
        transition: 'slide-right'
      }
    },
    {
      path: '/lobby',
      name: 'lobby',
      component: GameLobbyView
    },
    {
      path: '/credits',
      name: 'credits',
      component: CreditsView
    },
    {
      path: '/script-editor',
      name: 'script-editor',
      component: ScriptEditorView
    }
  ]
})

export default router
