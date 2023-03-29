import { Test, TestingModule } from '@nestjs/testing';
import { ArticledocumentsService } from './articledocuments.service';

describe('ArticledocumentsService', () => {
  let service: ArticledocumentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArticledocumentsService],
    }).compile();

    service = module.get<ArticledocumentsService>(ArticledocumentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
