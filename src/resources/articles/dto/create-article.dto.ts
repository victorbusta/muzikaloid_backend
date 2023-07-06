import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateArticleDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  sub_description: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  type_id: number;

  @ApiPropertyOptional()
  article_id?: number;

  user_id: number;
  published: boolean;
}
