import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NewsEntity } from './entities/news.entity';
import { Repository } from 'typeorm';
import { CreateNewsInput } from './inputs/create-news.input';

@Injectable()
export class NewsService {
  constructor(
    @InjectRepository(NewsEntity)
    private readonly newsRepository: Repository<NewsEntity>,
  ) {}

  async createNews(newsInput: CreateNewsInput): Promise<NewsEntity> {
    return await this.newsRepository.save({ ...newsInput });
  }

  async getOneNews(id: number): Promise<NewsEntity> {
    return await this.newsRepository.findOne({
        where: { id },
    });
  }
}
