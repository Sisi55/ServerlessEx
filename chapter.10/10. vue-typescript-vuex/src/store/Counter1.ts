import {
  Module,
  GetterTree,
  MutationTree,
  ActionTree,
  ActionContext,
} from 'vuex';

export class Counter {
  public count: number = 0;
}

const getters: GetterTree<Counter, any> = {
  doubleCount(state: Counter): number {
    return state.count * 2;
  },
};

const mutations: MutationTree<Counter> = {
  increment(state: Counter, step: number) {
    state.count = state.count + step;
  },
};

const actions: ActionTree<Counter, any> = {
  inc(state: ActionContext<Counter, any>, step: number) {
    state.commit('increment', step);
  },
};

const Counter1: Module<Counter, any> = {
  namespaced: true,
  state: new Counter(),
  getters,
  mutations,
  actions,
};

export default Counter1;
