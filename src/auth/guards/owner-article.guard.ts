import { ArticlesService } from './../../resources/articles/articles.service';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
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
        if (request.user.sub === article.user_id) return true;

        return false;
      });
  }
}
