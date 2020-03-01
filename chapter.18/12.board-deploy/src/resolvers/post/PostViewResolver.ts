import { Arg, Int, Query, Resolver } from 'type-graphql';
import { getRepository } from 'typeorm';
import { Post } from '../../entities/Post';


@Resolver()
export class PostViewResolver {
  @Query((type) => Post, {nullable: true})
  public async postView(
    @Arg('id', (type) => Int) id: number,
  ): Promise<Post| null> {

    await getRepository(Post).createQueryBuilder().update(Post).set({
      views: () => '`views`+ 1'
    }).where('id = :id', {id}).execute();

    const post = await getRepository(Post)
      .createQueryBuilder('post')
      .leftJoinAndSelect('post.category', 'category')
      .leftJoinAndSelect('post.user', 'user')
      .where('post.id = :id', {id})
      .andWhere('post.deletedAt IS NULL')
      .getOne();

    // const post = await Post.findOne({
    //   where: { id, deletedAt: IsNull()},
    //   relations: ['category', 'user'],
    // });

    return post;
  }
}


