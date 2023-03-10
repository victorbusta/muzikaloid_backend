import { MachinesComponentsService } from '../machines_components/machines_components.service';
import { Module } from '@nestjs/common';
import { MachinesService } from './machines.service';
import { MachinesController } from './machines.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [MachinesController],
  providers: [MachinesService, MachinesComponentsService],
  imports: [PrismaModule],
})
export class MachinesModule {}
