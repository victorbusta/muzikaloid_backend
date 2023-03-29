import { Test, TestingModule } from '@nestjs/testing';
import { ArticletypesService } from './articletypes.service';

describe('ArticletypesService', () => {
  let service: ArticletypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArticletypesService],
    }).compile();

    service = module.get<ArticletypesService>(ArticletypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
