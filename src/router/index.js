import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import NewPackage from '@/views/NewPackage'
import PackageList from '@/views/PackageList'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    component: Home,
    redirect: '/newPackage',
    children: [
      {
        path: '/newPackage',
        component: NewPackage
      },
      {
        path: '/packageList',
        component: PackageList
      }
    ]
  }]
})
