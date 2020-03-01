import { Vue, Component, Prop, PropSync } from 'vue-property-decorator';
import withRender from './PropsSync.html';

@withRender
@Component({
  props: {
    name: String,
  },
})
export default class PropsSample extends Vue {
  @Prop(String)
  private message!: string;

  @PropSync('callCount', Number)
  private syncedCallCount!: number;

  get syncedMessage() {
    return this.$props.name + ' : ' + this.message;
  }

  set syncedMessage(value: string) {
    this.$emit('update:message', value);
  }

  private callParent() {
    this.$emit('callEmit', '부모님!!! ===> 추천');
  }

  private callFather() {
    this.$props.callFunction('아빠!!!');
  }

  private callMather() {
    // @ts-ignore
    this.$parent.callMe('엄마!!!');
  }
}
