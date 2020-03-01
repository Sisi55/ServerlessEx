import { Field, Int, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Post } from './Post';

@Entity()
@ObjectType({ description: '글 카테고리' })
export class Category extends BaseEntity {
  @Field((type) => Int)
  @PrimaryGeneratedColumn()
  public readonly id: number;

  @Field()
  @Column({ type: 'varchar', length: 255, unique: true })
  public name: string;

  @OneToMany((type) => Post, (post) => post.user)
  public posts: Post[];
}
