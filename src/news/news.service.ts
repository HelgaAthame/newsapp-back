import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NewsEntity } from './entities/news.entity';
import { Repository } from 'typeorm';
import { CreateNewsInput } from './inputs/create-news.input';
import { UpdateNewsInput } from './inputs/update-news.input';

@Injectable()
export class NewsService {
  constructor(
    @InjectRepository(NewsEntity)
    private readonly newsRepository: Repository<NewsEntity>,
  ) {}

  async createNews(createNewsInput: CreateNewsInput): Promise<NewsEntity> {
    return await this.newsRepository.save({ ...createNewsInput });
  }

  async getOneNews(id: number): Promise<NewsEntity> {
    return await this.newsRepository.findOne({
      where: { id },
    });
  }

  async getAllNews(): Promise<NewsEntity[]> {
    return await this.newsRepository.find();
  }

  async removeNews(id: number): Promise<NewsEntity> {
    const myArticle = await this.newsRepository.findOne({
      where: { id },
    })
    await this.newsRepository.delete({ id });
    return myArticle;
  }

  async updateNews(updateNewsInput: UpdateNewsInput): Promise<NewsEntity> {
    await this.newsRepository.update(
      { id: updateNewsInput.id },
      { ...updateNewsInput },
    );
    return await this.getOneNews(updateNewsInput.id);
  }
}
