import { Arg, Authorized, Ctx, Int, Mutation, Query, Resolver } from 'type-graphql';
import { IsNull } from 'typeorm';
import { Comment } from '../../entities/Comment';
import { Post } from '../../entities/Post';
import { AppContext } from '../../utils/userAuthChecker';
import { CommentInput } from './CommentInput';

@Resolver()
export class CommentResolver {
  @Authorized()
  @Mutation(() => Post)
  public async commentWrite(
    @Ctx() ctx: AppContext,
    @Arg('data', (type) => CommentInput) data: CommentInput,
  ): Promise<Post> {
    const user = ctx.user;
    console.log(data);

    await Comment.create({
      userId: user.id,
      postId: data.postId,
      context: data.context,
    }).save();

    const post = await Post.findOne({
      where: { id: data.postId, deletedAt: IsNull()},
      relations: ['user', 'comments']});

    return post;
  }

  @Authorized()
  @Mutation(() => Boolean)
  public async commentDelete(
    @Ctx() ctx: AppContext,
    @Arg('id', (type) => Int) id: number
  ): Promise<boolean> {
    const user = ctx.user;

    const comment = await Comment.findOne({where: {id}, relations: ['user']});

    if (!comment) {
      return false;
    }

    if (comment.user.id !== user.id) {
      return false;
    }

    comment.deletedAt = new Date();

    await comment.save();

    return true;
  }

  @Query((type) => [Comment])
  public async commentList(
    @Arg('postId', (type) => Int) postId: number,
  ): Promise<Comment[]> {

    const comments = await Comment.find(
      {where: { postId,  deletedAt: IsNull() },
      relations: ['user'],
      order: {id: 'ASC'}}
    );

    return comments;
  }
}
