import { Vue, Component, Watch } from 'vue-property-decorator';
import WithRender from './TodoList.html';
import TodoListItem from './TodoListItem';

export interface ITodoItem {
  completed: boolean;
  task: string;
  createdAt: number;
}

@WithRender
@Component({
  components: {
    TodoListItem,
  },
})
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

  private created() {
    this.todoItems = JSON.parse(localStorage.TodoList);
  }

  @Watch('todoItems', { deep: true })
  private onChangeTodoList() {
    localStorage.setItem('TodoList', JSON.stringify(this.todoItems));
  }
}
