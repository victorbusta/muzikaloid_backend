import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateHardwareDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  brand: string;

  @ApiProperty()
  subDescription: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  isDiy: boolean;

  @ApiProperty()
  creationDate: Date;

  @ApiPropertyOptional()
  discontinuationDate: Date;

  @ApiPropertyOptional()
  commercialLinks: string[];

  userId: number;

  hardwareTypeId: number;
}
