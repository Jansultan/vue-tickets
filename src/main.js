import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VModal from "vue-js-modal";
import router from './router/index'
import store from './store/index'

// Vue.config.productionTip = false
import '../src/assets/styles/font/stylesheet.css'

Vue.use(VueRouter)
Vue.use(VModal)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
