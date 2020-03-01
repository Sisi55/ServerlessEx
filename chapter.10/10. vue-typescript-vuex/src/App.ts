import Vue from 'vue';
import Component from 'vue-class-component';
import WithRender from './App.html';
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
import './App.scss';

@WithRender
@Component({
  computed: {
    ...mapState({
      count: (state: any) => state.Counter1.count,
    }),
    ...mapGetters({
      doubleCount: 'Counter1/doubleCount',
    }),
  },
  methods: {
    ...mapMutations({
      increment: 'Counter1/increment',
    }),
    ...mapActions({
      inc: 'Counter1/inc',
    }),
  },
})
export default class App extends Vue {}
