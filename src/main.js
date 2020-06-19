import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Import additional plugins
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Install additional plugins
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
