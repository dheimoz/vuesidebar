import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import style from './assets/style.css'
import main from './assets/main.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  style,
  main,
  render: h => h(App),
}).$mount('#app')
