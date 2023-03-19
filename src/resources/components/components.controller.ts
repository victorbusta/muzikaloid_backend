import { MachinesComponentsService } from './../machines_components/machines_components.service';
import { ComponentOwnerGuard } from '../../auth/guards/owner-component.guard';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import { ComponentsService } from './components.service';
import { CreateComponentDto } from './dto/create-component.dto';
import { UpdateComponentDto } from './dto/update-component.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Components')
@Controller('components')
export class ComponentsController {
  constructor(
    private readonly componentsService: ComponentsService,
    private readonly machinesComponentService: MachinesComponentsService,
  ) {}

  @Post()
  @ApiBearerAuth('JWT-auth')
  create(@Request() req, @Body() createComponentDto: CreateComponentDto) {
    return this.componentsService.create(req.user.seb, createComponentDto);
  }

  @Get()
  findAll() {
    return this.componentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.componentsService.findOne(+id);
  }

  @Patch(':id')
  @ApiBearerAuth('JWT-auth')
  @UseGuards(ComponentOwnerGuard)
  update(
    @Param('id') id: string,
    @Body() updateComponentDto: UpdateComponentDto,
  ) {
    return this.componentsService.update(+id, updateComponentDto);
  }

  @Delete(':id')
  @ApiBearerAuth('JWT-auth')
  @UseGuards(ComponentOwnerGuard)
  remove(@Param('id') id: string) {
    return this.componentsService.remove(+id);
  }

  @Post(':id/machines')
  @ApiBearerAuth('JWT-auth')
  @UseGuards(ComponentOwnerGuard)
  addComponents(
    @Param('id') id: string,
    @Param('machineId') machineId: string,
    @Request() req,
  ) {
    return this.machinesComponentService.addLiaison(
      req.user.sub,
      +id,
      +machineId,
    );
  }

  @Delete(':id/machines/:machineId')
  @ApiBearerAuth('JWT-auth')
  @UseGuards(ComponentOwnerGuard)
  removeComponents(
    @Param('id') id: string,
    @Param('machineId') machineId: string,
    @Request() req,
  ) {
    return this.machinesComponentService.removeLiaison(
      req.user.sub,
      +machineId,
      +id,
    );
  }
}
