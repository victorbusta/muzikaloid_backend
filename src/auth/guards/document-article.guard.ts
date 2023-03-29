import { ArticlesService } from './../../resources/articles/articles.service';
import { ArticledocumentsService } from './../../resources/articledocuments/articledocuments.service';
import {
  CanActivate,
  ExecutionContext,
  HttpException,
  Injectable,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class ArticleDocumentGuard implements CanActivate {
  constructor(private articlesService: ArticlesService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    return this.articlesService
      .findDocuments(Number(request.params.id))
      .then((documents) => {
        documents.forEach((doc) => {
          if (Number(request.params.typeId) === doc.documentType.id)
            throw new HttpException(
              `document of type ${doc.documentType.type} is already set for this article`,
              401,
            );
        });

        return true;
      });
  }
}
