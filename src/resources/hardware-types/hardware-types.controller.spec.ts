import { Test, TestingModule } from '@nestjs/testing';
import { HardwareTypesController } from './hardware-types.controller';
import { HardwareTypesService } from './hardware-types.service';

describe('HardwareTypesController', () => {
  let controller: HardwareTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HardwareTypesController],
      providers: [HardwareTypesService],
    }).compile();

    controller = module.get<HardwareTypesController>(HardwareTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
