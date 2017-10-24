import Vue from 'vue'
import Router from 'vue-router'

// 引入页面
import Index from 'pages/index/index'
import Rank from 'pages/rank/rank'
import Search from 'pages/search/search'
import Singer from 'pages/singer/singer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      component: Index
    },
    {
      path: '/rank',
      component: Rank
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/singer',
      component: Singer
    }
  ]
})
