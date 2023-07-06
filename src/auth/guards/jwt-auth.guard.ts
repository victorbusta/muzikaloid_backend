import { ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core/services/reflector.service';
import { AuthGuard } from '@nestjs/passport';
import { IS_PUBLIC_KEY } from '../utils/public.decorator';
import { UsersService } from 'src/resources/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(
    private reflector: Reflector,
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {
    super();
  }

  async canActivate(context: ExecutionContext) {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) {
      return true;
    }
    if (!(await super.canActivate(context))) {
      return false;
    }

    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request.headers.authorization);

    const payload = this.jwtService.decode(token);
    if (!payload || !payload.sub) {
      return false;
    }

    const user = await this.usersService.findOne(payload.sub);
    if (!user || user.token !== token) {
      return false;
    }

    return true;
  }

  private extractTokenFromHeader(
    authorizationHeader: string | undefined,
  ): string | null {
    if (!authorizationHeader) {
      return null;
    }
    const [, token] = authorizationHeader.split(' ');
    return token;
  }
}
