import '@/plugins/MomentPlugin';
import Vue from 'vue';
import VueApollo from 'vue-apollo';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import apolloClient from './utils/graphql';

Vue.config.productionTip = false;

Vue.use(VueApollo);

const apolloProvider = new VueApollo({
  defaultClient: apolloClient(),
});

new Vue({
  router,
  store,
  apolloProvider,
  render: (h) => h(App),
  mounted() {
    this.$store.commit('User/startLogin');
  },
}).$mount('#app');
