import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import DfUI from './plugins/df-ui'
import '@df_scope/df-ui/lib/theme-chalk/index.css'
import '@df_scope/df-ui/lib/theme-chalk/classes.css'

Vue.use(DfUI)

import DfBUI from './plugins/df-bui'
import '@df_scope/df-bui/lib/theme-chalk/index.css'

Vue.use(DfBUI)

new Vue({
  render: h => h(App),
}).$mount('#app')
