import { Injectable } from '@nestjs/common';
import { CreateDocumentDto } from './dto/create-document.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import ImageKitService from 'src/imagekit/imagekit.service';

@Injectable()
export class DocumentsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly imgKit: ImageKitService,
  ) {}

  async create(
    articleId: number,
    file: Express.Multer.File,
    createDocumentDto: CreateDocumentDto,
  ) {
    createDocumentDto.article_id = articleId;
    createDocumentDto.name = file.originalname;
    createDocumentDto.url = await this.imgKit.upload(file);

    return this.prisma.document.create({ data: createDocumentDto });
  }

  findOne(id: number) {
    return this.prisma.document.findUnique({ where: { id: id } });
  }

  remove(id: number) {
    return this.prisma.document.delete({ where: { id: id } });
  }
}
