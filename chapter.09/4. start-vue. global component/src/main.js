import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import Item from "./components/Item.vue"
Vue.component("Item", Item)

new Vue({
  render: h => h(App),
}).$mount('#app')
