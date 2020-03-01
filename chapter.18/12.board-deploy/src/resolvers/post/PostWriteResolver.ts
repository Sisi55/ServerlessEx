import { Arg, Authorized, Ctx, Mutation, Resolver } from 'type-graphql';
import { Category } from '../../entities/Category';
import { Post } from '../../entities/Post';
import { AppContext } from '../../utils/userAuthChecker';
import { PostInput } from './PostInput';

@Resolver()
export class PostWriteResolver {
  @Authorized()
  @Mutation(() => Post)
  public async postWrite(
    @Ctx() ctx: AppContext,
    @Arg('data') data: PostInput
  ): Promise<Post> {
    const user = ctx.user;

    const category = await Category.findOne(data.categoryId);

    const post = await Post.create({
      // categoryId: postInput.categoryId,
      category,
      title: data.title,
      context: data.context,
      user,
    }).save();

    return post;
  }
}
