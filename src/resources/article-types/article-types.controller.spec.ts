import { Test, TestingModule } from '@nestjs/testing';
import { ArticleTypesController } from './article-types.controller';
import { ArticleTypesService } from './article-types.service';

describe('ArticleTypesController', () => {
  let controller: ArticleTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArticleTypesController],
      providers: [ArticleTypesService],
    }).compile();

    controller = module.get<ArticleTypesController>(ArticleTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
