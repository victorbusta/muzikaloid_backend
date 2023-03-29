import { ArticlesService } from './../../resources/articles/articles.service';
import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
export declare class ArticleDocumentGuard implements CanActivate {
    private articlesService;
    constructor(articlesService: ArticlesService);
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
}
