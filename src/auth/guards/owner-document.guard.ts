import { DocumentsService } from '../../resources/documents/documents.service';
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class DocumentOwnerGuard implements CanActivate {
  constructor(private documentsService: DocumentsService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    return this.documentsService.findOne(request.params.id).then((document) => {
      if (!document) throw new NotFoundException('document does not exist');

      if (request.user.seb === 1) return true;

      if (document.userId !== request.user.seb) return false;

      return true;
    });
  }
}
