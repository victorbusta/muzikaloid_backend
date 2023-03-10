import { MachineComponentDto } from './dto/machine_component.dto';
import { addComponentsDto } from './dto/add_components.dto';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { addMachinesDto } from './dto/add_machines.dto';

@Injectable()
export class MachinesComponentsService {
  constructor(private prisma: PrismaService) {}

  addLiaison(userId: number, machineId: number, componentId: number) {
    return this.prisma.machine_Component.create({
      data: {
        userId: userId,
        machineId: machineId,
        componentId: componentId,
      },
    });
  }

  removeLiaison(userId: number, machineId: number, componentId: number) {
    return this.prisma.machine_Component.delete({
      where: {
        machineId_componentId_userId: {
          userId: userId,
          machineId: machineId,
          componentId: componentId,
        },
      },
    });
  }
}
