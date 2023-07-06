import { UsersService } from './../../resources/users/users.service';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private usersService: UsersService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    return this.usersService.findOne(Number(request.user.sub)).then((user) => {
      if (user.role_id === Number(process.env.ROLE_ADMIN_ID)) return true;

      return false;
    });
  }
}
