import { Injectable } from '@nestjs/common';
import { CreateHardwareDto } from './dto/create-hardware.dto';
import { UpdateHardwareDto } from './dto/update-hardware.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class HardwareService {
  constructor(private readonly prisma: PrismaService) {}

  create(createHardwareDto: CreateHardwareDto) {
    return this.prisma.hardware.create({ data: createHardwareDto });
  }

  findAll() {
    return this.prisma.hardware.findMany({
      select: { id: true },
      orderBy: {
        id: 'desc',
      },
    });
  }

  findAllPublished() {
    return this.prisma.hardware.findMany({
      where: { article: { published: true } },
      select: { id: true },
      orderBy: {
        id: 'desc',
      },
    });
  }

  findAllByPage(page: number) {
    return this.prisma.hardware.findMany({
      skip: 20 * page,
      take: 20,
      where: {
        article: { published: true },
      },
      orderBy: {
        id: 'desc',
      },
    });
  }

  findAllByTitle(page: number, title: string) {
    return this.prisma.hardware.findMany({
      skip: 20 * page,
      take: 20,
      where: {
        article: {
          published: true,
          title: { contains: title, mode: 'insensitive' },
        },
      },
      orderBy: {
        id: 'desc',
      },
    });
  }

  findOneGuard(id: number) {
    return this.prisma.hardware.findUniqueOrThrow({
      where: { id },
      select: { article: true },
    });
  }

  findOne(id: number) {
    return this.prisma.hardware.findUniqueOrThrow({ where: { id } });
  }

  findOnePublished(id: number) {
    return this.prisma.hardware.findFirstOrThrow({
      where: {
        id: id,
        article: { published: true },
      },
    });
  }

  findOneByTitle(title: string) {
    return this.prisma.hardware.findFirst({
      where: {
        article: {
          published: true,
          title: { contains: title, mode: 'insensitive' },
        },
      },
    });
  }

  update(id: number, updateHardwareDto: UpdateHardwareDto) {
    return this.prisma.hardware.update({
      where: { id },
      data: updateHardwareDto,
    });
  }
}
