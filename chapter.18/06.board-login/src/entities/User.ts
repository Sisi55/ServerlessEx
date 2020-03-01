import { Field, Int, ObjectType } from 'type-graphql';
import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Comment } from './Comment';
import { Post } from './Post';

@Entity()
@ObjectType({ description: '사용자 계정' })
export class User extends BaseEntity {
  @Field((type) => Int)
  @PrimaryGeneratedColumn()
  public readonly id: number;

  @Field()
  @Column({ type: 'varchar', length: 255, unique: true })
  public email: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  public nickname?: string;

  @Column()
  public password: string;

  @Field()
  @CreateDateColumn()
  public createdAt: Date;

  @OneToMany((type) => Post, (post) => post.user)
  public posts: Post[];

  @OneToMany((type) => Comment, (comment) => comment.user)
  public comments: Comment[];
}
