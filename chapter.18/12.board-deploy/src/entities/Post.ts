import { Length } from 'class-validator';
import { Field, Int, ObjectType } from 'type-graphql';
import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from './Category';
import { Comment } from './Comment';
import { User } from './User';

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

  @Field((type) => User)
  @ManyToOne((type) => User, (user) => user.posts, { onDelete: 'CASCADE'})
  @JoinColumn()
  public user: User;
  
  @Column()
  public categoryId: number;
  
  @Field((type) => Category)
  @ManyToOne((type) => Category, (category) => category.posts)
  @JoinColumn()
  public category: Category;

  @Field((type) => [Comment] )
  @OneToMany((type) => Comment, (comments) => comments.post)
  public comments: Comment[];
}
