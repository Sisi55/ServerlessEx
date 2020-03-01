import { Vue, Component, PropSync } from 'vue-property-decorator';
import withRender from './TitleLabel.html';

@withRender
@Component({
  props: {
    title: String,
  },
})
export default class TitleLabel extends Vue {
  @PropSync('title', String)
  private titleSync!: string;
}
