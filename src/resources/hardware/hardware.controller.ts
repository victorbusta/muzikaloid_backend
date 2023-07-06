import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  UseGuards,
} from '@nestjs/common';
import { HardwareService } from './hardware.service';
import { CreateHardwareDto } from './dto/create-hardware.dto';
import { UpdateHardwareDto } from './dto/update-hardware.dto';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AdminGuard } from 'src/auth/guards/admin.guard';
import { Public } from 'src/auth/utils/public.decorator';
import { HardwareOwnerGuard } from 'src/auth/guards/owner-hardware.guard';
import { HardwareGuard } from 'src/auth/guards/hardware.guard';

@ApiTags('Hardware')
@Controller('hardware')
export class HardwareController {
  constructor(private readonly hardwareService: HardwareService) {}

  @ApiBearerAuth('JWT-auth')
  @UseGuards(HardwareGuard)
  @Post()
  @ApiResponse({ status: 200, description: 'Create a hardware.' })
  create(@Body() createHardwareDto: CreateHardwareDto) {
    return this.hardwareService.create(createHardwareDto);
  }

  @ApiBearerAuth('JWT-auth')
  @UseGuards(AdminGuard)
  @Get('admin')
  @ApiResponse({ status: 200, description: 'Returns all hardware id.' })
  findAll() {
    return this.hardwareService.findAll();
  }

  @Public()
  @Get()
  @ApiResponse({
    status: 200,
    description: 'Returns all published hardware id.',
  })
  findAllPublished() {
    return this.hardwareService.findAllPublished();
  }

  @Public()
  @Get('page/:page')
  @ApiResponse({ status: 200, description: 'Returns all hardware of a page.' })
  findAllByPage(@Param('page') page: number) {
    return this.hardwareService.findAllByPage(+page);
  }

  @Public()
  @Get('page/:page/title/:title')
  @ApiResponse({
    status: 200,
    description: 'Returns all hardware of a page with matching title.',
  })
  findAllByTitle(@Param('title') title: string, @Param('page') page: number) {
    return this.hardwareService.findAllByTitle(+page, title);
  }

  @ApiBearerAuth('JWT-auth')
  @UseGuards(AdminGuard)
  @ApiResponse({ status: 200, description: 'Returns a hardware.' })
  @Get('admin/:id')
  findOne(@Param('id') id: string) {
    return this.hardwareService.findOne(+id);
  }

  @Public()
  @Get(':id')
  @ApiResponse({ status: 200, description: 'Returns a published hardware.' })
  findOnePublished(@Param('id') id: string) {
    return this.hardwareService.findOnePublished(+id);
  }

  @Public()
  @Get('title/:title')
  @ApiResponse({
    status: 200,
    description: 'Returns a published hardwrae with matching title.',
  })
  findOneByTitle(@Param('title') title: string) {
    return this.hardwareService.findOneByTitle(title);
  }

  @ApiBearerAuth('JWT-auth')
  @UseGuards(HardwareOwnerGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateHardwareDto: UpdateHardwareDto,
  ) {
    return this.hardwareService.update(+id, updateHardwareDto);
  }
}
