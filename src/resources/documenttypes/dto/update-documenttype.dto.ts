import { PartialType } from '@nestjs/swagger';
import { CreateDocumenttypeDto } from './create-documenttype.dto';

export class UpdateDocumenttypeDto extends PartialType(CreateDocumenttypeDto) {}
