import { CategoryResolver } from './category/CategoryResolver';
import { HelloResolver } from './common/HelloResolver';
import { PostDeleteResolver } from './post/PostDeleteResolver';
import { PostListResolver } from './post/PostListResolver';
import { PostViewResolver } from './post/PostViewResolver';
import { PostWriteResolver } from './post/PostWriteResolver';
import { LoginResolver } from './user/LoginResolver';
import { RegisterResolver } from './user/RegisterResolver';

const resolvers = [
  CategoryResolver,
  HelloResolver,
  LoginResolver,
  PostWriteResolver,
  PostListResolver,
  PostViewResolver,
  PostDeleteResolver,
  RegisterResolver,
];

export default resolvers;
