import { Vue, Component, Watch } from 'vue-property-decorator';
import WithRender from './TodoList.html';
import TodoListItem from './TodoListItem';
import getConfig from '@/_config';
import { AxiosResponse } from 'axios';

export interface ITodo {
  createdAt: string;
  deletedAt: number;
  id: string;
  task: string;
  isCompleted: boolean;
}

@WithRender
@Component({
  components: {
    TodoListItem,
  },
})
export default class TodoList extends Vue {
  private task: string = '';
  private todoItems: ITodo[] = [];
  private apiUrl: string = '';

  private created() {
    this.apiUrl = getConfig().apiUrl;
    this.loadData();
  }

  private async addItem() {
    if (!this.task) {
      alert('할일을 입력해 주세요.');
      return;
    }
    const data = {
      task: this.task,
    };
    try {
      const res = await this.$http.post(this.apiUrl + 'todo', data);
      if (res.data.result) {
        this.loadData();
        this.task = '';
      } else {
        throw new Error('등록 오류');
      }
    } catch (e) {
      alert(e.toString());
    }
  }

  private async loadData() {
    try {
      const res: AxiosResponse = await this.$http.get(this.apiUrl + 'todos');
      this.todoItems = res.data.data.Items;
    } catch (e) {
      console.log(e);
    }
  }

  private async removeItem(id: string) {
    const res = await this.$http.delete(this.apiUrl + 'todo/' + id);
    if (res.data.result) {
      // const index = this.todoItems.findIndex((item: ITodo) => {
      //   return item.id === id;
      // });
      const index = this.$_.findIndex(this.todoItems, { id });
      this.todoItems.splice(index, 1);
    }
    // this.loadData();
  }

  private async updateItem(id: string, updates: object) {
    const data = {
      id,
      updates,
    };
    await this.$http.patch(this.apiUrl + 'todo', data);
    this.loadData();
  }

  get todoItemList(): ITodo[] {
    return this.$_.sortBy(this.todoItems, ['createdAt'], ['desc']);
  }
}
