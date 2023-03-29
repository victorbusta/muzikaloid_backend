import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateArticlecommentDto } from './create-articlecomment.dto';

export class UpdateArticlecommentDto extends PartialType(
  CreateArticlecommentDto,
) {
  @ApiProperty()
  content: string;

  modifiedAt: Date;
}
