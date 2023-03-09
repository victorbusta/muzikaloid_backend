import { hashPassword } from '../../../bcrypt/password-hasher';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

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
        email: true,
        name: true,
        adresse: true,
        role: true,
      },
    });
  }

  findAll() {
    return this.prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
        role: true,
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  findOneByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email: email } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
