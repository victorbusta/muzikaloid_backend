import { Injectable } from '@nestjs/common';
import { CreateComponentDto } from './dto/create-component.dto';
import { UpdateComponentDto } from './dto/update-component.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ComponentsService {
  constructor(private prisma: PrismaService) {}

  create(userId: number, createComponentDto: CreateComponentDto) {
    createComponentDto.userId = userId;

    return this.prisma.component.create({ data: createComponentDto });
  }

  findAll() {
    return this.prisma.component.findMany();
  }

  findOne(id: number) {
    return this.prisma.component.findUnique({ where: { id: id } });
  }

  update(id: number, updateComponentDto: UpdateComponentDto) {
    return this.prisma.component.update({
      where: { id: id },
      data: updateComponentDto,
    });
  }

  remove(id: number) {
    return this.prisma.component.delete({ where: { id: id } });
  }
}
