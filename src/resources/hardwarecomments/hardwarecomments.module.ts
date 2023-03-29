import { PrismaModule } from './../../prisma/prisma.module';
import { Module } from '@nestjs/common';
import { HardwarecommentsService } from './hardwarecomments.service';
import { HardwarecommentsController } from './hardwarecomments.controller';

@Module({
  controllers: [HardwarecommentsController],
  imports: [PrismaModule],
  providers: [HardwarecommentsService],
})
export class HardwarecommentsModule {}
