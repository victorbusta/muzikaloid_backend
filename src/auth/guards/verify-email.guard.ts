import { UsersService } from '../../resources/users/users.service';
import {
  CanActivate,
  ExecutionContext,
  HttpException,
  Injectable,
} from '@nestjs/common';
import { validatePassword } from 'bcrypt/password-hasher';
import { Observable } from 'rxjs';

@Injectable()
export class VerifyEmailGuard implements CanActivate {
  constructor(private userService: UsersService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const userId = Number(request.params.id);

    return this.userService.findOne(userId).then((user) => {
      if (!user) throw new HttpException(`user has not been found`, 401);

      if (user.token === null)
        throw new HttpException(
          `user with email '${user.email}' has already been validated`,
          401,
        );

      if (!validatePassword(request.params.token, user.token))
        throw new HttpException(`wrong validation token provided`, 401);

      return true;
    });
  }
}
