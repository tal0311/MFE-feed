import { createRouter, createWebHistory } from 'vue-router'
import PostIndex from '../views/PostIndex.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PostIndex
    },
    {
      path: '/new-post',
      name: 'add',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AddPostView.vue')
    }
  ]
})

export default router
