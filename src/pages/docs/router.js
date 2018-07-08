import Vue from 'vue'
import Router from 'vue-router'
import Home from './conponents/Home/Index.vue'
import About from './conponents/About/Index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
