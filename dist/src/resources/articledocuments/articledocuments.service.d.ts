import { PrismaService } from './../../prisma/prisma.service';
export declare class ArticledocumentsService {
    private prisma;
    constructor(prisma: PrismaService);
    findOne(id: number): import(".prisma/client").Prisma.Prisma__ArticleDocumentClient<import(".prisma/client").ArticleDocument, never>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__ArticleDocumentClient<import(".prisma/client").ArticleDocument, never>;
}
