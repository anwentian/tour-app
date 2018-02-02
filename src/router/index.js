import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Dest from '@/components/dest'
import User from '@/components/User'
import Products from '@/components/products'
import ProductsList from '@/components/productsList'
import Detail from '@/components/detail'
import VisaDetail from '@/components/visa/VisaDetail'
import VisaDest from '@/components/visa/VisaDest'
import VisaList from '@/components/visa/VisaList'
Vue.use(Router)
const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/dest',
    name: 'Dest',
    component: Dest
  },
  {
    path: '/user',
    name: 'User',
    component: User
  },
  {
    path: '/productions/:id',
    name: 'Products',
    component: Products
  },
  {
    path: '/products_lists',
    name: 'ProductsList',
    component: ProductsList
  },
  {
    path: '/detail/:productId',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/visa/visadetail/:visaId',
    name: 'VisaDetail',
    component: VisaDetail
  },
  {
    path: '/visa/visadest',
    name: 'VisaDest',
    component: VisaDest
  },
  {
    path: '/visa/visaList',
    name: 'VisaList',
    component: VisaList
  },
  {
    path: '/',
    redirect: '/home'
  }
]

export default new Router({
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
