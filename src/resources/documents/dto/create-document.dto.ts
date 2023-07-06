import { ApiProperty } from '@nestjs/swagger';

export class CreateDocumentDto {
  @ApiProperty()
  name: string;

  content: Buffer;
  article_id: number;
}
