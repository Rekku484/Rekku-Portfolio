import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/WorksPage.vue'
import WorkPage from '../views/WorksPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/works',
      name: 'works',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: WorkPage
    }
  ]
})

export default router
