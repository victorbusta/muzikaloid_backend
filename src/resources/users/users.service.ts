import { hashPassword } from '../../../bcrypt/password-hasher';
import { HttpException, Injectable } from '@nestjs/common';
import { RegisterUserDto } from './dto/register-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { SendGridService } from 'src/sendgrid/sendgrid.service';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
    private sendGrid: SendGridService,
  ) {}

  create(registerUserDto: RegisterUserDto) {
    const token = uuidv4();
    registerUserDto.password = hashPassword(registerUserDto.password);
    registerUserDto.role_id = 2;
    registerUserDto.token = hashPassword(token);
    registerUserDto.validated = false;

    return this.prisma.user
      .create({
        data: registerUserDto,
      })
      .then((user) => {
        if (!user) throw new HttpException('user not created', 501);

        return this.sendGrid.send(user, token).then((res) => {
          if (!res) throw new HttpException('email not sent', 501);

          return { user_id: user.id, email: user.email };
        });
      });
  }

  login(id: number, token: string) {
    return this.prisma.user.update({
      where: { id },
      data: { token },
      select: {
        id: true,
        created_at: true,
        email: true,
        firstname: true,
        lastname: true,
        username: true,
        role: true,
        token: true,
      },
    });
  }

  logout(id: number) {
    return this.prisma.user.update({ where: { id }, data: { token: null } });
  }

  findAll() {
    return this.prisma.user.findMany({
      select: {
        id: true,
        firstname: true,
        lastname: true,
        username: true,
        email: true,
        created_at: true,
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
        created_at: true,
        role_id: true,
        token: true,
      },
    });
  }

  findOneByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email: email } });
  }

  findOneByUsername(username: string) {
    return this.prisma.user.findUnique({ where: { username: username } });
  }

  verifyEmail(id: number) {
    return this.prisma.user
      .update({
        where: { id: id },
        data: { token: null, validated: true },
      })
      .then((user) => {
        if (!user)
          throw new HttpException(
            'an error occured while verifying your email',
            500,
          );

        return '<h1 style="width:100vw;text-align:center;">💥Email verified!💥<br> you can close this tab and login</h1>';
      });
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
      data: { deleted_at: new Date() },
    });
  }

  findComments(id: number) {
    return this.prisma.comment.findMany({
      where: { user_id: id },
    });
  }

  findArticles(id: number) {
    return this.prisma.article.findMany({
      where: { user_id: id },
    });
  }

  findArticlesByType(id: number, typeId: number) {
    return this.prisma.article.findMany({
      where: { user_id: id, type_id: typeId },
    });
  }

  findHardwares(id: number) {
    return this.prisma.hardware.findMany({
      where: { article: { user_id: id } },
      select: { id: true },
    });
  }

  findHardwaresByType(id: number, typeId: number) {
    return this.prisma.hardware.findMany({
      where: { type_id: typeId, article: { user_id: id } },
      select: { id: true },
    });
  }
}
