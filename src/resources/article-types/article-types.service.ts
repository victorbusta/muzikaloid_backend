import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ArticleTypesService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.articleType.findMany();
  }

  findOne(id: number) {
    return this.prisma.article.findMany({
      where: { type_id: id, published: true },
      select: { id: true },
    });
  }
}
