import { Test, TestingModule } from '@nestjs/testing';
import { HardwareTypesService } from './hardware-types.service';

describe('HardwareTypesService', () => {
  let service: HardwareTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HardwareTypesService],
    }).compile();

    service = module.get<HardwareTypesService>(HardwareTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
