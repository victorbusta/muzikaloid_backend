import { ApiProperty } from '@nestjs/swagger';

export class CreateArticlecommentDto {
  @ApiProperty()
  content: string;

  userId: number;

  articleId: number;
}
