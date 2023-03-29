import { Test, TestingModule } from '@nestjs/testing';
import { HardwarecommentsController } from './hardwarecomments.controller';
import { HardwarecommentsService } from './hardwarecomments.service';

describe('HardwarecommentsController', () => {
  let controller: HardwarecommentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HardwarecommentsController],
      providers: [HardwarecommentsService],
    }).compile();

    controller = module.get<HardwarecommentsController>(HardwarecommentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
