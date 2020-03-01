import { Context } from 'aws-lambda';
import * as jwt from 'jsonwebtoken';
import { AuthChecker } from 'type-graphql';
import config from '../config';
import { User } from '../entities/User';

export interface IAuthUser {
  id: number;
  email: string;
  nickname: string;
}

export interface AppContext extends Context {
  headers: any;
  event: any;
  context: any;
  user?: User;
}

export const userAuthChecker: AuthChecker<AppContext> = (
  { root, args, context, info },
  role?
) => {
  let token = context.headers.authorization || context.headers.Authorization;
  if (!token) {
    return false;
  }
  token = token.replace('Bearer ', '');
  if (!token) {
    return false;
  }

  let authData: User;
  try {
    authData = jwt.verify(token, config.jwtSecret) as User;
  } catch (err) {
    return false;
  }

  if (role.length > 0) {
    console.log('TCL: authData', authData);
    if (role.indexOf(authData.role) === -1) {
      throw new Error('권한이 없습니다.');
    }
  }

  context.user = authData as User;
  return true;
};
