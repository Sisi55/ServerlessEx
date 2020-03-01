import { Vue, Component, Prop, PropSync } from 'vue-property-decorator';
import WithRender from './TodoListItem.html';
import { ITodoItem } from './TodoList';
import './TodoListItem.css';

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
    const date = new Date(this.item.createdAt * 1000);
    return date.toLocaleTimeString();
  }
}
