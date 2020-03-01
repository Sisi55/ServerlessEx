import { CategoryResolver } from './category/CategoryResolver';
import { CommentResolver } from './comment/CommentResolver';
import { HelloResolver } from './common/HelloResolver';
import { PostDeleteResolver } from './post/PostDeleteResolver';
import { PostListResolver } from './post/PostListResolver';
import { PostUpdateResolver } from './post/PostUpdateResolver';
import { PostViewResolver } from './post/PostViewResolver';
import { PostWriteResolver } from './post/PostWriteResolver';
import { LoginResolver } from './user/LoginResolver';
import { RegisterResolver } from './user/RegisterResolver';

const resolvers = [
  CategoryResolver,
  CommentResolver,
  HelloResolver,
  LoginResolver,
  PostDeleteResolver,
  PostListResolver,
  PostViewResolver,
  PostWriteResolver,
  PostUpdateResolver,
  RegisterResolver,
];

export default resolvers;
