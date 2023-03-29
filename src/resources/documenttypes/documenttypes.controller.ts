import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DocumenttypesService } from './documenttypes.service';
import { ApiTags } from '@nestjs/swagger';
import { Public } from 'src/auth/utils/public.decorator';

@ApiTags('Document Types')
@Controller('documenttypes')
export class DocumenttypesController {
  constructor(private readonly documenttypesService: DocumenttypesService) {}

  // @Post()
  // create(@Body() createDocumenttypeDto: CreateDocumenttypeDto) {
  //   return this.documenttypesService.create(createDocumenttypeDto);
  // }

  @Public()
  @Get()
  findAll() {
    return this.documenttypesService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.documenttypesService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateDocumenttypeDto: UpdateDocumenttypeDto) {
  //   return this.documenttypesService.update(+id, updateDocumenttypeDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.documenttypesService.remove(+id);
  // }
}
