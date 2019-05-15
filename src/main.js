import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize'
Vue.config.productionTip = false

Vue.prototype.$http = axios;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
