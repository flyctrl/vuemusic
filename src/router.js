import Vue from 'vue'
import Router from 'vue-router'
import SingerDetail from './components/singer-detail/singer-detail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/rank',
      name: 'Rank',
      component: () => import(/* webpackChunkName: "rank" */ './components/rank/rank')
    },
    {
      path: '/recommend',
      name: 'Recommend',
      component: () => import(/* webpackChunkName: "recommend" */ './components/recommend/recommend')
    },
    {
      path: '/search',
      name: 'Search',
      component: () => import(/* webpackChunkName: "search" */ './components/search/search')
    },
    {
      path: '/singer',
      name: 'Singer',
      component: () => import(/* webpackChunkName: "singer" */ './components/singer/singer'),
      children: [
        {
          path: ':id',
          component: SingerDetail
        }
      ]
    }
  ]
})
