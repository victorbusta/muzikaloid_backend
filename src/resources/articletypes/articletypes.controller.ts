import { CreateArticleDto } from './../articles/dto/create-article.dto';
import { Body, Controller, Get, Param, Post, Request } from '@nestjs/common';
import { ArticletypesService } from './articletypes.service';
import { Public } from 'src/auth/utils/public.decorator';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Article Types')
@Controller('articletypes')
export class ArticletypesController {
  constructor(private readonly articletypesService: ArticletypesService) {}

  @Public()
  @Get()
  findAll() {
    return this.articletypesService.findAll();
  }

  @Public()
  @Get(':id/articles')
  findArticles(@Param('id') id: number) {
    return this.articletypesService.findArticles(+id);
  }

  @ApiBearerAuth('JWT-auth')
  @Post(':id/articles')
  createArticle(
    @Request() req,
    @Param('id') id: number,
    @Body() createArticleDto: CreateArticleDto,
  ) {
    return this.articletypesService.createArticle(
      req.user.sub,
      +id,
      createArticleDto,
    );
  }

  @Public()
  @Get(':id/hardwares')
  findHardware(@Param('id') id: number) {
    return this.articletypesService.findHardwares(+id);
  }
}
