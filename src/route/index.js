import Vue from 'vue'
import VueRouter from 'vue-router'
import loginPage from '../views/LoginPage'
import HomePage from '../views/HomePage'
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
    // {
    //     path: '/nav', 
    //     name: 'navbar',
    //     component : navbar
    // }, 
    

]
const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router