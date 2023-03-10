import { Test, TestingModule } from '@nestjs/testing';
import { ArticleMachinesService } from './article_machines.service';

describe('ArticleMachinesService', () => {
  let service: ArticleMachinesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArticleMachinesService],
    }).compile();

    service = module.get<ArticleMachinesService>(ArticleMachinesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
