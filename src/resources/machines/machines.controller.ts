import { MachineOwnerGuard } from './../../auth/guards/owner-machine.guard';
import { MachinesComponentsService } from '../machines_components/machines_components.service';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
  UseGuards,
} from '@nestjs/common';
import { MachinesService } from './machines.service';
import { CreateMachineDto } from './dto/create-machine.dto';
import { UpdateMachineDto } from './dto/update-machine.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Machines')
@Controller('machines')
export class MachinesController {
  constructor(
    private readonly machinesService: MachinesService,
    private readonly machineComponentsService: MachinesComponentsService,
  ) {}

  @Post()
  @ApiBearerAuth('JWT-auth')
  create(@Request() req, @Body() createMachineDto: CreateMachineDto) {
    return this.machinesService.create(req.user.seb, createMachineDto);
  }

  @Get()
  findAll() {
    return this.machinesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.machinesService.findOne(+id);
  }

  @Patch(':id')
  @ApiBearerAuth('JWT-auth')
  @UseGuards(MachineOwnerGuard)
  update(@Param('id') id: string, @Body() updateMachineDto: UpdateMachineDto) {
    return this.machinesService.update(+id, updateMachineDto);
  }

  @Delete(':id')
  @ApiBearerAuth('JWT-auth')
  @UseGuards(MachineOwnerGuard)
  remove(@Param('id') id: string) {
    return this.machinesService.remove(+id);
  }

  @Post(':id/components/:componentId')
  @ApiBearerAuth('JWT-auth')
  @UseGuards(MachineOwnerGuard)
  addComponents(
    @Param('id') id: string,
    @Param('componentId') componentId: string,
    @Request() req,
  ) {
    return this.machineComponentsService.addLiaison(
      req.user.sub,
      +id,
      +componentId,
    );
  }

  @Delete(':id/components/:componentId')
  @ApiBearerAuth('JWT-auth')
  @UseGuards(MachineOwnerGuard)
  removeComponents(
    @Param('id') id: string,
    @Param('componentId') componentId: string,
    @Request() req,
  ) {
    return this.machineComponentsService.removeLiaison(
      req.user.sub,
      +id,
      +componentId,
    );
  }
}
