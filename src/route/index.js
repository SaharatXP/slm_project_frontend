import Vue from 'vue'
import VueRouter from 'vue-router'
import loginPage from '../views/LoginPage.vue'
import HomePage from '../views/HomePage.vue'
// import navbar from '../components/navbar.vue'

Vue.use(VueRouter)

const routes= [
    {
        path: '/login', 
        name: 'LoginPage',
        component : loginPage
    }, 
    {
        path: '/home', 
        name: 'HomePage',
        component : HomePage
    }, 


]
const router = new VueRouter({
    routes,
    base: process.env.BASE_URL,
    mode: 'history'
})

export default router