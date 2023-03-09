import { Module } from '@nestjs/common';
import { MachinesService } from './machines.service';
import { MachinesController } from './machines.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [MachinesController],
  providers: [MachinesService],
  imports: [PrismaModule],
})
export class MachinesModule {}
