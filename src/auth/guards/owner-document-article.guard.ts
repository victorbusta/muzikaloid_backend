import { ArticlesService } from '../../resources/articles/articles.service';
import { ArticledocumentsService } from '../../resources/articledocuments/articledocuments.service';
import {
  CanActivate,
  ExecutionContext,
  HttpException,
  Injectable,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class ArticleDocumentOwnerGuard implements CanActivate {
  constructor(private articlesDocumentsService: ArticledocumentsService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    return this.articlesDocumentsService
      .findOne(Number(request.params.id))
      .then((document) => {
        if (document.userId !== request.user.sub)
          throw new HttpException('resource is not yours', 401);

        return true;
      });
  }
}
