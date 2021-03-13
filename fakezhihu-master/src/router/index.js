import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import SignUp from '../views/SignUp.vue'
import ListItem from '../components/ListItem.vue'
import Editor from '../views/Editor.vue'

Vue.use(VueRouter)

const routes = [
  {
    name:'home',
    path: '/',
    component: Home,
    children:[{
      name:'home',
      path:'',
      component:Main,
      children:[{
        path:'',
        name:'home',
        component:ListItem
      }]
    }]
  },
  {
    name:'signup',
    path:'/signup',
    component:SignUp
  },
  {
    path:'/editor/:articleId',
    name:'editor',
    component: Editor,
  }
]

const router = new VueRouter({
  // mode: 'history',
  routes
})

export default router
