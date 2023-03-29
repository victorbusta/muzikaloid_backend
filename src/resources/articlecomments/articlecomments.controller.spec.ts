import { Test, TestingModule } from '@nestjs/testing';
import { ArticlecommentsController } from './articlecomments.controller';
import { ArticlecommentsService } from './articlecomments.service';

describe('ArticlecommentsController', () => {
  let controller: ArticlecommentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArticlecommentsController],
      providers: [ArticlecommentsService],
    }).compile();

    controller = module.get<ArticlecommentsController>(ArticlecommentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
