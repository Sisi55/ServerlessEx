import { Arg, Authorized, Ctx, Int, Mutation, Resolver } from 'type-graphql';
import { Post } from '../../entities/Post';
import { AppContext } from '../../utils/userAuthChecker';

@Resolver()
export class PostDeleteResolver {
  @Authorized()
  @Mutation(() => Boolean)
  public async postDelete(
    @Ctx() ctx: AppContext,
    @Arg('id', (type) => Int) id: number
  ): Promise<boolean> {
    const user = ctx.user;

    const post = await Post.findOne({where: {id}, relations: ['user']});

    if (!post) {
      return false;
    }

    if (post.user.id !== user.id) {
      return false;
    }

    post.deletedAt = new Date();

    await post.save();

    return true;
  }
}

