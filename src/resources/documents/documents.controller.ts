import { Public } from 'src/auth/utils/public.decorator';
import { Controller, Get, Param, Res, StreamableFile } from '@nestjs/common';
import { DocumentsService } from './documents.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Documents')
@Controller('documents')
export class DocumentsController {
  constructor(private readonly documentsService: DocumentsService) {}

  @Public()
  @Get(':id')
  @ApiResponse({ status: 200, description: 'Return a documents.' })
  async findOne(@Param('id') id: number) {
    return this.documentsService.findOne(+id);
  }
}
