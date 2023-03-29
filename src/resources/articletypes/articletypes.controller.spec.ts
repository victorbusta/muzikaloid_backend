import { Test, TestingModule } from '@nestjs/testing';
import { ArticletypesController } from './articletypes.controller';
import { ArticletypesService } from './articletypes.service';

describe('ArticletypesController', () => {
  let controller: ArticletypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArticletypesController],
      providers: [ArticletypesService],
    }).compile();

    controller = module.get<ArticletypesController>(ArticletypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
