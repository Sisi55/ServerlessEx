import { Field, InputType, Int } from 'type-graphql';

@InputType()
export class CommentInput {
  @Field((type) => Int)
  public postId: number;

  @Field()
  public context: string;
}
