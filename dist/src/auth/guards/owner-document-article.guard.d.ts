import { ArticledocumentsService } from '../../resources/articledocuments/articledocuments.service';
import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
export declare class ArticleDocumentOwnerGuard implements CanActivate {
    private articlesDocumentsService;
    constructor(articlesDocumentsService: ArticledocumentsService);
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
}
