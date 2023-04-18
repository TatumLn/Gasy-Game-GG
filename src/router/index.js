import { createRouter, createWebHistory } from 'vue-router'
import MenuDeDemarrage from '../components/Menu.vue'
import BoardPage from '../components/Board.vue'
import FepetraPage from '../components/Fepetra.vue'

const routes = [
  {
    path: '/',
    name: 'Menu',
    component: MenuDeDemarrage
  },
  {
    path: '/Board',
    name: 'Board',
    component: BoardPage
  },
  {
    path: '/Fepetra',
    name: 'Fepetra',
    component: FepetraPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
