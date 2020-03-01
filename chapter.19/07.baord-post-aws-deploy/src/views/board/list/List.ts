import PostView from '@/components/postView/PostView';
import POST_LIST from '@/graphql/query/postList.gql';
import gql from 'graphql-tag';
import { SmartQuery } from 'vue-apollo-decorator';
// @ts-ignore
import vPagination from 'vue-plain-pagination';
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import WithRender from './List.html';
import './List.scss';

interface IPostList {
  count: number;
  posts?: IPost[] | null;
}

@WithRender
@Component({
  props: {},
  components: {
    vPagination,
    PostView,
  },
})

export default class BoardList extends Vue {
  @SmartQuery({
    query: POST_LIST,
    variables() {
      return {
        categoryId: +this.categoryId,
        skip: this.skipPage,
        take: this.take,
        search: this.search,
      };
    },
  })
  public postList: IPostList = {
    count: 0,
    posts: null,
  };

  @SmartQuery({
    query: gql`query CategoryName($id: Int!){
      categoryName(id: $id)
    }`,
    variables() {
      return {
        id: +this.categoryId,
      };
    },
  })
  public categoryName!: string;

  @Prop()
  private categoryId!: number;

  private take: number = 10;

  private currentPage: number = 1;

  private searchInput: string = '';

  private bootstrapPaginationClasses = {
    ul: 'pagination',
    li: 'page-item',
    liActive: 'active',
    liDisable: 'disabled',
    button: 'page-link',
  };

  get skipPage(): number {
    if (this.$route.query.page) {
      return (+this.$route.query.page - 1) * this.take;
    }
    return 1;
  }

  get search(): string {
    if (this.$route.query.q) {
      return this.$route.query.q as string;
    }
    return '';
  }

  get queryPage(): number {
    if (this.$route.query.page) {
      return +this.$route.query.page;
    }
    return 1;
  }

  private postViewUrl(id: string) {
    this.$router.push({
      path: '/board/' + this.categoryId,
      query: {
        q: this.$route.query.q as string,
        page: this.currentPage.toString(),
        id,
      },
    });
  }

  private searchUrl() {
    this.$router.push({
      path: '/board/' + this.categoryId,
      query: {
        q: this.searchInput,
        page: this.currentPage.toString(),
      },
    });
  }

  private goUrl() {
    this.$router.push({
      path: '/board/' + this.categoryId,
      query: {
        q: this.$route.query.q as string,
        page: this.currentPage.toString(),
      },
    });
  }

  private reload() {
    this.$apollo.queries.postList.refresh();
    this.$route.query.id = '';
  }

  private created() {
    this.currentPage = this.queryPage;
  }


  @Watch('currentPage')
  private onPageChange(newVal: number, oldVal: number) {
    if (newVal === 0) {
      this.currentPage = this.queryPage;
      return;
    }
    this.goUrl();
  }

  get total(): number {
    if (this.$apollo.loading) {
      return 0;
    }
    const count = this.postList.count as number;
    return Math.ceil(count / this.take );
  }
}
