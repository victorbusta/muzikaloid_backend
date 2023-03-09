import { ComponentsService } from '../../resources/components/components.service';
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class ComponentOwnerGuard implements CanActivate {
  constructor(private componentsService: ComponentsService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    return this.componentsService
      .findOne(request.params.id)
      .then((component) => {
        if (!component) throw new NotFoundException('component does not exist');

        if (request.user.seb === 1) return true;

        if (component.userId !== request.user.seb) return false;

        return true;
      });
  }
}
