import { Field, Int, ObjectType } from 'type-graphql';
import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Post } from './Post';
import { User } from './User';


@ObjectType()
@Entity()
export class Comment extends BaseEntity {
  @Field((type) => Int)
  @PrimaryGeneratedColumn()
  public id: number;

  @Field()
  @Column()
  public context: string;

  @Field()
  @CreateDateColumn()
  public createdAt: Date;

  @Field()
  @Column({ nullable: true, default: null })
  public deletedAt: Date | null;

  // -----------------------------------
  // JOIN
  @Column()
  public userId: number;

  @Field((type) => User)
  @ManyToOne((type) => User, (user) => user.comments)
  @JoinColumn()
  public user: User;

  @Column()
  public postId: number;

  @Field((type) => Post)
  @ManyToOne((type) => Post, (post) => post.comments)
  @JoinColumn()
  public post: Post;
}
