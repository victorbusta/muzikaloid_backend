import { HardwaresService } from './../../resources/hardwares/hardwares.service';
import {
  CanActivate,
  ExecutionContext,
  HttpException,
  Injectable,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class HardwareDocumentGuard implements CanActivate {
  constructor(private hardwaresService: HardwaresService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    return this.hardwaresService
      .findDocuments(Number(request.params.id))
      .then((documents) => {
        documents.forEach((doc) => {
          if (Number(request.params.typeId) === doc.documentType.id)
            throw new HttpException(
              `document of type ${doc.documentType.type} is already set for this hardware`,
              401,
            );
        });

        return true;
      });
  }
}
