import { ApiProperty } from '@nestjs/swagger';

export class CreateArticleDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  subDescription: string;

  @ApiProperty()
  description: string;

  isPublished: boolean;

  userId: number;

  articleTypeId: number;

  articleId?: number;
}
