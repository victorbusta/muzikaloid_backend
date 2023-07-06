import { Public } from 'src/auth/utils/public.decorator';
import { Controller, Get, Param, Res, StreamableFile } from '@nestjs/common';
import { Response } from 'express';
import { DocumentsService } from './documents.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Documents')
@Controller('documents')
export class DocumentsController {
  constructor(private readonly documentsService: DocumentsService) {}

  @Public()
  @Get(':id')
  @ApiResponse({ status: 200, description: 'Return a documents.' })
  async findOne(
    @Param('id') id: number,
    @Res({ passthrough: true }) res: Response,
  ): Promise<StreamableFile> {
    const doc = await this.documentsService.findOne(+id);
    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="${doc.name}"`,
    });
    return new StreamableFile(doc.content);
  }
}
