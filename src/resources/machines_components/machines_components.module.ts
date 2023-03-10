import { Module } from '@nestjs/common';
import { MachinesComponentsService } from './machines_components.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [MachinesComponentsService],
  imports: [PrismaModule],
})
export class MachinesComponentsModule {}
