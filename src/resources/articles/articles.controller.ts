import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Post,
  Request,
  UseInterceptors,
  UploadedFile,
  ParseFilePipe,
  MaxFileSizeValidator,
  FileTypeValidator,
} from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { UpdateArticleDto } from './dto/update-article.dto';
import { Public } from 'src/auth/utils/public.decorator';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ArticleOwnerGuard } from 'src/auth/guards/owner-article.guard';
import { AdminGuard } from 'src/auth/guards/admin.guard';
import { CreateArticleDto } from './dto/create-article.dto';
import { DocumentsService } from '../documents/documents.service';
import { CommentsService } from '../comments/comments.service';
import { CreateCommentDto } from '../comments/dto/create-comment.dto';
import { CreateDocumentDto } from '../documents/dto/create-document.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { AdminTypeGuard } from 'src/auth/guards/type-admin.guard';

@ApiTags('Articles')
@Controller('articles')
export class ArticlesController {
  constructor(
    private readonly articlesService: ArticlesService,
    private readonly documentsService: DocumentsService,
    private readonly commentsService: CommentsService,
  ) {}

  @ApiBearerAuth('JWT-auth')
  @UseGuards(AdminTypeGuard)
  @Post()
  @ApiResponse({ status: 200, description: 'Create a article.' })
  create(@Request() req, @Body() createArticleDto: CreateArticleDto) {
    return this.articlesService.create(req.user.sub, createArticleDto);
  }

  @ApiBearerAuth('JWT-auth')
  @UseGuards(AdminTypeGuard)
  @Post(':id')
  @ApiResponse({ status: 200, description: 'Create a related article.' })
  createArticle(
    @Request() req,
    @Param() id: number,
    @Body() createArticleDto: CreateArticleDto,
  ) {
    return this.articlesService.createArticle(
      req.user.sub,
      +id,
      createArticleDto,
    );
  }

  @ApiBearerAuth('JWT-auth')
  @UseGuards(AdminGuard)
  @Get('admin')
  @ApiResponse({ status: 200, description: 'Returns all articles id.' })
  findAll() {
    return this.articlesService.findAll();
  }

  @Public()
  @Get()
  @ApiResponse({
    status: 200,
    description: 'Returns all published articles id.',
  })
  findAllPublished() {
    return this.articlesService.findAllPublished();
  }

  @Public()
  @Get('page/:page')
  @ApiResponse({ status: 200, description: 'Returns all articles of a page.' })
  findAllByPage(@Param('page') page: number) {
    return this.articlesService.findAllByPage(+page);
  }

  @Public()
  @Get('page/:page/title/:title')
  @ApiResponse({
    status: 200,
    description: 'Returns all articles of a page with matching title.',
  })
  findAllByTitle(@Param('title') title: string, @Param('page') page: number) {
    return this.articlesService.findAllByTitle(+page, title);
  }

  @ApiBearerAuth('JWT-auth')
  @UseGuards(AdminGuard)
  @ApiResponse({ status: 200, description: 'Returns a article.' })
  @Get('admin/:id')
  findOne(@Param('id') id: string) {
    return this.articlesService.findOne(+id);
  }

  @Public()
  @Get(':id')
  @ApiResponse({ status: 200, description: 'Returns a published article.' })
  findOnePublished(@Param('id') id: string) {
    return this.articlesService.findOnePublished(+id);
  }

  @Public()
  @Get('title/:title')
  @ApiResponse({
    status: 200,
    description: 'Returns a published article with matching title.',
  })
  findOneByTitle(@Param('title') title: string) {
    return this.articlesService.findOneByTitle(title);
  }

  @ApiBearerAuth('JWT-auth')
  @UseGuards(ArticleOwnerGuard)
  @Patch(':id')
  @ApiResponse({ status: 200, description: 'Update a article.' })
  update(@Param('id') id: string, @Body() updateArticleDto: UpdateArticleDto) {
    return this.articlesService.update(+id, updateArticleDto);
  }

  @ApiBearerAuth('JWT-auth')
  @UseGuards(ArticleOwnerGuard)
  @Delete(':id')
  @ApiResponse({ status: 200, description: 'Delete a article.' })
  remove(@Param('id') id: string) {
    return this.articlesService.remove(+id);
  }

  @Public()
  @Get(':id/documents')
  @ApiResponse({ status: 200, description: "Return a article's documents." })
  findDocuments(@Param('id') id: number) {
    return this.articlesService.findDocuments(+id);
  }

  @ApiBearerAuth('JWT-auth')
  @UseGuards(ArticleOwnerGuard)
  @Post(':id/document')
  @UseInterceptors(FileInterceptor('file'))
  @ApiResponse({ status: 200, description: "Create a article's documents." })
  addDocument(
    @Param('id') id: number,
    @Body() createDocumentDto: CreateDocumentDto,
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 2000000 }),
          new FileTypeValidator({ fileType: 'application/pdf' }),
        ],
      }),
    )
    file: Express.Multer.File,
  ) {
    return this.documentsService.create(+id, file, createDocumentDto);
  }

  @ApiBearerAuth('JWT-auth')
  @UseGuards(ArticleOwnerGuard)
  @Delete('document/:documentId')
  @ApiResponse({ status: 200, description: "Remove a article's documents." })
  removeDocument(@Param('id') id: number, @Param('documentId') docId: number) {
    return this.documentsService.remove(+docId);
  }

  @ApiBearerAuth('JWT-auth')
  @Get(':id/comments')
  @ApiResponse({ status: 200, description: "Return a article's comments." })
  findComments(@Param('id') id: number) {
    return this.articlesService.findComments(+id);
  }

  @ApiBearerAuth('JWT-auth')
  @Post(':id/comments')
  @ApiResponse({ status: 200, description: "Creates a article's comments." })
  createComment(
    @Request() req,
    @Param('id') id: number,
    @Body() createCommentDto: CreateCommentDto,
  ) {
    return this.commentsService.create(req.user.sub, +id, createCommentDto);
  }
}
