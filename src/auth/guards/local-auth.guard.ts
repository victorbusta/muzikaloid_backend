import {
  ExecutionContext,
  HttpException,
  Inject,
  Injectable,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from 'src/resources/users/users.service';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  constructor(
    @Inject(UsersService) private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {
    super();
  }

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();

    const user = await this.usersService.findOneByEmail(request.body.email);

    if (!user || !user.validated) {
      return false;
    }

    request.user = user;

    if (user.token !== null) {
      try {
        this.jwtService.verify(user.token);
      } catch (error) {
        return true;
      }

      throw new HttpException('please logout', 401);
    }

    return true;
  }
}
