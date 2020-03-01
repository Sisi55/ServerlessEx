import { Vue, Component, Prop, PropSync, Watch } from 'vue-property-decorator';
import WithRender from './TodoListItem.html';
import { ITodo } from './TodoList';
import './TodoListItem.css';
import moment from 'moment';
moment.locale('ko');

@WithRender
@Component({
  props: {
    index: Number,
  },
})
export default class TodoListItem extends Vue {
  @Prop(Object)
  private item!: ITodo;

  private isEdit: boolean = false;
  private task: string = '';

  private setEdit() {
    this.task = this.item.task;
    this.isEdit = true;
    this.$nextTick(() => {
      (this.$refs.inputEdit as HTMLInputElement).select();
    });
  }

  @Watch('item.isCompleted')
  private onChangeIsComplted(newVal: boolean) {
    this.$emit('update', this.item.id, { isCompleted: newVal });
  }

  private updateTask() {
    this.$emit('update', this.item.id, { task: this.task });
    this.isEdit = false;
  }
}
