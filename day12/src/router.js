import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ke from './views/ke.vue'
import Info from './views/Info.vue'
import Youtube from './views/Youtube.vue'

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
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
      //代表一開始預載入(代碼304)，當真正進入該頁面，才會真正載入程式(代碼200)loading。
      //使用這招上面inport就不用引入了喔!!
    },
    {
      path: '/Ke',
      name: 'Ke',
      component: ke,
      children: [ 
        {
          path: 'info', //注意! 子路由不用再寫/了
          name: 'Ke-info',
          component: Info
        },
        {
          path: 'youtuber', //注意! 子路由不用再寫/了
          name: 'Ke-youtuber',
          component: Youtube
        }
      ]
    },
    {
      path: '/iron',
      redirect: '/iron/1'
    },
    {
      path: '/iron/:day',
      component: () => import(/* webpackChunkName: "iron" */'./views/Iron/index.vue')
    }
  ]
})
