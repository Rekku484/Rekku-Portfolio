import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import CreditsPage from '../views/CreditsPage.vue'
import CharacterPage from '../views/CharactersPage.vue'

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
      component: () => import('../views/WorksPage.vue')
    },
    {
      path: '/credits',
      name: 'credits',
      component: CreditsPage
    },

    {
      path: '/chars',
      name: 'chars',
      component: CharacterPage
    }
  ]
})

export default router
