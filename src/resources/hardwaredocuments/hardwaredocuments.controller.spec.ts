import { Test, TestingModule } from '@nestjs/testing';
import { HardwaredocumentsController } from './hardwaredocuments.controller';
import { HardwaredocumentsService } from './hardwaredocuments.service';

describe('HardwaredocumentsController', () => {
  let controller: HardwaredocumentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HardwaredocumentsController],
      providers: [HardwaredocumentsService],
    }).compile();

    controller = module.get<HardwaredocumentsController>(HardwaredocumentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
