import Vue from 'vue';
import Component from 'vue-class-component';
import WithRender from './App.html';
import PropsSync from './components/PropsSync';

@WithRender
@Component({
  components: {
    PropsSync,
  },
})
export default class App extends Vue {
  public callCount: number = 0;
  public name: string = '홍길동';
  public message: string = '참 좋아요';
  public callMe(message: string) {
    console.log(message);
    this.message = message;
  }
}
