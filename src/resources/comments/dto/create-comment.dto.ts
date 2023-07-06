import { ApiProperty } from '@nestjs/swagger';

export class CreateCommentDto {
  @ApiProperty()
  content: string;

  article_id: number;
  user_id: number;

  comment_id?: number;
}
