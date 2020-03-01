import { Arg, Field, Int, ObjectType, Query, Resolver } from 'type-graphql';
import { Like } from 'typeorm';
import { Post } from '../../entities/Post';

@ObjectType()
class ListResult {
  @Field((type) => [Post])
  public posts: Post[];

  @Field((type) => Int)
  public count: number;
}

@Resolver()
export class PostListResolver {
  @Query((type) => ListResult)
  public async postList(
    @Arg('categoryId', (type) => Int) categoryId: number,
    @Arg('skip', (type) => Int) skip: number = 0,
    @Arg('take', (type) => Int) take: number = 5,
    @Arg('search', {nullable: true}) search?: string
  ): Promise<ListResult> {
    let where: any = { deletedAt: null, categoryId };
    if (search) {
      where = [
        { title: Like(`%${search}%`), ...where },
        { context: Like(`%${search}%`), ...where },
      ];
    }

    const [posts, count] = await Post.findAndCount(
      {
      where,
      skip,
      take,
      relations: ['user'],
      order: {id: 'DESC'}}
    );

    const listResult = new ListResult();
    listResult.posts = posts;
    listResult.count = count;

    return listResult;
  }
}

