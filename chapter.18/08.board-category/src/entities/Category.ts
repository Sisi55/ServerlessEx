import { Field, Int, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType({ description: '글 카테고리' })
export class Category extends BaseEntity {
  @Field((type) => Int)
  @PrimaryGeneratedColumn()
  public readonly id: number;

  @Field()
  @Column({ type: 'varchar', length: 255, unique: true })
  public name: string;
}
