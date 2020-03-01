import { HelloResolver } from './common/HelloResolver';
import { LoginResolver } from './user/LoginResolver';
import { RegisterResolver } from './user/RegisterResolver';

const resolvers = [
  HelloResolver,
  RegisterResolver,
  LoginResolver
];

export default resolvers;
