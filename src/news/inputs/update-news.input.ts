import { PartialType } from '@nestjs/mapped-types';
import { CreateNewsDto } from './create-news.input';

export class UpdateNewsDto extends PartialType(CreateNewsDto) {}
