import Vue from 'vue'
import App from './App'
import uview from 'uview-ui'

Vue.use(uview)
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
