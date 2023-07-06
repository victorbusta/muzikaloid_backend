import { ArticlesService } from './../../resources/articles/articles.service';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class HardwareGuard implements CanActivate {
  constructor(private articlesService: ArticlesService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    return this.articlesService
      .findOne(Number(request.body.article_id))
      .then((article) => {
        if (article.type_id === Number(process.env.HARDWARE_TYPE_ID))
          return true;

        return false;
      });
  }
}
