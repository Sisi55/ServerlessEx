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
      .leftJoinAndSelect('post.user', 'user')
      .leftJoinAndSelect('post.category', 'category')
      .where('post.id = :id', {id})
      .andWhere('post.deletedAt IS NULL')
      .getOne();

    return post;
  }
}


