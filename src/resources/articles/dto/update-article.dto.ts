import { ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { CreateArticleDto } from './create-article.dto';

export class UpdateArticleDto extends PartialType(CreateArticleDto) {
  @ApiPropertyOptional()
  title: string;

  @ApiPropertyOptional()
  sub_description: string;

  @ApiPropertyOptional()
  description: string;

  @ApiPropertyOptional()
  type_id: number;

  @ApiPropertyOptional()
  article_id: number;

  @ApiPropertyOptional()
  published: boolean;
}
