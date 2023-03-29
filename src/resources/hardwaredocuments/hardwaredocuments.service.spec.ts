import { Test, TestingModule } from '@nestjs/testing';
import { HardwaredocumentsService } from './hardwaredocuments.service';

describe('HardwaredocumentsService', () => {
  let service: HardwaredocumentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HardwaredocumentsService],
    }).compile();

    service = module.get<HardwaredocumentsService>(HardwaredocumentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
