import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import PageNotFound from './pages/PageNotFound'
import UserProfile from './pages/UserProfile'
import Chart from './pages/Chart'
import User from './pages/User'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
    { path: '/user', component: User },
    { path: '/user/:id', component: UserProfile },
    { path: '/chart', component: Chart },
    { path: '*', component: PageNotFound }
]

const router = new VueRouter({
    routes: routes,
    mode: 'history'
})

export default router