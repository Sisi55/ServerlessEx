import COMMENT_DELETE from '@/graphql/mutation/commentDelete.gql';
import COMMENT_WRITE from '@/graphql/mutation/commentWrite.gql';
import POST_DELETE from '@/graphql/mutation/postDelete.gql';
import POST_VIEW from '@/graphql/query/postView.gql';
import { textBr } from '@/utils/string';
import { SmartQuery } from 'vue-apollo-decorator';
import { Component, Prop, Vue } from 'vue-property-decorator';
import WithRender from './PostView.html';
import './PostView.scss';

interface IPostView {
  postView: IPost|null;
  commentList: IComment[];
}

@WithRender
@Component({
  props: {},
  components: {},
})
export default class PostView extends Vue {

  @SmartQuery({
    query: POST_VIEW,
    variables() {
      return { id: +this.id };
    },
  })
  public postView: any;

  @SmartQuery({
    query: POST_VIEW,
    variables() {
      return { id: +this.id };
    },
  })
  public commentList: any;

  @Prop()
  private id!: string;

  // 댓글 쓰기
  private comment: string = '';

  private br(str: string): string {
    return textBr(str);
  }

  private isMe(user: IUser): boolean {
    if (!this.$store.state.User.user) {
      return false;
    }
    if (this.$store.state.User.user.id === user.id) {
      return true;
    }
    return false;
  }

   // 글 삭제
   private async postDelete() {
    const result = await this.$apollo.mutate({
      mutation: POST_DELETE,
      variables: {
        id: this.postView.id,
      },
    });

    if (result.errors) {
      console.log(result.errors);
      for (const e of result.errors) {
        alert(e.message);
      }
      return;
    }
    if (!result.data.postDelete) {
      alert('삭제 실패');
    }

    this.$emit('reload');
  }
    private async commentWrite(event: any) {
      event.preventDefault();

      const result = await this.$apollo.mutate({
        mutation: COMMENT_WRITE,
        variables: {
          data: {
            postId: this.postView.id,
            context: this.comment,
          },
        },
      });

      if (result.errors) {
        for (const e of result.errors) {
          alert(e.message);
        }
        return;
      }
      if (result.data.commentWrite === false) {
        alert('댓글 쓰기 실패\n댓글이 너무 긴지 확인해 주세요');
      }
      this.comment = '';
      this.$apollo.queries.commentList.refresh();
    }

  // 댓글 삭제
  private async commentDelete(id: number) {
    const result = await this.$apollo.mutate({
      mutation: COMMENT_DELETE,
      variables: {
        id,
      },
    });

    if (result.errors) {
      for (const e of result.errors) {
        alert(e.message);
      }
      return;
    }
    if (!result.data.commentDelete) {
      alert('삭제 실패');
    }

    this.$apollo.queries.commentList.refresh();
  }
}
