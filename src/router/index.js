import { createRouter, createWebHistory } from 'vue-router'
<<<<<<< HEAD
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import UsersView from '@/views/UsersView.vue'
=======
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
>>>>>>> dev

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
<<<<<<< HEAD
      component: LoginView
=======
      component: LoginView,
      meta: {
        requiresAuth: false
      }
>>>>>>> dev
    },
    {
      path: '/',
      name: 'Home',
<<<<<<< HEAD
      component: HomeView
    },
    {
      path: '/users',
      name: 'users',
      component: UsersView
=======
      component: HomeView,
      meta: {
        requiresAuth: true //Will set to false for now, but can set to true later on once login is implemented
      }
>>>>>>> dev
    }
  ]
})

export default router
