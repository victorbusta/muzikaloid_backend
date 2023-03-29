import { PrismaService } from './../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ArticledocumentsService {
  constructor(private prisma: PrismaService) {}

  findOne(id: number) {
    return this.prisma.articleDocument.findUnique({ where: { id: id } });
  }

  remove(id: number) {
    return this.prisma.articleDocument.delete({ where: { id: id } });
  }
}
