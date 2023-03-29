import { ArticleCommentOwnerGuard } from './../../auth/guards/owner-article-comment.guard';
import {
  Controller,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ArticlecommentsService } from './articlecomments.service';
import { UpdateArticlecommentDto } from './dto/update-articlecomment.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Articles Comments')
@Controller('articlecomments')
export class ArticlecommentsController {
  constructor(
    private readonly articlecommentsService: ArticlecommentsService,
  ) {}

  @ApiBearerAuth('JWT-auth')
  @UseGuards(ArticleCommentOwnerGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateArticlecommentDto: UpdateArticlecommentDto,
  ) {
    return this.articlecommentsService.update(+id, updateArticlecommentDto);
  }

  @ApiBearerAuth('JWT-auth')
  @UseGuards(ArticleCommentOwnerGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.articlecommentsService.remove(+id);
  }
}
