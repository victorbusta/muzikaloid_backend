import { PartialType } from '@nestjs/swagger';
import { CreateHardwaretypeDto } from './create-hardwaretype.dto';

export class UpdateHardwaretypeDto extends PartialType(CreateHardwaretypeDto) {}
