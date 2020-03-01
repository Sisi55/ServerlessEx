import { Arg, Authorized, Ctx, Int, Mutation, Resolver } from 'type-graphql';
import { IsNull } from 'typeorm';
import { Post } from '../../entities/Post';
import { AppContext } from '../../utils/userAuthChecker';
import { PostInput } from './PostInput';

@Resolver()
export class PostUpdateResolver {
  @Authorized()
  @Mutation(() => Post, {nullable: true})
  public async postUpdate(
    @Ctx() ctx: AppContext,
    @Arg('id', (type) => Int) id: number,
    @Arg('data')
    data: PostInput
  ): Promise<Post | null> {
    const user = ctx.user;

    const post = await Post.findOne({where: {id, deletedAt: IsNull()}, relations: ['user']});

    if (!post) {
      throw new Error('글을 찾을 없습니다.');
    }

    if (post.user.id !== user.id) {
      throw new Error('글쓴이와 다릅니다.');
    }

    post.title = data.title;
    post.context = data.context;

    await post.save();

    return post;
  }
}
