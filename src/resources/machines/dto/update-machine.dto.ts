import { ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { CreateMachineDto } from './create-machine.dto';

export class UpdateMachineDto extends PartialType(CreateMachineDto) {
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
