import Vue from 'vue'
import VueRouter from 'vue-router'

const Article = () => import('../views/article.vue')
const Layout = () => import('../views/layout.vue')

Vue.use(VueRouter)

const routes = [{
    path: "/",
    redirect: '/article',
    component: Layout,
    children: [{
        path: '/article',
        component: Article,
      },

    ],
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router