import { HardwaresService } from './../../resources/hardwares/hardwares.service';
import {
  CanActivate,
  ExecutionContext,
  HttpException,
  Injectable,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class HardwareOwnerGuard implements CanActivate {
  constructor(private hardwaresService: HardwaresService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    return this.hardwaresService
      .findOne(Number(request.params.id))
      .then((hardware) => {
        if (request.user.seb === 1) return true;

        if (!hardware || hardware.deletedAt != null)
          throw new HttpException('resource does not exist', 401);

        if (hardware.userId !== request.user.sub)
          throw new HttpException('resource is not yours', 401);

        return true;
      });
  }
}
