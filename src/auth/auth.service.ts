import { RegisterUserDto } from './../resources/users/dto/register-user.dto';
import { validatePassword } from './../../bcrypt/password-hasher';
import { Injectable } from '@nestjs/common';
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
      if (user && validatePassword(pass, user.password)) {
        return user;
      }
      return false;
    });
  }

  login(user: User) {
    const payload = { username: user.email, sub: user.id };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  register(registerUserDto: RegisterUserDto) {
    return this.usersService.create(registerUserDto);
  }
}
