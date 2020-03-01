import Vue from 'vue';
import Component from 'vue-class-component';
import WithRender from './App.html';
import Form from '@/components/Form.vue';

@WithRender
@Component({
  components: {
    Form,
  },
})
export default class App extends Vue {}
