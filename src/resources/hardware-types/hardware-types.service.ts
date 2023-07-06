import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class HardwareTypesService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.hardwareType.findMany();
  }

  findOne(id: number) {
    return this.prisma.hardware.findMany({
      where: { type_id: id, article: { published: true } },
      select: { id: true },
    });
  }
}
