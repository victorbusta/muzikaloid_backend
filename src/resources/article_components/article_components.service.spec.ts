import { Test, TestingModule } from '@nestjs/testing';
import { ArticleComponentsService } from './article_components.service';

describe('ArticleComponentsService', () => {
  let service: ArticleComponentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArticleComponentsService],
    }).compile();

    service = module.get<ArticleComponentsService>(ArticleComponentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
