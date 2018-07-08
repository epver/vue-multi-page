import Vue from 'vue'
import Docs from './Docs.vue'
import router from './router'
import store from './store'
import '../../styles/common.less'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(Docs)
}).$mount('#app')
