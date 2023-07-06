import { HttpException, Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ArticlesService {
  constructor(private prisma: PrismaService) {}

  create(userId: number, createArticleDto: CreateArticleDto) {
    createArticleDto.user_id = userId;
    createArticleDto.published = true;
    createArticleDto.article_id = null;

    return this.prisma.article
      .create({ data: createArticleDto })
      .then((article) => article)
      .catch((err) => new HttpException(err, 500));
  }

  createArticle(
    userId: number,
    articleId: number,
    createArticleDto: CreateArticleDto,
  ) {
    createArticleDto.user_id = userId;
    createArticleDto.published = true;
    createArticleDto.article_id = articleId;

    return this.prisma.article.create({ data: createArticleDto });
  }

  findAll() {
    return this.prisma.article.findMany({
      select: { id: true },
      orderBy: {
        id: 'desc',
      },
    });
  }

  findAllPublished() {
    return this.prisma.article.findMany({
      select: { id: true },
      where: { published: true },
      orderBy: {
        id: 'desc',
      },
    });
  }

  findAllByPage(page: number) {
    return this.prisma.article.findMany({
      skip: 20 * page,
      take: 20,
      where: {
        published: true,
      },
      orderBy: {
        id: 'desc',
      },
    });
  }

  findAllByTitle(page: number, title: string) {
    return this.prisma.article.findMany({
      skip: 20 * page,
      take: 20,
      where: {
        published: true,
        title: {
          contains: title,
          mode: 'insensitive',
        },
      },
      orderBy: {
        id: 'desc',
      },
    });
  }

  findOne(id: number) {
    return this.prisma.article.findUniqueOrThrow({
      where: {
        id,
      },
    });
  }

  findOnePublished(id: number) {
    return this.prisma.article.findFirstOrThrow({
      where: {
        id: id,
        published: true,
      },
    });
  }

  findOneByTitle(title: string) {
    return this.prisma.article.findFirst({
      where: {
        published: true,
        title: { contains: title, mode: 'insensitive' },
      },
    });
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    return this.prisma.article.update({
      where: { id },
      data: updateArticleDto,
    });
  }

  remove(id: number) {
    return this.prisma.article.delete({
      where: { id },
    });
  }

  findDocuments(articleId: number) {
    return this.prisma.document.findMany({
      where: { article_id: articleId },
      select: { id: true, name: true },
    });
  }

  findComments(articleId: number) {
    return this.prisma.comment.findMany({
      where: { article_id: articleId },
    });
  }
}
