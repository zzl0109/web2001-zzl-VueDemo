import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Merchant from '../views/Merchant.vue'
import Activity from '../components/Activity.vue'
import Subject from '../components/Subject.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
  	path:'/subject',
  	name:'Subject',
  	component: Subject,
  },
  {
  	path:'/activity',
  	name:'Activity',
  	component: Activity,
  },
  {
    path: '/merchant',
    name: 'Merchant',
    component: Merchant
  },
  {
    path: '/help',
    name: 'Help',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Help.vue')
  }
]


const router = new VueRouter({
  routes
})

export default router
