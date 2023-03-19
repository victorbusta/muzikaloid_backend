import { MachinesService } from '../../resources/machines/machines.service';
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class MachineOwnerGuard implements CanActivate {
  constructor(private machinesService: MachinesService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    return this.machinesService.findOne(request.params.id).then((machine) => {
      if (!machine) throw new NotFoundException('machine does not exist');

      if (request.user.seb === 1) return true;

      if (machine.userId !== request.user.seb) false;

      return true;
    });
  }
}
