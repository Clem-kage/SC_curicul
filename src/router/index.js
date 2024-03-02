import Vue from 'vue'
import VueRouter from 'vue-router'
import techno from '../views/techno-show.vue'
import formation from '@/views/formation-show.vue'
import experience from '@/views/experiences-show.vue'
import profil from '@/views/profil-show.vue'
import projets from '@/views/projets-show.vue'
import competences from '@/views/competences-show.vue'
import home from '@/components/cv-app.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/technologies',
    name: 'technologies',
    component: techno
  },
  {
    path: '/competences',
    name: 'competences',
    component: competences
  },
  {
    path: '/profil',
    name: 'profil',
    component: profil
  },
  {
    path: '/projets',
    name: 'projest',
    component: projets
  },
  {
    path: '/formation',
    name: 'formation',
    component: formation
  },
  {
    path: '/experience',
    name: 'experience',
    component: experience
  },
  {
    path: '/home',
    name: 'home',
    component: home
  },
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes 
})

export default router
