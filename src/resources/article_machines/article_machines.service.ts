import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ArticleMachinesService {
  constructor(private readonly prisma: PrismaService) {}

  create(userId: number, articleId: number, machineId: number) {
    return this.prisma.article_Machine.create({
      data: { userId: userId, articleId: articleId, machineId: machineId },
    });
  }
}
