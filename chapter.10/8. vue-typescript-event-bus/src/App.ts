import Vue from 'vue';
import Component from 'vue-class-component';
import WithRender from './App.html';
import Receiver from '@/components/Receiver.vue';
import Sender from '@/components/Sender.vue';

@WithRender
@Component({
  components: {
    Sender,
    Receiver,
  },
})
export default class App extends Vue {}
