import { ArticlesService } from '../../resources/articles/articles.service';
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class ArticleExistGuard implements CanActivate {
  constructor(private articlesService: ArticlesService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    return this.articlesService.findOne(request.params.id).then((article) => {
      if (!article || !article.isPublished)
        throw new NotFoundException('article does not exist');
      return true;
    });
  }
}
