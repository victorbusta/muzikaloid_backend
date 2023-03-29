import { Test, TestingModule } from '@nestjs/testing';
import { HardwaretypesService } from './hardwaretypes.service';

describe('HardwaretypesService', () => {
  let service: HardwaretypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HardwaretypesService],
    }).compile();

    service = module.get<HardwaretypesService>(HardwaretypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
