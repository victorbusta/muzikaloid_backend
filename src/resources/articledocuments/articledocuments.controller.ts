import { ArticleDocumentOwnerGuard } from './../../auth/guards/owner-document-article.guard';
import {
  Controller,
  Param,
  Delete,
  Get,
  Res,
  StreamableFile,
  UseGuards,
} from '@nestjs/common';
import { ArticledocumentsService } from './articledocuments.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Public } from 'src/auth/utils/public.decorator';
import type { Response } from 'express';

@ApiTags('Article Documents')
@Controller('articledocuments')
export class ArticledocumentsController {
  constructor(
    private readonly articledocumentsService: ArticledocumentsService,
  ) {}

  @Public()
  @Get(':id')
  async findOne(
    @Param('id') id: number,
    @Res({ passthrough: true }) res: Response,
  ): Promise<StreamableFile> {
    const doc = await this.articledocumentsService.findOne(+id);
    res.set({
      'Content-Type': doc.mimetype,
      'Content-Disposition': `attachment; filename="${doc.name}"`,
    });
    return new StreamableFile(doc.buffer);
  }

  @ApiBearerAuth('JWT-auth')
  @UseGuards(ArticleDocumentOwnerGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.articledocumentsService.remove(+id);
  }
}
