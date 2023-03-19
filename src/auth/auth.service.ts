import { validatePassword } from './../../bcrypt/password-hasher';
import { Injectable } from '@nestjs/common';
import { UsersService } from '../resources/users/users.service';
import { CreateUserDto } from 'src/resources/users/dto/create-user.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneByEmail(email);

    if (user && validatePassword(pass, user.password)) {
      return user;
    }

    return false;
  }

  async login(user: any) {
    // return 'secret : ' + jwtConstants.secret;
    const payload = { username: user.name, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }
}
