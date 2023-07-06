import { Controller, Get, Param } from '@nestjs/common';
import { HardwareTypesService } from './hardware-types.service';
import { Public } from 'src/auth/utils/public.decorator';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Hardware_types')
@Controller('hardware-types')
export class HardwareTypesController {
  constructor(private readonly hardwareTypesService: HardwareTypesService) {}

  @Public()
  @Get()
  @ApiResponse({
    status: 200,
    description: 'return all hardware types',
  })
  findAll() {
    return this.hardwareTypesService.findAll();
  }

  @Public()
  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'return all hardware id associated with the hardware type id',
  })
  findOne(@Param('id') id: string) {
    return this.hardwareTypesService.findOne(+id);
  }
}
