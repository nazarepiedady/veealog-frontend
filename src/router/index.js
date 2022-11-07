import Vue from 'vue'
import VueRouter from 'vue-router'
//import HomeView from '../views/HomeView.vue'
import Post from '@/components/Post.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/post/:slug', component: Post }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
