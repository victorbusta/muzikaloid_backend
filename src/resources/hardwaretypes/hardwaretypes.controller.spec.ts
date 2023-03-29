import { Test, TestingModule } from '@nestjs/testing';
import { HardwaretypesController } from './hardwaretypes.controller';
import { HardwaretypesService } from './hardwaretypes.service';

describe('HardwaretypesController', () => {
  let controller: HardwaretypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HardwaretypesController],
      providers: [HardwaretypesService],
    }).compile();

    controller = module.get<HardwaretypesController>(HardwaretypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
