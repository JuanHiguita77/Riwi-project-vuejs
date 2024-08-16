import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import ProfileView from '@/views/ProfileView.vue'
import TeamView from '@/views/TeamView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: to => { return { name: 'Profile' }},
  },
  {
    path: '/profile',
    name: 'Profile',
    component: ProfileView,
  },
  {
    path: '/team',
    name: 'Team',
    component: TeamView,
  },
  /*{
    path: '/projects',
    name: 'Projects',
    component: Projects,
  },
  {
    path: '/connections',
    name: 'Connections',
    component: Connections,
  },*/
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
