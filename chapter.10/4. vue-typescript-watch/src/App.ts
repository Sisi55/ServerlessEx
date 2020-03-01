import Vue from 'vue';
import Component from 'vue-class-component';
import WithRender from './App.html';
import './App.scss';
import Watch from '@/components/Watch.vue';

@WithRender
@Component({
  components: {
    Watch,
  },
})
export default class App extends Vue {
  public callCount: number = 0;
  public message: string = '참 좋아요';
  public callMe(message: string) {
    console.log(message);
  }
}
