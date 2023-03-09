import { CreateCommentDto } from '../comments/dto/create-comment.dto';
import { CommentsService } from '../comments/comments.service';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import { Public } from '../../auth/utils/public.decorator';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { ArticleExistGuard } from 'src/auth/guards/exist-article.guard copy';
import { ArticleOwnerGuard } from 'src/auth/guards/owner-article.guard';

@Controller('articles')
export class ArticlesController {
  constructor(
    private readonly articlesService: ArticlesService,
    private readonly commentsService: CommentsService,
  ) {}

  @Post()
  @ApiBearerAuth('JWT-auth')
  create(@Request() req, @Body() createArticleDto: CreateArticleDto) {
    return this.articlesService.create(req.user.sub, createArticleDto);
  }

  @Public()
  @Get()
  findAll() {
    return this.articlesService.findAll();
  }

  @Public()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.articlesService.findOne(+id);
  }

  @Patch(':id')
  @ApiBearerAuth('JWT-auth')
  @UseGuards(ArticleOwnerGuard)
  update(@Param('id') id: string, @Body() updateArticleDto: UpdateArticleDto) {
    return this.articlesService.update(+id, updateArticleDto);
  }

  @Delete(':id')
  @ApiBearerAuth('JWT-auth')
  @UseGuards(ArticleOwnerGuard)
  remove(@Param('id') id: string) {
    return this.articlesService.remove(+id);
  }

  @Post(':id/comment')
  @ApiBearerAuth('JWT-auth')
  @UseGuards(ArticleExistGuard)
  addComment(
    @Param('id') id: string,
    @Request() req,
    @Body() createCommentDto: CreateCommentDto,
  ) {
    return this.commentsService.create(req.user.sub, +id, createCommentDto);
  }
}
