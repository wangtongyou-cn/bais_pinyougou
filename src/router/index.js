import Vue from 'vue'
import Router from 'vue-router'
// import Login from '../components/login.vue'
// webpack -> @->src
import Login from '@/components/login.vue'
import Home from '@/components/home.vue'


Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: Home
  }, {
    name: 'login',
    path: '/login',
    component: Login
  }]
})

// 回车
