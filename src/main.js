import Vue from 'vue'
import App from './App.vue'
import router from '../src/route'
import './axios.js'
import VueSession from "vue-session";
import "bootstrap/dist/css/bootstrap.min.css"

// import loginPage from './loginPage.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(VueSession);


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


