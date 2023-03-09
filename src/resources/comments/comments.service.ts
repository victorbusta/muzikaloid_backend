import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Injectable()
export class CommentsService {
  constructor(private prisma: PrismaService) {}

  create(
    userId: number,
    articleId: number,
    createCommentDto: CreateCommentDto,
  ) {
    createCommentDto.userId = userId;
    createCommentDto.articleId = articleId;

    return this.prisma.comment.create({ data: createCommentDto });
  }

  findAll() {
    return this.prisma.comment.findMany();
  }

  findOne(id: number) {
    return this.prisma.comment.findUnique({ where: { id: id } });
  }

  update(id: number, updateCommentDto: UpdateCommentDto) {
    return this.prisma.comment.update({
      where: { id: id },
      data: updateCommentDto,
    });
  }

  remove(id: number) {
    return this.prisma.comment.update({
      where: { id: id },
      data: { deletedDate: new Date().getTime().toString() },
    });
  }
}
