import { Module } from '@nestjs/common';
import { HardwareTypesService } from './hardware-types.service';
import { HardwareTypesController } from './hardware-types.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [HardwareTypesController],
  providers: [HardwareTypesService],
  imports: [PrismaModule],
})
export class HardwareTypesModule {}
