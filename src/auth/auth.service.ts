import { RegisterUserDto } from './../resources/users/dto/register-user.dto';
import { validatePassword } from './../../bcrypt/password-hasher';
import { HttpException, Injectable } from '@nestjs/common';
import { UsersService } from '../resources/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  validateUser(email: string, pass: string): Promise<User | false> {
    return this.usersService.findOneByEmail(email).then((user) => {
      if (!user) throw new HttpException('user not registered', 401);

      if (!validatePassword(pass, user.password))
        throw new HttpException('password or username no valid', 401);

      if (user.token !== null)
        throw new HttpException('please validate your email', 401);

      return user;
    });
  }

  login(user: User) {
    const payload = { username: user.email, sub: user.id };

    return this.usersService
      .login(user.id, this.jwtService.sign(payload))
      .then((user) => {
        return {
          access_token: user.token,
        };
      });
  }

  register(registerUserDto: RegisterUserDto) {
    return this.usersService.create(registerUserDto);
  }

  logout(userId: number) {
    return this.usersService.logout(userId);
  }
}
