import { PrismaModule } from './../../prisma/prisma.module';
import { Module } from '@nestjs/common';
import { HardwaredocumentsService } from './hardwaredocuments.service';
import { HardwaredocumentsController } from './hardwaredocuments.controller';

@Module({
  controllers: [HardwaredocumentsController],
  imports: [PrismaModule],
  providers: [HardwaredocumentsService],
})
export class HardwaredocumentsModule {}
