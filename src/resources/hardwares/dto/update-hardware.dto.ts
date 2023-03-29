import { PartialType, ApiPropertyOptional } from '@nestjs/swagger';
import { CreateHardwareDto } from './create-hardware.dto';

export class UpdateHardwareDto extends PartialType(CreateHardwareDto) {
  @ApiPropertyOptional()
  name: string;

  @ApiPropertyOptional()
  brand: string;

  @ApiPropertyOptional()
  subDescription: string;

  @ApiPropertyOptional()
  description: string;

  @ApiPropertyOptional()
  isDiy: boolean;

  @ApiPropertyOptional()
  creationDate: Date;

  @ApiPropertyOptional()
  discontinuationDate: Date;

  @ApiPropertyOptional()
  commercialLinks: string[];
}
