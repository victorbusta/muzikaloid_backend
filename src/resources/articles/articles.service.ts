import { CreateArticlecommentDto } from './../articlecomments/dto/create-articlecomment.dto';
import { CreateArticleHardwareRelationDto } from './dto/create-article-hardware-relation.dto';
import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ArticlesService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.article.findMany({ where: { isPublished: true } });
  }

  findOne(id: number) {
    return this.prisma.article.findUnique({ where: { id: id } });
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
      data: { deletedAt: new Date() },
    });
  }

  async createArticle(
    userId: number,
    articleId: number,
    createArticleDto: CreateArticleDto,
  ) {
    const parentArticle = await this.findOne(articleId);

    createArticleDto.userId = userId;
    createArticleDto.articleId = parentArticle.id;
    createArticleDto.isPublished = true;
    createArticleDto.articleTypeId = parentArticle.articleTypeId;

    return this.prisma.article.create({ data: createArticleDto });
  }

  findArticles(id: number) {
    return this.prisma.article.findMany({
      where: { id: id },
      select: { articles: true },
    });
  }

  createHardwareRelations(
    userId: number,
    id: number,
    createArticleHardwareRelationDto: CreateArticleHardwareRelationDto,
  ) {
    const relations = [];

    createArticleHardwareRelationDto.hardwareIds.forEach((hardwareId) => {
      relations.push({ userId: userId, articleId: id, hardwareId: hardwareId });
    });

    return this.prisma.article_Hardware.createMany({
      data: relations,
    });
  }

  findHardwares(id: number) {
    return this.prisma.article_Hardware.findMany({
      where: { articleId: id },
      select: { hardware: true },
    });
  }

  removeHardware(id: number, hardwareId: number) {
    return this.prisma.article_Hardware.delete({
      where: {
        articleHardwareId: {
          articleId: id,
          hardwareId: hardwareId,
        },
      },
    });
  }

  findHardwareRelation(articleId: number, hardwareId: number) {
    return this.prisma.article_Hardware.findUnique({
      where: {
        articleHardwareId: { articleId: articleId, hardwareId: hardwareId },
      },
    });
  }

  createComment(
    userId: number,
    articleId: number,
    createArticleCommentDto: CreateArticlecommentDto,
  ) {
    createArticleCommentDto.articleId = articleId;
    createArticleCommentDto.userId = userId;

    return this.prisma.articleComment.create({ data: createArticleCommentDto });
  }

  findComments(articleId: number) {
    return this.prisma.articleComment.findMany({
      where: { articleId: articleId },
    });
  }

  createDocument(
    userId: number,
    articleId: number,
    documentTypeId: number,
    file: Express.Multer.File,
  ) {
    return this.prisma.articleDocument.create({
      data: {
        userId: userId,
        articleId: articleId,
        documentTypeId: documentTypeId,
        name: file.originalname,
        mimetype: file.mimetype,
        buffer: file.buffer,
        size: file.size,
      },
    });
  }

  findDocuments(articleId: number) {
    return this.prisma.articleDocument.findMany({
      where: { articleId: articleId },
      select: { id: true, name: true, documentType: true },
    });
  }
}
