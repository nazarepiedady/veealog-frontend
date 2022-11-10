import Vue from 'vue'
import VueRouter from 'vue-router'

import Post from '@/components/Post'
import Author from '@/components/Author'
import Posts from '@/components/views/Posts'
import PostsByTag from '@/components/PostsByTag'

Vue.use(VueRouter)

const routes = [
  { path: '/author/:username', component: Author },
  { path: '/post/:slug', component: Post },
  { path: '/tag/:tag', component: PostsByTag },
  { path: '/', component: Posts },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
