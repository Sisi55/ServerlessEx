import { Length } from 'class-validator';
import { Field, InputType } from 'type-graphql';


@InputType()
export class PostInput {
  @Field()
  public categoryId: number;

  @Field()
  @Length(2, 255)
  public title: string;

  @Field()
  public context: string;
}
