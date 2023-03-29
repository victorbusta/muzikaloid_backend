import { Test, TestingModule } from '@nestjs/testing';
import { ArticlecommentsService } from './articlecomments.service';

describe('ArticlecommentsService', () => {
  let service: ArticlecommentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArticlecommentsService],
    }).compile();

    service = module.get<ArticlecommentsService>(ArticlecommentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
