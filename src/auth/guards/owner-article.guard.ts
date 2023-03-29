import { ArticlesService } from '../../resources/articles/articles.service';
import {
  CanActivate,
  ExecutionContext,
  HttpException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class ArticleOwnerGuard implements CanActivate {
  constructor(private articlesService: ArticlesService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    return this.articlesService
      .findOne(Number(request.params.id))
      .then((article) => {
        if (request.user.seb === 1) return true;

        if (!article || article.deletedAt != null)
          throw new HttpException('resource does not exist', 401);

        if (article.userId !== request.user.sub)
          throw new HttpException('resource is not yours', 401);

        return true;
      });
  }
}
