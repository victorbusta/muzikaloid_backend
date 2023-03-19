import { UsersService } from '../../resources/users/users.service';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class UniqueUserGuard implements CanActivate {
  constructor(private userService: UsersService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    return this.userService
      .findOneByEmail(request.body.email)
      .then((val): boolean => {
        if (!val) return true;
        return false;
      });
  }
}
