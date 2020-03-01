import { Vue, Component, Prop, PropSync } from 'vue-property-decorator';
import WithRender from './TodoListItem.html';

interface ITodoItem {
  completed: boolean;
  task: string;
  createdAt: number;
}

@WithRender
@Component({
  props: {
    index: Number,
  },
})
export default class TodoListItem extends Vue {
  @Prop(Object)
  private item!: ITodoItem;

  @PropSync('item', Object)
  private itemSync!: ITodoItem;

  private isEdit: boolean = false;

  get createdAt() {
    const date = new Date(this.itemSync.createdAt * 1000);
    return date.toLocaleTimeString();
  }
}
