import Vue from 'vue'
import VueRouter from 'vue-router'
import Cart from '../views/cart/Cart.vue'

const Profile = () => import('../views/profile/Profile.vue')
const Home = () => import('../views/home/Home.vue')
const Category = () => import('../views/category/Category.vue')

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
