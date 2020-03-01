import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

import '@/plugins/AxiosPlugin';
import '@/plugins/MomentPlugin';
import '@/plugins/LodashPlugin';

new Vue({
  render: (h) => h(App),
}).$mount('#app');
