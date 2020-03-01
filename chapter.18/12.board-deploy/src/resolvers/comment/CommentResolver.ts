import { Arg, Authorized, Ctx, Int, Mutation, Query, Resolver } from 'type-graphql';
import { IsNull } from 'typeorm';
import { Comment } from '../../entities/Comment';
import { AppContext } from '../../utils/userAuthChecker';
import { CommentInput } from './CommentInput';

@Resolver()
export class CommentResolver {
  @Authorized()
  @Mutation(() => Boolean)
  public async commentWrite(
    @Ctx() ctx: AppContext,
    @Arg('data', (type) => CommentInput) data: CommentInput,
  ): Promise<boolean> {
    const user = ctx.user;

    try {
      await Comment.create({
        userId: user.id,
        ...data
      }).save();
    } catch {
      return false;
    }

    return true;
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
