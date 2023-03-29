import { UsersService } from './../../resources/users/users.service';
import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
export declare class UserOwnerGuard implements CanActivate {
    private usersService;
    constructor(usersService: UsersService);
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
}
