import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import style from './assets/style.css'
import menu from './assets/menu.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  style,
  menu,
  render: h => h(App),
}).$mount('#app')
