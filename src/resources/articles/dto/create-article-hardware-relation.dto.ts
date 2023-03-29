import { ApiProperty } from '@nestjs/swagger';

export class CreateArticleHardwareRelationDto {
  @ApiProperty()
  hardwareIds: number[];
}
