import Vue from 'vue';
import Vuex, { Module } from 'vuex';

import Counter1 from './store/Counter1';
import Counter2 from '@/store/Counter2';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  modules: {
    Counter1,
    Counter2,
  },
});

export default store;
