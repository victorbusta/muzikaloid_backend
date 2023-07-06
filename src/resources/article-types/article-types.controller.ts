import { Controller, Get, Param } from '@nestjs/common';
import { ArticleTypesService } from './article-types.service';
import { Public } from 'src/auth/utils/public.decorator';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Article_types')
@Controller('article-types')
export class ArticleTypesController {
  constructor(private readonly articleTypesService: ArticleTypesService) {}

  @Public()
  @Get()
  @ApiResponse({ status: 200, description: 'Return all article types.' })
  findAll() {
    return this.articleTypesService.findAll();
  }

  @Public()
  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'return all articles id associated with the article type id',
  })
  findOne(@Param('id') id: string) {
    return this.articleTypesService.findOne(+id);
  }
}
