import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/create',
      name: 'create',
      component: () => import('../views/CreateViews.vue')
    },
    {
      path: '/update/:id',
      name: 'update',
      component: () => import('../views/UpdateViews.vue')
    }
  ]
})

export default router
