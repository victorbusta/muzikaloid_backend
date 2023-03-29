import { HardwareDocumentOwnerGuard } from './../../auth/guards/owner-document-hardware.guard';
import {
  Controller,
  Get,
  Param,
  Delete,
  Res,
  StreamableFile,
  UseGuards,
} from '@nestjs/common';
import { HardwaredocumentsService } from './hardwaredocuments.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Public } from 'src/auth/utils/public.decorator';
import type { Response } from 'express';

@ApiTags('Hardware Documents')
@Controller('hardwaredocuments')
export class HardwaredocumentsController {
  constructor(
    private readonly hardwaredocumentsService: HardwaredocumentsService,
  ) {}

  @Public()
  @Get(':id')
  async findOne(
    @Param('id') id: number,
    @Res({ passthrough: true }) res: Response,
  ): Promise<StreamableFile> {
    const doc = await this.hardwaredocumentsService.findOne(+id);
    res.set({
      'Content-Type': doc.mimetype,
      'Content-Disposition': `attachment; filename="${doc.name}"`,
    });
    return new StreamableFile(doc.buffer);
  }

  @ApiBearerAuth('JWT-auth')
  @UseGuards(HardwareDocumentOwnerGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hardwaredocumentsService.remove(+id);
  }
}
