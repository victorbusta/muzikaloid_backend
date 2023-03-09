import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateComponentDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  price: string;

  @ApiPropertyOptional()
  creationDate: Date;

  @ApiPropertyOptional()
  discontinuationDate: Date;

  userId: number;
}
