import { HardwareDocumentGuard } from './../../auth/guards/document-hardware.guard';
import { CreateHardwarecommentDto } from './../hardwarecomments/dto/create-hardwarecomment.dto';
import { RelationHardwareGuard } from './../../auth/guards/relation-hardware.guard';
import { HardwareOwnerGuard } from './../../auth/guards/owner-hardware.guard';
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
  UploadedFile,
  UseInterceptors,
  ParseFilePipe,
  MaxFileSizeValidator,
} from '@nestjs/common';
import { HardwaresService } from './hardwares.service';
import { UpdateHardwareDto } from './dto/update-hardware.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateHardwareRelationDto } from './dto/create-hardware-relation.dto';
import { Public } from 'src/auth/utils/public.decorator';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiTags('Hadwares')
@Controller('hardwares')
export class HardwaresController {
  constructor(private readonly hardwaresService: HardwaresService) {}

  @Public()
  @Get()
  findAll() {
    return this.hardwaresService.findAll();
  }

  @Public()
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.hardwaresService.findOne(+id);
  }

  @ApiBearerAuth('JWT-auth')
  @UseGuards(HardwareOwnerGuard)
  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateHardwareDto: UpdateHardwareDto,
  ) {
    return this.hardwaresService.update(+id, updateHardwareDto);
  }

  @ApiBearerAuth('JWT-auth')
  @UseGuards(HardwareOwnerGuard)
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.hardwaresService.remove(+id);
  }

  @ApiBearerAuth('JWT-auth')
  @UseGuards(HardwareOwnerGuard)
  @Post(':id/hardwares')
  createHardwareRelation(
    @Request() req,
    @Param('id') id: number,
    @Body() createHardwareRelationDto: CreateHardwareRelationDto,
  ) {
    return this.hardwaresService.createHardwareRelation(
      req.user.sub,
      +id,
      createHardwareRelationDto,
    );
  }

  @Public()
  @Get(':id/hardwares')
  findHardwares(@Param('id') id: number) {
    return this.hardwaresService.findHardwares(+id);
  }

  @ApiBearerAuth('JWT-auth')
  @UseGuards(HardwareOwnerGuard, RelationHardwareGuard)
  @Delete(':id/hardwares/:hardwareId')
  removeHardwares(
    @Param('id') id: number,
    @Param('hardwareId') hardwareId: number,
  ) {
    return this.hardwaresService.removeHardware(+id, +hardwareId);
  }

  @Get(':id/articles')
  findArticles(@Param('id') id: number) {
    return this.hardwaresService.findArticles(+id);
  }

  @ApiBearerAuth('JWT-auth')
  @Post(':id/comments')
  createComment(
    @Request() req,
    @Param('id') id: number,
    @Body() createHardwarecommentDto: CreateHardwarecommentDto,
  ) {
    return this.hardwaresService.createComment(
      req.user.sub,
      +id,
      createHardwarecommentDto,
    );
  }

  @Public()
  @Get(':id/comments')
  findComments(@Param('id') id: number) {
    return this.hardwaresService.findComments(+id);
  }

  @ApiBearerAuth('JWT-auth')
  @UseGuards(HardwareOwnerGuard, HardwareDocumentGuard)
  @Post(':id/documents/:typeId')
  @UseInterceptors(FileInterceptor('file'))
  createDocument(
    @Request() req,
    @Param('id') id: number,
    @Param('typeId') typeId: number,
    @UploadedFile(
      new ParseFilePipe({
        validators: [new MaxFileSizeValidator({ maxSize: 100000 })],
      }),
    )
    file: Express.Multer.File,
  ) {
    console.log(file);

    return this.hardwaresService.createDocument(
      req.user.sub,
      +id,
      +typeId,
      file,
    );
  }

  @Public()
  @Get(':id/documents')
  findDocuments(@Param('id') id: number) {
    return this.hardwaresService.findDocuments(+id);
  }
}
