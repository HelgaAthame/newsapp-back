import { Field, InputType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateNewsInput {
  @Field(() => ID)
  id: number;

  @Field({ nullable: true })
  title: string;

  @Field({ nullable: true })
  description: string;

  @Field({ nullable: true })
  text: string;

  @Field({ nullable: true })
  img: string;
}
