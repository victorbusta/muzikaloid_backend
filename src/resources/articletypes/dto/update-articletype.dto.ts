import { PartialType } from '@nestjs/swagger';
import { CreateArticletypeDto } from './create-articletype.dto';

export class UpdateArticletypeDto extends PartialType(CreateArticletypeDto) {}
