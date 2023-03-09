import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateDocumentDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  url: string;

  @ApiProperty()
  articleId: number;

  @ApiPropertyOptional()
  machineId: number;

  @ApiPropertyOptional()
  componentId: number;

  format: string;

  userId: number;
}
