import { MachinesComponentsService } from '../machines_components/machines_components.service';
import { Module } from '@nestjs/common';
import { ComponentsService } from './components.service';
import { ComponentsController } from './components.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ComponentsController],
  providers: [ComponentsService, MachinesComponentsService],
  imports: [PrismaModule],
})
export class ComponentsModule {}
