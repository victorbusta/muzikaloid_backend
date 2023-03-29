import { UsersService } from './../../resources/users/users.service';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class UserOwnerGuard implements CanActivate {
  constructor(private usersService: UsersService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    return this.usersService.findOne(Number(request.params.id)).then((user) => {
      if (request.user.sub === user.id) return true;

      return false;
    });
  }
}
