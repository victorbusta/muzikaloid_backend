import { HardwaresService } from '../../resources/hardwares/hardwares.service';
import {
  CanActivate,
  ExecutionContext,
  HttpException,
  Injectable,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class RelationHardwareGuard implements CanActivate {
  constructor(private hardwaresService: HardwaresService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    return this.hardwaresService
      .findRelation(request.params.id, request.params.id)
      .then((relation) => {
        if (!relation) throw new HttpException('relation does not exist', 401);
        return true;
      });
  }
}
