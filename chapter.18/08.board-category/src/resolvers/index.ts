import { CategoryResolver } from './category/CategoryResolver';
import { HelloResolver } from './common/HelloResolver';
import { LoginResolver } from './user/LoginResolver';
import { RegisterResolver } from './user/RegisterResolver';

const resolvers = [
  HelloResolver,
  CategoryResolver,
  RegisterResolver,
  LoginResolver,
];

export default resolvers;
