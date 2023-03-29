import { PrismaModule } from './../../prisma/prisma.module';
import { Module } from '@nestjs/common';
import { HardwaresService } from './hardwares.service';
import { HardwaresController } from './hardwares.controller';

@Module({
  controllers: [HardwaresController],
  imports: [PrismaModule],
  providers: [HardwaresService],
})
export class HardwaresModule {}
