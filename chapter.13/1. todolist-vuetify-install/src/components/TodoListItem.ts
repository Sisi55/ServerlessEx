import { Vue, Component, Prop } from 'vue-property-decorator';
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

  private createdAt: string = '';

  private setEdit() {
    this.task = this.item.task;
    this.isEdit = true;
    this.$nextTick(() => {
      (this.$refs.inputEdit as HTMLInputElement).select();
    });
  }

  private updateTask(type: string) {
    if (type === 'task') {
      this.$emit('update', this.item.id, { task: this.task });
      this.isEdit = false;
      return;
    }
    this.$emit('update', this.item.id, { isCompleted: !this.item.isCompleted });
  }

  private updateCreateAt() {
    this.createdAt = this.$moment(this.item.createdAt).fromNow();
  }
  private created() {
    this.updateCreateAt();
    setInterval(this.updateCreateAt, 1000);
  }
}
