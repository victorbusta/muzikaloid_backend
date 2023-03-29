import { HardwareCommentOwnerGuard } from './../../auth/guards/owner-hardware-comment.guard';
import {
  Controller,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { HardwarecommentsService } from './hardwarecomments.service';
import { UpdateHardwarecommentDto } from './dto/update-hardwarecomment.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Hardware Comments')
@Controller('hardwarecomments')
export class HardwarecommentsController {
  constructor(
    private readonly hardwarecommentsService: HardwarecommentsService,
  ) {}

  @ApiBearerAuth('JWT-auth')
  @UseGuards(HardwareCommentOwnerGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateHardwarecommentDto: UpdateHardwarecommentDto,
  ) {
    return this.hardwarecommentsService.update(+id, updateHardwarecommentDto);
  }

  @ApiBearerAuth('JWT-auth')
  @UseGuards(HardwareCommentOwnerGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hardwarecommentsService.remove(+id);
  }
}
