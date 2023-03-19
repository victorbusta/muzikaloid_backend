import { Injectable } from '@nestjs/common';
import { CreateMachineDto } from './dto/create-machine.dto';
import { UpdateMachineDto } from './dto/update-machine.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MachinesService {
  constructor(private prisma: PrismaService) {}

  create(userId: number, createMachineDto: CreateMachineDto) {
    createMachineDto.userId = userId;

    return this.prisma.machine.create({ data: createMachineDto });
  }

  findAll() {
    return this.prisma.machine.findMany();
  }

  findOne(id: number) {
    return this.prisma.machine.findUnique({ where: { id: id } });
  }

  update(id: number, updateMachineDto: UpdateMachineDto) {
    return this.prisma.machine.update({
      where: { id: id },
      data: updateMachineDto,
    });
  }

  remove(id: number) {
    return this.prisma.machine.delete({ where: { id: id } });
  }
}
