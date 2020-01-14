import Vue from 'vue'
import ApexCharts from 'vue-apexcharts'
import Fragment from 'vue-fragment'

import App from './App.vue'

import router from './router'

Vue.config.productionTip = false
Vue.use(Fragment.Plugin)
Vue.component('apex-charts', ApexCharts)

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
