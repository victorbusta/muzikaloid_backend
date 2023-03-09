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
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('components')
export class ComponentsController {
  constructor(private readonly componentsService: ComponentsService) {}

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
}
