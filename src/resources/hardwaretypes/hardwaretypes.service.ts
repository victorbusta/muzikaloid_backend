import { CreateHardwareDto } from './../hardwares/dto/create-hardware.dto';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class HardwaretypesService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.hardwareType.findMany();
  }

  findHardwares(id: number) {
    return this.prisma.hardwareType.findUnique({
      where: { id: id },
      select: {
        id: true,
        type: true,
        hardwares: {
          where: { deletedAt: null },
          select: {
            id: true,
            name: true,
            brand: true,
            subDescription: true,
            isDiy: true,
            creationDate: true,
            discontinuationDate: true,
            createdAt: true,
          },
        },
      },
    });
  }

  createHardware(
    userId: number,
    hardwareTypeId: number,
    createHardwareDto: CreateHardwareDto,
  ) {
    createHardwareDto.userId = userId;
    createHardwareDto.hardwareTypeId = hardwareTypeId;

    return this.prisma.hardware.create({ data: createHardwareDto });
  }

  findArticles(id: number) {
    return this.prisma.hardwareType.findUnique({
      where: { id: id },
      select: {
        id: true,
        type: true,
        hardwares: {
          where: { deletedAt: null },
          select: {
            id: true,
            name: true,
            brand: true,
            subDescription: true,
            isDiy: true,
            creationDate: true,
            discontinuationDate: true,
            createdAt: true,
            article_hardware: {
              select: {
                article: {
                  select: {
                    id: true,
                    name: true,
                    subDescription: true,
                    isPublished: true,
                    articleType: true,
                  },
                },
              },
            },
          },
        },
      },
    });
  }
}
