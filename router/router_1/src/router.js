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
    //   path: '/about/:id/:name',
    //   name: 'About',
    //   component: () => import('./views/About.vue')
    // }
  ]
})
