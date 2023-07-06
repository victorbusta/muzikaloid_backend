import { Test, TestingModule } from '@nestjs/testing';
import { ArticleTypesService } from './article-types.service';

describe('ArticleTypesService', () => {
  let service: ArticleTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArticleTypesService],
    }).compile();

    service = module.get<ArticleTypesService>(ArticleTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
