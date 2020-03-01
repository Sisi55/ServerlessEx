import { IsNull, Like } from 'typeorm';
import { isNull } from 'util';
import { Post } from '../entity/Post';
import { User } from '../entity/User';

export class PostModule {
  public static async write(userId: number, data: any): Promise<Post> {
    const user = await User.findOne(userId);
    const post = new Post();
    post.user = user;
    post.title = data.title;
    post.content = data.content;
    return await post.save();
  }

  public static async update(postId: number, userId: number, data: any): Promise<Post|null> {
    const post = await Post.findOne({where: { id: postId, deletedAt: isNull }, relations: ['user']});
    if (post.user.id !== userId) {
      return null;
    }
    for (const key of data) {
      post[key] = data[key];
    }
    return await post.save();
  }

  public static async list(skip: number, take: number, search?: string ): Promise<Post[]> {
    let where = {};
    if (search) {
      where = [
        {title: Like(`%${search}%`)},
        {content: Like(`%${search}%`)},
      ]
    }
    const posts = await Post.find({
      where: {deletedsAt: IsNull(), ...where}, 
      order: {id: 'DESC'},
      skip, 
      take
    })
    return posts;
  }

  public static async userPosts(userId: number): Promise<Post[]> {
    return await Post.find({
      where: { userId, deletedAt: IsNull()},
      relations: ['user'],
      order: {id: 'DESC'}
    })
  }

  public static async get(id: number): Promise<Post> {
    return await Post.findOne({
      where: {id, deletedAt: IsNull()}, 
      relations: ['user']
    });
  }

  public static async delete(postId: number, userId: number) {
    const post = await Post.findOne(postId, {relations: ['user']});
    if (post.user.id !== userId) {
      return null;
    }
    return await post.remove();
  }
}