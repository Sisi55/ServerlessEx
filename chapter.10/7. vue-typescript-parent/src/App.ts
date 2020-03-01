import Vue from 'vue';
import Component from 'vue-class-component';
import WithRender from './App.html';
import CallEmit from '@/components/CallEmit.vue';
import CallMethod from '@/components/CallMethod.vue';
import CallParent from '@/components/CallParent.vue';

@WithRender
@Component({
  components: {
    CallEmit,
    CallMethod,
    CallParent,
  },
})
export default class App extends Vue {
  public name: string = 'no call';

  public callMe(value: string): void {
    this.name = value;
  }
}
