import { Test, TestingModule } from '@nestjs/testing';
import { HardwarecommentsService } from './hardwarecomments.service';

describe('HardwarecommentsService', () => {
  let service: HardwarecommentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HardwarecommentsService],
    }).compile();

    service = module.get<HardwarecommentsService>(HardwarecommentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
