import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateArticleDto {
  @ApiPropertyOptional()
  description: string;

  @ApiPropertyOptional()
  articleTypeId: number;

  @ApiPropertyOptional()
  articleSubTypeId?: number;

  @ApiPropertyOptional()
  machineId?: number;

  @ApiPropertyOptional()
  componentId?: number;

  @ApiPropertyOptional()
  isPublished: boolean;
}
