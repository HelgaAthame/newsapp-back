import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { NewsService } from './news.service';
import { NewsEntity } from './entities/news.entity';
import { CreateNewsInput } from './inputs/create-news.input';
import { UpdateNewsInput } from './inputs/update-news.input';
import {} from '@nestjs/common';

@Resolver('News')
export class NewsResolver {
  constructor(private readonly newsService: NewsService) {}

  @Mutation(() => NewsEntity)
  async createNews(
    @Args('createNews') createNewsInput: CreateNewsInput,
  ): Promise<NewsEntity> {
    return await this.newsService.createNews(createNewsInput);
  }

  @Mutation(() => NewsEntity)
  async updateNews(
    @Args('updateNews') updateNewsInput: UpdateNewsInput,
  ): Promise<NewsEntity> {
    return await this.newsService.updateNews(updateNewsInput);
  }

  @Mutation(() => NewsEntity)
  async removeNews(@Args('id') id: number): Promise<NewsEntity> {
    const myArticle = await this.newsService.getOneNews(id);
    await this.newsService.removeNews(id);
    return myArticle;
  }

  @Query(() => NewsEntity)
  async getOneNews(@Args('id') id: number): Promise<NewsEntity> {
    return await this.newsService.getOneNews(id);
  }

  @Query(() => [NewsEntity])
  async getAllNews(): Promise<NewsEntity[]> {
    return await this.newsService.getAllNews();
  }
}
