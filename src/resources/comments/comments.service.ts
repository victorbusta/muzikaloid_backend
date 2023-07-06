import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CommentsService {
  constructor(private readonly prisma: PrismaService) {}

  create(
    userId: number,
    articleId: number,
    createCommentDto: CreateCommentDto,
  ) {
    createCommentDto.article_id = articleId;
    createCommentDto.user_id = userId;

    return this.prisma.comment.create({ data: createCommentDto });
  }

  findOne(id: number) {
    return this.prisma.comment.findUniqueOrThrow({ where: { id } });
  }

  remove(id: number) {
    return this.prisma.comment.delete({ where: { id } });
  }
}
