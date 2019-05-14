import Vue from 'vue'
import Router from 'vue-router'
import About from './views/About.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'About',
      component: About
    },
    // {
    //   path: '/userInfo',
    //   redirect: '/userInfo/1/all',
    // },
    // {
    //   path: '/userInfo/:id/:name',
    //   name: 'userInfo',
    //   component: () => import('./views/UserInfo.vue')
    // }
  ]
})
