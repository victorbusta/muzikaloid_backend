import { ApiProperty, PartialType } from '@nestjs/swagger';
import { MachineComponentDto } from './machine_component.dto';

export class addMachinesDto extends PartialType(MachineComponentDto) {
  @ApiProperty()
  machinesId: number[];

  componentId: number;
}
