import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateHardwareRelationDto {
  @ApiProperty({
    description: 'ids to add relation to specified hardware in path',
    type: [Number],
  })
  secondaryIds: number[];
}
