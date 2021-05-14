import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import DfUI from './plugins/dfConponents'
import '@df_scope/df-ui/lib/theme-chalk/index.css'

Vue.use(DfUI)

new Vue({
  render: h => h(App),
}).$mount('#app')
