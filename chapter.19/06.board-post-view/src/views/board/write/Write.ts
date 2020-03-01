import POST_WRITE from '@/graphql/mutation/postWrite.gql';
import 'quill/dist/quill.bubble.css';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import { Component, Prop, Vue } from 'vue-property-decorator';
// @ts-ignore
import { quillEditor } from 'vue-quill-editor';
import WithRender from './Write.html';
import './Write.scss';

@WithRender
@Component({
  props: {},
  components: {
    quillEditor,
  },
})
export default class Write extends Vue {
  @Prop()
  private categoryId!: number;

  private editorOption = {
    modules: {
      toolbar: [
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote', 'code-block'],
        [{ indent: '-1' }, { indent: '+1' }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ align: [] }],
        ['clean'],
        ['link', 'image', 'video'],
      ],
    },
  };

  private form = {
    categoryId: +this.categoryId,
    title: '',
    context: '',
  };

  private async write(event: any) {
    event.preventDefault();
    const result = await this.$apollo.mutate({
      mutation: POST_WRITE,
      variables: {
        data: {
          ...this.form,
        },
      },
    });
    this.$router.push('/board/' + this.categoryId);
  }
}
