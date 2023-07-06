import { HardwareService } from './../../resources/hardware/hardware.service';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class HardwareOwnerGuard implements CanActivate {
  constructor(private HardwareService: HardwareService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    return this.HardwareService.findOneGuard(Number(request.params.id)).then(
      (hardware) => {
        if (request.user.sub === hardware.article.user_id) return true;

        return false;
      },
    );
  }
}
