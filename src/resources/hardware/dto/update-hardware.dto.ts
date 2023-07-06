import { ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { CreateHardwareDto } from './create-hardware.dto';

export class UpdateHardwareDto extends PartialType(CreateHardwareDto) {
  @ApiPropertyOptional()
  brand: string;

  @ApiPropertyOptional()
  is_diy: boolean;

  @ApiPropertyOptional()
  average_price?: number;

  @ApiPropertyOptional()
  links: string[];

  @ApiPropertyOptional()
  type_id: number;
}
