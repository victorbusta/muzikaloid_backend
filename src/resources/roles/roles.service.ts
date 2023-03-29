import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RolesService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.role.findMany();
  }

  findOne(id: number) {
    return this.prisma.role.findUnique({ where: { id: id } });
  }

  findUsers(id: number) {
    return this.prisma.role.findUnique({
      where: { id: id },
      select: {
        id: true,
        role: true,
        users: {
          select: {
            id: true,
            email: true,
            username: true,
          },
        },
      },
    });
  }
}
