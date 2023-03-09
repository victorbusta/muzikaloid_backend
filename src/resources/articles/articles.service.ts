import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ArticlesService {
  constructor(private prisma: PrismaService) {}

  create(userId: number, createArticleDto: CreateArticleDto) {
    createArticleDto.userId = userId;
    createArticleDto.isPublished = true;

    return this.prisma.article.create({
      data: createArticleDto,
    });
  }

  findAll() {
    return this.prisma.article.findMany({ where: { isPublished: true } });
  }

  findOne(id: number) {
    return this.prisma.article.findUnique({
      where: { id: id },
      select: {
        id: true,
        name: true,
        description: true,
        isPublished: true,
        createdAt: true,
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            createdAt: true,
          },
        },
        articleType: true,
        articleSubType: true,
        article: true,
        articles: true,
        documents: true,
        comments: true,
        article_machine: true,
        article_component: true,
      },
    });
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    return this.prisma.article.update({
      where: { id: id },
      data: updateArticleDto,
    });
  }

  remove(id: number) {
    return this.prisma.article.update({
      where: { id: id },
      data: {
        isPublished: false,
        deletedAt: new Date().getTime().toString(),
      },
    });
  }
}
