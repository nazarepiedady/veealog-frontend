import Vue from 'vue'
import VueRouter from 'vue-router'

import Post from '@/components/views/Post'
import Author from '@/components/Author'
import Posts from '@/components/views/Posts'
import PostsByTag from '@/components/PostsByTag'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Posts },
  { path: '/post/:slug', component: Post },
  { path: '/tag/:tag', component: PostsByTag },
  { path: '/author/:username', component: Author },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
