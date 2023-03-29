import { PartialType } from '@nestjs/swagger';
import { CreateHardwaredocumentDto } from './create-hardwaredocument.dto';

export class UpdateHardwaredocumentDto extends PartialType(CreateHardwaredocumentDto) {}
