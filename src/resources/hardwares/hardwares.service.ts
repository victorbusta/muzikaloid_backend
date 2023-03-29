import { CreateHardwareRelationDto } from './dto/create-hardware-relation.dto';
import { Injectable } from '@nestjs/common';
import { UpdateHardwareDto } from './dto/update-hardware.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateHardwarecommentDto } from '../hardwarecomments/dto/create-hardwarecomment.dto';

@Injectable()
export class HardwaresService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.hardware.findMany();
  }

  findOne(id: number) {
    return this.prisma.hardware.findUnique({ where: { id: id } });
  }

  update(id: number, updateHardwareDto: UpdateHardwareDto) {
    return this.prisma.hardware.update({
      where: { id: id },
      data: updateHardwareDto,
    });
  }

  remove(id: number) {
    return this.prisma.hardware.update({
      where: { id: id },
      data: { deletedAt: new Date() },
    });
  }

  createHardwareRelation(
    userId: number,
    id: number,
    createHardwareRelationDto: CreateHardwareRelationDto,
  ) {
    const relations = [];

    createHardwareRelationDto.secondaryIds.forEach((secondaryId) => {
      relations.push({
        firstHardwareId: id,
        secondHardwareId: secondaryId,
        userId: userId,
      });
    });

    return this.prisma.hardware_Hardware.createMany({ data: relations });
  }

  findHardwares(id: number) {
    const childHardwares = this.prisma.hardware_Hardware.findMany({
      where: { firstHardwareId: id },
      select: { secondHardware: true },
    });

    const parentHardwares = this.prisma.hardware_Hardware.findMany({
      where: { secondHardwareId: id },
      select: { firstHardware: true },
    });

    return {
      childHardwares: childHardwares,
      parentHardwares: parentHardwares,
    };
  }

  removeHardware(id: number, hardwareId: number) {
    return this.prisma.hardware_Hardware.delete({
      where: {
        hardwareRelationId: {
          firstHardwareId: id,
          secondHardwareId: hardwareId,
        },
      },
    });
  }

  findArticles(id: number) {
    return this.prisma.article_Hardware.findMany({
      where: { hardwareId: id },
      select: { article: true },
    });
  }

  findRelation(firstHardwareId: number, secondHardwareId: number) {
    return this.prisma.hardware_Hardware.findUnique({
      where: {
        hardwareRelationId: {
          firstHardwareId: firstHardwareId,
          secondHardwareId: secondHardwareId,
        },
      },
    });
  }

  createComment(
    userId: number,
    hardwareId: number,
    createHardwareCommentDto: CreateHardwarecommentDto,
  ) {
    createHardwareCommentDto.hardwareId = hardwareId;
    createHardwareCommentDto.userId = userId;

    return this.prisma.hardwareComment.create({
      data: createHardwareCommentDto,
    });
  }

  findComments(hardwareId: number) {
    return this.prisma.hardwareComment.findMany({
      where: { hardwareId: hardwareId },
    });
  }

  createDocument(
    userId: number,
    hardwareId: number,
    documentTypeId: number,
    file: Express.Multer.File,
  ) {
    return this.prisma.hardwareDocument.create({
      data: {
        userId: userId,
        hardwareId: hardwareId,
        documentTypeId: documentTypeId,
        name: file.originalname,
        mimetype: file.mimetype,
        buffer: file.buffer,
        size: file.size,
      },
    });
  }

  findDocuments(hardwareId: number) {
    return this.prisma.hardwareDocument.findMany({
      where: { hardwareId: hardwareId },
      select: { id: true, name: true, documentType: true },
    });
  }
}
