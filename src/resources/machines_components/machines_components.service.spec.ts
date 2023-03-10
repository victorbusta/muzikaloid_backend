import { Test, TestingModule } from '@nestjs/testing';
import { MachinesComponentsService } from './machines_components.service';

describe('MachinesComponentsService', () => {
  let service: MachinesComponentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MachinesComponentsService],
    }).compile();

    service = module.get<MachinesComponentsService>(MachinesComponentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
