import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateHardwareDto {
  @ApiProperty()
  brand: string;

  @ApiProperty()
  is_diy: boolean;

  @ApiPropertyOptional()
  average_price?: number;

  @ApiPropertyOptional()
  links: string[];

  @ApiProperty()
  type_id: number;

  article_id: number;
}
