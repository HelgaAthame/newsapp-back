import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NewsEntity } from './entities/news.entity';
import { NewsService } from './news.service';
import { NewsResolver } from './news.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([NewsEntity])],
  providers: [NewsService, NewsResolver],
})
export class NewsModule {}
