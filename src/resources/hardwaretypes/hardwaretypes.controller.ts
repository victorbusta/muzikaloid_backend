import { CreateHardwareDto } from './../hardwares/dto/create-hardware.dto';
import { Body, Controller, Get, Param, Post, Request } from '@nestjs/common';
import { HardwaretypesService } from './hardwaretypes.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Public } from 'src/auth/utils/public.decorator';

@ApiTags('Hardware Types')
@Controller('hardwaretypes')
export class HardwaretypesController {
  constructor(private readonly hardwaretypesService: HardwaretypesService) {}

  @Public()
  @Get()
  findAll() {
    return this.hardwaretypesService.findAll();
  }

  @Public()
  @Get(':id/hardwares')
  findHardwares(@Param('id') id: number) {
    return this.hardwaretypesService.findHardwares(+id);
  }

  @ApiBearerAuth('JWT-auth')
  @Post(':id/articles')
  createArticle(
    @Request() req,
    @Param('id') id: number,
    @Body() createHardwareDto: CreateHardwareDto,
  ) {
    return this.hardwaretypesService.createHardware(
      req.user.sub,
      +id,
      createHardwareDto,
    );
  }

  @Public()
  @Get(':id/articles')
  findArticles(@Param('id') id: number) {
    return this.hardwaretypesService.findArticles(+id);
  }
}
