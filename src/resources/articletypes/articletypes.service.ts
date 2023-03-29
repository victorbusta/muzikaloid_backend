import { CreateArticleDto } from './../articles/dto/create-article.dto';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ArticletypesService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.articleType.findMany();
  }

  findArticles(id: number) {
    return this.prisma.articleType.findUnique({
      where: { id: id },
      select: {
        id: true,
        type: true,
        articles: {
          where: { isPublished: true },
          select: {
            id: true,
            name: true,
            subDescription: true,
            createdAt: true,
          },
        },
      },
    });
  }

  createArticle(
    userId: number,
    articleTypeId: number,
    createArticleDto: CreateArticleDto,
  ) {
    createArticleDto.userId = userId;
    createArticleDto.articleTypeId = articleTypeId;
    createArticleDto.isPublished = true;

    return this.prisma.article.create({ data: createArticleDto });
  }

  findHardwares(id: number) {
    return this.prisma.articleType.findUnique({
      where: { id: id },
      select: {
        id: true,
        type: true,
        articles: {
          where: { isPublished: true },
          select: {
            id: true,
            name: true,
            subDescription: true,
            createdAt: true,
            article_hardware: {
              select: {
                hardware: {
                  select: {
                    id: true,
                    name: true,
                    brand: true,
                    hardwareType: true,
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
