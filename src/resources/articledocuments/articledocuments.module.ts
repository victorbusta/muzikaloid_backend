import { PrismaModule } from 'src/prisma/prisma.module';
import { Module } from '@nestjs/common';
import { ArticledocumentsService } from './articledocuments.service';
import { ArticledocumentsController } from './articledocuments.controller';

@Module({
  controllers: [ArticledocumentsController],
  imports: [PrismaModule],
  providers: [ArticledocumentsService],
})
export class ArticledocumentsModule {}
