import { ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { CreateComponentDto } from './create-component.dto';

export class UpdateComponentDto extends PartialType(CreateComponentDto) {
  @ApiPropertyOptional()
  name: string;

  @ApiPropertyOptional()
  description: string;

  @ApiPropertyOptional()
  price: string;

  @ApiPropertyOptional()
  creationDate: Date;

  @ApiPropertyOptional()
  discontinuationDate: Date;
}
