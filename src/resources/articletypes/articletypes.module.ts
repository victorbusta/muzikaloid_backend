import { Module } from '@nestjs/common';
import { ArticletypesService } from './articletypes.service';
import { ArticletypesController } from './articletypes.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ArticletypesController],
  imports: [PrismaModule],
  providers: [ArticletypesService],
})
export class ArticletypesModule {}
