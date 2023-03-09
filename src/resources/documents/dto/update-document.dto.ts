import { CreateDocumentDto } from './create-document.dto';
import { ApiPropertyOptional, PartialType } from '@nestjs/swagger';

export class UpdateDocumentDto extends PartialType(CreateDocumentDto) {
  @ApiPropertyOptional()
  name: string;

  @ApiPropertyOptional()
  url: string;

  @ApiPropertyOptional()
  articleId: number;

  @ApiPropertyOptional()
  machineId: number;

  @ApiPropertyOptional()
  componentId: number;
}
