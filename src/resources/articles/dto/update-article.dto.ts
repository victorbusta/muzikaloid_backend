import { PartialType, ApiPropertyOptional } from '@nestjs/swagger';
import { CreateArticleDto } from './create-article.dto';

export class UpdateArticleDto extends PartialType(CreateArticleDto) {
  @ApiPropertyOptional()
  name: string;

  @ApiPropertyOptional()
  subDescription: string;

  @ApiPropertyOptional()
  description: string;

  @ApiPropertyOptional()
  isPublished: boolean;
}
