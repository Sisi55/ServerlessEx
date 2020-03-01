import { Length } from 'class-validator';
import { Field, Int, ObjectType } from 'type-graphql';
import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Account } from './Account';
import { Comment } from './Comment';
import { PostImage } from './PostImage';

@ObjectType()
@Entity()
export class Post extends BaseEntity {
  @Field((type) => Int)
  @PrimaryGeneratedColumn()
  public id: number;

  @Field()
  @Length(1, 50)
  @Column()
  public title: string;

  @Field((type) => Int)
  @Column({type: 'int', default: 0})
  public views: number;

  @Field()
  @Column({type: 'text'})
  public context: string;

  @Field()
  @CreateDateColumn()
  public createdAt: Date;

  @Field()
  @Column({ nullable: true, default: null })
  public deletedAt: Date | null;

  // -----------------------------------
  // JOIN
  @Field()
  @Column()
  public accountId: number;

  @Field((type) => Account)
  @ManyToOne((type) => Account, (account) => account.posts)
  public account: Account;

  @Field((type) => [Comment])
  @OneToMany((type) => Comment, (comments) => comments.post)
  public comments: Comment[];

  @Field((type) => [PostImage])
  @OneToMany((type) => PostImage, (postImage) => postImage.post)
  public images: PostImage[];
}
