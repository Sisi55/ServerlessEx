import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators';

@Module({
  namespaced: true,
})
class Counter2 extends VuexModule {
  public count: number = 0;

  @Mutation
  public increment(step: number) {
    this.count = this.count + step;
  }

  @Action({ commit: 'increment' })
  public inc(step: number) {
    // this.context.commit('increment', step);
    return step;
  }

  get doubleCount(): number {
    return this.count * 2;
  }
}

export default Counter2;
