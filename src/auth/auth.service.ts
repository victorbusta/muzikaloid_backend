import { validatePassword } from './../../bcrypt/password-hasher';
import { Injectable } from '@nestjs/common';
import { UsersService } from '../resources/users/users.service';
import { CreateUserDto } from 'src/resources/users/dto/create-user.dto';
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

  register(createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }
}
