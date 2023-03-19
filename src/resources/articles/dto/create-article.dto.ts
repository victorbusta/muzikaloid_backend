import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateArticleDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  articleTypeId: number;

  @ApiPropertyOptional()
  articleId?: number;

  @ApiPropertyOptional()
  articleSubTypeId?: number;

  userId: number;

  isPublished: true;
}
