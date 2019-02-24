import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import echarts from 'echarts'
import axios from 'axios'
import qs from 'qs'

// 扩展的方法
// 引入echarts
Vue.prototype.$echarts = echarts // this.$echarts即可调用echarts的方法
// 引入axios
Vue.prototype.$axios = axios  // this.$axios即可调用axios的方法
// 引入axios
Vue.prototype.$qs = qs  // this.$qs即可调用qs的方法 为了解决post默认使用的是x-www-from-urlencoded 去请求数据，导致请求参数无法传递到后台

// axios:默认url配置 
// axios.defaults.baseURL = "http://www.datongbaoxian.com"

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
