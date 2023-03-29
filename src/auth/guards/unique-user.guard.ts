import { UsersService } from '../../resources/users/users.service';
import {
  CanActivate,
  ExecutionContext,
  HttpException,
  Injectable,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class UniqueUserGuard implements CanActivate {
  constructor(private userService: UsersService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    return this.userService.findOneByEmail(request.body.email).then((val) => {
      if (val)
        throw new HttpException(
          `user with email '${request.body.email}' already exist`,
          401,
        );
      // if (val) return false;
      return this.userService
        .findOneByUsername(request.body.username)
        .then((val): boolean => {
          if (val)
            throw new HttpException(
              `user with username '${request.body.username}' already exist`,
              401,
            );
          return true;
        });
    });
  }
}
