import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateHardwarecommentDto } from './create-hardwarecomment.dto';

export class UpdateHardwarecommentDto extends PartialType(
  CreateHardwarecommentDto,
) {
  @ApiProperty()
  content: string;

  modifiedAt: Date;
}
