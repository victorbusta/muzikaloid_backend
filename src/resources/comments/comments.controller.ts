import { Controller, Get, Param, Delete, UseGuards } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { Public } from 'src/auth/utils/public.decorator';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CommentOwnerGuard } from 'src/auth/guards/owner-comment.guard ';

@ApiTags('Comments')
@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Public()
  @Get(':id')
  @ApiResponse({ status: 200, description: 'Return a comment.' })
  findOne(@Param('id') id: string) {
    return this.commentsService.findOne(+id);
  }

  @ApiBearerAuth('JWT-auth')
  @UseGuards(CommentOwnerGuard)
  @Delete(':id')
  @ApiResponse({ status: 200, description: 'Delete a comment.' })
  remove(@Param('id') id: string) {
    return this.commentsService.remove(+id);
  }
}
