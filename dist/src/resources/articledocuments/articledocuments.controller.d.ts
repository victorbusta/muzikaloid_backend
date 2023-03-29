import { StreamableFile } from '@nestjs/common';
import { ArticledocumentsService } from './articledocuments.service';
import type { Response } from 'express';
export declare class ArticledocumentsController {
    private readonly articledocumentsService;
    constructor(articledocumentsService: ArticledocumentsService);
    findOne(id: number, res: Response): Promise<StreamableFile>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__ArticleDocumentClient<import(".prisma/client").ArticleDocument, never>;
}
