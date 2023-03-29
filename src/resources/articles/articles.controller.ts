import { CreateArticledocumentDto } from './../articledocuments/dto/create-articledocument.dto';
import { CreateArticlecommentDto } from './../articlecomments/dto/create-articlecomment.dto';
import { RelationArticleHardwareGuard } from '../../auth/guards/relation-article-hardware.guard';
import { CreateArticleHardwareRelationDto } from './dto/create-article-hardware-relation.dto';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
  UseGuards,
  UseInterceptors,
  UploadedFile,
  Res,
  ParseFilePipe,
  MaxFileSizeValidator,
} from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { Public } from 'src/auth/utils/public.decorator';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ArticleDocumentGuard } from 'src/auth/guards/document-article.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { ArticleOwnerGuard } from 'src/auth/guards/owner-article.guard';

@ApiTags('Article')
@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Public()
  @Get()
  findAll() {
    return this.articlesService.findAll();
  }

  @Public()
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.articlesService.findOne(+id);
  }

  @ApiBearerAuth('JWT-auth')
  @UseGuards(ArticleOwnerGuard)
  @Patch(':id')
  update(@Param('id') id: number, @Body() updateArticleDto: UpdateArticleDto) {
    return this.articlesService.update(+id, updateArticleDto);
  }

  @ApiBearerAuth('JWT-auth')
  @UseGuards(ArticleOwnerGuard)
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.articlesService.remove(+id);
  }

  @ApiBearerAuth('JWT-auth')
  @Post(':id/articles')
  createArticle(
    @Request() req,
    @Param('id') id: number,
    @Body() createArticleDto: CreateArticleDto,
  ) {
    return this.articlesService.createArticle(
      req.user.sub,
      +id,
      createArticleDto,
    );
  }

  @Public()
  @Get(':id/articles')
  findArticles(@Param('id') id: number) {
    return this.articlesService.findArticles(+id);
  }

  @ApiBearerAuth('JWT-auth')
  @UseGuards(ArticleOwnerGuard)
  @Post(':id/hardwares')
  createHardwareRelations(
    @Request() req,
    @Param('id') id: number,
    @Body() createArticleHardwareRelationDto: CreateArticleHardwareRelationDto,
  ) {
    return this.articlesService.createHardwareRelations(
      req.user.sub,
      +id,
      createArticleHardwareRelationDto,
    );
  }

  @Public()
  @Get(':id/hardwares')
  findHardwares(@Param('id') id: number) {
    return this.articlesService.findHardwares(+id);
  }

  @ApiBearerAuth('JWT-auth')
  @UseGuards(ArticleOwnerGuard, RelationArticleHardwareGuard)
  @Delete(':id/hardwares/:hardwareId')
  removeHardwareRelation(
    @Param('id') id: number,
    @Param('hardwareId') hardwareId: number,
  ) {
    return this.articlesService.removeHardware(+id, +hardwareId);
  }

  @ApiBearerAuth('JWT-auth')
  @Post(':id/comments')
  createComment(
    @Request() req,
    @Param('id') id: number,
    @Body() createArticlecommentDto: CreateArticlecommentDto,
  ) {
    return this.articlesService.createComment(
      req.user.sub,
      +id,
      createArticlecommentDto,
    );
  }

  @Public()
  @Get(':id/comments')
  findComments(@Param('id') id: number) {
    return this.articlesService.findComments(+id);
  }

  @ApiBearerAuth('JWT-auth')
  @UseGuards(ArticleOwnerGuard, ArticleDocumentGuard)
  @Post(':id/documents/:typeId')
  @UseInterceptors(FileInterceptor('file'))
  createDocument(
    @Request() req,
    @Param('id') id: number,
    @Param('typeId') typeId: number,
    @UploadedFile(
      new ParseFilePipe({
        validators: [new MaxFileSizeValidator({ maxSize: 100000 })],
      }),
    )
    file: Express.Multer.File,
  ) {
    console.log(file);

    return this.articlesService.createDocument(
      req.user.sub,
      +id,
      +typeId,
      file,
    );
  }

  @Public()
  @Get(':id/documents')
  findDocuments(@Param('id') id: number) {
    return this.articlesService.findDocuments(+id);
  }
}
