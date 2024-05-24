import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateNewsInput {
  @Field()
  title: string;

  @Field({ nullable: true })
  description: string;

  @Field({ nullable: true })
  text: string;

  @Field({ nullable: true })
  img: string;
}
