import { Injectable } from '@nestjs/common';
import { UpdateArticlecommentDto } from './dto/update-articlecomment.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ArticlecommentsService {
  constructor(private prisma: PrismaService) {}

  findOne(id: number) {
    return this.prisma.articleComment.findUnique({ where: { id: id } });
  }

  update(id: number, updateArticlecommentDto: UpdateArticlecommentDto) {
    updateArticlecommentDto.modifiedAt = new Date();

    return this.prisma.articleComment.update({
      where: { id: id },
      data: updateArticlecommentDto,
    });
  }

  remove(id: number) {
    return this.prisma.articleComment.update({
      where: { id: id },
      data: { deletedAt: new Date() },
    });
  }
}
