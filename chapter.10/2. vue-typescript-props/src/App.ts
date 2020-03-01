import Vue from 'vue';
import Component from 'vue-class-component';
import WithRender from './App.html';
import './App.scss';
import Props1 from '@/components/Props1.vue';
import Props2 from '@/components/Props2.vue';

@WithRender
@Component({
  components: {
    Props1,
    Props2,
  },
})
export default class App extends Vue {
  public callCount: number = 0;
  public message: string = '참 좋아요';
  public callMe(message: string) {
    console.log(message);
  }
}
