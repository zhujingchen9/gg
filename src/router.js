import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './view/login'

Vue.use(VueRouter)

const routers = [{
  path: '/',
  component: Login
}, {
  path: '/login',
  component: Login
}]

export const router = new VueRouter({
  routes: routers,
  hashbang: true
})
