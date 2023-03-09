import { CommentOwnerGuard } from './../../auth/guards/owner-comment.guard copy';
import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { CommentsService } from './comments.service';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  // @Post()
  // create(@Body() createCommentDto: CreateCommentDto) {
  //   return this.commentsService.create(createCommentDto);
  // }

  @Get()
  findAll() {
    return this.commentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.commentsService.findOne(+id);
  }

  @Patch(':id')
  @ApiBearerAuth('JWT-auth')
  @UseGuards(CommentOwnerGuard)
  update(@Param('id') id: string, @Body() updateCommentDto: UpdateCommentDto) {
    return this.commentsService.update(+id, updateCommentDto);
  }

  @Delete(':id')
  @ApiBearerAuth('JWT-auth')
  @UseGuards(CommentOwnerGuard)
  remove(@Param('id') id: string) {
    return this.commentsService.remove(+id);
  }
}
