import { HardwarecommentsService } from './../../resources/hardwarecomments/hardwarecomments.service';
import {
  CanActivate,
  ExecutionContext,
  HttpException,
  Injectable,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class HardwareCommentOwnerGuard implements CanActivate {
  constructor(private hardwareCommentService: HardwarecommentsService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    return this.hardwareCommentService
      .findOne(Number(request.params.id))
      .then((comment) => {
        if (request.user.seb === 1) return true;

        if (!comment || comment.deletedAt != null)
          throw new HttpException('resource does not exist', 401);

        if (comment.userId !== request.user.sub)
          throw new HttpException('resource is not yours', 401);

        return true;
      });
  }
}
