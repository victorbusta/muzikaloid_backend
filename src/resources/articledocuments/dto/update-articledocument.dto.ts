import { PartialType } from '@nestjs/swagger';
import { CreateArticledocumentDto } from './create-articledocument.dto';

export class UpdateArticledocumentDto extends PartialType(
  CreateArticledocumentDto,
) {}
