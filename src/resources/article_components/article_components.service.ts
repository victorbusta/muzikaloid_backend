import { PrismaService } from './../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ArticleComponentsService {
  constructor(private readonly prisma: PrismaService) {}

  create(userId: number, articleId: number, componentId: number) {
    return this.prisma.article_Component.create({
      data: { userId: userId, articleId: articleId, componentId: componentId },
    });
  }
}
