import { ArticlecommentsService } from './../../resources/articlecomments/articlecomments.service';
import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
export declare class ArticleCommentOwnerGuard implements CanActivate {
    private articlesCommentService;
    constructor(articlesCommentService: ArticlecommentsService);
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
}
