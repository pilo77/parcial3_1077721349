import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import ClientePage from '../views/ClientePage.vue'
import LoginPage from '../views/LoginPage.vue'
import DasboardPage from '../views/DasboardPage.vue'
import ProductoPage from '@/views/ProductoPage.vue';
import CategoriaPage from '@/views/CategoriaPage.vue';
import CarroPage from '@/views/CarroPage.vue';



const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/categoria',
    name: 'Categoria',
    component: CategoriaPage
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },{
    path: '/cliente',
    name: 'Cliente',
    component: ClientePage
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DasboardPage
  },
  {
    path: '/producto',
    name: 'Producto',
    component: ProductoPage
  },
  {
    path: '/carro',
    name: 'Carro',
    component: CarroPage
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
