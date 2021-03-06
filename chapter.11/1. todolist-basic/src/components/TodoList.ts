import { Vue, Component, Prop } from 'vue-property-decorator';
import WithRender from './TodoList.html';
import { Watch } from 'vue-property-decorator';
import './TodoList.css';

@WithRender
@Component
export default class TodoList extends Vue {
  private task: string = '';
  private todoItems: ITodoItem[] = [];

  private addItem() {
    if (!this.task) {
      alert('할일을 입력해 주세요.');
      return;
    }
    this.todoItems.push({
      completed: false,
      task: this.task,
      createdAt: new Date().getTime(),
    });
    this.task = '';
  }

  private removeItem(index: number) {
    this.todoItems.splice(index, 1);
  }
}
