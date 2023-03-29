import { ApiProperty } from '@nestjs/swagger';

export class CreateHardwarecommentDto {
  @ApiProperty()
  content: string;

  userId: number;

  hardwareId: number;
}
