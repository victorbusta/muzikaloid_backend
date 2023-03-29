import { hashPassword } from '../../../bcrypt/password-hasher';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  create(createUserDto: CreateUserDto) {
    createUserDto.password = hashPassword(createUserDto.password);
    createUserDto.roleId = 2;

    return this.prisma.user.create({
      data: createUserDto,
      select: {
        id: true,
        firstname: true,
        lastname: true,
        username: true,
        email: true,
      },
    });
  }

  findAll() {
    return this.prisma.user.findMany({
      select: {
        id: true,
        firstname: true,
        lastname: true,
        username: true,
        email: true,
        createdAt: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({
      where: { id: id },
      select: {
        id: true,
        username: true,
        email: true,
        createdAt: true,
        articles: true,
        hardwares: true,
      },
    });
  }

  findOneByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email: email } });
  }

  findOneByUsername(username: string) {
    return this.prisma.user.findUnique({ where: { username: username } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({
      where: { id: id },
      data: updateUserDto,
    });
  }

  remove(id: number) {
    return this.prisma.user.update({
      where: { id: id },
      data: { deletedAt: new Date() },
    });
  }

  findArticles(id: number) {
    return this.prisma.user.findMany({
      where: { id: id },
      select: { articles: true },
    });
  }

  findArticlesByType(id: number, typeId: number) {
    return this.prisma.user.findMany({
      where: { id: id },
      select: {
        articles: {
          where: {
            articleTypeId: typeId,
          },
        },
      },
    });
  }

  findHardwares(id: number) {
    return this.prisma.user.findMany({
      where: { id: id },
      select: { hardwares: true },
    });
  }

  findHardwaresByType(id: number, typeId: number) {
    return this.prisma.user.findMany({
      where: { id: id },
      select: {
        hardwares: {
          where: {
            hardwareTypeId: typeId,
          },
        },
      },
    });
  }

  findArticleComments(id: number) {
    return this.prisma.user.findUnique({
      where: { id: id },
      select: { articleComments: true },
    });
  }

  findArticleDocuments(id: number) {
    return this.prisma.user.findUnique({
      where: { id: id },
      select: {
        articleDocuments: {
          select: { id: true, name: true, documentType: true },
        },
      },
    });
  }

  findHardwareComments(id: number) {
    return this.prisma.user.findUnique({
      where: { id: id },
      select: { hardwareComments: true },
    });
  }

  findHardwareDocuments(id: number) {
    return this.prisma.user.findUnique({
      where: { id: id },
      select: {
        hardwareDocuments: {
          select: { id: true, name: true, documentType: true },
        },
      },
    });
  }
}
