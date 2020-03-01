import { Authorized, Ctx, Query, Resolver } from 'type-graphql';
import { User } from '../../entities/User';
import { AppContext } from '../../utils/userAuthChecker';

@Resolver()
export class HelloResolver {
  @Query((type) => String)
  public async hello(): Promise<string> {
    return 'world ' + new Date().getTime();
  }

  @Authorized()
  @Query((type) => Boolean)
  public async authRequire(
  ): Promise<boolean> {
    return true;
  }

  @Authorized('admin')
  @Query((type) => User)
  public async authInfo(
    @Ctx() ctx: AppContext
  ): Promise<User> {
    const user = ctx.user;
    return user;
  }
}
