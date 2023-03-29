import { HardwaredocumentsService } from 'src/resources/hardwaredocuments/hardwaredocuments.service';
import {
  CanActivate,
  ExecutionContext,
  HttpException,
  Injectable,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class HardwareDocumentOwnerGuard implements CanActivate {
  constructor(private hardwareDocumentsService: HardwaredocumentsService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    return this.hardwareDocumentsService
      .findOne(Number(request.params.id))
      .then((document) => {
        if (document.userId !== request.user.sub)
          throw new HttpException('resource is not yours', 401);

        return true;
      });
  }
}
