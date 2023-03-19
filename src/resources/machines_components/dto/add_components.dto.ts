import { ApiProperty, PartialType } from '@nestjs/swagger';
import { MachineComponentDto } from './machine_component.dto';

export class addComponentsDto extends PartialType(MachineComponentDto) {
  @ApiProperty()
  componentsId: number[];

  machineId: number;
}
