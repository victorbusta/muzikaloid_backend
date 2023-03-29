import { PrismaModule } from './../../prisma/prisma.module';
import { Module } from '@nestjs/common';
import { HardwaretypesService } from './hardwaretypes.service';
import { HardwaretypesController } from './hardwaretypes.controller';

@Module({
  controllers: [HardwaretypesController],
  imports: [PrismaModule],
  providers: [HardwaretypesService],
})
export class HardwaretypesModule {}
