import { UsersService } from '../../resources/users/users.service';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AdminTypeGuard implements CanActivate {
  constructor(private usersService: UsersService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    return this.usersService.findOne(Number(request.user.sub)).then((user) => {
      if (
        user.role_id !== Number(process.env.ROLE_ADMIN_ID) &&
        request.body.type_id === Number(process.env.ADMIN_TYPE_ID)
      )
        return false;

      return true;
    });
  }
}
