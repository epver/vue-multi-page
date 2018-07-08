import Vue from 'vue'
import Dashboard from './Dashboard.vue'
import {MuHeader, MuFooter} from '../../components'
import '../../styles/common.less'

Vue.component('mu-header', MuHeader)
Vue.component('mu-footer', MuFooter)
Vue.config.productionTip = false

new Vue({
  render: h => h(Dashboard)
}).$mount('#app')
