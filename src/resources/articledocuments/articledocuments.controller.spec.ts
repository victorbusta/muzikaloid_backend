import { Test, TestingModule } from '@nestjs/testing';
import { ArticledocumentsController } from './articledocuments.controller';
import { ArticledocumentsService } from './articledocuments.service';

describe('ArticledocumentsController', () => {
  let controller: ArticledocumentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArticledocumentsController],
      providers: [ArticledocumentsService],
    }).compile();

    controller = module.get<ArticledocumentsController>(ArticledocumentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
