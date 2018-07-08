import Vue from 'vue'
import Login from './Login.vue'
import '../../styles/common.less'
Vue.config.productionTip = false

new Vue({
  render: h => h(Login)
}).$mount('#app')
